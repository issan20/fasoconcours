// =======================
// CONFIG SUPABASE
// =======================
const SUPABASE_URL = "https://mduxbxoyngptblvnxitf.supabase.co";
const SUPABASE_KEY = "sb_publishable_NlUwBzkPDuf4yySa1y_dQQ_14MpKl22";

let supabaseClient = null;
let currentUser = {
    email: null,
    offre: null,
    expiration: null
};

const AUTH_USERS_KEY = 'fasoconcours_users';
const AUTH_LOGGED_IN_KEY = 'fasoconcours_auth_logged_in';
const AUTH_EMAIL_KEY = 'fasoconcours_auth_email';

// =======================
// INITIALISATION
// =======================
document.addEventListener("DOMContentLoaded", () => {
    if (typeof supabase !== "undefined") {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
        console.log("✅ Supabase initialisé");
    } else {
        console.error("❌ Supabase SDK non chargé");
    }
    
    initCarousel();
    checkExistingSession();
    disablePrintAndSave();
    setupAccessButtons();
});

function setupAccessButtons() {
    const bindOfferButton = (buttonId, offreType) => {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.addEventListener('click', (event) => {
            event.preventDefault();
            btn.style.transform = 'scale(0.98)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
            accessWithCode(offreType);
        });
    };

    const previewBtn = document.getElementById('btnPreviewPdf');
    if (previewBtn) {
        previewBtn.addEventListener('click', (event) => {
            event.preventDefault();
            showPreviewModal();
        });
    }

    bindOfferButton('btnAccessPackComplet', 'complet');
    bindOfferButton('btnAccessFormationCode', 'formation');
}

// =======================
// PROTECTION
// =======================
function disablePrintAndSave() {
    document.addEventListener('keydown', function(e) {
        const ctrl = e.ctrlKey || e.metaKey;
        if (ctrl && (e.key === 's' || e.key === 'p')) {
            e.preventDefault();
            alert('❌ Téléchargement et impression désactivés');
            return false;
        }
        if (e.key === 'F12' || (ctrl && e.shiftKey && (e.key === 'I' || e.key === 'i'))) {
            e.preventDefault();
        }
        // Fermer le modal avec Echap
        if (e.key === 'Escape') {
            closePdfModal();
        }
    });
    
    document.addEventListener('contextmenu', function(e) {
        if (e.target.closest('#pdfContainer, #fullContent, #pdfModal')) {
            e.preventDefault();
            return false;
        }
    });
}

// =======================
// MODAL PLEIN ÉCRAN POUR PDF
// =======================

function openPdfModal(title) {
    const modal = document.getElementById('pdfModal');
    if (modal) {
        modal.style.display = 'flex';
        document.getElementById('pdfModalTitle').textContent = title || '📖 Lecteur PDF';
        document.body.style.overflow = 'hidden';
    }
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        const modalContainer = document.getElementById('pdfModalContainer');
        if (modalContainer) {
            modalContainer.innerHTML = '';
        }
    }
}

function loadPDFInModal(pdfFileName, title) {
    openPdfModal(title);
    
    const modalContainer = document.getElementById('pdfModalContainer');
    if (!modalContainer) return;
    
    modalContainer.innerHTML = '<div style="text-align:center; padding:50px;">📄 Chargement du PDF...</div>';
    
    // Charger PDF.js si nécessaire (avec CDN de secours)
    if (typeof pdfjsLib === 'undefined') {
        loadPdfJsLibrary(
            () => renderPdfInModal(pdfFileName),
            () => {
                modalContainer.innerHTML = '<p style="color:red;">❌ Erreur de chargement du lecteur PDF</p>';
            }
        );
        return;
    }

    renderPdfInModal(pdfFileName);
}

function loadPdfJsLibrary(onReady, onError) {
    const sources = [
        {
            lib: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js',
            worker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js'
        },
        {
            lib: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.min.js',
            worker: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.16.105/build/pdf.worker.min.js'
        }
    ];

    const trySource = (index) => {
        if (index >= sources.length) {
            onError();
            return;
        }

        const src = sources[index];
        const script = document.createElement('script');
        script.src = src.lib;
        script.async = true;
        script.onload = () => {
            if (typeof pdfjsLib !== 'undefined') {
                pdfjsLib.GlobalWorkerOptions.workerSrc = src.worker;
                onReady();
                return;
            }
            trySource(index + 1);
        };
        script.onerror = () => {
            trySource(index + 1);
        };
        document.head.appendChild(script);
    };

    trySource(0);
}

function renderPdfInModal(pdfFileName) {
    const modalContainer = document.getElementById('pdfModalContainer');
    if (!modalContainer) return;
    
    const pdfUrl = `assets/${encodeURIComponent(pdfFileName)}`;
    console.log(`📄 Chargement en modal: ${pdfUrl}`);

    const loadingTask = pdfjsLib.getDocument(pdfUrl);

    loadingTask.promise.then(function(pdf) {
        console.log(`✅ PDF chargé: ${pdf.numPages} pages`);
        createModalPageViewer(pdf, modalContainer, pdfFileName);
    }).catch(function(error) {
        console.error("Erreur PDF.js:", error);
        // Fallback réseau: charger le PDF en binaire puis l'injecter au même lecteur.
        fetch(`${pdfUrl}?v=${Date.now()}`, { cache: 'no-store' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.arrayBuffer();
            })
            .then((buffer) => {
                const binaryTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) });
                return binaryTask.promise;
            })
            .then((pdf) => {
                console.log(`✅ PDF chargé via fallback binaire: ${pdf.numPages} pages`);
                createModalPageViewer(pdf, modalContainer, pdfFileName);
            })
            .catch((fallbackError) => {
                console.error('Erreur fallback PDF:', fallbackError);
                if (window.location.protocol === 'file:') {
                    modalContainer.innerHTML = `
                        <p style="color:#b71c1c; text-align:center; line-height:1.6;">
                            ❌ Le navigateur bloque le chargement PDF en mode file://.<br>
                            Ouvrez la page via un serveur local HTTP pour garder ce lecteur (ex: http://127.0.0.1:5500/se-former.html).
                        </p>
                    `;
                } else {
                    modalContainer.innerHTML = `<p style="color:red;">❌ Erreur de chargement: ${pdfFileName}<br>Vérifiez que le fichier existe et que le serveur autorise l'accès.</p>`;
                }
            });
    });
}

