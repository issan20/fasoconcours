$ErrorActionPreference = "Stop"

function Fix-Mojibake([string]$s) {
    if ([string]::IsNullOrWhiteSpace($s)) { return $s }
    if ($s -match 'Ã|Â|â€™|â€œ|â€') {
        $bytes = [System.Text.Encoding]::GetEncoding(28591).GetBytes($s)
        return [System.Text.Encoding]::UTF8.GetString($bytes)
    }
    return $s
}

function Remove-Diacritics([string]$s) {
    $norm = $s.Normalize([Text.NormalizationForm]::FormD)
    $sb = New-Object System.Text.StringBuilder
    foreach ($ch in $norm.ToCharArray()) {
        $cat = [Globalization.CharUnicodeInfo]::GetUnicodeCategory($ch)
        if ($cat -ne [Globalization.UnicodeCategory]::NonSpacingMark) {
            [void]$sb.Append($ch)
        }
    }
    return $sb.ToString().Normalize([Text.NormalizationForm]::FormC)
}

function Clean-Text([string]$s) {
    if ($null -eq $s) { return "" }
    $s = Fix-Mojibake $s
    $s = $s -replace '\s+', ' '
    return $s.Trim()
}

function Get-NodeText($node, $nsmgr) {
    $parts = @()
    $texts = $node.SelectNodes('.//w:t', $nsmgr)
    foreach ($t in $texts) { $parts += $t.InnerText }
    return Clean-Text ($parts -join ' ')
}

function Slug-Theme([string]$title) {
    $t = Remove-Diacritics($title.ToLowerInvariant())
    $t = $t -replace "['’]", ''
    $t = $t -replace '[^a-z0-9]+', '_'
    $t = $t.Trim('_')
    if ($t.Length -gt 50) { $t = $t.Substring(0,50).Trim('_') }
    return $t
}

$qcmPath = '.tmp_docx\\afrique-qcm\\word\\document.xml'
$corrPath = '.tmp_docx\\afrique-correction\\word\\document.xml'

[xml]$qcmXml = Get-Content $qcmPath -Raw -Encoding UTF8
[xml]$corrXml = Get-Content $corrPath -Raw -Encoding UTF8
$nsmgrQ = New-Object System.Xml.XmlNamespaceManager($qcmXml.NameTable)
$nsmgrQ.AddNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$nsmgrC = New-Object System.Xml.XmlNamespaceManager($corrXml.NameTable)
$nsmgrC.AddNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')

$answerMap = @{}
$trNodes = $corrXml.SelectNodes('//w:tbl/w:tr', $nsmgrC)
foreach ($tr in $trNodes) {
    $cells = $tr.SelectNodes('./w:tc', $nsmgrC)
    $vals = @()
    foreach ($tc in $cells) { $vals += (Get-NodeText $tc $nsmgrC) }
    for ($i=0; $i -lt $vals.Count - 1; $i++) {
        if ($vals[$i] -match '^\d{3,4}$' -and $vals[$i+1] -match '^[abcd]$') {
            $answerMap[[int]$vals[$i]] = $vals[$i+1]
            $i++
        }
    }
}

$bodyNodes = $qcmXml.SelectNodes('/w:document/w:body/*', $nsmgrQ)
$currentTheme = 'Generalites Afrique'
$questions = New-Object System.Collections.Generic.List[object]
$themeOrder = New-Object System.Collections.Generic.List[string]
$themeSeen = @{}