function createModalPageViewer(pdf, container, pdfFileName) {
    let currentPage = 1;
    const totalPages = pdf.numPages;
    let currentZoom = 1.0;  // Niveau de zoom (1.0 = 100%)
    const zoomStep = 0.2;    // Pas de zoom (20%)
    const minZoom = 0.5;     // Zoom minimum (50%)
    const maxZoom = 3.0;     // Zoom maximum (300%)
    let tocEntries = [];
    let tocOpen = false;
    const showToc = cleanPdfFileName(pdfFileName) !== 'apercu.pdf';

    const manualTocByFile = {
        'livre-complet.pdf': [
            { title: 'Avant-propos', page: 3 },
            { title: 'Partie I : Le Burkina Faso', page: 4 },
            { title: 'Histoire du Burkina Faso', page: 4 },
            { title: 'La préhistoire', page: 4 },
            { title: 'La période précoloniale', page: 5 },
            { title: 'Peuplement du Burkina Faso', page: 5 },
            { title: 'Les royaumes et etats du Burkina Faso précoloniale', page: 6 },
            { title: 'Les royaumes mosses', page: 6 },
            { title: 'Les royaumes gulmance', page: 7 },
            { title: 'Le Guiriko', page: 7 },
            { title: 'Le Kenedougou', page: 8 },
            { title: 'Les émirs peuhls du Liptako', page: 9 },
            { title: 'La période coloniale au Burkina', page: 10 },
            { title: 'La période post-coloniale', page: 13 },
            { title: 'La première République', page: 13 },
            { title: 'La deuxième République', page: 13 },
            { title: 'La troisième République', page: 13 },
            { title: 'La quatrième République', page: 15 },
            { title: 'Attaques terroristes au Burkina Faso', page: 19 },
            { title: 'Actualités au Burkina Faso', page: 23 },
            { title: 'Les dirigeants burkinabés de 1960 à nos jours', page: 27 },
            { title: 'Les différents présidents/chefs d’État du Burkina Faso', page: 27 },
            { title: 'Les différents chefs de gouvernements / premiers ministres du Burkina Faso', page: 28 },
            { title: 'Les présidents de l’Assemblée nationale', page: 29 },
            { title: 'Les membres du gouvernement actuel', page: 31 },
            { title: 'Géographie du Burkina Faso', page: 34 },
            { title: 'Données géographiques et démographiques', page: 34 },
            { title: 'Découpage administratif : régions, provinces et départements', page: 36 },
            { title: 'Localités du Burkina et leur surnom', page: 44 },
            { title: 'Les cours d’eau du Burkina', page: 45 },
            { title: 'Le bassin de la Volta', page: 45 },
            { title: 'Le bassin de la Comoé (fleuve Comoé)', page: 45 },
            { title: 'Le bassin du Niger (fleuve Niger)', page: 46 },
            { title: 'Les lacs du Burkina Faso', page: 46 },
            { title: 'Les principaux barrages du Burkina', page: 47 },
            { title: 'Les reliefs et climats du Burkina', page: 48 },
            { title: 'Les reliefs du Burkina', page: 48 },
            { title: 'Les climats du Burkina', page: 48 },
            { title: 'Les routes nationales (RN) du Burkina', page: 50 },
            { title: 'Les sites touristiques au Burkina Faso', page: 51 },
            { title: 'Les sites naturels', page: 51 },
            { title: 'Les sites historiques et culturels', page: 53 },
            { title: 'Événements culturels burkinabè', page: 58 },
            { title: 'FESPACO', page: 58 },
            { title: 'SNC', page: 60 },
            { title: 'SIAO', page: 64 },
            { title: 'FITMO', page: 67 },
            { title: 'FESTIMA', page: 69 },
            { title: 'NAK', page: 70 },
            { title: 'FILO', page: 71 },
            { title: 'Kundé d’or', page: 74 },
            { title: 'Marley d’or', page: 77 },
            { title: 'Les industries, sociétés et organismes burkinabè', page: 79 },
            { title: 'Sport au Burkina Faso', page: 88 },
            { title: 'Football', page: 88 },
            { title: 'Cyclisme', page: 94 },
            { title: 'Athlétisme', page: 97 },
            { title: 'Sportifs burkinabés d’autres disciplines', page: 99 },
            { title: 'Partie II : L’Afrique', page: 106 },
            { title: 'Histoire de l’Afrique', page: 107 },
            { title: 'Aux origines : l’Afrique, berceau de l’humanité', page: 107 },
            { title: 'Les grandes civilisations anciennes d’Afrique', page: 109 },
            { title: 'L’Égypte pharaonique', page: 109 },
            { title: 'Le don du Nil', page: 109 },
            { title: 'Le pharaon', page: 110 },
            { title: 'Le royaume de Koush', page: 116 },
            { title: 'Le royaume d’Aksoum', page: 118 },
            { title: 'Carthage', page: 120 },
            { title: 'Les empires et États médiévaux', page: 122 },
            { title: 'L’empire du Ghana', page: 122 },
            { title: 'L’empire Sosso', page: 123 },
            { title: 'L’empire du Mali', page: 124 },
            { title: 'L’empire Songhaï', page: 125 },
            { title: 'Les cités-États haoussa', page: 126 },
            { title: 'Le royaume du Kanem-Bornou', page: 127 },
            { title: 'Le royaume du Bénin', page: 128 },
            { title: 'Le royaume du Dahomey', page: 129 },
            { title: 'L’empire toucouleur', page: 130 },
            { title: 'L’empire du Wassoulou', page: 131 },
            { title: 'Le royaume de Kong', page: 132 },
            { title: 'Le royaume du Kongo', page: 133 },
            { title: 'L’empire Ashanti', page: 134 },
            { title: 'Les cités-États swahilies', page: 135 },
            { title: 'L’empire de Sokoto / califat de Sokoto', page: 136 },
            { title: 'La traite négrière', page: 138 },
            { title: 'Le commerce triangulaire', page: 140 },
            { title: 'De l’impérialisme à la colonisation', page: 144 },
            { title: 'La colonisation : conquêtes, résistances, systèmes et exploitation', page: 150 },
            { title: 'De la décolonisation aux indépendances', page: 156 },
            { title: 'Crise socio-politique en Afrique post-indépendante', page: 168 },
            { title: 'Géographie de l’Afrique', page: 180 },
            { title: 'Pays africains : capitale, devise, président actuel', page: 180 },
            { title: 'Les hauts sommets d’Afrique et d’Afrique de l’Ouest', page: 185 },
            { title: 'Les fleuves d’Afrique', page: 186 },
            { title: 'Les lacs d’Afrique', page: 190 },
            { title: 'Les déserts d’Afrique', page: 193 },
            { title: 'Les organisations et institutions africaines', page: 195 },
            { title: 'UA', page: 195 },
            { title: 'AES', page: 198 },
            { title: 'CEDEAO', page: 206 },
            { title: 'UEMOA', page: 213 },
            { title: 'BCEAO', page: 218 },
            { title: 'BEAC', page: 220 },
            { title: 'BAD', page: 222 },
            { title: 'BOAD', page: 224 },
            { title: 'OHADA', page: 226 },
            { title: 'CAMES', page: 228 },
            { title: 'ASECNA', page: 229 },
            { title: 'Le sport en Afrique', page: 232 },
            { title: 'Le football en Afrique', page: 232 },
            { title: 'Le meilleur joueur de football africain', page: 235 },
            { title: 'Partie III : Le reste du monde', page: 237 },
            { title: 'Les anciennes civilisations', page: 238 },
            { title: 'La Mésopotamie', page: 238 },
            { title: 'La Grèce antique', page: 238 },
            { title: 'La Rome antique', page: 241 },
            { title: 'Civilisation de la vallée de l’Indus', page: 243 },
            { title: 'La civilisation maya', page: 243 },
            { title: 'La civilisation inca', page: 244 },
            { title: 'Les grandes découvertes', page: 245 },
            { title: 'Les grandes révolutions dans le monde', page: 250 },
            { title: 'Les guerres dans le monde', page: 259 },
            { title: 'Les grandes crises dans le monde', page: 278 },
            { title: 'Géographie du monde', page: 286 },
            { title: 'Les mers et océans', page: 299 },
            { title: 'Les fleuves et lacs du monde', page: 304 },
            { title: 'Les forêts et massifs forestiers dans le monde', page: 307 },
            { title: 'Les zones arides dans le monde', page: 309 },
            { title: 'Les organisations et institutions internationales', page: 311 },
            { title: 'ONU', page: 311 },
            { title: 'OMS', page: 313 },
            { title: 'FMI', page: 315 },
            { title: 'UNESCO', page: 318 },
            { title: 'OIT', page: 321 },
            { title: 'OIF', page: 322 },
            { title: 'UE', page: 326 },
            { title: 'OTAN', page: 328 },
            { title: 'G7', page: 330 },
            { title: 'G20', page: 332 },
            { title: 'Zone euro', page: 334 },
            { title: 'Banque mondiale', page: 337 },
            { title: 'Liste chronologique des inventions', page: 339 },
            { title: 'Glossaire', page: 343 }
        ],
        'apercu.pdf': []
    };

    function cleanPdfFileName(name) {
        return (name || '').split('?')[0].toLowerCase().trim();
    }

    function normalizeTocLabel(label) {
        return (label || '').replace(/\s+/g, ' ').trim();
    }

    function getManualTocEntries(fileName) {
        const key = cleanPdfFileName(fileName);
        const source = manualTocByFile[key] || [];
        return source
            .map((item) => ({
                title: normalizeTocLabel(item.title),
                page: Number(item.page)
            }))
            .filter((item) => item.title && item.page >= 1 && item.page <= totalPages);
    }

    function buildFallbackTocEntries() {
        const entries = [{ title: 'Debut du document', page: 1 }];
        const step = totalPages > 120 ? 25 : 10;
        for (let p = step; p <= totalPages; p += step) {
            entries.push({ title: `Aller a la page ${p}`, page: p });
        }

        if (entries[entries.length - 1].page !== totalPages) {
            entries.push({ title: `Aller a la page ${totalPages}`, page: totalPages });
        }

        return entries;
    }

    async function extractTocEntriesFromPdf(maxPagesToScan = 30) {
        const extracted = [];
        const dedupe = new Set();
        const pagesToScan = Math.min(totalPages, maxPagesToScan);

        for (let p = 1; p <= pagesToScan; p++) {
            try {
                const page = await pdf.getPage(p);
                const text = await page.getTextContent();
                const rows = new Map();

                text.items.forEach((item) => {
                    const raw = (item.str || '').trim();
                    if (!raw) return;

                    const y = Math.round(item.transform[5]);
                    const x = item.transform[4];
                    const bucket = rows.get(y) || [];
                    bucket.push({ x, raw });
                    rows.set(y, bucket);
                });

                const orderedY = Array.from(rows.keys()).sort((a, b) => b - a);
                const lines = orderedY.map((y) => {
                    const parts = rows.get(y).sort((a, b) => a.x - b.x).map((v) => v.raw);
                    return normalizeTocLabel(parts.join(' '));
                });

                lines.forEach((line) => {
                    const match = line.match(/^(.{4,}?)\s*(?:\.{2,}|\s{2,}|[-–])\s*(\d{1,3})$/);
                    if (!match) return;

                    const title = normalizeTocLabel(match[1]);
                    const pageNumber = Number(match[2]);

                    if (!title || Number.isNaN(pageNumber)) return;
                    if (pageNumber < 1 || pageNumber > totalPages) return;
                    if (/^page\s+\d+$/i.test(title)) return;

                    const key = `${title.toLowerCase()}::${pageNumber}`;
                    if (dedupe.has(key)) return;
                    dedupe.add(key);
                    extracted.push({ title, page: pageNumber });
                });
            } catch (err) {
                console.warn('Extraction sommaire: page ignoree', p, err);
            }
        }

        return extracted;
    }
    
    container.innerHTML = `
        <div class="pdf-reader" style="height:100%; display:flex; flex-direction:column;">
            <div class="pdf-controls" style="flex-shrink:0;">
                ${showToc ? '<button id="toggleTocBtn" class="pdf-btn toc-btn" title="Afficher/masquer le sommaire">☰ Sommaire</button>' : ''}
                <button id="prevPageModal" class="pdf-btn">◀ Page précédente</button>
                <span id="pageInfoModal" class="page-info">Page 1 / ${totalPages}</span>
                <button id="nextPageModal" class="pdf-btn">Page suivante ▶</button>
                
                <div class="zoom-controls">
                    <button id="zoomOutBtn" class="pdf-btn zoom-btn" title="Zoom arrière">🔍−</button>
                    <span id="zoomLevel" class="zoom-level">100%</span>
                    <button id="zoomInBtn" class="pdf-btn zoom-btn" title="Zoom avant">🔍+</button>
                    <button id="zoomResetBtn" class="pdf-btn zoom-btn" title="Réinitialiser le zoom">⟳ 100%</button>
                </div>
                
                <button id="fullscreenBtn" class="pdf-btn fullscreen-btn" title="Plein écran">🖥️ Plein écran</button>
                <span class="pdf-filename">📄 ${pdfFileName}</span>
            </div>
            <div id="pdfViewerShell" class="pdf-viewer-shell">
                ${showToc ? `
                <aside id="pdfTocPanel" class="pdf-toc-panel" aria-label="Sommaire">
                    <div class="pdf-toc-header">Sommaire</div>
                    <div id="pdfTocList" class="pdf-toc-list">
                        <p class="pdf-toc-status">Chargement du sommaire...</p>
                    </div>
                </aside>
                ` : ''}
                <div id="pdfCanvasContainerModal" class="pdf-canvas-container">
                    <canvas id="pdfCanvasModal" class="pdf-canvas"></canvas>
                </div>
            </div>
            <div class="pdf-footer">
                🔒 Consultation en ligne uniquement - Téléchargement désactivé | 
                🖱️ Molette = Zoom | 🔍 Clic droit + glisser = Déplacer
            </div>
        </div>
    `;
    
    const canvas = document.getElementById('pdfCanvasModal');
    const containerDiv = document.getElementById('pdfCanvasContainerModal');
    const viewerShell = document.getElementById('pdfViewerShell');
    const tocList = document.getElementById('pdfTocList');
    const toggleTocBtn = document.getElementById('toggleTocBtn');
    if (!canvas || !containerDiv) return;
    
    const ctx = canvas.getContext('2d');
    
    // Variables pour le pan (déplacement)
    let isPanning = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;
    
    function renderPage(pageNum) {
        pdf.getPage(pageNum).then(function(page) {
            // Appliquer le zoom à la page
            const viewport = page.getViewport({ scale: currentZoom });
            
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            
            page.render(renderContext);
            document.getElementById('pageInfoModal').textContent = `Page ${pageNum} / ${totalPages}`;
            document.getElementById('zoomLevel').textContent = `${Math.round(currentZoom * 100)}%`;
            
            // Après le rendu, ajuster la taille d'affichage du canvas
            canvas.style.width = 'auto';
            canvas.style.height = 'auto';
            canvas.style.maxWidth = `${currentZoom * 100}%`;
            updateActiveTocItem(pageNum);
            
        }).catch(err => console.error("Erreur rendu page:", err));
    }

    function renderToc(entries) {
        if (!tocList) return;

        if (!entries.length) {
            tocList.innerHTML = '<p class="pdf-toc-status">Sommaire indisponible.</p>';
            return;
        }

        tocList.innerHTML = entries.map((item, index) => {
            return `<button class="pdf-toc-item" data-page="${item.page}" title="Aller a la page ${item.page}">${index + 1}. ${item.title}<span class="pdf-toc-page">p.${item.page}</span></button>`;
        }).join('');

        tocList.querySelectorAll('.pdf-toc-item').forEach((btn) => {
            btn.addEventListener('click', () => {
                const targetPage = Number(btn.dataset.page);
                if (!Number.isNaN(targetPage) && targetPage >= 1 && targetPage <= totalPages) {
                    currentPage = targetPage;
                    renderPage(currentPage);
                    containerDiv.scrollTop = 0;

                    if (window.matchMedia('(max-width: 900px)').matches) {
                        setTocOpen(false);
                    }
                }
            });
        });

        updateActiveTocItem(currentPage);
    }

    function updateActiveTocItem(pageNum) {
        if (!tocList) return;
        tocList.querySelectorAll('.pdf-toc-item').forEach((btn) => {
            const targetPage = Number(btn.dataset.page);
            btn.classList.toggle('active', targetPage === pageNum);
        });
    }

    function setTocOpen(isOpen) {
        tocOpen = !!isOpen;
        if (viewerShell) {
            viewerShell.classList.toggle('toc-open', tocOpen);
        }
        if (toggleTocBtn) {
            toggleTocBtn.textContent = tocOpen ? '✕ Sommaire' : '☰ Sommaire';
        }
    }
    
    function updateZoom(newZoom) {
        currentZoom = Math.min(maxZoom, Math.max(minZoom, newZoom));
        renderPage(currentPage);
    }
    
    renderPage(currentPage);

    if (toggleTocBtn) {
        toggleTocBtn.addEventListener('click', () => {
            setTocOpen(!tocOpen);
        });
    }

    if (showToc) {
        setTocOpen(false);

        (async () => {
            const manual = getManualTocEntries(pdfFileName);
            if (manual.length) {
                tocEntries = manual;
                renderToc(tocEntries);
                return;
            }

            const autoExtracted = await extractTocEntriesFromPdf();
            if (autoExtracted.length) {
                tocEntries = autoExtracted;
                renderToc(tocEntries);
                return;
            }

            tocEntries = buildFallbackTocEntries();
            renderToc(tocEntries);
        })();
    }
    
    // Gestion des boutons de navigation
    document.getElementById('prevPageModal').onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
            // Remettre le scroll en haut après changement de page
            if (containerDiv) containerDiv.scrollTop = 0;
        }
    };
    
    document.getElementById('nextPageModal').onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
            if (containerDiv) containerDiv.scrollTop = 0;
        }
    };
    
    // Zoom avant
    document.getElementById('zoomInBtn').onclick = () => {
        updateZoom(currentZoom + zoomStep);
    };
    
    // Zoom arrière
    document.getElementById('zoomOutBtn').onclick = () => {
        updateZoom(currentZoom - zoomStep);
    };
    
    // Réinitialiser le zoom
    document.getElementById('zoomResetBtn').onclick = () => {
        updateZoom(1.0);
    };
    
    // Zoom avec la molette de la souris
    containerDiv.addEventListener('wheel', (e) => {
        if (e.ctrlKey || e.shiftKey) {
            e.preventDefault();
            if (e.deltaY < 0) {
                updateZoom(currentZoom + zoomStep);
            } else {
                updateZoom(currentZoom - zoomStep);
            }
        }
    });
    
    // Fonction Plein écran
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const modalContent = document.querySelector('.pdf-modal-content');
    
    if (fullscreenBtn && modalContent) {
        fullscreenBtn.onclick = () => {
            if (!document.fullscreenElement) {
                modalContent.requestFullscreen().catch(err => {
                    console.error(`Erreur plein écran: ${err.message}`);
                });
                fullscreenBtn.textContent = '🗗 Quitter plein écran';
                fullscreenBtn.style.background = '#f44336';
            } else {
                document.exitFullscreen();
                fullscreenBtn.textContent = '🖥️ Plein écran';
                fullscreenBtn.style.background = '#0a7f3f';
            }
        };
        
        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                fullscreenBtn.textContent = '🗗 Quitter plein écran';
                fullscreenBtn.style.background = '#f44336';
            } else {
                fullscreenBtn.textContent = '🖥️ Plein écran';
                fullscreenBtn.style.background = '#0a7f3f';
            }
        });
    }
    
    // Fonction Pan (déplacement) avec clic droit + glisser
    canvas.addEventListener('mousedown', (e) => {
        if (e.button === 2) { // Clic droit
            e.preventDefault();
            isPanning = true;
            startX = e.clientX;
            startY = e.clientY;
            scrollLeft = containerDiv.scrollLeft;
            scrollTop = containerDiv.scrollTop;
            canvas.style.cursor = 'grabbing';
        }
    });
    
    window.addEventListener('mousemove', (e) => {
        if (!isPanning) return;
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        containerDiv.scrollLeft = scrollLeft - dx;
        containerDiv.scrollTop = scrollTop - dy;
    });
    
    window.addEventListener('mouseup', () => {
        isPanning = false;
        canvas.style.cursor = 'grab';
    });
    
    canvas.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
    
    canvas.addEventListener('dragstart', (e) => {
        e.preventDefault();
        return false;
    });
    
    // Cursor par défaut sur le canvas
    canvas.style.cursor = 'grab';
    
    // Support tactile pour le déplacement (mobile)
    let touchStartX = 0, touchStartY = 0;
    let touchScrollLeft = 0, touchScrollTop = 0;
    
    canvas.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) { // Deux doigts = pan
            e.preventDefault();
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            touchScrollLeft = containerDiv.scrollLeft;
            touchScrollTop = containerDiv.scrollTop;
        }
    });
    
    canvas.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2 && touchStartX !== 0) {
            e.preventDefault();
            const dx = e.touches[0].clientX - touchStartX;
            const dy = e.touches[0].clientY - touchStartY;
            containerDiv.scrollLeft = touchScrollLeft - dx;
            containerDiv.scrollTop = touchScrollTop - dy;
        }
    });
    
    canvas.addEventListener('touchend', () => {
        touchStartX = 0;
        touchStartY = 0;
    });
}

// =======================
// FONCTIONS POUR L'APERÇU ET LA FORMATION
// =======================

function showPreviewModal() {
    loadPDFInModal('apercu.pdf', '📖 Aperçu - Encyclopédie des concours');
}

// Ancienne fonction showPreview (gardée pour compatibilité)
function showPreview() {
    showPreviewModal();
}

// =======================
// SESSION
// =======================
async function checkExistingSession() {
    if (!supabaseClient) {
        console.warn("⚠️ Supabase non initialisé");
        return;
    }

    try {
        const { data: { session }, error } = await supabaseClient.auth.getSession();
        
        if (error) {
            console.warn("⚠️ Erreur vérification session:", error.message);
            return;
        }
        
        if (session && session.user) {
            currentUser.email = session.user.email;
            localStorage.setItem(AUTH_LOGGED_IN_KEY, 'true');
            localStorage.setItem(AUTH_EMAIL_KEY, session.user.email);
            
            // Récupérer les offres de l'utilisateur depuis Supabase
            const { data: userOffers, error: offersError } = await supabaseClient
                .from('user_offers')
                .select('offre, expiration')
                .eq('email', session.user.email)
                .order('expiration', { ascending: false })
                .limit(1);
            
            if (!offersError && userOffers && userOffers.length > 0) {
                const offer = userOffers[0];
                const expDate = new Date(offer.expiration);
                if (expDate > new Date()) {
                    currentUser.offre = offer.offre;
                    currentUser.expiration = expDate;
                    localStorage.setItem("fasoconcours_email", session.user.email);
                    localStorage.setItem("fasoconcours_offre", offer.offre);
                    localStorage.setItem("fasoconcours_expiration", offer.expiration);
                    showAccessStatus();
                    console.log("✅ Session restaurée (Supabase)");
                }
            }
        }
    } catch (err) {
        console.error("❌ Erreur lors de la vérification de session:", err);
    }
    // Afficher le statut même si aucune session restaurée (utile sur mobile)
    try { showAccessStatus(); } catch (e) { /* ignore */ }
}