foreach ($node in $bodyNodes) {
    if ($node.LocalName -eq 'p') {
        $txt = Get-NodeText $node $nsmgrQ
        if ([string]::IsNullOrWhiteSpace($txt)) { continue }
        if ($txt -match '^PARTIE\s+II') { continue }
        if ($txt -match '^N°$|^Question et choix$') { continue }
        if ($txt.Length -gt 4 -and $txt -eq $txt.ToUpperInvariant()) {
            $currentTheme = $txt
        }
    }

    if ($node.LocalName -ne 'tbl') { continue }

    $rows = $node.SelectNodes('./w:tr', $nsmgrQ)
    foreach ($tr in $rows) {
        $cells = $tr.SelectNodes('./w:tc', $nsmgrQ)
        if ($cells.Count -lt 2) { continue }

        $numText = Get-NodeText $cells[0] $nsmgrQ
        $qTextRaw = Get-NodeText $cells[1] $nsmgrQ

        if ($numText -notmatch '^\d{3,4}$') { continue }
        $num = [int]$numText
        if ($num -lt 634 -or $num -gt 2000) { continue }
        if ([string]::IsNullOrWhiteSpace($qTextRaw)) { continue }

        $qText = ($qTextRaw -replace '\s*;\s*', ' ; ' -replace '\s+', ' ')
        $m = [regex]::Match($qText, "^(?<texte>.+?)\s*a\)\s*(?<a>.+?)\s*;\s*b\)\s*(?<b>.+?)\s*;\s*c\)\s*(?<c>.+?)\s*;\s*d\)\s*(?<d>.+)$")
        if (-not $m.Success) { continue }

        $themeTitle = Clean-Text $currentTheme
        if ([string]::IsNullOrWhiteSpace($themeTitle)) { $themeTitle = 'Generalites Afrique' }
        if (-not $themeSeen.ContainsKey($themeTitle)) {
            $themeSeen[$themeTitle] = $true
            $themeOrder.Add($themeTitle)
        }

        $letter = if ($answerMap.ContainsKey($num)) { $answerMap[$num] } else { 'a' }
        $correct = @{'a'=0;'b'=1;'c'=2;'d'=3}[$letter]

        $questions.Add([pscustomobject]@{
            numero = $num
            theme = $themeTitle
            texte = (Clean-Text $m.Groups['texte'].Value)
            options = @(
                (Clean-Text $m.Groups['a'].Value),
                (Clean-Text $m.Groups['b'].Value),
                (Clean-Text $m.Groups['c'].Value),
                (Clean-Text $m.Groups['d'].Value)
            )
            correct = $correct
        })
    }
}

$byTheme = @{}
foreach ($theme in $themeOrder) { $byTheme[$theme] = @() }
foreach ($q in ($questions | Sort-Object numero)) {
    if (-not $byTheme.ContainsKey($q.theme)) { $byTheme[$q.theme] = @() }
    $byTheme[$q.theme] += $q
}

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine('// Donnees generees automatiquement depuis les fichiers DOCX AFRIQUE')
[void]$sb.AppendLine('// Source: assets/ENCYCLOPEDIE AFRIQUE  - QCM.docx + CORRECTION.docx')
[void]$sb.AppendLine('const thematiquesAfrique = {')
foreach ($theme in $themeOrder) {
    $key = Slug-Theme $theme
    $safeTitle = $theme.Replace("'", "\\'")
    [void]$sb.AppendLine("    ${key}: { titre: '$safeTitle', questions: [] },")
}
[void]$sb.AppendLine('};')
[void]$sb.AppendLine('')
foreach ($theme in $themeOrder) {
    $key = Slug-Theme $theme
    [void]$sb.AppendLine("thematiquesAfrique.${key}.questions = [")
    foreach ($q in $byTheme[$theme]) {
        $texte = $q.texte.Replace("'", "\\'")
        $o0 = $q.options[0].Replace("'", "\\'")
        $o1 = $q.options[1].Replace("'", "\\'")
        $o2 = $q.options[2].Replace("'", "\\'")
        $o3 = $q.options[3].Replace("'", "\\'")
        [void]$sb.AppendLine("    { texte: '$texte', options: ['$o0', '$o1', '$o2', '$o3'], correct: $($q.correct) },")
    }
    [void]$sb.AppendLine('];')
    [void]$sb.AppendLine('')
}

$jsPath = 'js\\afrique-data.js'
[System.IO.File]::WriteAllText((Join-Path (Get-Location) $jsPath), $sb.ToString(), [System.Text.UTF8Encoding]::new($false))

Write-Output "questions=$($questions.Count)"
Write-Output "themes=$($themeOrder.Count)"
Write-Output "answers=$($answerMap.Count)"
Write-Output "out=$jsPath"