function showAccessStatus() {
    const statusDiv = document.getElementById("accessStatus");
    if (statusDiv) {
        const loginLabel = currentUser.email ? `\n                <strong>✅ Connecté :</strong> ${currentUser.email}<br>` : '';
        const offerLabel = currentUser.offre ? `\n                <strong>📦 Offre :</strong> ${getOffreName(currentUser.offre)}<br>` : '';
        const expLabel = currentUser.expiration ? `\n                <strong>⏰ Valable jusqu'au :</strong> ${currentUser.expiration.toLocaleDateString('fr-FR')}` : '\n                <strong>📦 Offre :</strong> Aucune offre active';
        statusDiv.innerHTML = `
            <div style="background:#e8f5e9; padding:15px; border-radius:10px; margin:10px 0; border-left:4px solid #0a7f3f;">
                ${loginLabel}
                ${offerLabel}
                ${expLabel}
                <button onclick="logout()" style="display:block; margin-top:10px; background:#f44336; padding:5px 10px; border:none; border-radius:5px; cursor:pointer;">Se déconnecter</button>
            </div>
        `;
    }
}

function getOffreName(offreId) {
    const offres = {
        'formation': '📚 Formation complète',
        'quiz': '📝 Quiz & Examens',
        'complet': '⭐ Pack complet'
    };
    return offres[offreId] || offreId;
}

async function signup() {
    const nom = document.getElementById('signupNom')?.value?.trim();
    const prenom = document.getElementById('signupPrenom')?.value?.trim();
    const whatsapp = document.getElementById('signupWhatsapp')?.value?.trim();
    const emailRaw = document.getElementById('signupEmail')?.value || document.getElementById('email')?.value;
    const passwordRaw = document.getElementById('signupPassword')?.value || document.getElementById('password')?.value;

    const email = emailRaw ? emailRaw.toLowerCase().trim() : '';
    const password = passwordRaw ? passwordRaw.trim() : '';

    if (!nom || !prenom || !whatsapp || !email || !password) {
        return alert('Veuillez remplir tous les champs d\'inscription');
    }

    if (password.length < 6) {
        return alert('Le mot de passe doit avoir au moins 6 caractères');
    }

    if (!supabaseClient) {
        return alert('❌ Service d\'authentification indisponible');
    }

    try {
        // Créer l'utilisateur dans Supabase Auth
        const { data: { user }, error: signUpError } = await supabaseClient.auth.signUp({
            email: email,
            password: password
        });

        if (signUpError) {
            if (signUpError.message.includes('already registered')) {
                return alert('❌ Cet e-mail est déjà inscrit. Connectez-vous.');
            }
            return alert('❌ Erreur inscription: ' + signUpError.message);
        }

        if (!user) {
            return alert('❌ Erreur lors de la création du compte');
        }

        // Sauvegarder les infos utilisateur supplémentaires dans la table users
        const { error: insertError } = await supabaseClient
            .from('users')
            .insert([
                {
                    email: email,
                    nom: nom,
                    prenom: prenom,
                    whatsapp: whatsapp,
                    created_at: new Date().toISOString()
                }
            ]);

        if (insertError) {
            console.warn('⚠️ Profil utilisateur non sauvegardé:', insertError.message);
        }

        currentUser.email = email;
        localStorage.setItem(AUTH_LOGGED_IN_KEY, 'true');
        localStorage.setItem(AUTH_EMAIL_KEY, email);

        alert('✅ Inscription réussie ! Vous pouvez maintenant vous connecter.');
        // Rediriger vers la page de connexion
        const returnUrl = new URLSearchParams(window.location.search).get('return') || 'index.html';
        location.href = `auth.html?mode=login&return=${encodeURIComponent(returnUrl)}`;
    } catch (err) {
        console.error('❌ Erreur inscription:', err);
        alert('❌ Erreur lors de l\'inscription: ' + err.message);
    }
}

async function login() {
    const emailRaw = document.getElementById('loginEmail')?.value || document.getElementById('email')?.value;
    const passwordRaw = document.getElementById('loginPassword')?.value || document.getElementById('password')?.value;

    const email = emailRaw ? emailRaw.toLowerCase().trim() : '';
    const password = passwordRaw ? passwordRaw.trim() : '';

    if (!email || !password) return alert('Veuillez remplir les champs de connexion');

    if (!supabaseClient) {
        return alert('❌ Service d\'authentification indisponible');
    }

    try {
        const { data: { session }, error } = await supabaseClient.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            if (error.message.includes('Invalid login credentials')) {
                return alert('❌ Email ou mot de passe incorrect');
            }
            return alert('❌ Erreur connexion: ' + error.message);
        }

        if (!session || !session.user) {
            return alert('❌ Erreur lors de la connexion');
        }

        currentUser.email = session.user.email;
        localStorage.setItem(AUTH_LOGGED_IN_KEY, 'true');
        localStorage.setItem(AUTH_EMAIL_KEY, session.user.email);

        // Restaurer une offre active liée à cet email si elle existe
        const { data: userOffers, error: offersError } = await supabaseClient
            .from('user_offers')
            .select('offre, expiration')
            .eq('email', session.user.email)
            .order('expiration', { ascending: false })
            .limit(1);
        
        if (!offersError && userOffers && userOffers.length > 0) {
            const offer = userOffers[0];
            const expDate = new Date(offer.expiration);
            if (expDate > new Date()) {
                currentUser.offre = offer.offre;
                currentUser.expiration = expDate;
                localStorage.setItem("fasoconcours_email", session.user.email);
                localStorage.setItem("fasoconcours_offre", offer.offre);
                localStorage.setItem("fasoconcours_expiration", offer.expiration);
            }
        }

        alert('✅ Connexion réussie !');
        const returnUrl = new URLSearchParams(window.location.search).get('return') || 'index.html';
        location.href = returnUrl;
    } catch (err) {
        console.error('❌ Erreur connexion:', err);
        alert('❌ Erreur lors de la connexion: ' + err.message);
    }
}

async function accessWithCode(offreType) {
    const authLogged = localStorage.getItem(AUTH_LOGGED_IN_KEY) === 'true';
    const authEmail = localStorage.getItem(AUTH_EMAIL_KEY);

    if (!authLogged || !authEmail) {
        alert('🔒 Veuillez vous connecter ou vous inscrire avant d\'accéder aux offres.');
        const currentPath = location.pathname.split('/').pop() || 'index.html';
        location.href = `auth.html?mode=login&return=${encodeURIComponent(currentPath)}`;
        return;
    }

    currentUser.email = authEmail;

    if (currentUser.email && currentUser.expiration > new Date()) {
        if (offreType === 'complet' && currentUser.offre !== 'complet') {
            alert("❌ Votre offre actuelle n'est pas le pack complet.");
            return;
        }
        if (offreType === 'formation' && currentUser.offre !== 'formation' && currentUser.offre !== 'complet') {
            alert("❌ Votre offre ne donne pas accès à la formation.");
            return;
        }
        if (offreType === 'quiz' && currentUser.offre !== 'quiz' && currentUser.offre !== 'complet') {
            alert("❌ Votre offre ne donne pas accès aux quiz.");
            return;
        }
        unlockContent(offreType);
        return;
    }

    if (!supabaseClient) {
        alert("❌ Service de vérification indisponible. Reconnectez Internet puis réessayez.");
        return;
    }

    const promptLabel = offreType === 'complet' ? '🔑 Entrez votre code PACK COMPLET :' : '🔑 Entrez votre code d\'accès :';
    let code = prompt(promptLabel);
    if (!code) return;
    code = code.toUpperCase().trim();
    const email = currentUser.email.toLowerCase().trim();
    
    try {
        const { data: codeData, error } = await supabaseClient
            .from("codes")
            .select("*")
            .eq("code", code)
            .maybeSingle();
        
        if (error || !codeData) {
            alert("❌ Code invalide");
            return;
        }
        
        if (codeData.offre !== offreType && codeData.offre !== 'complet') {
            alert(`❌ Ce code donne accès à l'offre "${codeData.offre}"`);
            return;
        }
        
        const expDate = new Date(codeData.date_expiration);
        if (expDate <= new Date()) {
            alert("❌ Code expiré");
            return;
        }
        
        if (codeData.is_active && codeData.email !== null && codeData.email !== email) {
            alert("❌ Code déjà utilisé par un autre utilisateur");
            return;
        }
        
        if (!codeData.is_active || codeData.email !== email) {
            const { error: updateError } = await supabaseClient
                .from("codes")
                .update({
                    email: email,
                    is_active: true,
                    date_activation: new Date().toISOString()
                })
                .eq("code", code);
            
            if (updateError) {
                alert("❌ Erreur activation");
                return;
            }
        }
        
        currentUser.email = email;
        currentUser.offre = codeData.offre;
        currentUser.expiration = expDate;
        
        // Sauvegarder l'offre dans Supabase (table user_offers) pour la rendre accessible partout
        const { error: insertOfferError } = await supabaseClient
            .from('user_offers')
            .insert([
                {
                    email: email,
                    offre: codeData.offre,
                    expiration: codeData.date_expiration,
                    code_used: code,
                    activated_at: new Date().toISOString()
                }
            ]);
        
        if (insertOfferError) {
            console.warn("⚠️ Offre non sauvegardée dans Supabase:", insertOfferError.message);
        }
        
        // Aussi sauvegarder localement pour accès rapide
        localStorage.setItem("fasoconcours_email", email);
        localStorage.setItem("fasoconcours_offre", codeData.offre);
        localStorage.setItem("fasoconcours_expiration", codeData.date_expiration);
        
        if (offreType === 'complet') {
            alert("✅ Code PACK COMPLET activé ! Vous pouvez maintenant accéder à la Formation complète et aux Quiz.");
        } else {
            alert("✅ Code activé !");
        }
        showAccessStatus();
        unlockContent(offreType);
        
    } catch (err) {
        console.error(err);
        alert("❌ Erreur");
    }
}

function unlockContent(offreType) {
    if (offreType === 'formation') {
        // Ouvrir la formation complète en modal plein écran
        loadPDFInModal('livre-complet.pdf', '📚 Formation complète - Encyclopédie des concours');
        
        // Optionnel : afficher aussi le conteneur dans la page
        const fullContent = document.getElementById("fullContent");
        if (fullContent) {
            fullContent.style.display = "block";
        }
    } else if (offreType === 'quiz') {
        const quizInterface = document.getElementById("quizInterface");
        if (quizInterface) {
            quizInterface.style.display = "block";
            if (typeof showQuizThematique === 'function') showQuizThematique();
        }
    } else if (offreType === 'complet') {
        const hasFormationSurface = !!document.getElementById('pdfModal') || !!document.getElementById('fullContent');
        const hasQuizSurface = !!document.getElementById('quizInterface');

        if (hasFormationSurface) {
            loadPDFInModal('livre-complet.pdf', '⭐ Pack complet - Formation');
            const fullContent = document.getElementById("fullContent");
            if (fullContent) {
                fullContent.style.display = "block";
            }
        }

        if (hasQuizSurface) {
            const quizInterface = document.getElementById("quizInterface");
            if (quizInterface) {
                quizInterface.style.display = "block";
                if (typeof showQuizThematique === 'function') showQuizThematique();
            }
        }

        if (hasFormationSurface && !hasQuizSurface) {
            if (confirm("✅ Pack complet activé. Voulez-vous aller sur la page Quiz pour accéder à la partie QCM/Examens ?")) {
                location.href = 'tester.html';
            }
        } else if (hasQuizSurface && !hasFormationSurface) {
            if (confirm("✅ Pack complet activé. Voulez-vous aller sur la page Se former pour accéder au livre complet ?")) {
                location.href = 'se-former.html';
            }
        } else if (!hasFormationSurface && !hasQuizSurface) {
            const versFormation = confirm("✅ Pack complet activé. Cliquez sur OK pour commencer par la Formation, ou Annuler pour aller aux Quiz.");
            location.href = versFormation ? 'se-former.html' : 'tester.html';
        }
    }
}

// =======================
// CARROUSEL
// =======================
function initCarousel() {
    let items = document.querySelectorAll(".carousel p");
    if (!items.length) return;
    let index = 0;
    function showNext() {
        items.forEach(i => i.style.opacity = "0");
        if (items[index]) items[index].style.opacity = "1";
        index = (index + 1) % items.length;
    }
    setInterval(showNext, 2500);
    showNext();
}

async function logout() {
    if (!supabaseClient) {
        localStorage.removeItem(AUTH_LOGGED_IN_KEY);
        localStorage.removeItem(AUTH_EMAIL_KEY);
        localStorage.removeItem("fasoconcours_email");
        localStorage.removeItem("fasoconcours_offre");
        localStorage.removeItem("fasoconcours_expiration");
        currentUser = { email: null, offre: null, expiration: null };
        alert("🔓 Déconnecté.");
        location.reload();
        return;
    }

    try {
        const { error } = await supabaseClient.auth.signOut();
        
        if (error) {
            console.warn("⚠️ Erreur déconnexion Supabase:", error.message);
        }

        localStorage.removeItem(AUTH_LOGGED_IN_KEY);
        localStorage.removeItem(AUTH_EMAIL_KEY);
        localStorage.removeItem("fasoconcours_email");
        localStorage.removeItem("fasoconcours_offre");
        localStorage.removeItem("fasoconcours_expiration");
        currentUser = { email: null, offre: null, expiration: null };
        alert("🔓 Déconnecté.");
        location.reload();
    } catch (err) {
        console.error("❌ Erreur lors de la déconnexion:", err);
        // Nettoyer de toute façon
        localStorage.removeItem(AUTH_LOGGED_IN_KEY);
        localStorage.removeItem(AUTH_EMAIL_KEY);
        localStorage.removeItem("fasoconcours_email");
        localStorage.removeItem("fasoconcours_offre");
        localStorage.removeItem("fasoconcours_expiration");
        currentUser = { email: null, offre: null, expiration: null };
        location.reload();
    }
}

// =======================
// FONCTIONS POUR LES QUIZ (à compléter avec votre fichier quiz-data.js)
// =======================

// Ces fonctions seront remplacées par celles de quiz-data.js
// Elles sont définies ici pour éviter les erreurs si quiz-data.js n'est pas chargé
if (typeof showQuizThematique === 'undefined') {
    window.showQuizThematique = function() {
        document.getElementById('quizContent').innerHTML = '<p>Chargement des quiz...</p>';
    };
}

if (typeof showExamen === 'undefined') {
    window.showExamen = function() {
        document.getElementById('quizContent').innerHTML = '<p>Chargement de l\'examen...</p>';
    };
}

if (typeof window !== 'undefined') {
    window.accessWithCode = accessWithCode;
    window.showPreviewModal = showPreviewModal;
    window.closePdfModal = closePdfModal;
}