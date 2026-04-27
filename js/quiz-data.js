// =======================
// DONNÉES DES QUIZ - ENCYCLOPÉDIE DES CONCOURS
// =======================

// Structure des thématiques (vous pouvez ajouter/modifier selon vos besoins)
const thematiques = {
    'histoire_precoloniale': {
        titre: '📜 Histoire précoloniale',
        questions: []
    },
    'periode_coloniale': {
        titre: '🏛️ Période coloniale',
        questions: []
    },
    'post_coloniale': {
        titre: '🇧🇫 Période post-coloniale (1960-2014)',
        questions: []
    },
    'attaques_terroristes': {
        titre: '⚠️ Attaques terroristes',
        questions: []
    },
    'actualites': {
        titre: '📰 Actualités récentes',
        questions: []
    },
    'dirigeants': {
        titre: '👑 Dirigeants burkinabè',
        questions: []
    },
    'geographie_demographie': {
        titre: '🗺️ Géographie et démographie',
        questions: []
    },
    'hydrographie_relief': {
        titre: '💧 Hydrographie et relief',
        questions: []
    },
    'sites_touristiques': {
        titre: '🏞️ Sites touristiques',
        questions: []
    },
    'evenements_culturels': {
        titre: '🎭 Événements culturels',
        questions: []
    },
    'industries_societes': {
        titre: '🏭 Industries et sociétés',
        questions: []
    },
    'sport': {
        titre: '⚽ Sport',
        questions: []
    }
};

// =======================
// CHARGEMENT DES QUESTIONS (HISTOIRE PRÉCOLONIALE - N°1 à 60)
// =======================

// Questions 1 à 60 : Histoire précoloniale
thematiques.histoire_precoloniale.questions = [
    { texte: 'La présence humaine au Burkina Faso remonterait à au moins combien d\'années ?', options: ['200 000 ans', '400 000 ans', '600 000 ans', '1 000 000 ans'], correct: 1 },
    { texte: 'Quelle est la principale caractéristique du Paléolithique ?', options: ['L\'agriculture', 'La pierre polie', 'La pierre taillée', 'La poterie'], correct: 2 },
    { texte: 'Vers quelle année les populations du Burkina Faso ont-elles commencé à évoluer vers l\'agriculture et l\'élevage ?', options: ['10 000 av. J.-C.', '8 000 av. J.-C.', '6 000 av. J.-C.', '4 000 av. J.-C.'], correct: 2 },
    { texte: 'Dans quelle zone a-t-on découvert des pierres taillées dans du grès et du quartz ?', options: ['Sindou', 'Markoye', 'Bérégadougou', 'Rim II'], correct: 2 },
    { texte: 'Les bifaces de Markoye appartiennent à quelle période ?', options: ['Néolithique', 'Paléolithique', 'Âge du fer', 'Protohistoire'], correct: 1 },
    { texte: 'Le Néolithique est caractérisé par :', options: ['La pierre taillée', 'La chasse uniquement', 'La pierre polie et la sédentarisation', 'L\'invention de l\'écriture'], correct: 2 },
    { texte: 'Des grottes et abris sous-roche ont été découverts à Rim II près de quelle ville ?', options: ['Kaya', 'Ouahigouya', 'Dori', 'Banfora'], correct: 1 },
    { texte: 'Les poteries découvertes au Burkina Faso pour le Néolithique datent d\'environ :', options: ['3000 à 2500 ans av. J.-C.', '2000 à 1850 ans av. J.-C.', '1500 à 1000 ans av. J.-C.', '1000 à 500 ans av. J.-C.'], correct: 1 },
    { texte: 'Dans quelle région se trouvent des sites de fabrication de haches à Gargassa et Markoye ?', options: ['L\'Ouest', 'Le Sud', 'Le Centre', 'Le Nord'], correct: 3 },
    { texte: 'Quelles céréales les populations néolithiques cultivaient-elles ?', options: ['Maïs et riz', 'Mil et sorgho', 'Blé et orge', 'Arachide et niébé'], correct: 1 },
    { texte: 'Environ combien de groupes ethniques compte le Burkina Faso ?', options: ['45', '56', '67', '78'], correct: 2 },
    { texte: 'Dans le peuplement du Centre, quels sont les autochtones arrivés avant le XVe siècle ?', options: ['Yarsé et Maramsé', 'Nokomsés', 'Gourounsi, Bissa, Nyonyonsé', 'Mossé'], correct: 2 },
    { texte: 'Les Nokomsés, venus du Dagomba (Nord du Ghana), sont arrivés à partir de :', options: ['XIIIe siècle', 'XIVe siècle', 'XVe siècle', 'XVIe siècle'], correct: 2 },
    { texte: 'Quels peuples sont venus entre les XVIIe et XVIIIe siècles dans le Centre ?', options: ['Gourounsi et Bissa', 'Yarsé et Maramsé', 'Nokomsés', 'Dogon et Kurumba'], correct: 1 },
    { texte: 'Dans le peuplement de l\'Est (Gulmu), qui a conduit les Bemba et Burkimba ?', options: ['Yendabri', 'Diaba Lompo', 'Ouédraogo', 'Famagan Ouattara'], correct: 1 },
    { texte: 'Les Gourmantché sont composés d\'autochtones (Tendamba) et d\'allochtones :', options: ['Bukimba', 'Nokomsé', 'Nakomsé', 'Yarsé'], correct: 0 },
    { texte: 'Dans l\'Ouest, quels sont les peuples hybrides ?', options: ['Samo et Bobo', 'Goin et Turka', 'Dagara, Dioula, Zora', 'Sénoufo et Bwaba'], correct: 2 },
    { texte: 'Dans le Sud, quel est l\'un des peuples les plus anciennement installés au Burkina Faso ?', options: ['Lobi', 'Dagara', 'Gourounsi (Sisala, Kassena)', 'Birifor'], correct: 2 },
    { texte: 'À partir de quand les Dian, Lobi, Birifor et Dagara sont-ils arrivés du Ghana dans le Sud ?', options: ['Début du XVIIIe siècle', 'Milieu du XVIIIe siècle', 'Fin du XVIIIe siècle', 'Début du XIXe siècle'], correct: 2 },
    { texte: 'Au Nord, les Peulhs sont venus du Mali à partir de :', options: ['XIIIe siècle', 'XIVe siècle', 'XVe siècle', 'XVIe siècle'], correct: 2 },
    { texte: 'Quels émirats les Gourmantchés ont-ils créés au XIXe siècle au Nord ?', options: ['Liptako et Yaaga', 'Dori et Djibo', 'Baraboulé et Djibo', 'Tenkodogo et Yatenga'], correct: 0 },
    { texte: 'Les Mossés sont originaires de :', options: ['Gambaga (Nord du Ghana)', 'Mali', 'Niger', 'Côte d\'Ivoire'], correct: 0 },
    { texte: 'Qui est la princesse guerrière à l\'origine des royaumes mossé ?', options: ['Guimbi Ouattara', 'Yennenga', 'Sarraounia', 'Idia'], correct: 1 },
    { texte: 'Le fils de Yennenga et Rialé s\'appelait :', options: ['Oubri', 'Yadéga', 'Ouédraogo', 'Zoungrana'], correct: 2 },
    { texte: 'Le premier royaume moaga créé sur le territoire du Burkina Faso est :', options: ['Ouagadougou', 'Yatenga', 'Tenkodogo', 'Boussouma'], correct: 2 },
    { texte: 'Le royaume de Tenkodogo a été fondé par :', options: ['Naba Oubri', 'Naba Yadéga', 'Ouédraogo', 'Zoungrana'], correct: 2 },
    { texte: 'Le royaume de Ouagadougou s\'appelait à l\'origine :', options: ['Oubritenga', 'Yatenga', 'Zitenga', 'Rawatenga'], correct: 0 },
    { texte: 'Le nom "Ouagadougou" viendrait de l\'appellation "Wogdgo" qui signifie :', options: ['Terre des hommes intègres', 'Venez m\'honorer', 'Ville du roi', 'Pays des Mossé'], correct: 1 },
    { texte: 'Le royaume de Ouagadougou a connu son déclin définitif en :', options: ['1885', '1896', '1904', '1919'], correct: 1 },
    { texte: 'Le royaume du Yatenga a été fondé vers 1540 par :', options: ['Naba Oubri', 'Naba Yadéga', 'Ouédraogo', 'Zoungrana'], correct: 1 },
    { texte: 'Le Yatenga a été placé sous protectorat français le :', options: ['18 mai 1895', '20 janvier 1895', '26 septembre 1897', '4 octobre 1895'], correct: 0 },
    { texte: 'Les royaumes Gulmancé sont situés à quelle partie du Burkina Faso ?', options: ['Ouest', 'Sud', 'Est', 'Nord'], correct: 2 },
    { texte: 'Le premier royaume Gulmancé s\'appelait :', options: ['Fada N\'Gourma', 'Koudjouabougou', 'Matiacouali', 'Bilanga'], correct: 1 },
    { texte: 'Quel roi a marqué l\'apogée de la puissance gulmantché et a transféré la capitale à Fada N\'Gourma ?', options: ['Diaba Lompo', 'Yendabri', 'Yentouri', 'Bokandé'], correct: 1 },
    { texte: 'Le royaume du Guiriko avait pour capitale :', options: ['Bobo-Dioulasso', 'Sya', 'Banfora', 'Orodara'], correct: 1 },
    { texte: 'Le royaume du Guiriko a été fondé par :', options: ['Oulé Ouattara', 'Tiéba Traoré', 'Famagan Ouattara', 'Sogassi Sanou'], correct: 2 },
    { texte: 'La puissance du royaume du Guiriko reposait sur :', options: ['L\'agriculture seulement', 'Le commerce, la cavalerie et les fusils', 'L\'orpaillage', 'La pêche'], correct: 1 },
    { texte: 'Le royaume du Guiriko a signé un traité de protectorat avec la France le 26 septembre 1897 sous le règne de :', options: ['Oulé Ouattara', 'Famagan Ouattara', 'Sogassi Sanou', 'Tiéba Traoré'], correct: 2 },
    { texte: 'Le royaume du Kénédougou a été fondé par la dynastie des :', options: ['Ouattara', 'Traoré', 'Lompo', 'Sanou'], correct: 1 },
    { texte: 'La ville de Sikasso, centre du royaume du Kénédougou, se trouve dans l\'actuel :', options: ['Burkina Faso', 'Côte d\'Ivoire', 'Mali', 'Ghana'], correct: 2 },
    { texte: 'Tiéba Traoré est mort en 1893 lors de la bataille de :', options: ['Bama', 'Sikasso', 'Sya', 'Dori'], correct: 0 },
    { texte: 'Après la mort de Tiéba Traoré, son frère lui succède. Il s\'agit de :', options: ['Oulé Ouattara', 'Babemba Traoré', 'Famagan Ouattara', 'Sogassi Sanou'], correct: 1 },
    { texte: 'Le royaume du Kénédougou a disparu après la prise de Sikasso par les Français en :', options: ['1895', '1896', '1897', '1898'], correct: 3 },
    { texte: 'Babemba Traoré, plutôt que de se livrer aux Français, a :', options: ['Fui en exil', 'Signé un traité', 'Collaboré avec eux', 'Donné la mort'], correct: 3 },
    { texte: 'L\'émirat peul du Liptako a été fondé entre 1810 et 1817 dans le cadre du djihad de :', options: ['Tiéba Traoré', 'Babemba Traoré', 'Ousmane Dan Fodio', 'Ibrahima Bi Seidou'], correct: 2 },
    { texte: 'Le premier émir du Liptako fut :', options: ['Boubacar Sori', 'Ibrahima Bi Seidou', 'Salouy Hemla Saydou', 'Ousmane Amirou Dicko'], correct: 1 },
    { texte: 'La capitale de l\'émirat du Liptako était :', options: ['Djibo', 'Dori', 'Gorom-Gorom', 'Sebba'], correct: 1 },
    { texte: 'L\'actuel émir du Liptako est :', options: ['Nassourou Abdoulaye Dicko', 'Boubacar Sori', 'Ousmane Amirou Dicko', 'Ibrahima Bi Seidou'], correct: 2 },
    { texte: 'L\'émirat du Liptako a signé un traité de protectorat avec la France en :', options: ['1895', '1896', '1897', '1898'], correct: 0 },
    { texte: 'Le royaume du Yatenga a été placé sous protectorat français après des crises internes. Quel événement a permis cette intervention française ?', options: ['Les querelles de succession', 'Les attaques des Peulhs', 'L\'arrivée des troupes anglaises', 'La traite négrière'], correct: 0 },
    { texte: 'Quel roi mossé a fondé le royaume du Yatenga après avoir échoué à prendre le pouvoir au centre ?', options: ['Naba Oubri', 'Naba Yadéga', 'Ouédraogo', 'Naba Zoungrana'], correct: 1 },
    { texte: 'La région de Sindou est connue à la préhistoire pour ses :', options: ['Sites de métallurgie', 'Grottes et abris sous-roche', 'Pierres levées', 'Tombes royales'], correct: 1 },
    { texte: 'Les Talsé dans la société mossi étaient :', options: ['Des nobles', 'Des esclaves', 'Des hommes libres et roturiers', 'Des princes'], correct: 2 },
    { texte: 'Le royaume du Kénédougou voulait faire de Bobo-Dioulasso sa deuxième capitale sous le règne de :', options: ['Babemba Traoré', 'Tiéba Traoré', 'Famagan Ouattara', 'Oulé Ouattara'], correct: 1 },
    { texte: 'Le commandant français qui a signé le traité de protectorat avec le Guiriko en 1897 est :', options: ['Binger', 'Monteil', 'Caudrellier', 'Voulet'], correct: 2 },
    { texte: 'Les Nokomsés, venus du Dagomba, appartiennent à quelle catégorie dans le peuplement du Centre ?', options: ['Autochtones', 'Allochtones', 'Peuples hybrides', 'Étrangers temporaires'], correct: 1 },
    { texte: 'Le roi Yendabri a transféré la capitale du Gulmu à :', options: ['Koudjouabougou', 'Matiacouali', 'Fada N\'Gourma', 'Bilanga'], correct: 2 },
    { texte: 'Les Dapobi, Bangré et Kobemba dans la société mossi étaient :', options: ['Des nobles', 'Des hommes libres', 'Des esclaves', 'Des guerriers'], correct: 2 },
    { texte: 'L\'émir actuel du Liptako, Ousmane Amirou Dicko, est le combien depuis la fondation de l\'émirat ?', options: ['10e', '11e', '12e', '13e'], correct: 2 },
    { texte: 'Laquelle de ces périodes n\'existe pas dans l\'histoire du Burkina précolonial ?', options: ['Âge de la pierre taillée', 'Âge de la pierre polie', 'Âge du bronze', 'Âge du fer'], correct: 2 }
];

// Période coloniale (N°61 à 90)
thematiques.periode_coloniale.questions = [
    { texte: 'En quelle année la première expédition menée par le capitaine Louis Gustave Binger atteint-elle le Burkina Faso ?', options: ['1886', '1888', '1890', '1891'], correct: 1 },
    { texte: 'À Ouagadougou, le capitaine Binger est reçu par :', options: ['Mogho Naaba Wobgho', 'Mogho Naaba Sanum', 'Mogho Naaba Kougri', 'Mogho Naaba Kom II'], correct: 1 },
    { texte: 'En 1890, le docteur Crozat est reçu à Bobo-Dioulasso par :', options: ['La princesse Guimbi Ouattara', 'Le Mogho Naaba', 'Le commandant Decoeur', 'Le capitaine Monteil'], correct: 0 },
    { texte: 'La ligne Say-Bourra, que devait reconnaître l\'expédition Monteil en 1891, a été fixée par :', options: ['Le traité de Berlin', 'La déclaration franco-britannique du 5 août 1890', 'La conférence de Brazzaville', 'Le pacte colonial'], correct: 1 },
    { texte: 'En juillet 1894, Mogho Naaba Woghgo (Boukary Koutou) conclut un traité d\'alliance avec :', options: ['Les Français', 'Les Allemands', 'Les Anglais', 'Les Portugais'], correct: 2 },
    { texte: 'Le 20 janvier 1895, le commandant Decoeur signe un traité de protectorat avec le chef du Gulmu. Ce chef s\'appelle :', options: ['Yendabri', 'Bokandé', 'Batchandé', 'Diaba Lompo'], correct: 2 },
    { texte: 'Le Yatenga est placé sous protectorat français le 18 mai 1895 par :', options: ['Mogho Naaba Wobgho', 'Naaba Baogo', 'Mogho Naaba Siguiri', 'Mogho Naaba Kougri'], correct: 1 },
    { texte: 'Le 4 octobre 1895, le capitaine Destenaves obtient la signature d\'un traité à :', options: ['Ouagadougou', 'Dori', 'Fada N\'Gourma', 'Bobo-Dioulasso'], correct: 1 },
    { texte: 'Les troupes françaises de la colonne Voulet-Chanoine entrent dans Ouagadougou le :', options: ['1er septembre 1895', '1er septembre 1896', '1er septembre 1897', '1er septembre 1898'], correct: 1 },
    { texte: 'Face à l\'avancée française, Mogho Naaba Wobgho quitte Ouagadougou et se retire à :', options: ['Nobéré', 'Tenkodogo', 'Koudougou', 'Kombissiri'], correct: 0 },
    { texte: 'Le 19 septembre 1896, Voulet signe un traité à Sati avec :', options: ['Le Mogho Naaba', 'Le roi du Gulmu', 'Hamaria dit "le roi des Gourounsi"', 'L\'émir du Liptako'], correct: 2 },
    { texte: 'Le Mogho Naaba Siguiri accepte de signer le traité de protectorat français le :', options: ['20 janvier 1896', '20 janvier 1897', '20 janvier 1898', '20 janvier 1899'], correct: 1 },
    { texte: 'Les Français prononcent la déchéance de Mogho Naaba Wobgho le 21 janvier 1897. Qui est intronisé à sa place ?', options: ['Naaba Baogo', 'Mogho Naaba Kougri', 'Son jeune frère Mamadou (Mogho Naaba Siguiri)', 'Naaba Yadéga'], correct: 2 },
    { texte: 'En 1897, le commandant Candrelier signe un traité avec le Guiriko à :', options: ['Ouagadougou', 'Banfora', 'Bobo-Dioulasso', 'Ouarkoye'], correct: 2 },
    { texte: 'La majeure partie du territoire correspondant à l\'actuel Burkina Faso est conquise par les Français en :', options: ['1896', '1897', '1898', '1899'], correct: 2 },
    { texte: 'En 1904, les territoires sont intégrés à l\'AOF au sein de quelle colonie ?', options: ['La colonie du Sénégal', 'La colonie du Haut-Sénégal et du Niger', 'La colonie de Côte d\'Ivoire', 'La colonie du Dahomey'], correct: 1 },
    { texte: 'La guerre du Bani-Volta (1915-1916) est une révolte contre :', options: ['Les impôts', 'Les recrutements forcés', 'La destruction des récoltes', 'L\'interdiction des cultes traditionnels'], correct: 1 },
    { texte: 'Lors de la guerre du Bani-Volta, environ combien de personnes furent tuées par les troupes de l\'AOF ?', options: ['10 000', '20 000', '30 000', '40 000'], correct: 2 },
    { texte: 'La colonie de la Haute-Volta est créée le :', options: ['1er mars 1918', '1er mars 1919', '1er mars 1920', '1er mars 1921'], correct: 1 },
    { texte: 'Le premier gouverneur de la Haute-Volta est :', options: ['Edouard Elsing', 'Gustave Binger', 'Parfait Monteil', 'Voulet'], correct: 0 },
    { texte: 'La Haute-Volta est reconstituée dans ses limites de 1932 le 4 septembre 1947 grâce aux démarches de :', options: ['Mogho Naaba Wobgho', 'Mogho Naaba Siguiri', 'Mogho Naaba Kom II et son fils Naaba Sagha II', 'Maurice Yaméogo'], correct: 2 },
    { texte: 'La loi-cadre Defferre est adoptée le :', options: ['23 juin 1954', '23 juin 1955', '23 juin 1956', '23 juin 1957'], correct: 2 },
    { texte: 'La loi-cadre Defferre est adoptée sur l\'initiative de :', options: ['Charles de Gaulle', 'Gaston Defferre', 'François Mitterrand', 'Vincent Auriol'], correct: 1 },
    { texte: 'Les premières élections territoriales au suffrage universel au Burkina ont lieu le :', options: ['31 mars 1955', '31 mars 1956', '31 mars 1957', '31 mars 1958'], correct: 2 },
    { texte: 'En 1958, qui devient président du conseil de gouvernement de la Haute-Volta ?', options: ['Maurice Yaméogo', 'Daniel Ouezzin Coulibaly', 'Joseph Conombo', 'Gérard Ouédraogo'], correct: 1 },
    { texte: 'Le Mogho Naaba Kougri tente sans succès d\'établir une monarchie constitutionnelle le :', options: ['17 octobre 1957', '17 octobre 1958', '17 octobre 1959', '17 octobre 1960'], correct: 1 },
    { texte: 'La Communauté française, proposée par Charles de Gaulle, est créée par référendum le 28 septembre 1958. Quel est le pourcentage de "oui" ?', options: ['95,5 %', '97,5 %', '98,5 %', '99,5 %'], correct: 3 },
    { texte: 'Maurice Yaméogo devient président du Conseil de gouvernement le :', options: ['20 octobre 1957', '20 octobre 1958', '20 octobre 1959', '20 octobre 1960'], correct: 1 },
    { texte: 'La République de la Haute-Volta est proclamée le :', options: ['11 décembre 1958', '11 décembre 1959', '11 décembre 1960', '11 décembre 1961'], correct: 0 },
    { texte: 'Aux élections législatives du 19 avril 1959, le RDA obtient quel pourcentage des suffrages ?', options: ['60 %', '65 %', '70 %', '75 %'], correct: 2 }
];

// Période post-coloniale (N°91 à 150)
thematiques.post_coloniale.questions = [
    { texte: 'La proclamation de l\'indépendance de la Haute-Volta a lieu le :', options: ['4 août 1960', '5 août 1960', '11 décembre 1960', '27 novembre 1960'], correct: 1 },
    { texte: 'Aux élections présidentielles du 3 octobre 1965, Maurice Yaméogo, candidat unique, est réélu avec quel pourcentage des voix ?', options: ['97,97 %', '98,97 %', '99,97 %', '100 %'], correct: 2 },
    { texte: 'La constitution instituant la Première République est instaurée le :', options: ['27 novembre 1960', '5 août 1960', '3 janvier 1966', '14 juin 1960'], correct: 0 },
    { texte: 'Maurice Yaméogo démissionne suite à un soulèvement populaire le :', options: ['3 janvier 1965', '3 janvier 1966', '3 janvier 1967', '3 janvier 1968'], correct: 1 },
    { texte: 'Après la démission de Maurice Yaméogo, qui prend le pouvoir ?', options: ['Saye Zerbo', 'Jean-Baptiste Ouédraogo', 'Sangoulé Lamizana', 'Thomas Sankara'], correct: 2 },
    { texte: 'La nationalisation des écoles privées catholiques a lieu le :', options: ['12 janvier 1967', '12 janvier 1968', '12 janvier 1969', '12 janvier 1970'], correct: 2 },
    { texte: 'La Deuxième République est approuvée par référendum le 14 juin 1970. Que prévoit cette constitution concernant l\'armée ?', options: ['L\'armée est dissoute', 'La présidence revient au militaire le plus ancien dans le grade le plus élevé', 'L\'armée n\'a aucun rôle politique', 'Les militaires ne peuvent pas être ministres'], correct: 1 },
    { texte: 'Lamizana met fin à la Deuxième République par un coup de force le :', options: ['8 février 1973', '8 février 1974', '8 février 1975', '8 février 1976'], correct: 1 },
    { texte: 'Le conflit frontalier entre la Haute-Volta et le Mali a lieu en :', options: ['15 décembre 1973', '15 décembre 1974', '15 décembre 1975', '15 décembre 1976'], correct: 1 },
    { texte: 'Le référendum approuvant la constitution de la Troisième République a lieu le :', options: ['27 novembre 1976', '27 novembre 1977', '27 novembre 1978', '27 novembre 1979'], correct: 1 },
    { texte: 'Sangoulé Lamizana est élu président aux élections présidentielles du :', options: ['28 mai 1977', '28 mai 1978', '28 mai 1979', '28 mai 1980'], correct: 1 },
    { texte: 'Le 7 janvier 1980, Sangoulé Lamizana est confronté à :', options: ['Une tentative de coup d\'État', 'Une grève générale', 'Une invasion étrangère', 'Une catastrophe naturelle'], correct: 1 },
    { texte: 'Le coup d\'État du 25 novembre 1980 est perpétré par le CMRPN. Qui prend le pouvoir ?', options: ['Jean-Baptiste Ouédraogo', 'Saye Zerbo', 'Blaise Compaoré', 'Thomas Sankara'], correct: 1 },
    { texte: 'Saye Zerbo est renversé le 7 novembre 1982 par :', options: ['Le CMRPN', 'Le CNR', 'Le CPSP (Conseil provisoire de Salut du Peuple)', 'Le Front populaire'], correct: 2 },
    { texte: 'Après le renversement de Saye Zerbo, qui devient chef de l\'État ?', options: ['Thomas Sankara', 'Blaise Compaoré', 'Jean-Baptiste Ouédraogo', 'Henri Zongo'], correct: 2 },
    { texte: 'Thomas Sankara devient Premier ministre de Jean-Baptiste Ouédraogo le :', options: ['10 janvier 1982', '10 janvier 1983', '10 janvier 1984', '10 janvier 1985'], correct: 1 },
    { texte: 'En avril 1983, Thomas Sankara invite à Ouagadougou le dirigeant libyen :', options: ['Abdelaziz Bouteflika', 'Mouammar Kadhafi', 'Hosni Moubarak', 'Zine el-Abidine Ben Ali'], correct: 1 },
    { texte: 'Thomas Sankara est limogé, arrêté et emprisonné en résidence surveillée le :', options: ['17 mai 1983', '17 mai 1984', '17 mai 1985', '17 mai 1986'], correct: 0 },
    { texte: 'Le soulèvement du 4 août 1983 est conduit par plusieurs officiers. Lequel de ces officiers n\'a pas participé à ce soulèvement ?', options: ['Jean-Baptiste Boukary Lingani', 'Blaise Compaoré', 'Thomas Sankara', 'Saye Zerbo'], correct: 3 },
    { texte: 'Après le 4 août 1983, le CPSP est remplacé par :', options: ['Le CMRPN', 'Le CNR (Conseil national de Révolution)', 'Le Front populaire', 'Le MPSR'], correct: 1 },
    { texte: 'Saye Zerbo est jugé et condamné en mai 1984 à :', options: ['Dix ans de prison', 'Quinze ans de prison dont sept ans avec sursis', 'Vingt ans de prison', 'La réclusion à perpétuité'], correct: 1 },
    { texte: 'La Haute-Volta est rebaptisée Burkina Faso le :', options: ['4 août 1983', '4 août 1984', '4 août 1985', '4 août 1986'], correct: 1 },
    { texte: 'Que signifie "Burkina Faso" ?', options: ['Terre des hommes intègres', 'Pays du soleil levant', 'Patrie ou la mort', 'Terre des ancêtres'], correct: 0 },
    { texte: 'La nouvelle devise du Burkina Faso adoptée en 1984 est :', options: ['Unité, Travail, Justice', 'Liberté, Égalité, Fraternité', 'La Patrie ou la mort, nous vaincrons', 'Paix, Travail, Patrie'], correct: 2 },
    { texte: 'Le nouveau découpage territorial de 1984 crée :', options: ['20 provinces et 100 départements', '25 provinces et 121 départements', '30 provinces et 150 départements', '45 provinces et 351 départements'], correct: 1 },
    { texte: 'Le conflit de la bande d\'Agacher oppose le Burkina Faso à :', options: ['Le Niger', 'Le Ghana', 'Le Mali', 'La Côte d\'Ivoire'], correct: 2 },
    { texte: 'La guerre de la bande d\'Agacher (dite aussi guerre de Noël) a lieu en :', options: ['1984', '1985', '1986', '1987'], correct: 1 },
    { texte: 'Le conflit de la bande d\'Agacher est réglé par un arrêt de la Cour internationale de Justice le :', options: ['22 décembre 1985', '22 décembre 1986', '22 décembre 1987', '22 décembre 1988'], correct: 1 },
    { texte: 'Thomas Sankara est assassiné lors d\'un coup d\'État le :', options: ['15 octobre 1987', '15 octobre 1988', '15 octobre 1989', '15 octobre 1990'], correct: 0 },
    { texte: 'Après l\'assassinat de Thomas Sankara, qui devient chef de l\'État ?', options: ['Jean-Baptiste Ouédraogo', 'Blaise Compaoré', 'Henri Zongo', 'Jean-Baptiste Boukary Lingani'], correct: 1 },
    { texte: 'Blaise Compaoré dissout le CNR et crée :', options: ['Le Front populaire (FP)', 'Le MPSR', 'Le RSP', 'Le CNRST'], correct: 0 },
    { texte: 'La constitution de la Quatrième République est adoptée par référendum le :', options: ['1er décembre 1990', '1er décembre 1991', '1er décembre 1992', '1er décembre 1993'], correct: 1 },
    { texte: 'Lors de l\'élection présidentielle du 1er décembre 1991, le taux de participation était de :', options: ['15 %', '20 %', '25 %', '30 %'], correct: 2 },
    { texte: 'Les six engagements nationaux de Blaise Compaoré sont lancés le 2 juin 1992 au stade :', options: ['Stade du 4-Août', 'Stade Municipal', 'Stade Wobi', 'Stade de la SONABEL'], correct: 0 },
    { texte: 'La condamnation de Saye Zerbo est annulée par la Cour suprême le :', options: ['18 février 1995', '18 février 1996', '18 février 1997', '18 février 1998'], correct: 2 },
    { texte: 'L\'assassinat du journaliste Norbert Zongo a lieu le :', options: ['13 décembre 1996', '13 décembre 1997', '13 décembre 1998', '13 décembre 1999'], correct: 2 },
    { texte: 'Norbert Zongo est assassiné à :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Sapouy', 'Koudougou'], correct: 2 },
    { texte: 'Le procès de Norbert Zongo se conclut par un non-lieu le :', options: ['19 juillet 2004', '19 juillet 2005', '19 juillet 2006', '19 juillet 2007'], correct: 2 },
    { texte: 'En février 2011, suite à la mort d\'un élève battu par des policiers, une révolte éclate à :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Koudougou', 'Tenkodogo'], correct: 2 },
    { texte: 'Le 7 mars 2011, des commissariats sont incendiés dans plusieurs villes. Laquelle de ces villes n\'a pas été touchée ?', options: ['Koupèla', 'Yako', 'Dori', 'Pouytenga'], correct: 2 },
    { texte: 'Le championnat de football national est suspendu le 19 mars 2011 suite à :', options: ['Une grève des joueurs', 'Des émeutes', 'Un manque de financement', 'La Covid-19'], correct: 1 },
    { texte: 'Le projet de loi portant révision de l\'article 37 de la Constitution est examiné lors d\'un Conseil des ministres extraordinaire le :', options: ['21 octobre 2013', '21 octobre 2014', '21 octobre 2015', '21 octobre 2016'], correct: 1 },
    { texte: 'Blaise Compaoré quitte le pouvoir suite à un soulèvement populaire le :', options: ['30 octobre 2014', '31 octobre 2014', '1er novembre 2014', '17 novembre 2014'], correct: 0 },
    { texte: 'Après le départ de Blaise Compaoré, qui est désigné comme chef de l\'État le 1er novembre 2014 ?', options: ['Michel Kafando', 'Honoré Traoré', 'Yacouba Isaac Zida', 'Roch Kaboré'], correct: 2 },
    { texte: 'Le diplomate Michel Kafando est nommé président de la Transition le :', options: ['1er novembre 2014', '17 novembre 2014', '17 septembre 2015', '30 novembre 2015'], correct: 1 },
    { texte: 'Le coup d\'État du 17 septembre 2015 est mené par des militaires du :', options: ['CMRPN', 'RSP (Régiment de Sécurité présidentiel)', 'CNR', 'MPSR'], correct: 1 },
    { texte: 'Qui se proclame chef d\'État lors du putsch du 17 septembre 2015 ?', options: ['Gilbert Diendéré', 'Honoré Traoré', 'Yacouba Isaac Zida', 'Chérif Sy'], correct: 0 },
    { texte: 'Le président Kafando annonce la fin du coup d\'État et reprend son poste le :', options: ['22 septembre 2015', '23 septembre 2015', '30 novembre 2015', '29 décembre 2015'], correct: 1 },
    { texte: 'Roch Marc Christian Kaboré est élu président de la République au premier tour avec 53,49% des voix le :', options: ['30 novembre 2015', '30 novembre 2016', '30 novembre 2017', '30 novembre 2018'], correct: 0 },
    { texte: 'Roch Marc Christian Kaboré est réélu président de la République en :', options: ['2020', '2021', '2022', '2023'], correct: 2 },
    { texte: 'Le premier grand attentat terroriste à Ouagadougou (attaque du Cappuccino et de l\'hôtel Splendid) a lieu le :', options: ['15 janvier 2015', '15 janvier 2016', '15 janvier 2017', '15 janvier 2018'], correct: 1 },
    { texte: 'La loi instituant la réglementation de l\'état de siège et l\'état d\'urgence au Burkina Faso est adoptée le :', options: ['14 août 2018', '14 août 2019', '14 août 2020', '14 août 2021'], correct: 1 },
    { texte: 'La loi portant protection des personnes à l\'égard du traitement des données à caractère personnel est adoptée le :', options: ['30 mars 2020', '30 mars 2021', '30 mars 2022', '30 mars 2023'], correct: 1 },
    { texte: 'Roch Marc Christian Kaboré est renversé par un coup d\'État le :', options: ['23 janvier 2021', '23 janvier 2022', '23 janvier 2023', '23 janvier 2024'], correct: 1 },
    { texte: 'Après le renversement de Roch Kaboré, qui devient chef de l\'État ?', options: ['Ibrahim Traoré', 'Paul-Henri Sandaogo Damiba', 'Gilbert Diendéré', 'Chérif Sy'], correct: 1 },
    { texte: 'Le capitaine Ibrahim Traoré renverse le président Damiba le :', options: ['30 septembre 2022', '30 septembre 2023', '30 septembre 2024', '30 septembre 2025'], correct: 0 },
    { texte: 'Le capitaine Ibrahim Traoré était le chef de l\'unité des forces spéciales "Cobra" basée à :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Kaya', 'Dori'], correct: 2 },
    { texte: 'Les Assises nationales désignent Ibrahim Traoré chef de l\'État le :', options: ['2 octobre 2022', '14 octobre 2022', '21 octobre 2022', '30 septembre 2022'], correct: 1 },
    { texte: 'Radio France Internationale (RFI) est suspendue au Burkina Faso le :', options: ['3 décembre 2021', '3 décembre 2022', '3 décembre 2023', '3 décembre 2024'], correct: 1 },
    { texte: 'L\'accord de coopération militaire de 1961 avec la France est dénoncé par le Burkina Faso le :', options: ['28 février 2022', '28 février 2023', '28 février 2024', '28 février 2025'], correct: 1 }
];

// =======================
// ATTAQUES TERRORISTES (N°151 à 180)
// =======================
thematiques.attaques_terroristes.questions = [
    { texte: 'La première attaque djihadiste contre un poste des services de sécurité burkinabés a lieu le 25 août 2015 à :', options: ['Markoye', 'Oursi', 'Samorogouan', 'Nassoumbou'], correct: 1 },
    { texte: 'Le premier attentat majeur à Ouagadougou (attaque du Cappuccino et de l\'hôtel Splendid) a lieu le :', options: ['15 janvier 2015', '15 janvier 2016', '15 janvier 2017', '15 janvier 2018'], correct: 1 },
    { texte: 'L\'attentat du 15 janvier 2016 à Ouagadougou fait un bilan de :', options: ['20 morts', '25 morts', '30 morts', '35 morts'], correct: 2 },
    { texte: 'La première revendication de l\'État islamique dans la région (EIGS) concerne l\'attaque d\'un poste de douane à :', options: ['Oursi', 'Intangom', 'Markoye', 'Nassoumbou'], correct: 2 },
    { texte: 'L\'attaque de Nassoumbou (16 décembre 2016) marque le début de l\'activité meurtrière de quel groupe ?', options: ['EIGS', 'GSIM', 'Ansarul Islam', 'Boko Haram'], correct: 2 },
    { texte: 'Le caporal français Julien Barbé est tué lors de l\'opération "Panga" le :', options: ['6 avril 2016', '6 avril 2017', '6 avril 2018', '6 avril 2019'], correct: 1 },
    { texte: 'L\'attaque simultanée contre l\'ambassade de France et l\'état-major général des armées burkinabè a lieu le 2 mars 2018 à :', options: ['Bobo-Dioulasso', 'Ouagadougou', 'Kaya', 'Dori'], correct: 1 },
    { texte: 'Le massacre de Yirgou (1er janvier 2019) marque le début des :', options: ['Attaques contre l\'armée', 'Violences communautaires', 'Attaques contre les mines', 'Prise d\'otages'], correct: 1 },
    { texte: 'La première attaque majeure contre une église au Burkina Faso a lieu le 12 mai 2019 à :', options: ['Dablo', 'Pansi', 'Yirgou', 'Salmossi'], correct: 0 },
    { texte: 'L\'attaque de Koutougou (19 août 2019) est la plus meurtrière contre l\'armée depuis 2015. Combien de soldats sont tués ?', options: ['Au moins 14', 'Au moins 24', 'Au moins 34', 'Au moins 44'], correct: 1 },
    { texte: 'Le 6 novembre 2019, un convoi de la société minière SEMAFO tombe dans une embuscade à Boungou. Bilan :', options: ['29 civils tués', '39 civils tués', '49 civils tués', '59 civils tués'], correct: 1 },
    { texte: 'L\'attaque d\'Arbinda (24 décembre 2019) est menée par combien de djihadistes de l\'État islamique ?', options: ['50 à 100', '100 à 200', '200 à 300', '300 à 400'], correct: 2 },
    { texte: 'Le massacre de Solhan (4-5 juin 2021) fait au moins combien de victimes civiles ?', options: ['80', '120', '160', '200'], correct: 2 },
    { texte: 'L\'attaque du camp de gendarmerie d\'Inata (14 novembre 2021) fait :', options: ['33 morts', '43 morts', '53 morts', '63 morts'], correct: 2 },
    { texte: 'L\'attaque de Gaskindé (26 septembre 2022) a précipité :', options: ['La démission de Roch Kaboré', 'Le coup d\'État du 30 septembre 2022', 'La création des VDP', 'L\'état d\'urgence'], correct: 1 },
    { texte: 'L\'attaque de Tin-Ediar (17 février 2023) fait combien de soldats tués ?', options: ['31', '41', '51', '61'], correct: 2 },
    { texte: 'En représailles à l\'attaque d\'Aoréma (15 avril 2023), des militaires massacrent au moins 136 civils à :', options: ['Karma', 'Komsilga', 'Nodin', 'Soroe'], correct: 0 },
    { texte: 'L\'attaque de Mansila (11 juin 2024) fait plus de combien de militaires tués ?', options: ['50', '75', '100', '125'], correct: 2 },
    { texte: 'L\'attaque de Nassougou (8 août 2024) fait entre :', options: ['50 et 100 soldats tués', '100 et 150 soldats tués', '150 et 200 soldats tués', '200 et 250 soldats tués'], correct: 2 },
    { texte: 'Le massacre de Barsalogho (24 août 2024) est l\'attaque la plus meurtrière de l\'histoire du Burkina Faso avec :', options: ['100 à 200 morts', '200 à 300 morts', '300 à 400 morts', '400 à 500 morts'], correct: 2 },
    { texte: 'Le massacre de Solhan (juin 2021) a eu lieu dans quelle région ?', options: ['Sahel', 'Est', 'Nord', 'Centre-Nord'], correct: 0 },
    { texte: 'Le groupe djihadiste GSIM (Groupe de soutien à l\'islam et aux musulmans) est lié à :', options: ['Boko Haram', 'Al-Qaïda', 'État islamique', 'Ansarul Islam'], correct: 1 },
    { texte: 'Le groupe EIGS (État islamique dans le Grand Sahara) est une branche de :', options: ['Al-Qaïda', 'Boko Haram', 'État islamique', 'Ansar Dine'], correct: 2 },
    { texte: 'Les VDP (Volontaires pour la Défense de la Patrie) sont :', options: ['Des soldats d\'élite', 'Des suppléants militaires civils', 'Des mercenaires étrangers', 'Des policiers'], correct: 1 },
    { texte: 'Au 31 mars 2023, combien de personnes déplacées internes (PDI) compte le Burkina Faso ?', options: ['1 062 534', '1 562 534', '2 062 534', '2 562 534'], correct: 2 },
    { texte: 'Selon Acled, entre 2015 et septembre 2024, le conflit terroriste a fait plus de :', options: ['16 000 morts', '21 000 morts', '26 000 morts', '31 000 morts'], correct: 2 },
    { texte: 'Au 31 octobre 2025, combien de localités abandonnées ont été sécurisées ?', options: ['546', '646', '746', '846'], correct: 3 },
    { texte: 'Le massacre de Bibgou et Soualimou (29 février 2024) fait 150 victimes à :', options: ['Gayéri', 'Partiaga', 'Mansila', 'Napadé'], correct: 0 },
    { texte: 'La ville de Diapaga est prise par les djihadistes le 13 mai 2025. Que libèrent-ils ?', options: ['Les dépôts d\'armes', 'Les détenus de la prison', 'Les banques', 'Les bâtiments administratifs'], correct: 1 },
    { texte: 'Le massacre de Barsalogho (août 2024) a été perpétré par :', options: ['L\'EIGS', 'Ansarul Islam', 'Le GSIM', 'Boko Haram'], correct: 2 }
];

// =======================
// ACTUALITÉS RÉCENTES (N°181 à 210)
// =======================
thematiques.actualites.questions = [
    { texte: 'La dénonciation de l\'accord de défense de 1961 liant le Burkina à la France a lieu le :', options: ['18 janvier 2022', '18 janvier 2023', '18 janvier 2024', '18 janvier 2025'], correct: 1 },
    { texte: 'L\'Agence pour la Promotion de l\'Entrepreneuriat Communautaire (APEC) est créée par décret le :', options: ['8 février 2022', '8 février 2023', '8 février 2024', '8 février 2025'], correct: 1 },
    { texte: 'Le départ du dernier contingent français du Burkina Faso met fin à près de combien d\'années de coopération militaire exclusive avec la France ?', options: ['40 ans', '50 ans', '60 ans', '70 ans'], correct: 2 },
    { texte: 'La chaîne de télévision France 24 est suspendue au Burkina Faso le :', options: ['24 mars 2023', '25 mars 2023', '26 mars 2023', '27 mars 2023'], correct: 3 },
    { texte: 'La "Charte de Liptako-Gourma" instituant l\'Alliance des États du Sahel (AES) est signée le :', options: ['16 septembre 2022', '16 septembre 2023', '16 septembre 2024', '16 septembre 2025'], correct: 1 },
    { texte: 'La SONASP (Société nationale des substances précieuses) est créée par transformation de :', options: ['La SOFITEX', 'La SONABHY', 'L\'ANEEMAS', 'La BRAKINA'], correct: 2 },
    { texte: 'La SONASP est chargée de :', options: ['La production d\'électricité', 'La commercialisation et le raffinage de l\'or', 'La gestion des hydrocarbures', 'La transformation du coton'], correct: 1 },
    { texte: 'Le Burkina Faso et le Niger se retirent conjointement du G5 Sahel le :', options: ['2 décembre 2022', '2 décembre 2023', '2 décembre 2024', '2 décembre 2025'], correct: 1 },
    { texte: 'Le Fonds Kuna-Wili, créé le 22 décembre 2023, est un fonds :', options: ['De défense', 'De finances solidaires pour l\'entrepreneuriat local', 'D\'aide humanitaire', 'De recherche scientifique'], correct: 1 },
    { texte: 'Le Burkina Faso, le Mali et le Niger annoncent conjointement leur retrait "immédiat" de la CEDEAO le :', options: ['28 janvier 2023', '28 janvier 2024', '28 janvier 2025', '28 janvier 2026'], correct: 1 },
    { texte: 'L\'usine textile TEXFORCES-BF, destinée à habiller les FDS et les VDP, est construite à :', options: ['Ouagadougou', 'Koudougou', 'Bobo-Dioulasso', 'Banfora'], correct: 2 },
    { texte: 'La durée de la transition est fixée à 5 ans à compter du 2 juillet 2024 par une modification de :', options: ['La Constitution', 'La Charte de la transition', 'Le Code minier', 'Le Code général des collectivités territoriales'], correct: 1 },
    { texte: 'Le premier sommet des chefs d\'État de l\'AES a lieu le 6 juillet 2024 à :', options: ['Ouagadougou', 'Bamako', 'Niamey', 'Dori'], correct: 2 },
    { texte: 'Lors du premier sommet de l\'AES, le traité instituant la Confédération des États du Sahel est adopté. Quel pays n\'était pas membre fondateur de l\'AES ?', options: ['Burkina Faso', 'Mali', 'Niger', 'Tchad'], correct: 3 },
    { texte: 'Le nouveau Code minier du 18 juillet 2024 porte la participation gratuite de l\'État de 10 % à :', options: ['12 %', '13 %', '14 %', '15 %'], correct: 3 },
    { texte: 'La Société Faso tomate (SOFATO S.A) est inaugurée à :', options: ['Bobo-Dioulasso', 'Yako', 'Koudougou', 'Ouagadougou'], correct: 1 },
    { texte: 'Faso-Réassurance est créée le 25 septembre 2024 pour renforcer le secteur :', options: ['Minier', 'Textile', 'De l\'assurance', 'Bancaire'], correct: 2 },
    { texte: 'La Banque Postale du Burkina Faso (BPBF) est officiellement ouverte le :', options: ['7 octobre 2023', '7 octobre 2024', '7 octobre 2025', '7 octobre 2026'], correct: 1 },
    { texte: 'Le retrait du Burkina Faso, du Mali et du Niger de la CEDEAO devient effectif le :', options: ['28 janvier 2024', '29 janvier 2025', '30 janvier 2025', '31 janvier 2025'], correct: 1 },
    { texte: 'L\'usine Moulin Double Star (M2S), spécialisée dans la production de farine de blé, est inaugurée à :', options: ['Gampéla (Saaba)', 'Pabré', 'Laongo (Ziniaré)', 'Komsilga'], correct: 0 },
    { texte: 'Le Complexe industriel de détergent Fassi (CIDF) est inauguré à :', options: ['Gampéla', 'Laongo', 'Pabré', 'Komsilga'], correct: 2 },
    { texte: 'Les pays membres de la Confédération des États du Sahel annoncent leur retrait de l\'OIF le :', options: ['18 mars 2024', '18 mars 2025', '18 mars 2026', '18 mars 2027'], correct: 1 },
    { texte: 'La Société industrielle sino-burkinabè de ciment (CISINOB SA) est inaugurée à :', options: ['Gampéla', 'Pabré', 'Laongo (Ziniaré)', 'Komsilga'], correct: 2 },
    { texte: 'La loi portant statut de l\'artiste au Burkina Faso est adoptée le :', options: ['27 mars 2024', '27 mars 2025', '27 mars 2026', '27 mars 2027'], correct: 1 },
    { texte: 'La société d\'État Faso Kosam, inaugurée le 27 mars 2025, est spécialisée dans :', options: ['La transformation du coton', 'La transformation et la commercialisation du lait local', 'La production de ciment', 'La fabrication de détergents'], correct: 1 },
    { texte: 'La société Faso Guulgo, inaugurée le 6 mai 2025, fabrique :', options: ['Des textiles', 'Des aliments pour animaux d\'élevage', 'Des produits laitiers', 'Des matériaux de construction'], correct: 1 },
    { texte: 'Le nouveau découpage administratif du 2 juillet 2025 porte le nombre de régions de 13 à :', options: ['14', '15', '16', '17'], correct: 3 },
    { texte: 'Le nouveau découpage administratif du 2 juillet 2025 porte le nombre de provinces de 45 à :', options: ['46', '47', '48', '49'], correct: 1 },
    { texte: 'La Société nouvelle Brasserie du Faso (SN-BRAFASO) est inaugurée à Komsilga le 25 novembre 2025 après une fermeture de :', options: ['15 ans', '16 ans', '17 ans', '18 ans'], correct: 2 },
    { texte: 'La Charte de la Révolution progressiste populaire (RPP) est adoptée le 27 mars 2026. Que devient l\'ALT ?', options: ['Assemblée nationale', 'Assemblée législative du peuple (ALP)', 'Parlement de transition', 'Conseil national de la Révolution'], correct: 1 }
];

// =======================
// DIRIGEANTS BURKINABÈ (N°211 à 252)
// =======================
thematiques.dirigeants.questions = [
    { texte: 'Qui est le premier président de la Haute-Volta après l\'indépendance ?', options: ['Sangoulé Lamizana', 'Maurice Yaméogo', 'Saye Zerbo', 'Jean-Baptiste Ouédraogo'], correct: 1 },
    { texte: 'Maurice Yaméogo est président du :', options: ['5 août 1960 au 3 janvier 1966', '3 janvier 1966 au 25 novembre 1980', '25 novembre 1980 au 7 novembre 1982', '7 novembre 1982 au 4 août 1983'], correct: 0 },
    { texte: 'Sangoulé Lamizana accède au pouvoir par :', options: ['Élection', 'Coup d\'État', 'Transition civile', 'Héritage dynastique'], correct: 1 },
    { texte: 'La durée du mandat de Sangoulé Lamizana est de :', options: ['6 ans et 23 jours', '14 ans, 10 mois et 22 jours', '27 ans et 16 jours', '4 ans, 2 mois et 11 jours'], correct: 1 },
    { texte: 'Saye Zerbo est renversé le 7 novembre 1982 par :', options: ['Blaise Compaoré', 'Jean-Baptiste Ouédraogo', 'Thomas Sankara', 'Sangoulé Lamizana'], correct: 1 },
    { texte: 'Jean-Baptiste Ouédraogo est président pendant :', options: ['1 an, 11 mois et 13 jours', '8 mois et 27 jours', '4 ans, 2 mois et 11 jours', '27 ans et 16 jours'], correct: 1 },
    { texte: 'Thomas Sankara devient président le :', options: ['4 août 1982', '4 août 1983', '4 août 1984', '4 août 1985'], correct: 1 },
    { texte: 'Le nom "Burkina Faso" est adopté sous la présidence de :', options: ['Sangoulé Lamizana', 'Saye Zerbo', 'Thomas Sankara', 'Blaise Compaoré'], correct: 2 },
    { texte: 'Blaise Compaoré reste au pouvoir pendant :', options: ['14 ans', '20 ans', '27 ans et 16 jours', '6 ans'], correct: 2 },
    { texte: 'Blaise Compaoré quitte le pouvoir suite à :', options: ['Un coup d\'État militaire', 'Un soulèvement populaire', 'Une démission volontaire', 'Une élection perdue'], correct: 1 },
    { texte: 'Isaac Zida est chef de l\'État pendant :', options: ['20 jours', '9 mois et 27 jours', '8 mois et 6 jours', '3 ans'], correct: 0 },
    { texte: 'Michel Kafando est président de la Transition du 21 novembre 2014 au 17 septembre 2015. Quel événement interrompt son mandat ?', options: ['Un soulèvement populaire', 'Un coup d\'État (putsch du RSP)', 'Une démission', 'Une élection anticipée'], correct: 1 },
    { texte: 'Roch Marc Christian Kaboré est élu président en 2015 avec quel pourcentage des voix au premier tour ?', options: ['48,49 %', '51,49 %', '53,49 %', '55,49 %'], correct: 2 },
    { texte: 'Paul-Henri Sandaogo Damiba est renversé par Ibrahim Traoré le :', options: ['24 janvier 2022', '30 septembre 2022', '21 octobre 2022', '30 septembre 2023'], correct: 1 },
    { texte: 'Le président actuel Ibrahim Traoré est né en :', options: ['1985', '1986', '1987', '1988'], correct: 3 },
    { texte: 'Qui est le premier Premier ministre de l\'histoire de la Haute-Volta (1971-1974) ?', options: ['Joseph Conombo', 'Gérard Ouédraogo', 'Thomas Sankara', 'Roch Marc Christian Kaboré'], correct: 1 },
    { texte: 'Sangoulé Lamizana assure lui-même la fonction de Premier ministre entre :', options: ['1971-1974', '1974-1978', '1978-1980', '1980-1982'], correct: 1 },
    { texte: 'Thomas Sankara est Premier ministre de Jean-Baptiste Ouédraogo du 10 janvier 1983 au 17 mai 1983, soit une durée de :', options: ['4 mois et 7 jours', '6 mois et 7 jours', '8 mois et 7 jours', '10 mois et 7 jours'], correct: 0 },
    { texte: 'Quel Premier ministre a effectué le plus long mandat (6 ans, 7 mois et 30 jours) ?', options: ['Youssouf Ouédraogo', 'Roch Marc Christian Kaboré', 'Paramanga Ernest Yonli', 'Tertius Zongo'], correct: 2 },
    { texte: 'Lequel de ces Premiers ministres est devenu président de la République par la suite ?', options: ['Kadré Désiré Ouédraogo', 'Roch Marc Christian Kaboré', 'Christophe Dabiré', 'Lassina Zerbo'], correct: 1 },
    { texte: 'Le poste de Premier ministre est aboli entre le 4 août 1983 et le 16 juin 1992. Cela correspond aux présidences de :', options: ['Saye Zerbo et Jean-Baptiste Ouédraogo', 'Thomas Sankara et Blaise Compaoré', 'Blaise Compaoré seul', 'Sangoulé Lamizana'], correct: 1 },
    { texte: 'Isaac Zida est Premier ministre de Michel Kafando entre :', options: ['19 novembre 2014 et 6 janvier 2016', '6 janvier 2016 et 19 janvier 2019', '21 janvier 2019 et 8 décembre 2021', '10 décembre 2021 et 24 janvier 2022'], correct: 0 },
    { texte: 'Apollinaire Joachim Kyélem de Tambèla est Premier ministre de :', options: ['Paul-Henri Sandaogo Damiba', 'Roch Marc Christian Kaboré', 'Ibrahim Traoré', 'Michel Kafando'], correct: 2 },
    { texte: 'Le Premier ministre actuel, Jean-Emmanuel Ouédraogo, est nommé le :', options: ['3 novembre 2024', '3 novembre 2025', '3 novembre 2026', '3 décembre 2025'], correct: 1 },
    { texte: 'Qui est le premier président de l\'Assemblée nationale de la Haute-Volta (1960-1965) ?', options: ['Joseph Ouédraogo', 'Gérard Kango Ouédraogo', 'Bégnon Damien Koné', 'Bognessan Arsène Yé'], correct: 2 },
    { texte: 'Pendant combien d\'années le Burkina Faso n\'a-t-il eu aucun Parlement (suspension) ?', options: ['10 ans', '12 ans', '14 ans', '16 ans'], correct: 1 },
    { texte: 'Qui a présidé l\'Assemblée nationale de 2002 à 2007 avant de devenir président de la République ?', options: ['Michel Kafando', 'Yacouba Isaac Zida', 'Roch Marc Christian Kaboré', 'Alassane Bala Sakandé'], correct: 2 },
    { texte: 'Alassane Bala Sakandé a présidé l\'Assemblée nationale pendant :', options: ['5 ans', '6 ans', '7 ans', '8 ans'], correct: 2 },
    { texte: 'L\'Assemblée législative de transition (ALT) créée après le coup d\'État de septembre 2022 compte combien de députés ?', options: ['127', '91', '71', '51'], correct: 2 },
    { texte: 'Le président actuel de l\'Assemblée législative de transition est :', options: ['Aboubacar Toguyeni', 'Ousmane Bougouma', 'Alassane Bala Sakandé', 'Bénéwendé Stanislas Sankara'], correct: 1 },
    { texte: 'Le gouvernement actuel compte combien de membres au total ?', options: ['21', '22', '23', '24'], correct: 2 },
    { texte: 'Combien de ministres d\'État compte le gouvernement actuel ?', options: ['1', '2', '3', '4'], correct: 2 },
    { texte: 'Le ministère de la Défense est actuellement dénommé :', options: ['Ministère de la Défense nationale', 'Ministère de la Guerre et de la Défense patriotique', 'Ministère des Armées', 'Ministère de la Sécurité intérieure'], correct: 1 },
    { texte: 'L\'ancien ministère de l\'Urbanisme et de l\'Habitat est devenu :', options: ['Ministère de la Construction de la Patrie', 'Ministère des Infrastructures', 'Ministère du Logement social', 'Ministère de l\'Aménagement du territoire'], correct: 0 },
    { texte: 'L\'ancien ministère de la Fonction publique, du Travail et de la Protection sociale est devenu :', options: ['Ministère des Ressources humaines', 'Ministère du Travail et de l\'Emploi', 'Ministère des Serviteurs du peuple', 'Ministère de la Protection sociale'], correct: 2 },
    { texte: 'Combien de femmes composent le gouvernement actuel ?', options: ['3', '4', '5', '6'], correct: 2 },
    { texte: 'Le ministre de la Justice et Garde des Sceaux actuel est :', options: ['Mathias Traoré', 'Edasso Rodrigue Bayala', 'Mahamadou Sana', 'Célestin Simporé'], correct: 1 },
    { texte: 'Le ministre de l\'Économie et des Finances actuel est :', options: ['Aboubacar Nacanabo', 'Fatoumata Bako Traoré', 'Serge Gnaniodem Poda', 'Jean-Emmanuel Ouédraogo'], correct: 0 },
    { texte: 'Le ministre de la Sécurité actuel est :', options: ['Célestin Simporé', 'Émile Zerbo', 'Mahamadou Sana', 'Mathias Traoré'], correct: 2 },
    { texte: 'Le Premier ministre Jean-Emmanuel Ouédraogo a succédé à :', options: ['Paul Kaba Thiéba', 'Christophe Dabiré', 'Lassina Zerbo', 'Apollinaire Joachim Kyélem de Tambèla'], correct: 3 },
    { texte: 'Le ministère de la Communication, de la Culture, des Arts et du Tourisme est également le porte-parole du gouvernement. Qui l\'occupe ?', options: ['Pingdwendé Gilbert Ouedraogo', 'Karamoko Jean-Marie Traoré', 'Mikaïlou Sidibé', 'Jacques Sosthène Dingara'], correct: 0 },
    { texte: 'Le ministre délégué chargé du Budget auprès du ministre de l\'Économie et des Finances est :', options: ['Amadou Dicko', 'Fatoumata Bako Traoré', 'Bebgnasgnan Stella Eldine', 'Annick Lydie Zingué Ouattara'], correct: 1 }
];

// =======================
// GÉOGRAPHIE ET DÉMOGRAPHIE (N°253 à 312)
// =======================
thematiques.geographie_demographie.questions = [
    { texte: 'Le Burkina Faso est un pays :', options: ['Avec accès à la mer', 'Sans accès à la mer', 'Enclavé', 'Côtier'], correct: 1 },
    { texte: 'Quels sont les pays frontaliers du Burkina Faso ?', options: ['Mali', 'Niger', 'Algérie', 'Côte d\'Ivoire'], correct: 0, multiple: true },
    { texte: 'Le Burkina Faso partage une frontière avec combien de pays ?', options: ['4', '5', '6', '7'], correct: 2 },
    { texte: 'La frontière entre le Burkina Faso et le Mali mesure :', options: ['584 km', '628 km', '1000 km', '549 km'], correct: 2 },
    { texte: 'La frontière entre le Burkina Faso et le Niger mesure :', options: ['1000 km', '628 km', '584 km', '549 km'], correct: 1 },
    { texte: 'La frontière entre le Burkina Faso et le Ghana mesure :', options: ['628 km', '584 km', '549 km', '306 km'], correct: 2 },
    { texte: 'La frontière entre le Burkina Faso et la Côte d\'Ivoire mesure :', options: ['1000 km', '628 km', '584 km', '549 km'], correct: 2 },
    { texte: 'La superficie du Burkina Faso est de :', options: ['274 200 km²', '274 200 km²', '274 200 km²', '274 200 km²'], correct: 0 },
    { texte: 'La population du Burkina Faso selon les données du document est d\'environ :', options: ['15 millions', '18 millions', '20,5 millions', '25 millions'], correct: 2 },
    { texte: 'Le taux de population masculine au Burkina Faso est de :', options: ['48,3 %', '49,3 %', '50,3 %', '51,3 %'], correct: 0 },
    { texte: 'Le taux de population féminine au Burkina Faso est de :', options: ['48,3 %', '49,3 %', '50,7 %', '51,7 %'], correct: 3 },
    { texte: 'Le taux d\'accroissement démographique du Burkina Faso est de :', options: ['1,94 %', '2,94 %', '3,94 %', '4,94 %'], correct: 1 },
    { texte: 'La densité de la population burkinabè est de :', options: ['55,1 hab/km²', '65,1 hab/km²', '75,1 hab/km²', '85,1 hab/km²'], correct: 2 },
    { texte: 'Le taux d\'urbanisation au Burkina Faso est de :', options: ['16,1 %', '21,1 %', '26,1 %', '31,1 %'], correct: 2 },
    { texte: 'L\'espérance de vie au Burkina Faso est de :', options: ['59,9 ans', '60,9 ans', '61,9 ans', '62,9 ans'], correct: 2 },
    { texte: 'Le taux d\'alphabétisation au Burkina Faso est de :', options: ['19,7 %', '24,7 %', '29,7 %', '34,7 %'], correct: 2 },
    { texte: 'La langue la plus courante au Burkina Faso est :', options: ['Dioula', 'Fulfuldé', 'Mooré', 'Gourmantché'], correct: 2 },
    { texte: 'Quelles sont les principales religions pratiquées au Burkina Faso ?', options: ['Islam', 'Catholicisme', 'Animisme', 'Hindouisme'], correct: 0, multiple: true },
    { texte: 'Le pourcentage de musulmans au Burkina Faso est de :', options: ['53,8 %', '58,8 %', '63,8 %', '68,8 %'], correct: 2 },
    { texte: 'Le pourcentage de catholiques au Burkina Faso est de :', options: ['15,1 %', '20,1 %', '25,1 %', '30,1 %'], correct: 1 },
    { texte: 'La région de Bankui avait pour ancienne dénomination :', options: ['Hauts-Bassins', 'Boucle du Mouhoun', 'Centre-Ouest', 'Sahel'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Bankui est :', options: ['Boromo', 'Solenzo', 'Dédougou', 'Ouarkoye'], correct: 2 },
    { texte: 'La province du Balé a pour chef-lieu :', options: ['Boromo', 'Solenzo', 'Dédougou', 'Pa'], correct: 0 },
    { texte: 'La région de Djôrô avait pour ancienne dénomination :', options: ['Sud-Ouest', 'Cascades', 'Hauts-Bassins', 'Centre-Ouest'], correct: 0 },
    { texte: 'Le chef-lieu de la région de Djôrô est :', options: ['Diébougou', 'Dano', 'Batié', 'Gaoua'], correct: 3 },
    { texte: 'La région de Goulmou est issue de la scission de quelle ancienne région ?', options: ['Sahel', 'Est', 'Boucle du Mouhoun', 'Nord'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Goulmou est :', options: ['Fada N\'Gourma', 'Diapaga', 'Bogandé', 'Pama'], correct: 0 },
    { texte: 'La région de Guiriko avait pour ancienne dénomination :', options: ['Sud-Ouest', 'Cascades', 'Hauts-Bassins', 'Boucle du Mouhoun'], correct: 2 },
    { texte: 'Le chef-lieu de la région de Guiriko est :', options: ['Orodara', 'Houndé', 'Bobo-Dioulasso', 'Banfora'], correct: 2 },
    { texte: 'La région de Kadiogo correspond à l\'ancienne région :', options: ['Centre-Nord', 'Centre', 'Centre-Ouest', 'Plateau-Central'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Kadiogo est :', options: ['Kaya', 'Koudougou', 'Ouagadougou', 'Ziniaré'], correct: 2 },
    { texte: 'La région de Kuilsé avait pour ancienne dénomination :', options: ['Centre', 'Centre-Nord', 'Centre-Ouest', 'Plateau-Central'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Kuilsé est :', options: ['Kongoussi', 'Boulsa', 'Kaya', 'Ziga'], correct: 2 },
    { texte: 'La région du Liptako est issue de la scission de :', options: ['L\'Est', 'La Boucle du Mouhoun', 'Le Sahel', 'Le Nord'], correct: 2 },
    { texte: 'Le chef-lieu de la région du Liptako est :', options: ['Djibo', 'Dori', 'Gorom-Gorom', 'Sebba'], correct: 1 },
    { texte: 'La région de Nando avait pour ancienne dénomination :', options: ['Centre', 'Centre-Nord', 'Centre-Ouest', 'Plateau-Central'], correct: 2 },
    { texte: 'Le chef-lieu de la région de Nando est :', options: ['Réo', 'Léo', 'Sapouy', 'Koudougou'], correct: 3 },
    { texte: 'La région de Nakambé avait pour ancienne dénomination :', options: ['Centre-Est', 'Centre-Sud', 'Centre-Ouest', 'Plateau-Central'], correct: 0 },
    { texte: 'Le chef-lieu de la région de Nakambé est :', options: ['Tenkodogo', 'Ouargaye', 'Koupéla', 'Garango'], correct: 0 },
    { texte: 'La région de Nazinon avait pour ancienne dénomination :', options: ['Centre-Est', 'Centre-Sud', 'Centre-Ouest', 'Plateau-Central'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Nazinon est :', options: ['Kombissiri', 'Pô', 'Manga', 'Nobéré'], correct: 2 },
    { texte: 'La région de Oubri avait pour ancienne dénomination :', options: ['Centre', 'Centre-Nord', 'Centre-Ouest', 'Plateau-Central'], correct: 3 },
    { texte: 'Le chef-lieu de la région de Oubri est :', options: ['Zorgho', 'Boussé', 'Ziniaré', 'Absouya'], correct: 2 },
    { texte: 'La région de Sirba est une nouvelle région créée en 2025 issue de la scission de :', options: ['Sahel', 'Est', 'Boucle du Mouhoun', 'Nord'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Sirba est :', options: ['Bogandé', 'Gayéri', 'Fada N\'Gourma', 'Diapaga'], correct: 0 },
    { texte: 'La région du Soum est issue de la scission de :', options: ['L\'Est', 'La Boucle du Mouhoun', 'Le Sahel', 'Le Nord'], correct: 2 },
    { texte: 'Le chef-lieu de la région du Soum est :', options: ['Djibo', 'Arbinda', 'Dori', 'Koutougou'], correct: 0 },
    { texte: 'La région de Sourou est issue de la scission de :', options: ['L\'Est', 'La Boucle du Mouhoun', 'Le Sahel', 'Le Nord'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Sourou est :', options: ['Nouna', 'Toma', 'Tougan', 'Di'], correct: 2 },
    { texte: 'La région de Tannounyan avait pour ancienne dénomination :', options: ['Sud-Ouest', 'Cascades', 'Hauts-Bassins', 'Boucle du Mouhoun'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Tannounyan est :', options: ['Sindou', 'Banfora', 'Niangoloko', 'Tiéfora'], correct: 1 },
    { texte: 'La région de Tapoa est une nouvelle région créée en 2025 issue de la scission de :', options: ['Sahel', 'Est', 'Boucle du Mouhoun', 'Nord'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Tapoa est :', options: ['Kantchari', 'Diapaga', 'Partiaga', 'Tambaga'], correct: 1 },
    { texte: 'La région de Yaadga avait pour ancienne dénomination :', options: ['Centre-Nord', 'Nord', 'Sahel', 'Est'], correct: 1 },
    { texte: 'Le chef-lieu de la région de Yaadga est :', options: ['Yako', 'Titao', 'Ouahigouya', 'Gourcy'], correct: 2 },
    { texte: 'Quelles sont les nouvelles provinces créées lors de la réorganisation administrative du 2 juillet 2025 ?', options: ['Dyamongou', 'Karo-Peli', 'Komondjari', 'Loroum'], correct: 0, multiple: true },
    { texte: '"La cité de Sya" est le surnom de :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Banfora', 'Dédougou'], correct: 1 },
    { texte: '"La cité de Yendabri" est le surnom de :', options: ['Tenkodogo', 'Ouahigouya', 'Fada N\'Gourma', 'Kaya'], correct: 2 },
    { texte: '"La cité du cavalier rouge" est le surnom de :', options: ['Koudougou', 'Kaya', 'Ouagadougou', 'Ziniaré'], correct: 0 },
    { texte: '"La cité de Rialé" est le surnom de :', options: ['Tenkodogo', 'Ouagadougou', 'Ziniaré', 'Koudougou'], correct: 0 }
];

// =======================
// HYDROGRAPHIE ET RELIEF (N°313 à 372)
// =======================
thematiques.hydrographie_relief.questions = [
    { texte: 'Les principaux bassins hydrographiques du Burkina Faso sont :', options: ['Bassin de la Volta', 'Bassin du Niger', 'Bassin du Congo', 'Bassin de la Comoé'], correct: 0, multiple: true },
    { texte: 'Le bassin de la Volta s\'étend sur une superficie de :', options: ['128 000 km²', '148 000 km²', '178 000 km²', '198 000 km²'], correct: 2 },
    { texte: 'Les sous-bassins (fleuves) qui constituent le bassin de la Volta sont :', options: ['Mouhoun', 'Nakambé', 'Comoé', 'Nazinon'], correct: 0, multiple: true },
    { texte: 'Les eaux des fleuves du bassin de la Volta se rejoignent au Ghana pour former :', options: ['Le lac Victoria', 'Le lac Volta', 'Le lac Tanganyika', 'Le lac Bam'], correct: 1 },
    { texte: 'Le Mouhoun est également appelé :', options: ['Volta Blanche', 'Volta Noire', 'Volta Rouge', 'Volta Bleue'], correct: 1 },
    { texte: 'Le Mouhoun prend sa source sur :', options: ['Les versants Nord du massif gréseux de la falaise de Banfora', 'L\'Est de Ouahigouya', 'L\'Ouest de Ouagadougou', 'Le massif de l\'Actora'], correct: 0 },
    { texte: 'Le Mouhoun parcourt le Burkina sur une distance d\'environ :', options: ['660 km', '760 km', '860 km', '960 km'], correct: 2 },
    { texte: 'Le Mouhoun est le seul cours d\'eau permanent du Burkina Faso. Vrai ou faux ?', options: ['Vrai', 'Faux'], correct: 0 },
    { texte: 'Quels sont les affluents du Mouhoun ?', options: ['Sourou', 'Kou', 'Massili', 'Bougouriba'], correct: 0, multiple: true },
    { texte: 'Le Nakambé est également appelé :', options: ['Volta Noire', 'Volta Blanche', 'Volta Rouge', 'Volta Bleue'], correct: 1 },
    { texte: 'Le Nakambé prend sa source :', options: ['Sur les versants Nord de la falaise de Banfora', 'À l\'Est de Ouahigouya', 'À l\'Ouest de Ouagadougou', 'Dans le massif de l\'Actora'], correct: 1 },
    { texte: 'Le Nakambé ne coule que pendant :', options: ['La saison sèche', 'La saison pluvieuse', 'Toute l\'année', 'L\'harmattan'], correct: 1 },
    { texte: 'Quel est le principal affluent du Nakambé ?', options: ['Sourou', 'Kou', 'Massili', 'Sissili'], correct: 2 },
    { texte: 'Le Nazinon est également appelé :', options: ['Volta Noire', 'Volta Blanche', 'Volta Rouge', 'Volta Bleue'], correct: 2 },
    { texte: 'Le Nazinon prend sa source :', options: ['Sur les versants Nord de la falaise de Banfora', 'À l\'Est de Ouahigouya', 'À l\'Ouest de Ouagadougou', 'Dans le massif de l\'Actora'], correct: 2 },
    { texte: 'Le Nazinon traverse quel parc national avant de quitter le Burkina ?', options: ['Parc national du W', 'Parc national Kaboré Tambi', 'Parc national d\'Arly', 'Parc national des Deux Balés'], correct: 1 },
    { texte: 'Quel est le principal affluent du Nazinon ?', options: ['Massili', 'Kou', 'Sourou', 'Sissili'], correct: 3 },
    { texte: 'La Pendjari forme une frontière naturelle entre le Burkina Faso et :', options: ['Le Ghana', 'Le Togo', 'Le Bénin', 'Le Niger'], correct: 2 },
    { texte: 'La Pendjari prend sa source dans :', options: ['Le massif de l\'Actora (Bénin)', 'La falaise de Banfora', 'Le massif gréseux', 'Les pics de Sindou'], correct: 0 },
    { texte: 'La Comoé draine quelle partie du Burkina Faso ?', options: ['Le Nord', 'L\'Est', 'L\'extrémité Sud-Ouest', 'Le Centre'], correct: 2 },
    { texte: 'La Comoé prend sa source à Péni, dans le village de :', options: ['Takalédougou', 'Sindou', 'Banfora', 'Orodara'], correct: 0 },
    { texte: 'Quels sont les affluents de la Comoé ?', options: ['Léraba', 'Iringou', 'Sourou', 'Kou'], correct: 0, multiple: true },
    { texte: 'La Léraba constitue la frontière entre le Burkina Faso et :', options: ['Le Mali', 'Le Niger', 'Le Ghana', 'La Côte d\'Ivoire'], correct: 3 },
    { texte: 'Le bassin du Niger draine une superficie de :', options: ['52 000 km²', '62 000 km²', '72 000 km²', '82 000 km²'], correct: 2 },
    { texte: 'Les affluents burkinabè du Niger situés au Nord sont en grande partie :', options: ['Endoréiques', 'Exoréiques', 'Permanents', 'Navigables'], correct: 0 },
    { texte: 'Quels sont les affluents endoréiques du Niger au Burkina ?', options: ['Béli', 'Gorouol', 'Sirba', 'Faga'], correct: 0, multiple: true },
    { texte: 'Quels sont les affluents soudano-sahéliens du Niger au Burkina ?', options: ['Faga', 'Sirba', 'Béli', 'Goudébo'], correct: 0, multiple: true },
    { texte: 'Le plus grand réservoir naturel d\'eau de surface du Burkina Faso est :', options: ['Lac Dem', 'Lac Tingréla', 'Lac Bam', 'Lac Higa'], correct: 2 },
    { texte: 'Le lac Bam s\'étend entre :', options: ['Kaya et Boulsa', 'Kongoussi et Bourzanga', 'Dori et Gorom-Gorom', 'Banfora et Sindou'], correct: 1 },
    { texte: 'Le lac Dem est situé dans la province de :', options: ['Sammantenga (Sandbondtenga)', 'Yagha', 'Boulgou', 'Kouritenga'], correct: 0 },
    { texte: 'Le lac Tingréla est situé dans la région de :', options: ['Guiriko', 'Tannounyan (Cascades)', 'Liptako', 'Nando'], correct: 1 },
    { texte: 'Le lac Bagré est situé dans la province de :', options: ['Koulpélogo', 'Boulgou', 'Zoundwéogo', 'Nahouri'], correct: 1 },
    { texte: 'Le barrage de Kompienga a été construit entre :', options: ['1980-1983', '1983-1986', '1985-1988', '1988-1991'], correct: 2 },
    { texte: 'Le barrage de Kompienga permet d\'alimenter en électricité :', options: ['Bobo-Dioulasso', 'Ouagadougou', 'Koudougou', 'Banfora'], correct: 1 },
    { texte: 'Le barrage de Bagré a été créé en :', options: ['1990', '1991', '1992', '1993'], correct: 3 },
    { texte: 'Le barrage de Bagré est situé sur le fleuve :', options: ['Mouhoun', 'Nakambé', 'Nazinon', 'Comoé'], correct: 1 },
    { texte: 'Le barrage de Samendéni est inauguré le :', options: ['30 novembre 2017', '30 novembre 2018', '30 novembre 2019', '30 novembre 2020'], correct: 2 },
    { texte: 'Le barrage de Samendéni est construit sur le fleuve :', options: ['Nakambé', 'Nazinon', 'Mouhoun', 'Comoé'], correct: 2 },
    { texte: 'Le barrage de Ziga est la principale source d\'approvisionnement en eau potable de :', options: ['Bobo-Dioulasso', 'Ouagadougou', 'Koudougou', 'Banfora'], correct: 1 },
    { texte: 'Le barrage de Soum est situé dans la province de :', options: ['Boulkiemdé', 'Sanguié', 'Ziro', 'Sissili'], correct: 0 },
    { texte: 'Le plus haut sommet du Burkina Faso est :', options: ['Pic de Nahouri', 'Mont Ténakourou', 'Pics de Sindou', 'Mont Sanguié'], correct: 1 },
    { texte: 'Le mont Ténakourou culmine à une altitude de :', options: ['649 m', '699 m', '749 m', '799 m'], correct: 2 },
    { texte: 'Le mont Ténakourou est situé dans la province de :', options: ['Houet', 'Kénédougou', 'Tuy', 'Comoé'], correct: 1 },
    { texte: 'Le pic de Nahouri est situé à :', options: ['Pô', 'Manga', 'Kombissiri', 'Léo'], correct: 0 },
    { texte: 'La falaise de Gobnangou est située dans la région de :', options: ['Tapoa', 'Goulmou', 'Sirba', 'Yaadga'], correct: 0 },
    { texte: 'Le Burkina Faso est caractérisé par quel type de climat ?', options: ['Climat équatorial', 'Climat tropical', 'Climat désertique', 'Climat méditerranéen'], correct: 1 },
    { texte: 'Quelles sont les deux saisons au Burkina Faso ?', options: ['Saison pluvieuse', 'Saison hivernale (sèche)', 'Saison des nuages', 'Saison des vents'], correct: 0, multiple: true },
    { texte: 'La zone climatique sahélienne est située au :', options: ['Nord', 'Centre', 'Est', 'Sud'], correct: 0 },
    { texte: 'La zone soudanienne peut atteindre une pluviométrie de :', options: ['600 mm', '800 mm', '1000 mm', '1200 mm'], correct: 2 },
    { texte: 'La zone pré-guinéenne (sud soudanienne) peut atteindre une pluviométrie de :', options: ['600 mm', '800 mm', '1000 mm', '1200 mm'], correct: 3 },
    { texte: 'L\'harmattan est un vent :', options: ['Sec et chaud', 'Humide et frais', 'Qui souffle en saison pluvieuse', 'Qui souffle en saison sèche'], correct: 0, multiple: true },
    { texte: 'La mousson souffle en :', options: ['Saison sèche', 'Saison pluvieuse', 'Toute l\'année', 'Période d\'harmattan'], correct: 1 },
    { texte: 'La route nationale 1 relie :', options: ['Ouagadougou à Bobo-Dioulasso', 'Ouagadougou à Ouahigouya', 'Ouagadougou à Kaya', 'Ouagadougou à Pô'], correct: 0 },
    { texte: 'Quelle est la longueur de la route nationale 1 ?', options: ['240 km', '310 km', '360 km', '400 km'], correct: 2 },
    { texte: 'La route nationale 4 relie Ouagadougou à Fada N\'Gourma puis au Niger. Sa longueur est de :', options: ['360 km', '400 km', '420 km', '450 km'], correct: 1 },
    { texte: 'La route nationale 2 relie Ouagadougou à Ouahigouya puis au Mali. Sa longueur est de :', options: ['240 km', '310 km', '360 km', '400 km'], correct: 0 },
    { texte: 'La route nationale 23 relie Ouahigouya à Dori puis au Niger. Sa longueur est de :', options: ['310 km', '360 km', '400 km', '420 km'], correct: 1 },
    { texte: 'La route nationale 14 relie Koudougou à Djibasso puis au Mali. Sa longueur est de :', options: ['200 km', '250 km', '280 km', '300 km'], correct: 3 },
    { texte: 'La route nationale 10 relie :', options: ['Ouagadougou à Bobo-Dioulasso', 'Bobo-Dioulasso à Ouahigouya', 'Koudougou à Djibasso', 'Ouagadougou à Léo'], correct: 1 },
    { texte: 'La route nationale 24 relie Dori à Sebba. Sa longueur est de :', options: ['50 km', '70 km', '90 km', '110 km'], correct: 2 }
];

// =======================
// SITES TOURISTIQUES (N°373 à 417)
// =======================
thematiques.sites_touristiques.questions = [
    { texte: 'Le parc national du W est inscrit au patrimoine mondial de l\'UNESCO depuis :', options: ['1994', '1996', '1998', '2000'], correct: 1 },
    { texte: 'Le parc national du W fait partie du complexe transfrontalier :', options: ['W-Arly-Pendjari (WAP)', 'W-Kaboré Tambi', 'W-Deux Balés', 'W-Nazinga'], correct: 0 },
    { texte: 'Le parc national du W a été créé en :', options: ['1950', '1952', '1954', '1956'], correct: 2 },
    { texte: 'Quels sont les parcs nationaux qui font partie du complexe WAP ?', options: ['Parc national du W', 'Parc national d\'Arly', 'Parc national des Deux Balés', 'Parc national Kaboré Tambi'], correct: 0, multiple: true },
    { texte: 'Le parc national d\'Arly est situé dans la province de :', options: ['Gourma', 'Tapoa', 'Kompienga', 'Gnagna'], correct: 1 },
    { texte: 'Le parc national des Deux Balés a été créé en 1937 en tant que :', options: ['Parc national', 'Forêt classée', 'Réserve de biosphère', 'Site Ramsar'], correct: 1 },
    { texte: 'Le parc national Kaboré Tambi était anciennement appelé :', options: ['Parc national de Pô', 'Parc national de Léo', 'Parc national de Manga', 'Parc national de Kombissiri'], correct: 0 },
    { texte: 'Le parc Bangr Weogo est situé à :', options: ['Bobo-Dioulasso', 'Ouagadougou', 'Koudougou', 'Banfora'], correct: 1 },
    { texte: 'La réserve ou ranch de Nazinga a été fondée en 1979 par :', options: ['Les frères Robert et Clark Lungren', 'Les frères Voulet', 'Les frères Monteil', 'Les frères Binger'], correct: 0 },
    { texte: 'La plus grande réserve du Burkina Faso en termes de superficie est :', options: ['Réserve de Pama', 'Réserve de Nazinga', 'Réserve de faune de Singou', 'Parc national d\'Arly'], correct: 2 },
    { texte: 'La réserve de faune de Singou a été créée le :', options: ['3 août 1953', '3 août 1954', '3 août 1955', '3 août 1956'], correct: 2 },
    { texte: 'La réserve de Pama est une zone :', options: ['Cynégétique (chasse)', 'Touristique', 'Agricole', 'Urbaine'], correct: 0 },
    { texte: 'Les cascades de Karfiguéla sont situées :', options: ['Au nord-ouest de Banfora', 'À l\'est de Bobo-Dioulasso', 'Près de Gaoua', 'Dans la région du Sahel'], correct: 0 },
    { texte: 'Les chutes de Koudou culminent à une altitude de :', options: ['162 m', '212 m', '262 m', '312 m'], correct: 2 },
    { texte: 'Le lac aux hippopotames de Tingréla est classé site Ramsar depuis :', options: ['2007', '2008', '2009', '2010'], correct: 2 },
    { texte: 'La mare aux crocodiles sacrés de Sabou est située dans la province de :', options: ['Boulkiemdé', 'Sanguié', 'Ziro', 'Sissili'], correct: 0 },
    { texte: 'La mare aux crocodiles de Bazoulé est située :', options: ['À l\'est de Ouagadougou', 'À l\'ouest de Ouagadougou', 'Au nord de Ouagadougou', 'Au sud de Ouagadougou'], correct: 1 },
    { texte: 'Les pics de Sindou sont un site sacré pour quel peuple ?', options: ['Mossi', 'Peulh', 'Sénoufo', 'Gourmantché'], correct: 2 },
    { texte: 'Les dômes de Fabédougou sont des formations rocheuses vieilles d\'environ :', options: ['0,8 milliard d\'années', '1,3 milliard d\'années', '1,8 milliard d\'années', '2,3 milliards d\'années'], correct: 2 },
    { texte: 'Le point culminant du Burkina Faso (749 m) est :', options: ['Le pic de Nahouri', 'Le mont Ténakourou', 'Les pics de Sindou', 'Le mont Sanguié'], correct: 1 },
    { texte: 'Les falaises du Gobnangou sont un prolongement de la chaîne de :', options: ['L\'Atakora (Bénin)', 'Les monts Mandara', 'Les monts du Fouta-Djalon', 'Les monts du Hoggar'], correct: 0 },
    { texte: 'Les dunes d\'Oursi sont situées dans la région de :', options: ['Soum', 'Liptako', 'Yaadga', 'Tapoa'], correct: 1 },
    { texte: 'La grande mosquée de Dioulasso-Bâ à Bobo-Dioulasso a été édifiée en :', options: ['1860', '1880', '1900', '1920'], correct: 1 },
    { texte: 'Les mosquées mythiques de Bani sont au nombre de :', options: ['5', '6', '7', '8'], correct: 2 },
    { texte: 'L\'ancienne mosquée de Ouahabou a été construite en 1850 par le fils d\'un marabout :', options: ['Marka', 'Peulh', 'Mossi', 'Dioula'], correct: 0 },
    { texte: 'La cour royale de Tiébélé est inscrite au patrimoine mondial de l\'UNESCO depuis :', options: ['2022', '2023', '2024', '2025'], correct: 2 },
    { texte: 'Le mausolée de Guimbi Ouattara se trouve à :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Banfora', 'Dédougou'], correct: 1 },
    { texte: 'Les ruines de Loropéni sont inscrites au patrimoine mondial de l\'UNESCO depuis :', options: ['2007', '2008', '2009', '2010'], correct: 2 },
    { texte: 'Les sites de métallurgie ancienne du fer sont inscrits au patrimoine mondial de l\'UNESCO depuis :', options: ['2017', '2018', '2019', '2020'], correct: 2 },
    { texte: 'Quels sont les sites de métallurgie ancienne du fer inscrits à l\'UNESCO ?', options: ['Douroula', 'Tiwêga', 'Yamané', 'Sindou'], correct: 0, multiple: true },
    { texte: 'Le site de Douroula (métallurgie ancienne du fer) date du :', options: ['VIIIe siècle av. J.-C.', 'Xe siècle av. J.-C.', 'XIIe siècle av. J.-C.', 'XIVe siècle av. J.-C.'], correct: 0 },
    { texte: 'Le site de Tiwêga (métallurgie ancienne du fer) date des :', options: ['IXe-XIe siècles ap. J.-C.', 'XIe-XIIIe siècles ap. J.-C.', 'XIIIe-XVe siècles ap. J.-C.', 'XVe-XVIIe siècles ap. J.-C.'], correct: 2 },
    { texte: 'Les gravures rupestres de Pobé-Mengao datent du :', options: ['Ve-VIIIe siècle', 'VIIe-XIIe siècle', 'Xe-XIVe siècle', 'XIIe-XVIe siècle'], correct: 1 },
    { texte: 'Le musée de Manéga a été fondé par :', options: ['Maître Pacéré Titinga Frédéric', 'Maître Joseph Ki-Zerbo', 'Maître Bénéwendé Sankara', 'Maître Roch Kaboré'], correct: 0 },
    { texte: 'Le musée national du Burkina Faso a été créé en :', options: ['1960', '1961', '1962', '1963'], correct: 2 },
    { texte: 'Le musée de la Musique à Ouagadougou a ouvert ses portes en :', options: ['1997', '1998', '1999', '2000'], correct: 2 },
    { texte: 'Le musée des civilisations du peuple lobi à Gaoua a été créé le :', options: ['21 décembre 1988', '21 décembre 1990', '21 décembre 1992', '21 décembre 1994'], correct: 1 },
    { texte: 'Le village artisanal de Ouagadougou a été inauguré le :', options: ['28 octobre 1998', '28 octobre 1999', '28 octobre 2000', '28 octobre 2001'], correct: 2 },
    { texte: 'Le Burkina Faso est structuré en combien de zones touristiques ?', options: ['2', '3', '4', '5'], correct: 2 },
    { texte: 'Quelles sont les zones touristiques du Burkina Faso ?', options: ['Centre (tourisme d\'affaires)', 'Ouest (tourisme de découverte)', 'Est (tourisme cynégétique)', 'Nord (tourisme balnéaire)'], correct: 0, multiple: true },
    { texte: 'Combien de sites du Burkina Faso sont inscrits au patrimoine mondial de l\'UNESCO ?', options: ['2', '3', '4', '5'], correct: 2 },
    { texte: 'Quels sont les sites burkinabè inscrits au patrimoine mondial de l\'UNESCO ?', options: ['Ruines de Loropéni', 'Complexe W-Arly-Pendjari', 'Sites de métallurgie ancienne du fer', 'Cascades de Karfiguéla'], correct: 0, multiple: true },
    { texte: 'La cour royale de Tiébélé est célèbre pour :', options: ['Son architecture traditionnelle en terre (soudanaise)', 'Ses décors muraux peints par les femmes', 'Ses mosquées en banco', 'Ses sculptures sur granite'], correct: 0, multiple: true },
    { texte: 'Les sculptures sur granite de Laongo accueillent :', options: ['Le Symposium international de sculpture', 'Le FESPACO', 'La SNC', 'Le SIAO'], correct: 0 },
    { texte: 'Le musée de l\'eau à Loumbila a été créé en 2005 par :', options: ['Alassane Samoura', 'Pacéré Titinga', 'Joseph Ki-Zerbo', 'Frédéric Guirma'], correct: 0 }
];

// =======================
// ÉVÉNEMENTS CULTURELS (N°418 à 489)
// =======================
thematiques.evenements_culturels.questions = [
    { texte: 'Le FESPACO a été créé en quelle année ?', options: ['1967', '1968', '1969', '1970'], correct: 2 },
    { texte: 'Les trois initiateurs du FESPACO sont :', options: ['Francis Bassolet', 'Claude Prieux', 'Louis Thiombiano', 'Thomas Sankara'], correct: [0, 1, 2], multiple: true },
    { texte: 'Le premier secrétaire général du FESPACO était :', options: ['Aminata Salembéré', 'Alex Moussa Sawadogo', 'Sembène Ousmane', 'Oumarou Ganda'], correct: 0 },
    { texte: 'La première édition du FESPACO s\'est tenue sous le nom de :', options: ['Festival panafricain du cinéma', 'Festival du cinéma de Ouagadougou', 'Semaine du cinéma africain', 'Rencontres cinématographiques de Ouaga'], correct: 1 },
    { texte: 'La première édition du FESPACO a eu lieu du :', options: ['1 au 15 février 1969', '1 au 15 février 1970', '1 au 15 mars 1969', '1 au 15 mars 1970'], correct: 0 },
    { texte: 'C\'est à quelle édition que le FESPACO est institutionnalisé et que l\'Étalon d\'or de Yennenga est créé ?', options: ['1re édition', '2e édition', '3e édition', '4e édition'], correct: 2 },
    { texte: 'Le premier lauréat de l\'Étalon d\'or de Yennenga (1972) est :', options: ['Sembène Ousmane', 'Oumarou Ganda', 'Gaston Kaboré', 'Dani Kouyaté'], correct: 1 },
    { texte: 'Quel pays a remporté le plus de fois l\'Étalon d\'or de Yennenga (4 fois) ?', options: ['Burkina Faso', 'Mali', 'Maroc', 'Sénégal'], correct: 2 },
    { texte: 'Le Burkina Faso a remporté l\'Étalon d\'or de Yennenga combien de fois ?', options: ['1 fois', '2 fois', '3 fois', '4 fois'], correct: 2 },
    { texte: 'Quels films burkinabè ont remporté l\'Étalon d\'or de Yennenga ?', options: ['Tilai', 'Buud Yam', 'Katanga, la danse des scorpions', 'Sira'], correct: 0, multiple: true },
    { texte: 'Le film "Katanga, la danse des scorpions" de Dani Kouyaté a remporté l\'Étalon d\'or lors de la 29e édition (2025). Quel autre film burkinabè a été récompensé lors de cette même édition ?', options: ['Sira (Étalon d\'argent)', 'Tilai', 'Buud Yam', 'L\'œil du Cyclone'], correct: 0 },
    { texte: 'Lors de la 28e édition (2023), quel film burkinabè a remporté l\'Étalon d\'argent ?', options: ['Sira', 'Tilai', 'Katanga', 'L\'œil du Cyclone'], correct: 0 },
    { texte: 'La 25e édition du FESPACO (2017) avait pour thème :', options: ['Cinéma d\'Afrique et culture de la paix', 'Formation et métiers du cinéma et de l\'audiovisuel', 'Mémoire et avenir des cinémas africains', 'Cinéma d\'Afrique et identités culturelles'], correct: 1 },
    { texte: 'Le pays invité d\'honneur de la 29e édition du FESPACO (2025) était :', options: ['Mali', 'Sénégal', 'Tchad', 'Rwanda'], correct: 2 },
    { texte: 'La SNC (Semaine nationale de la Culture) a été créée en quelle année ?', options: ['1981', '1982', '1983', '1984'], correct: 2 },
    { texte: 'La SNC a été créée sous l\'impulsion de quel président ?', options: ['Sangoulé Lamizana', 'Saye Zerbo', 'Thomas Sankara', 'Blaise Compaoré'], correct: 2 },
    { texte: 'La SNC est sédentarisée à Bobo-Dioulasso depuis quelle édition ?', options: ['3e édition', '4e édition', '5e édition', '6e édition'], correct: 2 },
    { texte: 'La première édition de la SNC (1983) s\'est déroulée à :', options: ['Bobo-Dioulasso', 'Ouagadougou', 'Koudougou', 'Gaoua'], correct: 1 },
    { texte: 'La 4e édition de la SNC (1988) s\'est déroulée simultanément dans deux villes :', options: ['Ouagadougou et Bobo-Dioulasso', 'Koudougou et Réo', 'Gaoua et Dédougou', 'Tenkodogo et Kaya'], correct: 1 },
    { texte: 'La SNC repose sur un concours national appelé :', options: ['Grand prix national des arts et des lettres (GPNAL)', 'Grand prix de la culture (GPC)', 'Grand prix des trésors culturels du Burkina Faso (GPTCBF)', 'Prix art et culture (PAC)'], correct: 0 },
    { texte: 'La phase finale des compétitions de la SNC est précédée de :', options: ['Semaines régionales de la culture (SRC)', 'Tournois préliminaires', 'Sélections départementales', 'Concours locaux'], correct: 0 },
    { texte: 'Le secrétaire permanent actuel de la SNC (depuis 2023) est :', options: ['Prosper Compaoré', 'Bitchibali Dansa', 'Bamassa Ouattara', 'Christiane Marie Sanon'], correct: 3 },
    { texte: 'Le SIAO (Salon international de l\'Artisanat de Ouagadougou) a été créé en quelle année ?', options: ['1986', '1987', '1988', '1989'], correct: 2 },
    { texte: 'La première édition du SIAO s\'est tenue du 20 au 27 février 1988 sous le thème :', options: ['Artisanat Africain, Jeunesse et Emploi', 'Artisanat Africain, Situation actuelle et Perspectives', 'Artisanat africain et développement', 'Artisanat africain et émergence économique'], correct: 1 },
    { texte: 'La première édition du SIAO a abouti à la création de :', options: ['L\'APEC', 'Le CODEPA (Comité de coordination pour le développement et la promotion de l\'artisanat africain)', 'La BOAD', 'La CENI'], correct: 1 },
    { texte: 'Le SIAO est devenu une biennale en quelle année ?', options: ['1988', '1989', '1990', '1991'], correct: 1 },
    { texte: 'Le directeur général actuel du SIAO (depuis 2023) est :', options: ['Dramane Tou', 'Mariam Traoré/Ouédraogo', 'Moussa Traoré', 'Abdoulaye Zongo'], correct: 1 },
    { texte: 'Lors de la 17e édition du SIAO (2025), le Grand prix du président du Faso a été remporté par :', options: ['Burkina Faso (1er)', 'Mali (1er)', 'Niger (2e)', 'Côte d\'Ivoire (1er)'], correct: 1, multiple: true },
    { texte: 'Lors du SIAO, le Prix spécial Thomas Sankara de la créativité (2025) a été attribué à :', options: ['Rosemary Fointein (Cameroun)', 'Boubacar Tapsoba (Burkina)', 'Adama Sylla (Burkina)', 'Modibo Sidibé (Mali)'], correct: 2 },
    { texte: 'Le FITMO (Festival international de théâtre et de marionnettes de Ouagadougou) a été créé en quelle année ?', options: ['1987', '1988', '1989', '1990'], correct: 2 },
    { texte: 'Le fondateur du FITMO est :', options: ['Hamadou Mandé', 'Jean-Pierre Guingané', 'Kira Claude Guingané', 'Koudbi Koala'], correct: 1 },
    { texte: 'Le FITMO est devenu itinérant à partir de quelle année, se déployant dans plusieurs pays d\'Afrique de l\'Ouest ?', options: ['2010', '2012', '2014', '2016'], correct: 1 },
    { texte: 'Le FESTIMA (Festival international des Masques et des Arts de Dédougou) a été créé en quelle année ?', options: ['1994', '1995', '1996', '1997'], correct: 2 },
    { texte: 'Le FESTIMA est organisé par l\'association :', options: ['ASMA (Association pour la Sauvegarde des Masques)', 'ASMADE', 'FESTIMA Organisation', 'Masques du Monde'], correct: 0 },
    { texte: 'La secrétaire exécutive de l\'ASMA et promotrice du FESTIMA est :', options: ['Christiane Marie Sanon', 'Lénonce Ki', 'Mariam Traoré', 'Aminata Salembéré'], correct: 1 },
    { texte: 'Les Nuits Atypiques de Koudougou (NAK) ont été créées le :', options: ['11 décembre 1994', '11 décembre 1995', '11 décembre 1996', '11 décembre 1997'], correct: 2 },
    { texte: 'Le fondateur des NAK est :', options: ['Koudbi Koala', 'Jean-Pierre Guingané', 'Patrick Lavaud', 'Jah Press'], correct: 0 },
    { texte: 'Le festival NAK est géré par l\'association :', options: ['Benebnooma', 'ASMA', 'ASPAC', 'UNEDO'], correct: 0 },
    { texte: 'Lors de la 28e édition des NAK (2023), quel prix a été créé ?', options: ['Prix Koudbi Koala', 'Prix de la créativité', 'Prix spécial Thomas Sankara', 'Prix du public'], correct: 0 },
    { texte: 'La FILO (Foire internationale du Livre de Ouagadougou) a été créée en quelle année ?', options: ['1998', '1999', '2000', '2001'], correct: 2 },
    { texte: 'La première édition de la FILO s\'est tenue à :', options: ['Maison du peuple', 'SIAO', 'Hôtel Indépendance de Ouagadougou', 'Espace culturel Gambidi'], correct: 2 },
    { texte: 'La FILO est devenue biennale à partir de quelle édition (2013) ?', options: ['10e édition', '11e édition', '12e édition', '13e édition'], correct: 2 },
    { texte: 'Les Olympiades littéraires ont été introduites à la FILO lors de quelle édition (2019) ?', options: ['13e édition', '14e édition', '15e édition', '16e édition'], correct: 2 },
    { texte: 'Le Grand prix littéraire de la FILO a été créé lors de la 13e édition (2015) avec une dotation de :', options: ['500 000 FCFA', '1 000 000 FCFA', '1 500 000 FCFA', '2 000 000 FCFA'], correct: 1 },
    { texte: 'Les Kundé sont une cérémonie de récompenses musicales créée en 2001 par :', options: ['Floby', 'Jah Press (Salfo Soré)', 'Smarty', 'Smockey'], correct: 1 },
    { texte: 'Le nom "Kundé" vient du mooré et désigne :', options: ['Un tambour', 'Une guitare à trois cordes', 'Un balafon', 'Une flûte'], correct: 1 },
    { texte: 'L\'idée des Kundé avait été lancée en 1996 sous le nom de :', options: ['Balafons d\'Or', 'Tam-tams d\'Or', 'Guitares d\'Or', 'Étalons d\'Or'], correct: 0 },
    { texte: 'Les Kundé se tiennent généralement le dernier vendredi du mois de :', options: ['Mars', 'Avril', 'Mai', 'Juin'], correct: 1 },
    { texte: 'Quel artiste a remporté le plus de Kundé d\'or (3 fois : 2010, 2019, 2025) ?', options: ['Smarty', 'Bil Aka Kora', 'Floby', 'Sana Bob'], correct: 2 },
    { texte: 'Quel artiste a réalisé un triplé lors de l\'édition 2025 des Kundé (Kundé d\'or, meilleure chanson moderne, artiste le plus joué en discothèque) ?', options: ['Smarty', 'Tanya', 'Floby', 'Amzy'], correct: 2 },
    { texte: 'Tanya a été récompensée lors des Kundé 2025 dans quelles catégories ?', options: ['Meilleur clip vidéo', 'Meilleur artiste féminin', 'Kundé d\'or', 'Meilleure révélation'], correct: 0, multiple: true },
    { texte: 'Les Marley d\'or sont une cérémonie de récompenses musicales créée en 2014 par :', options: ['Madess (Mahamadi Ouédraogo)', 'Jah Press', 'Sams\'K Le Jah', 'Floby'], correct: 0 },
    { texte: 'Les Marley d\'or célèbrent quel genre musical ?', options: ['Hip-hop', 'Reggae', 'Jazz', 'Musique traditionnelle'], correct: 1 },
    { texte: 'Le nom "Marley d\'or" rend hommage à :', options: ['Bob Marley', 'Rita Marley', 'Ziggy Marley', 'Damian Marley'], correct: 0 },
    { texte: 'Rita Marley a été la marraine de quelle édition des Marley d\'or ?', options: ['1ère édition (2014)', '5e édition (2018)', '10e édition (2023)', '12e édition (2025)'], correct: 0 },
    { texte: 'Quel artiste a réalisé le doublé Kundé d\'or et Marley d\'or la même année (2015) ?', options: ['Floby', 'Smarty', 'Sana Bob', 'Martin N\'Terry'], correct: 2 },
    { texte: 'Quel artiste est le plus titré des Marley d\'or avec deux trophées (2014 et 2024) ?', options: ['Sana Bob', 'Martin N\'Terry', 'Folio le Nuage', 'Sharaph Coulibaly'], correct: 1 },
    { texte: 'Le FESPACO est un festival qui a lieu :', options: ['Tous les ans', 'Tous les deux ans', 'Tous les trois ans', 'Tous les quatre ans'], correct: 1 },
    { texte: 'La SNC est une biennale qui se tient les années :', options: ['Impaires', 'Paires', 'Toutes les années', 'Tous les trois ans'], correct: 1 },
    { texte: 'Le SIAO se tient généralement les années paires, sauf exception en 2023 pour des raisons :', options: ['Économiques', 'Sanitaires et sécuritaires', 'Politiques', 'Météorologiques'], correct: 1 },
    { texte: 'La FILO se tient les années :', options: ['Paires', 'Impaires', 'Tous les ans', 'Tous les trois ans'], correct: 1 },
    { texte: 'Le FESTIMA se tient les années :', options: ['Paires', 'Impaires', 'Tous les ans', 'Tous les trois ans'], correct: 0 },
    { texte: 'Les Kundé se tiennent chaque année, sauf exceptions en :', options: ['2019 et 2021', '2020 et 2022', '2021 et 2023', '2022 et 2024'], correct: 1 },
    { texte: 'La 20e édition de la SNC, initialement prévue en 2020, a été reportée en raison de :', options: ['La situation sécuritaire', 'La pandémie de Covid-19', 'Des problèmes financiers', 'Un coup d\'État'], correct: 1 },
    { texte: 'Le siège du SNC à Bobo-Dioulasso a été inauguré en 2000 lors de la :', options: ['8e édition', '9e édition', '10e édition', '11e édition'], correct: 2 },
    { texte: 'Le prix Kundé Music Export a été créé en quelle année ?', options: ['2021', '2022', '2023', '2024'], correct: 2 },
    { texte: 'Le film "Sira" d\'Apolline Traoré a remporté quel prix lors du FESPACO 2023 ?', options: ['Étalon d\'or', 'Étalon d\'argent', 'Étalon de bronze', 'Prix spécial du jury'], correct: 1 },
    { texte: 'Le film "Tilai" d\'Idrissa Ouédraogo a remporté l\'Étalon d\'or en :', options: ['1989', '1991', '1993', '1995'], correct: 1 },
    { texte: 'Le film "Buud Yam" de Gaston Kaboré a remporté l\'Étalon d\'or en :', options: ['1995', '1996', '1997', '1998'], correct: 2 },
    { texte: 'Le tout premier secrétaire permanent de la SNC (1983-1988) était :', options: ['Sidi Traoré', 'Bitchibali Dansa', 'Prosper Compaoré', 'Salaka Sanou'], correct: 2 },
    { texte: 'Le Prix spécial Thomas Sankara de la créativité au SIAO 2025 était doté de :', options: ['1 000 000 FCFA', '2 000 000 FCFA', '3 000 000 FCFA', '4 000 000 FCFA'], correct: 2 },
    { texte: 'L\'œuvre "AES Sécurité" d\'Adama Sylla a remporté quel prix au SIAO 2025 ?', options: ['Grand prix du président du Faso', 'Prix de la créativité', 'Prix spécial Thomas Sankara de la créativité', 'Prix du meilleur stand'], correct: 2 }
];

// =======================
// INDUSTRIES ET SOCIÉTÉS (N°490 à 561)
// =======================
thematiques.industries_societes.questions = [
    { texte: 'La SN-CITEC est spécialisée dans la transformation de :', options: ['La canne à sucre', 'Les graines de coton et d\'arachide', 'Le coton', 'Les fruits tropicaux'], correct: 1 },
    { texte: 'Parmi ces produits, lesquels sont fabriqués par la SN-CITEC ?', options: ['Huile alimentaire (Savor)', 'Savon de ménage', 'Sucre raffiné', 'Tourteaux et aliments pour bétail'], correct: 0, multiple: true },
    { texte: 'La SN-CITEC a été créée en 1941 sous le nom de :', options: ['SESUHV', 'BRAVOLTA', 'CITEC', 'CFDT'], correct: 2 },
    { texte: 'Le siège de la SN-CITEC se trouve dans la zone industrielle de :', options: ['Ouagadougou', 'Kossodo', 'Bobo-Dioulasso', 'Kaya'], correct: 2 },
    { texte: 'La SN-SOSUCO est spécialisée dans :', options: ['La transformation du coton', 'L\'industrie sucrière', 'La fabrication de bière', 'La transformation de tomates'], correct: 1 },
    { texte: 'La SN-SOSUCO a été créée en 1965 sous l\'appellation :', options: ['SOSHUV', 'SESUHV', 'SN-SOSUCO', 'SOFITEX'], correct: 1 },
    { texte: 'La SN-SOSUCO est située à :', options: ['Bobo-Dioulasso', 'Banfora (Bérégadougou)', 'Orodara', 'Yako'], correct: 1 },
    { texte: 'Le coton est souvent surnommé au Burkina Faso :', options: ['L\'or jaune', 'L\'or blanc', 'L\'or vert', 'L\'or noir'], correct: 1 },
    { texte: 'La SOFITEX a été créée en 1974 en tant que :', options: ['Société privée', 'Société d\'économie mixte publique', 'Filiale de groupe étranger', 'Coopérative agricole'], correct: 1 },
    { texte: 'La SOFITEX était anciennement connue sous le nom de :', options: ['CFDT (1974)', 'CITEC', 'BRAVOLTA', 'SESUHV'], correct: 0 },
    { texte: 'Le siège de la SOFITEX se trouve à :', options: ['Ouagadougou', 'Koudougou', 'Bobo-Dioulasso', 'Banfora'], correct: 2 },
    { texte: 'DAFANI SA est spécialisée dans la transformation de :', options: ['Tomates', 'Mangues', 'Lait', 'Céréales'], correct: 1 },
    { texte: 'DAFANI SA a connu une fermeture temporaire entre 2010 et 2011 pour cause de :', options: ['Conflit social', 'Problèmes financiers', 'Destruction des locaux', 'Pandémie'], correct: 1 },
    { texte: 'DAFANI SA est située à :', options: ['Orodara', 'Bobo-Dioulasso', 'Banfora', 'Yako'], correct: 0 },
    { texte: 'BRAKINA est une filiale du groupe :', options: ['Heineken', 'Groupe Castel', 'BGI', 'Diageo'], correct: 1 },
    { texte: 'BRAKINA a été créée en 1960 sous le nom de :', options: ['BRAVOLTA', 'SOBBRA', 'BRAKINA', 'SOSUCO'], correct: 0 },
    { texte: 'BRAKINA fusionne avec SOBBRA en quelle année pour donner la BRAKINA actuelle ?', options: ['1983', '1990', '1992', '1995'], correct: 2 },
    { texte: 'SAPHYTO est spécialisée dans :', options: ['La fabrication de pneus', 'Les produits phytosanitaires et insecticides', 'Les piles électriques', 'Les plastiques'], correct: 1 },
    { texte: 'SAP OLYMPIC fabrique :', options: ['Des produits chimiques', 'Des pneus et chambres à air', 'Des piles électriques', 'Des emballages plastiques'], correct: 1 },
    { texte: 'SAP OLYMPIC a été créée en :', options: ['1970', '1972', '1974', '1976'], correct: 1 },
    { texte: 'SOFAPIL fabriquait des piles électriques. Quel est son statut actuel ?', options: ['En pleine activité', 'Nationalisée', 'Liquidation judiciaire', 'Fusionnée avec SAPHYTO'], correct: 2 },
    { texte: 'La liquidation judiciaire de SOFAPIL a été prononcée par le Tribunal de Commerce de Bobo-Dioulasso le :', options: ['3 juin 2018', '3 juin 2019', '3 juin 2020', '3 juin 2021'], correct: 2 },
    { texte: 'FASOPLAST est spécialisée dans :', options: ['La fabrication de piles', 'Les emballages plastiques', 'Les pneumatiques', 'Les produits phytosanitaires'], correct: 1 },
    { texte: 'FASOPLAST a été privatisé en :', options: ['1986', '1990', '1995', '2000'], correct: 2 },
    { texte: 'CIMFASO est une industrie de :', options: ['Textile', 'Ciment', 'Plastique', 'Chimie'], correct: 1 },
    { texte: 'CIMFASO a été inaugurée officiellement le :', options: ['27 mars 2013', '27 mars 2014', '27 mars 2015', '27 mars 2016'], correct: 2 },
    { texte: 'Parmi ces industries créées entre 2024 et 2026, lesquelles sont spécialisées dans la transformation de tomates ?', options: ['SOBTO', 'SOFATO', 'FASO KOSAM', 'FASO GUULGO'], correct: 0, multiple: true },
    { texte: 'SOBTO (Société burkinabè de Tomate) a été inaugurée le 30 novembre 2025 à :', options: ['Yako', 'Ouagadougou', 'Bobo-Dioulasso', 'Fada N\'Gourma'], correct: 2 },
    { texte: 'FASO KOSAM est spécialisée dans :', options: ['La transformation de tomates', 'La transformation de lait', 'La fabrication d\'aliments pour animaux', 'La brasserie'], correct: 1 },
    { texte: 'La SN-BRAFASO est une brasserie inaugurée en 2025 après une fermeture de :', options: ['15 ans', '17 ans', '20 ans', '25 ans'], correct: 1 },
    { texte: 'TEXFORCES-BF est un complexe textile destiné à confectionner des tenues pour :', options: ['Les civils', 'Les forces de défense et de sécurité (FDS) et les VDP', 'Les élèves', 'Les fonctionnaires'], correct: 1 },
    { texte: 'La SONASP (Société nationale des substances précieuses) est chargée de :', options: ['La commercialisation du coton', 'La commercialisation et transformation de l\'or artisanal', 'La gestion des hydrocarbures', 'La production d\'électricité'], correct: 1 },
    { texte: 'La SONABHY a pour mission principale :', options: ['La production d\'électricité', 'La sécurité d\'approvisionnement en produits pétroliers', 'La distribution d\'eau potable', 'La gestion des stocks alimentaires'], correct: 1 },
    { texte: 'La SONABEL a été créée en 1984. Avant cette date, elle portait le nom de :', options: ['SAFELEC (1960) puis VOLTELEC (1968)', 'VOLTELEC (1960) puis SAFELEC (1968)', 'ONEA', 'SNE'], correct: 0 },
    { texte: 'ONEA a été créé le 25 juillet 1985. Quelle était sa dénomination en 1970 ?', options: ['ONE', 'SNE (Société nationale des eaux)', 'SFELEC', 'VOLTELEC'], correct: 1 },
    { texte: 'La Poste Burkina Faso (ex-SONAPOST) est devenue La Poste du Burkina en :', options: ['2016', '2017', '2018', '2019'], correct: 2 },
    { texte: 'L\'ONASER (Office national de la sécurité routière) a été créé en :', options: ['2005', '2006', '2007', '2008'], correct: 3 },
    { texte: 'La SOTRACO (Société de transport en commun) a été créée en :', options: ['2021', '2022', '2023', '2024'], correct: 2 },
    { texte: 'Le CNSS (Caisse nationale de Sécurité sociale) gère la sécurité sociale des travailleurs :', options: ['Du secteur public', 'Du secteur privé', 'De tous les secteurs', 'Des fonctionnaires uniquement'], correct: 1 },
    { texte: 'Le CNSS a été créé le :', options: ['11 mai 2004', '11 mai 2005', '11 mai 2006', '11 mai 2007'], correct: 2 },
    { texte: 'La CNAMU gère :', options: ['Les retraites des fonctionnaires', 'L\'assurance maladie universelle (AMU)', 'Les accidents du travail', 'Les prestations familiales'], correct: 1 },
    { texte: 'La CARFO gère les retraites de quels agents publics ?', options: ['Fonctionnaires', 'Militaires', 'Magistrats', 'Travailleurs du privé'], correct: 0, multiple: true },
    { texte: 'Le REN-LAC (Réseau national de lutte anti-corruption) a été créé en :', options: ['1995', '1996', '1997', '1998'], correct: 2 },
    { texte: 'Le BBDA (Bureau burkinabè du droit d\'auteur) a été créé en :', options: ['1981', '1982', '1983', '1984'], correct: 2 },
    { texte: 'Le CENASA (Centre national des Arts du Spectacle et de l\'Audiovisuel) a été créé en :', options: ['1997', '1998', '1999', '2000'], correct: 2 },
    { texte: 'Le MBDHP (Mouvement burkinabè des droits de l\'Homme et des Peuples) a été créé le :', options: ['19 février 1987', '19 février 1988', '19 février 1989', '19 février 1990'], correct: 2 },
    { texte: 'L\'INSD (Institut national de la statistique et de la démographie) a été créé en :', options: ['1972', '1973', '1974', '1975'], correct: 2 },
    { texte: 'La CCI-BF (Chambre de Commerce et d\'industrie du Burkina Faso) a été créée en :', options: ['1946', '1947', '1948', '1949'], correct: 2 },
    { texte: 'Le CNPB (Conseil national du patronat burkinabè) a été créé en :', options: ['1972', '1973', '1974', '1975'], correct: 2 },
    { texte: 'Le CNRST (Centre national de la Recherche scientifique et technologique) a été créé en :', options: ['1947', '1948', '1949', '1950'], correct: 2 },
    { texte: 'L\'ANBNORM (Agence burkinabè de Normalisation, de Métrologie et de Qualité) a été créée le :', options: ['18 juillet 2010', '18 juillet 2011', '18 juillet 2012', '18 juillet 2013'], correct: 2 },
    { texte: 'L\'AIB (Agence d\'Information du Burkina) a été créée le :', options: ['27 mai 1972', '27 mai 1973', '27 mai 1974', '27 mai 1975'], correct: 2 },
    { texte: 'Associez chaque société à son domaine d\'activité principal : SONABHY, SONABEL, ONEA.', options: ['Hydrocarbures / Électricité / Eau', 'Eau / Électricité / Hydrocarbures', 'Électricité / Eau / Hydrocarbures', 'Hydrocarbures / Eau / Électricité'], correct: 0 },
    { texte: 'Associez chaque ancienne dénomination à la société actuelle : CITEC, BRAVOLTA, CFDT.', options: ['SN-CITEC / BRAKINA / SOFITEX', 'SOFITEX / BRAKINA / SN-CITEC', 'BRAKINA / SN-CITEC / SOFITEX', 'SN-CITEC / SOFITEX / BRAKINA'], correct: 0 },
    { texte: 'La SOFATO (Société Faso Tomate) a été inaugurée à :', options: ['Bobo-Dioulasso', 'Yako', 'Ouagadougou', 'Fada N\'Gourma'], correct: 1 },
    { texte: 'La CISINOB (Sino-Burkina de ciments SA) a été inaugurée le 20 mars 2025 à :', options: ['Pabré', 'Gampéla', 'Laongo (Ziniaré)', 'Komsilga'], correct: 2 },
    { texte: 'L\'usine M2S (Moulin Double Star) est spécialisée dans :', options: ['La production de ciment', 'La transformation de blé en farine', 'La fabrication de détergents', 'La production d\'emballages'], correct: 1 },
    { texte: 'L\'usine FASSI, inaugurée le 6 mars 2025 à Pabré, produit :', options: ['Des ciments', 'Des farines', 'Des détergents', 'Des plastiques'], correct: 2 },
    { texte: 'FASO GUULGO, inaugurée le 6 mai 2025 à Koubri, fabrique :', options: ['Des aliments pour bétail, volaille et poisson', 'Des produits laitiers', 'Des jus de fruits', 'Des textiles'], correct: 0 },
    { texte: 'Le complexe TEXFORCES-BF a été lancé par la pose de la première pierre le 27 avril 2024 à :', options: ['Ouagadougou', 'Koudougou', 'Bobo-Dioulasso', 'Banfora'], correct: 2 },
    { texte: 'Le directeur général de la SN-SOSUCO nommé en février 2024 est :', options: ['Ouattara Djakaridja Hema', 'Séraphin Dembélé', 'Braïma Barro', 'Nomandé Prosper Kola'], correct: 0 },
    { texte: 'Le nouveau directeur général de la SOFITEX nommé en janvier 2026 est :', options: ['Bienvenu Paré', 'Braïma Barro', 'Inoussa Kaboré', 'Mamady Sanoh'], correct: 1 },
    { texte: 'Le directeur général de la SN-CITEC nommé en décembre 2025 est :', options: ['Ibrahim Traoré', 'Nomandé Prosper Kola', 'Gaetan Van Belle', 'Auguste Thiombiano'], correct: 1 },
    { texte: 'Le président-directeur général de CIMFASO est :', options: ['Inoussa Kaboré', 'Alain Sankara', 'Mamady Sanoh', 'Yaya Soulama'], correct: 0 },
    { texte: 'Le directeur général de la SONABHY est :', options: ['Souleymane Ouédraogo', 'Aimé Wendpanga Nongkouni', 'Flandion Idrissa Sourabié', 'Ibrahim Saba'], correct: 1 },
    { texte: 'Le directeur général de l\'ONEA est :', options: ['Souleymane Ouédraogo', 'Aimé Wendpanga Nongkouni', 'Flandion Idrissa Sourabié', 'Drissa Sawadogo'], correct: 2 },
    { texte: 'Le secrétaire exécutif du REN-LAC est :', options: ['Dr. Hamed dit Patindeba Patric Lega', 'Pissyamba Ouédraogo', 'Chrysogone Zougmoré', 'Toubou Ripama'], correct: 1 },
    { texte: 'Le président du MBDHP est :', options: ['Dr Herman Yacouba Nacambo', 'Chrysogone Zougmoré', 'Idrissa Nassa', 'Roland Achille Sow'], correct: 1 },
    { texte: 'Le délégué général du CNRST est :', options: ['Dr Emmanuel Nanéma', 'Abraham Abassagué', 'Habraham Somda', 'Noufo Enok Kindo'], correct: 0 },
    { texte: 'La SN-BRAFASO est inaugurée le 25 novembre 2025 à Komsilga. Quel est son secteur d\'activité ?', options: ['Agroalimentaire (tomates)', 'Brasserie', 'Textile', 'Cimenterie'], correct: 1 },
    { texte: 'FASO KOSAM est inauguré le 27 mars 2025. Où se situe son site de production ?', options: ['Uniquement à Ouagadougou', 'Uniquement à Fada N\'Gourma', 'À Fada N\'Gourma et Ouagadougou', 'À Bobo-Dioulasso et Ouagadougou'], correct: 2 },
    { texte: 'Le directeur général de la SONABEL est :', options: ['Souleymane Ouédraogo', 'Aimé Wendpanga Nongkouni', 'Flandion Idrissa Sourabié', 'Ibrahim Saba'], correct: 0 }
];

// =======================
// SPORT AU BURKINA FASO (N°562 à 633)
// =======================
thematiques.sport.questions = [
    { texte: 'La Fédération burkinabè de football (FBF) a été créée en 1960 sous le nom de :', options: ['Fédération burkinabè de football', 'Fédération voltaïque de football', 'Union voltaïque de football', 'Association burkinabè de football'], correct: 1 },
    { texte: 'La FBF est affiliée à la FIFA et à la CAF depuis :', options: ['1960', '1962', '1964', '1966'], correct: 2 },
    { texte: 'Le président actuel de la FBF est :', options: ['Oumarou Sawadogo', 'Sita Sangaré', 'Boureima Zoundi', 'Yacouba Traoré'], correct: 0 },
    { texte: 'L\'équipe nationale du Burkina Faso est surnommée "Les Étalons" en hommage à :', options: ['La force des guerriers mossi', 'La princesse Yennenga et son cheval', 'Le cheval de Soundiata Keïta', 'La cavalerie de l\'empire mossi'], correct: 1 },
    { texte: 'Le premier match officiel des Étalons (sous le nom de Haute-Volta) a eu lieu le 13 avril 1960 contre :', options: ['Côte d\'Ivoire', 'Ghana', 'Gabon', 'Niger'], correct: 2 },
    { texte: 'Lors de ce premier match, le score était de :', options: ['3-2', '4-3', '5-4', '6-5'], correct: 2 },
    { texte: 'La première participation du Burkina à la Coupe d\'Afrique des nations (CAN) remonte à :', options: ['1976', '1978', '1980', '1982'], correct: 1 },
    { texte: 'Quel est le meilleur résultat des Étalons à la CAN (finaliste) ?', options: ['1998', '2013', '2017', '2021'], correct: 1 },
    { texte: 'En 2013, le Burkina Faso s\'incline en finale de la CAN contre :', options: ['Ghana', 'Cameroun', 'Nigeria', 'Côte d\'Ivoire'], correct: 2 },
    { texte: 'Le Burkina Faso a terminé à la 3e place de la CAN en 2017 en battant :', options: ['Cameroun', 'Ghana', 'Sénégal', 'Tunisie'], correct: 1 },
    { texte: 'Le joueur le plus sélectionné de l\'histoire des Étalons (102 sélections) est :', options: ['Moumouni Dagano', 'Bertrand Traoré', 'Charles Kaboré', 'Aristide Bancé'], correct: 2 },
    { texte: 'Le meilleur buteur de l\'histoire des Étalons avec 34 buts est :', options: ['Bertrand Traoré', 'Aristide Bancé', 'Moumouni Dagano', 'Jonathan Pitroipa'], correct: 2 },
    { texte: 'Quel sélectionneur burkinabè a conduit l\'équipe à la finale de la CAN 2013 ?', options: ['Kamou Malo', 'Brama Traoré', 'Paul Put', 'Paulo Duarte'], correct: 2 },
    { texte: 'Le premier sélectionneur local (burkinabè) de l\'histoire des Étalons est :', options: ['Kamou Malo', 'Idrissa Malo Traoré', 'Brama Traoré', 'Sidiki Diarra'], correct: 1 },
    { texte: 'Combien de sélectionneurs burkinabè ont dirigé les Étalons depuis l\'indépendance ?', options: ['2', '3', '4', '5'], correct: 2 },
    { texte: 'Le meilleur classement FIFA du Burkina Faso (37e) a été atteint en :', options: ['2010', '2011', '2012', '2013'], correct: 1 },
    { texte: 'La plus large victoire des Étalons est un 6-0 contre :', options: ['Niger', 'Mali', 'Djibouti (2025)', 'Mauritanie'], correct: 2 },
    { texte: 'La Coupe du Faso a été créée en :', options: ['1985', '1986', '1987', '1988'], correct: 2 },
    { texte: 'Le club le plus titré de la Coupe du Faso (15 titres) est :', options: ['ASFA Yennenga', 'Étoile Filante Ouagadougou', 'ASF Bobo', 'USFA'], correct: 1 },
    { texte: 'Le championnat national du Burkina Faso a été créé en :', options: ['1960', '1961', '1962', '1963'], correct: 1 },
    { texte: 'Quels clubs sont les plus titrés du championnat du Burkina Faso (13 titres chacun) ?', options: ['Étoile Filante Ouagadougou et USFA', 'Étoile Filante Ouagadougou et ASFA Yennenga', 'ASFA Yennenga et USFA', 'ASF Bobo et Étoile Filante'], correct: 1 },
    { texte: 'La Supercoupe du Burkina Faso est également dénommée Supercoupe de :', options: ['la FBF', 'la CAF', 'l\'AJSB (Association des journalistes sportifs du Burkina)', 'la FIF'], correct: 2 },
    { texte: 'Rahimo FC a réalisé un triplé historique en 2025 en remportant :', options: ['Championnat, Coupe du Faso et Supercoupe', 'Championnat, Coupe de la CAF et Supercoupe', 'Coupe du Faso, Supercoupe et Tournoi de l\'UEMOA', 'Championnat, Coupe du Faso et Coupe de l\'AJSB'], correct: 0 },
    { texte: 'L\'AS Douanes a remporté la Supercoupe combien de fois consécutivement (2022-2024) ?', options: ['2 fois', '3 fois', '4 fois', '5 fois'], correct: 1 },
    { texte: 'Le Tour du Faso, compétition cycliste majeure, a été créé en :', options: ['1985', '1986', '1987', '1988'], correct: 2 },
    { texte: 'La première édition du Tour du Faso (1987) a été remportée par :', options: ['Sayouba Zongo (Burkina)', 'Igor Luchinko (URSS)', 'Oleg Vassiliev (URSS)', 'Mady Kaboré (Burkina)'], correct: 1 },
    { texte: 'Des éditions du Tour du Faso ont été annulées pour diverses raisons. Laquelle de ces années n\'a pas vu l\'annulation de l\'épreuve ?', options: ['2014 (Ebola)', '2020 (Covid-19)', '2022 (contexte sécuritaire)', '2024'], correct: 3 },
    { texte: 'Le pays le plus titré de l\'histoire du Tour du Faso (17 victoires) est :', options: ['Maroc', 'France', 'Burkina Faso', 'Belgique'], correct: 2 },
    { texte: 'Quels coureurs burkinabè ont remporté deux éditions du Tour du Faso ?', options: ['Ernest Zongo et Paul Daumont', 'Paul Daumont et Mathias Sorgho', 'Ernest Zongo et Harouna Ilboudo', 'Rasmané Ouédraogo et Saïdou Rouamba'], correct: 0 },
    { texte: 'Le Tour du Faso féminin a été créé en 2021. La première vainqueure est :', options: ['Lamoussa Zoungrana', 'Houlda Zongo', 'Awa Bamogo', 'Marthe Koala'], correct: 2 },
    { texte: 'La première édition du Tour féminin Yennenga est prévue en 2026. Elle se déroulera du :', options: ['15 au 21 mars', '23 au 29 mars', '1er au 7 avril', '10 au 16 avril'], correct: 1 },
    { texte: 'Le Championnat du Burkina Faso de cyclisme sur route (hommes) a été créé en :', options: ['1978', '1979', '1980', '1981'], correct: 2 },
    { texte: 'Quel coureur détient le record de titres nationaux (4) avec Saïdou Rouamba ?', options: ['Paul Daumont', 'Jérémie Ouédraogo', 'Abdul Wahab Sawadogo', 'Rasmané Ouédraogo'], correct: 2 },
    { texte: 'Le championnat féminin de cyclisme sur route a été créé en :', options: ['2017', '2018', '2019', '2020'], correct: 2 },
    { texte: 'Quelles athlètes se sont partagé tous les titres du championnat féminin (6 éditions) ?', options: ['Awa Bamogo et Houlda Zongo', 'Awa Bamogo et Lamoussa Zoungrana', 'Lamoussa Zoungrana et Houlda Zongo', 'Awa Bamogo et Marthe Koala'], correct: 1 },
    { texte: 'Le Semi-marathon international altitude Nahouri a été créé en 2009 par :', options: ['La Fédération burkinabè d\'athlétisme', 'Ouézen Louis Oulon', 'Le Comité national olympique', 'Télévision BF1'], correct: 1 },
    { texte: 'Le parcours du semi-marathon Nahouri comprend une ascension finale du pic de Nahouri qui culmine à :', options: ['447 m', '500 m', '549 m', '600 m'], correct: 0 },
    { texte: 'Le record du semi-marathon Nahouri (1h17\'15\'\') est détenu par :', options: ['John Mburu (Kenya)', 'Wesley Kemboy (Kenya)', 'Koogo Atiah (Ghana)', 'Soumaïla Traoré (Côte d\'Ivoire)'], correct: 1 },
    { texte: 'Le Marathon des Échangeurs a été créé en 2018 par :', options: ['La Fédération burkinabè d\'athlétisme', 'Télévision BF1', 'Le Comité national olympique', 'La mairie de Ouagadougou'], correct: 1 },
    { texte: 'Le Marathon des Échangeurs professionnels se court sur la distance classique de :', options: ['21,195 km', '42,195 km', '10 km', '50 km'], correct: 1 },
    { texte: 'Safoura Compaoré, surnommée "Amazone", pratique :', options: ['L\'heptathlon', 'Le triple saut', 'Le bodybuilding', 'Le cyclisme'], correct: 2 },
    { texte: 'Safoura Compaoré a été sacrée championne d\'Afrique de bodybuilding (catégorie Wellness) pour la première fois en :', options: ['2022', '2023', '2024', '2025'], correct: 1 },
    { texte: 'Hugues Fabrice Zango est le premier médaillé olympique burkinabè. Quelle médaille a-t-il remportée à Tokyo 2020 ?', options: ['Or', 'Argent', 'Bronze', 'Aucune médaille'], correct: 2 },
    { texte: 'Hugues Fabrice Zango est champion du monde en plein air (Budapest 2023) et champion du monde en salle (Glasgow 2024). Il est également :', options: ['Champion d\'Afrique', 'Détenteur du record d\'Afrique', 'Détenteur du record du monde en salle', 'Toutes ces réponses'], correct: 3 },
    { texte: 'Le record du monde en salle de Zango (18,07 m) a été établi le 16 janvier 2021 à :', options: ['Ouagadougou', 'Paris', 'Aubière', 'Glasgow'], correct: 2 },
    { texte: 'Le record du monde plein air du triple saut (18,29 m) est détenu par :', options: ['Teddy Tamgho (France)', 'Jonathan Edwards (Royaume-Uni)', 'Christian Taylor (États-Unis)', 'Hugues Fabrice Zango (Burkina)'], correct: 1 },
    { texte: 'Hugues Fabrice Zango est docteur en :', options: ['Médecine', 'Génie électrique', 'Droit', 'Sciences du sport'], correct: 1 },
    { texte: 'Après les Mondiaux de Tokyo (septembre 2025), Zango a :', options: ['Annoncé sa retraite sportive', 'Battu son propre record', 'Changé de discipline', 'Créé sa propre fédération'], correct: 0 },
    { texte: 'Iron Biby (Cheick Ahmed Al-Hassan Sanou) est spécialisé dans :', options: ['Le triple saut', 'L\'heptathlon', 'Le log lift (force athlétique)', 'Le cyclisme'], correct: 2 },
    { texte: 'Iron Biby est surnommé :', options: ['L\'homme le plus rapide', 'L\'homme le plus fort du monde', 'Le roi de l\'athlétisme', 'Le champion des champions'], correct: 1 },
    { texte: 'Iron Biby a été sacré champion du monde de log lift en 2024 avec une performance de :', options: ['229 kg', '230 kg', '231 kg', '235 kg'], correct: 2 },
    { texte: 'Iron Biby est le premier Burkinabè à figurer dans le Livre Guinness des records (2018 et 2019) pour avoir :', options: ['Sauté la plus longue distance', 'Soulevé 82 fois une personne de 60 kg en une minute', 'Couru le marathon le plus rapide', 'Fait le plus de tractions en une minute'], correct: 1 },
    { texte: 'Marthe Koala pratique principalement :', options: ['Le triple saut', 'Le log lift', 'L\'heptathlon et le saut en longueur', 'Le cyclisme'], correct: 2 },
    { texte: 'Marthe Koala a remporté la médaille d\'or à l\'heptathlon lors des Jeux africains de 2019 à :', options: ['Accra', 'Rabat', 'Kinshasa', 'Brazzaville'], correct: 1 },
    { texte: 'Lors des Jeux de la Francophonie 2023 à Kinshasa, Marthe Koala a établi un nouveau record national au saut en longueur avec :', options: ['6,72 m', '6,81 m', '6,94 m', '7,02 m'], correct: 2 },
    { texte: 'Marthe Koala a participé aux Jeux olympiques de Paris 2024 au saut en longueur, terminant à la :', options: ['5e place', '7e place', '9e place', '12e place'], correct: 2 },
    { texte: 'Le Burkina Faso a participé à sa première CAN en 1978. Combien de participations totalise-t-il à ce jour ?', options: ['12', '13', '14', '15'], correct: 2 },
    { texte: 'Le Burkina Faso a terminé 4e de la CAN en 1998 (à domicile) et en :', options: ['2015', '2017', '2019', '2021'], correct: 3 },
    { texte: 'Quel est le nom du stade qui a accueilli la finale de la Supercoupe 2025 (Rahimo FC vs USFA) ?', options: ['Stade du 4-Août', 'Stade Wobi de Bobo-Dioulasso', 'Stade Municipal de Koudougou', 'Stade de la SONABEL'], correct: 1 },
    { texte: 'Le Racing Club de Bobo a remporté la première édition de la Coupe du Faso en 1987 contre :', options: ['ASF Bobo', 'Étoile Filante', 'ASFA Yennenga', 'USFA'], correct: 2 },
    { texte: 'L\'ASFA Yennenga (incluant Jeanne d\'Arc) et l\'Étoile Filante Ouagadougou comptent combien de titres de champion chacune ?', options: ['10', '11', '12', '13'], correct: 3 },
    { texte: 'Le Rail Club du Kadiogo a été champion du Burkina Faso en quelle saison récente ?', options: ['2021', '2022', '2023', '2024'], correct: 1 },
    { texte: 'La 38e édition de la Coupe du Faso (2025) a été remportée par Rahimo FC aux tirs au but contre :', options: ['Sporting des Cascades de Tenakourou', 'USFA', 'AS Douanes', 'Étoile Filante'], correct: 0 },
    { texte: 'Le coureur marocain Abdelati Saadoune a remporté le Tour du Faso en :', options: ['2000 et 2007', '2002 et 2009', '2004 et 2011', '2005 et 2012'], correct: 1 },
    { texte: 'La 36e édition du Tour du Faso (2024) a été remportée par :', options: ['Paul Daumont (Burkina)', 'Mohcine El Kouraji (Maroc)', 'Daniel Bichlmann (Allemagne)', 'Driss El Alouani (Maroc)'], correct: 1 },
    { texte: 'Le premier Burkinabè à avoir remporté deux éditions du Tour du Faso (1995 et 1997) est :', options: ['Mady Kaboré', 'Saïdou Rouamba', 'Ernest Zongo', 'Paul Daumont'], correct: 2 },
    { texte: 'L\'ancien recordman du monde du triple saut, Teddy Tamgho, est l\'entraîneur de :', options: ['Marthe Koala', 'Iron Biby', 'Hugues Fabrice Zango', 'Safoura Compaoré'], correct: 2 },
    { texte: 'En 2025, Daouda Soulama a remporté le championnat national de cyclisme sur route devant :', options: ['Paul Daumont', 'Saturnin Yaméogo', 'Souleymane Koné', 'Vincent Mouni'], correct: 1 },
    { texte: 'Le promoteur du Marathon des Échangeurs est :', options: ['Ouézen Louis Oulon', 'Télévision BF1', 'La Fédération burkinabè d\'athlétisme', 'Le Comité national olympique'], correct: 1 },
    { texte: 'Le semi-marathon Nahouri se déroule avec un départ au centre du village de :', options: ['Manga', 'Pô', 'Kombissiri', 'Léo'], correct: 1 },
    { texte: 'Iron Biby a obtenu son Master en administration des affaires à l\'université de :', options: ['Ouagadougou', 'Bobo-Dioulasso', 'Moncton (Canada)', 'Paris'], correct: 2 },
    { texte: 'Le 26 janvier 2026, Hugues Fabrice Zango a remis au Musée national de Ouagadougou :', options: ['Sa médaille olympique', 'Son record du monde', 'Le maillot de ses plus grandes victoires', 'Ses chaussures de compétition'], correct: 2 }
];

// =======================
// MISE À JOUR DE LA BANQUE DE QUESTIONS
// =======================

// Corrections completes (questions 1 a 633) extraites du document de correction fourni.
// Format compact: chaque token est la reponse de la question correspondante (1-indexee).
// Exemples: "b" (simple), "a,b" (multiple).
const importedCorrectionsRaw = 'b|c|c|c|b|c|b|b|d|b|c|c|c|b|b|a|c|c|c|c|a|a|b|c|c|c|a|b|b|b|a|c|b|b|b|c|b|c|b|c|a|b|d|d|c|b|b|c|a|a|b|b|c|b|c|b|c|c|c|c|b|b|a|b|c|c|b|b|b|a|c|b|c|c|c|b|b|c|b|a|c|c|b|c|b|b|d|b|a|c|b|c|a|b|c|c|b|b|b|b|b|b|b|c|c|b|b|a|d|b|b|b|a|c|b|c|b|b|a|b|a|b|c|a|c|c|c|c|c|c|b|b|a|c|b|b|a|b|a|c|b|b|b|b|b|a|c|b|b|b|b|b|c|c|c|b|b|b|a|b|b|c|c|c|b|c|a|c|c|c|a|b|c|b|c|c|d|a|b|c|b|b|c|d|b|c|b|b|b|b|c|b|c|d|d|b|c|b|b|a|c|b|c|b|b|b|d|b|c|b|b|a|b|b|b|b|b|c|c|b|a|b|c|b|d|b|b|a|c|b|b|a|c|b|c|b|c|c|c|b|c|c|b|a|c|c|b|a|c|d|a|b|b,c|a,b,d|c|c|b|c|c|a|c|a|d|b|c|c|c|c|c|a,b,c|c|b|b|c|a|a|d|b|a|c|c|b|c|b|c|c|b|c|d|a|a|b|c|d|c|b|a|c|a|b|c|b|b|b|b|b|c|a,b|b|c|a|a|a,b,d|c|a,b,d|b|b|a|c|a|a,b,d|b|b|b|c|c|c|b|d|c|a|c|a|a,b|d|c|a|a,b|a,b|c|b|a|b|b|c|b|d|b|c|c|b|a|b|c|b|a|a|b|a,b|a|c|d|a,d|b|a|c|b|a|b|d|b|c|b|a|c|a,b|b|b|a|b|a|c|c|a|a|c|c|a|b|c|c|b|a|b|b|c|a|c|b|c|c|a,b,c|a|c|b|a|c|c|b|c|c|a,b,c|c|a,b,c|a,b|a|a|c|a,b,c|a|b|a|c|b|c|c|a,b,c|a|a|b|c|c|c|c|b|b|a|a|d|c|b|b|b|b|b,c|c|c|b|b|c|a|b|c|a|a|a|c|c|c|c|b|b|b|a|b|c|c|a,b|a|b|a|a|c|b|b|b|b|b|a|b|b|c|c|b|b|c|c|c|c|b|a,b,d|c|c|b|b|b|b|b|a|c|b|b|a|b|a|c|b|b|b|c|c|b|c|b|c|a,b|c|b|b|b|b|b|a|b|c|d|c|b|c|b|a,b,c|c|c|c|c|c|c|c|c|c|c|a|a|b|c|b|c|a|c|a|b|b|a|b|c|b|b|a|b|c|a|b|c|a|b|c|c|b|b|c|b|c|c|c|b|c|b|c|c|b|b|b|c|a|b|c|b|d|c|a|c|b|c|c|c|b|b|a|b|b|b|c|b|c|d|c|b|b|a|c|b|c|b|c|b|c|c|c|d|b|c|d|b|a|b|b|c|c|b|b|b|c|c';

function letterToOptionIndex(letter) {
    const clean = (letter || '').toString().trim().toLowerCase();
    return ['a', 'b', 'c', 'd'].indexOf(clean);
}

function applyImportedCorrections() {
    const allQuestions = [];
    for (const theme in thematiques) {
        allQuestions.push(...thematiques[theme].questions);
    }

    const tokens = importedCorrectionsRaw.split('|');
    tokens.forEach((token, idx) => {
        const question = allQuestions[idx];
        if (!question || !token) return;

        const parts = token
            .split(',')
            .map(part => part.trim().toLowerCase())
            .filter(Boolean);

        const correctIndexes = parts
            .map(letterToOptionIndex)
            .filter(i => i >= 0);

        if (correctIndexes.length === 1) {
            question.correct = correctIndexes[0];
        } else if (correctIndexes.length > 1) {
            question.correct = correctIndexes;
        }
    });
}

function isMultiAnswerQuestion(question) {
    return Array.isArray(question.correct);
}

function isOptionSelected(questionIndex, optionIndex, question) {
    if (isMultiAnswerQuestion(question)) {
        return Array.isArray(currentAnswers[questionIndex]) && currentAnswers[questionIndex].includes(optionIndex);
    }
    return currentAnswers[questionIndex] === optionIndex;
}

function isAnswerCorrect(question, answer) {
    if (!isMultiAnswerQuestion(question)) {
        return answer === question.correct;
    }

    const user = Array.isArray(answer) ? [...answer].sort((a, b) => a - b) : [];
    const expected = [...question.correct].sort((a, b) => a - b);

    if (user.length !== expected.length) {
        return false;
    }

    return expected.every((val, i) => val === user[i]);
}

function formatUserAnswer(question, answer) {
    if (!isMultiAnswerQuestion(question)) {
        return answer !== null && answer !== undefined ? question.options[answer] : 'Non repondue';
    }

    if (!Array.isArray(answer) || answer.length === 0) {
        return 'Non repondue';
    }

    return answer.map(i => question.options[i]).join(' ; ');
}

function formatCorrectAnswer(question) {
    if (!isMultiAnswerQuestion(question)) {
        return question.options[question.correct];
    }
    return question.correct.map(i => question.options[i]).join(' ; ');
}

// Fonction pour mettre à jour la banque de questions avec toutes les thématiques
function mettreAJourBanqueQuestions() {
    banqueQuestions = [];
    for (const theme in thematiques) {
        banqueQuestions.push(...thematiques[theme].questions);
    }
    const afriqueThemes = (typeof globalThis !== 'undefined' && globalThis.thematiquesAfrique)
        ? globalThis.thematiquesAfrique
        : null;
    if (afriqueThemes) {
        for (const theme in afriqueThemes) {
            banqueQuestions.push(...afriqueThemes[theme].questions);
        }
    }
    const mondeThemes = (typeof globalThis !== 'undefined' && globalThis.thematiquesMonde)
        ? globalThis.thematiquesMonde
        : null;
    if (mondeThemes) {
        for (const theme in mondeThemes) {
            banqueQuestions.push(...mondeThemes[theme].questions);
        }
    }
    const diversesSeries = (typeof globalThis !== 'undefined' && globalThis.seriesDiverses)
        ? globalThis.seriesDiverses
        : null;
    if (diversesSeries) {
        for (const serie in diversesSeries) {
            const questions = diversesSeries[serie] && Array.isArray(diversesSeries[serie].questions)
                ? diversesSeries[serie].questions
                : [];
            banqueQuestions.push(...questions);
        }
    }
    console.log(`✅ ${banqueQuestions.length} questions chargées pour les examens`);
}

applyImportedCorrections();

// Appel pour mettre à jour
mettreAJourBanqueQuestions();


// Fonction pour générer un examen aléatoire
function genererExamen(nombreQuestions = 50) {
    const shuffled = [...banqueQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, nombreQuestions);
}

// =======================
// FONCTIONS DE NAVIGATION DES QUIZ
// =======================

let currentQuiz = null;
let currentAnswers = [];
let currentThemeContext = null;

function getCollectionByGroup(group) {
    if (group === 'burkina') return thematiques;
    if (group === 'monde') return thematiquesMonde;
    if (group === 'diverses') return seriesDiverses;
    if (group === 'afrique') {
        if (typeof globalThis !== 'undefined' && globalThis.thematiquesAfrique) {
            return globalThis.thematiquesAfrique;
        }
        return null;
    }
    return null;
}

function restartCurrentThemeQuiz() {
    if (!currentThemeContext) {
        showQuizThematique();
        return;
    }

    const { group, key } = currentThemeContext;
    if (group === 'burkina') return demarrerQuiz(key);
    if (group === 'afrique') return demarrerQuizAfrique(key);
    if (group === 'monde') return demarrerQuizMonde(key);
    if (group === 'diverses') return demarrerSerieDiverses(key);
    showQuizThematique();
}

function startNextThemeQuiz() {
    if (!currentThemeContext) {
        showQuizThematique();
        return;
    }

    const { group, key } = currentThemeContext;
    const collection = getCollectionByGroup(group);
    if (!collection) {
        alert('Impossible de charger la thématique suivante.');
        showQuizThematique();
        return;
    }

    const keys = Object.keys(collection);
    const currentIndex = keys.indexOf(key);
    const nextIndex = currentIndex + 1;
    if (currentIndex < 0 || nextIndex >= keys.length) {
        if (group === 'diverses') {
            alert('Vous etes deja sur la derniere serie de cette rubrique.');
        } else {
            alert('Vous etes deja sur la derniere thematique de cette rubrique.');
        }
        if (group === 'burkina' || group === 'afrique' || group === 'monde') {
            if (group === 'burkina') showThemesBurkinaFaso();
            if (group === 'afrique') showThemesAfrique();
            if (group === 'monde') showThemesMonde();
        } else if (group === 'diverses') {
            showSeriesDiverses();
        } else {
            showQuizThematique();
        }
        return;
    }

    const nextKey = keys[nextIndex];
    if (group === 'burkina') return demarrerQuiz(nextKey);
    if (group === 'afrique') return demarrerQuizAfrique(nextKey);
    if (group === 'monde') return demarrerQuizMonde(nextKey);
    if (group === 'diverses') return demarrerSerieDiverses(nextKey);
}

const seriesDiverses = (typeof globalThis !== 'undefined' && globalThis.seriesDiverses)
    ? globalThis.seriesDiverses
    : {};

function getTotalQuestionsDiverses() {
    return Object.values(seriesDiverses).reduce((total, serie) => {
        const questions = Array.isArray(serie?.questions) ? serie.questions.length : 0;
        return total + questions;
    }, 0);
}

const thematiquesMonde = (typeof globalThis !== 'undefined' && globalThis.thematiquesMonde)
    ? globalThis.thematiquesMonde
    : {
    "les_anciennes_civilisations":  {
                                        "titre":  "Les anciennes civilisations",
                                        "questions":  [
                                                          {
                                                              "id":  1408,
                                                              "texte":  "Le nom \"Mésopotamie\" signifie en grec",
                                                              "options":  [
                                                                              "\"Pays des deux fleuves\"",
                                                                              "\"Pays entre les fleuves\"",
                                                                              "\"Terre fertile\"",
                                                                              "\"Berceau de l\u0027écriture\""
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1409,
                                                              "texte":  "La Mésopotamie antique correspond principalement à l\u0027actuel",
                                                              "options":  [
                                                                              "Iran et Afghanistan",
                                                                              "Irak et Syrie",
                                                                              "Turquie et Syrie",
                                                                              "Arabie saoudite et Koweït"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1410,
                                                              "texte":  "Les deux fleuves qui bordent la Mésopotamie sont le Tigre et",
                                                              "options":  [
                                                                              "Le Nil",
                                                                              "Le Jourdain",
                                                                              "L\u0027Euphrate",
                                                                              "L\u0027Indus"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1411,
                                                              "texte":  "Le premier système d\u0027écriture, apparu en Mésopotamie vers 3400-3200 av. J.-C., est appelé",
                                                              "options":  [
                                                                              "Hiéroglyphes",
                                                                              "Cunéiforme",
                                                                              "Alphabet phénicien",
                                                                              "Linéaire A"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1412,
                                                              "texte":  "L\u0027écriture cunéiforme était gravée sur",
                                                              "options":  [
                                                                              "Du papyrus",
                                                                              "Des tablettes d\u0027argile",
                                                                              "Des peaux d\u0027animaux",
                                                                              "Des stèles de pierre"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1413,
                                                              "texte":  "L\u0027écriture cunéiforme a évolué à partir de",
                                                              "options":  [
                                                                              "Des idéogrammes chinois",
                                                                              "Des pictogrammes (dessins)",
                                                                              "Des lettres phéniciennes",
                                                                              "Des signes alphabétiques"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1414,
                                                              "texte":  "Le premier empire connu de l\u0027histoire, fondé en Mésopotamie par Sargon, est",
                                                              "options":  [
                                                                              "L\u0027empire d\u0027Akkad",
                                                                              "L\u0027empire babylonien",
                                                                              "L\u0027empire assyrien",
                                                                              "L\u0027empire néo-babylonien"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1415,
                                                              "texte":  "Le Code de Hammurabi , l\u0027un des plus anciens codes juridiques, a été gravé vers 1750 av. J.-C. sur",
                                                              "options":  [
                                                                              "Une tablette d\u0027argile",
                                                                              "Une stèle de diorite",
                                                                              "Un mur de briques",
                                                                              "Un rouleau de papyrus"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1416,
                                                              "texte":  "Le Code de Hammurabi est célèbre pour le principe",
                                                              "options":  [
                                                                              "\"Œil pour œil, dent pour dent\"",
                                                                              "\"La loi est égale pour tous\"",
                                                                              "\"L\u0027innocent ne doit pas souffrir\"",
                                                                              "\"Le roi est la loi\""
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1417,
                                                              "texte":  "La ziggurat, caractéristique de l\u0027architecture mésopotamienne, était",
                                                              "options":  [
                                                                              "Un palais royal",
                                                                              "Une tour à étages servant de temple",
                                                                              "Une forteresse militaire",
                                                                              "Un tombeau souterrain"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1418,
                                                              "texte":  "La ziggurat était considérée comme",
                                                              "options":  [
                                                                              "La demeure du roi",
                                                                              "Une \"montagne des dieux\" et un pont entre le ciel et la terre",
                                                                              "Un observatoire astronomique",
                                                                              "Un grenier à grains"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1419,
                                                              "texte":  "L\u0027Épopée de Gilgamesh est l\u0027une des premières œuvres littéraires connues. Elle raconte la quête d\u0027immortalité du roi d\u0027",
                                                              "options":  [
                                                                              "Ur",
                                                                              "Uruk",
                                                                              "Babylone",
                                                                              "Ninive"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1420,
                                                              "texte":  "En Mésopotamie, la troisième dynastie d\u0027Ur a marqué une renaissance sumérienne. Ur était une cité-État située près de",
                                                              "options":  [
                                                                              "L\u0027Euphrate",
                                                                              "Le golfe Persique",
                                                                              "Le Tigre",
                                                                              "La mer Méditerranée"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1421,
                                                              "texte":  "La Grèce antique n\u0027était pas un État unifié, mais un ensemble de",
                                                              "options":  [
                                                                              "Royaumes fédérés",
                                                                              "Cités-États indépendantes (polis)",
                                                                              "Colonies",
                                                                              "Tribus nomades"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1422,
                                                              "texte":  "La démocratie athénienne a été instaurée sous Clisthène vers",
                                                              "options":  [
                                                                              "600 av. J.-C.",
                                                                              "550 av. J.-C.",
                                                                              "508 av. J.-C.",
                                                                              "450 av. J.-C."
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1424,
                                                              "texte":  "La démocratie athénienne était une démocratie",
                                                              "options":  [
                                                                              "Représentative",
                                                                              "Directe",
                                                                              "Parlementaire",
                                                                              "Présidentielle"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1425,
                                                              "texte":  "Les Jeux olympiques antiques ont été créés en 776 av. J.-C. à Olympie en l\u0027honneur de",
                                                              "options":  [
                                                                              "Athéna",
                                                                              "Zeus",
                                                                              "Apollon",
                                                                              "Poséidon"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1426,
                                                              "texte":  "Pendant les Jeux olympiques antiques, les guerres étaient suspendues par",
                                                              "options":  [
                                                                              "Un édit royal",
                                                                              "La trêve sacrée ( ekecheiria )",
                                                                              "L\u0027intervention des prêtres",
                                                                              "Une loi internationale"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1427,
                                                              "texte":  "La seule récompense pour les vainqueurs des Jeux olympiques antiques était",
                                                              "options":  [
                                                                              "Une médaille d\u0027or",
                                                                              "Une couronne d\u0027olivier",
                                                                              "Une somme d\u0027argent",
                                                                              "Un esclave"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1428,
                                                              "texte":  "Le théâtre est une invention grecque. Les deux grands genres sont la tragédie et",
                                                              "options":  [
                                                                              "La comédie",
                                                                              "La satire",
                                                                              "Le drame",
                                                                              "La farce"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1429,
                                                              "texte":  "Les représentations théâtrales à Athènes avaient lieu lors des fêtes religieuses en l\u0027honneur de",
                                                              "options":  [
                                                                              "Zeus",
                                                                              "Athéna",
                                                                              "Dionysos",
                                                                              "Apollon"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1430,
                                                              "texte":  "Homère est l\u0027auteur de l\u0027Iliade et de l\u0027Odyssée. L\u0027Iliade raconte",
                                                              "options":  [
                                                                              "Le retour d\u0027Ulysse à Ithaque",
                                                                              "La guerre de Troie et la colère d\u0027Achille",
                                                                              "Les aventures de Jason",
                                                                              "Les travaux d\u0027Héraclès"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1431,
                                                              "texte":  "Dans la mythologie grecque, Zeus est le roi des dieux. Son attribut principal est",
                                                              "options":  [
                                                                              "Le trident",
                                                                              "La foudre",
                                                                              "Le caducée",
                                                                              "Le casque d\u0027invisibilité"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1432,
                                                              "texte":  "Athéna, déesse de la sagesse et de la guerre stratégique, est née",
                                                              "options":  [
                                                                              "De l\u0027écume de la mer",
                                                                              "De la tête de Zeus",
                                                                              "De l\u0027union de Zeus et Héra",
                                                                              "Des Enfers"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1433,
                                                              "texte":  "Le héros grec Héraclès (Hercule) est célèbre pour avoir accompli",
                                                              "options":  [
                                                                              "Les 10 Travaux",
                                                                              "Les 12 Travaux",
                                                                              "Les 14 Travaux",
                                                                              "Les 15 Travaux"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1434,
                                                              "texte":  "Le Minotaure, mi-homme mi-taureau , était enfermé dans le Labyrinthe construit par Dédale. Il a été tué par",
                                                              "options":  [
                                                                              "Persée",
                                                                              "Thésée",
                                                                              "Jason",
                                                                              "Ulysse"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1435,
                                                              "texte":  "Le cheval de Troie est une ruse imaginée par Ulysse pour s\u0027emparer de la ville de Troie. Ce récit se trouve dans",
                                                              "options":  [
                                                                              "L\u0027Iliade",
                                                                              "L\u0027Odyssée",
                                                                              "L\u0027Énéide",
                                                                              "Les Travaux d\u0027Héraclès"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1436,
                                                              "texte":  "La Rome antique a été fondée, selon la légende, par Romulus en",
                                                              "options":  [
                                                                              "1000 av. J.-C.",
                                                                              "814 av. J.-C.",
                                                                              "753 av. J.-C.",
                                                                              "509 av. J.-C."
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1437,
                                                              "texte":  "La période de la République romaine s\u0027étend de 509 à 27 av. J.-C. Le pouvoir était partagé entre le Sénat, les magistrats et",
                                                              "options":  [
                                                                              "Le roi",
                                                                              "Les assemblées du peuple",
                                                                              "Les prêtres",
                                                                              "L\u0027armée"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1438,
                                                              "texte":  "Les guerres puniques (264-146 av. J.-C.) ont opposé Rome à",
                                                              "options":  [
                                                                              "La Grèce",
                                                                              "Carthage",
                                                                              "L\u0027Égypte",
                                                                              "La Macédoine"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1439,
                                                              "texte":  "Le général carthaginois Hannibal a traversé les Alpes avec des éléphants lors de la",
                                                              "options":  [
                                                                              "Première guerre punique",
                                                                              "Deuxième guerre punique",
                                                                              "Troisième guerre punique",
                                                                              "Guerre des Gaules"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1440,
                                                              "texte":  "Octave, vainqueur de Marc Antoine, devient le premier empereur romain en 27 av. J.-C. sous le nom de",
                                                              "options":  [
                                                                              "Jules César",
                                                                              "Auguste",
                                                                              "Tibère",
                                                                              "Néron"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1441,
                                                              "texte":  "L\u0027Empire romain d\u0027Occident s\u0027effondre en 476. L\u0027Empire romain d\u0027Orient (byzantin) s\u0027effondre en",
                                                              "options":  [
                                                                              "1204",
                                                                              "1453",
                                                                              "1492",
                                                                              "1521"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1442,
                                                              "texte":  "Le Panthéon de Rome est célèbre pour son dôme en béton. Les Romains ont révolutionné l\u0027architecture avec l\u0027invention",
                                                              "options":  [
                                                                              "De l\u0027arc",
                                                                              "Du béton (opus caementicium )",
                                                                              "De la voûte",
                                                                              "De la colonne"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1443,
                                                              "texte":  "Le Colisée à Rome était un",
                                                              "options":  [
                                                                              "Temple",
                                                                              "Amphithéâtre pour les combats de gladiateurs",
                                                                              "Forum",
                                                                              "Therme"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1444,
                                                              "texte":  "La politique du \"pain et des jeux\" ( panem et circenses ) consistait à offrir au peuple",
                                                              "options":  [
                                                                              "Du pain gratuit et des spectacles",
                                                                              "Des terres et des loisirs",
                                                                              "Des impôts réduits et des jeux",
                                                                              "Du vin et des courses"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1446,
                                                              "texte":  "Dans le panthéon romain, Jupiter est l\u0027équivalent de Zeus grec. Mars est l\u0027équivalent de",
                                                              "options":  [
                                                                              "Apollon",
                                                                              "Arès",
                                                                              "Hermès",
                                                                              "Poséidon"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1447,
                                                              "texte":  "Vénus est la déesse romaine de l\u0027amour. Elle est l\u0027équivalent de la déesse grecque",
                                                              "options":  [
                                                                              "Héra",
                                                                              "Athéna",
                                                                              "Aphrodite",
                                                                              "Artémis"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1448,
                                                              "texte":  "La civilisation de la vallée de l\u0027Indus est également appelée civilisation",
                                                              "options":  [
                                                                              "Harappéenne",
                                                                              "Védique",
                                                                              "Maurya",
                                                                              "Gupta"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1449,
                                                              "texte":  "La civilisation de la vallée de l\u0027Indus s\u0027est épanouie entre environ 2600 et 1900 av. J.-C. Elle est contemporaine des civilisations de",
                                                              "options":  [
                                                                              "La Grèce et Rome",
                                                                              "La Mésopotamie et l\u0027Égypte",
                                                                              "La Chine et le Japon",
                                                                              "Les Mayas et les Aztèques"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1450,
                                                              "texte":  "Les villes de la civilisation de la vallée de l\u0027Indus, comme Mohenjo-daro et Harappa, étaient remarquablement planifiées, avec",
                                                              "options":  [
                                                                              "Des rues organisées en damier",
                                                                              "Des systèmes d\u0027évacuation des eaux usées",
                                                                              "Des greniers et citadelles",
                                                                              "Toutes ces réponses"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1451,
                                                              "texte":  "L\u0027écriture de la civilisation de la vallée de l\u0027Indus",
                                                              "options":  [
                                                                              "Est parfaitement déchiffrée",
                                                                              "Est non déchiffrée à ce jour",
                                                                              "Est un alphabet",
                                                                              "Est identique aux hiéroglyphes égyptiens"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1452,
                                                              "texte":  "La civilisation maya s\u0027est développée principalement dans",
                                                              "options":  [
                                                                              "Les Andes",
                                                                              "Les forêts tropicales du Mexique et d\u0027Amérique centrale",
                                                                              "Les plaines de l\u0027Amazone",
                                                                              "Les déserts du Mexique"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1453,
                                                              "texte":  "Contrairement aux Aztèques ou aux Incas, les Mayas n\u0027ont jamais formé",
                                                              "options":  [
                                                                              "Un État unifié",
                                                                              "Une religion organisée",
                                                                              "Une écriture",
                                                                              "Un système de calendrier"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1454,
                                                              "texte":  "L\u0027apogée de la civilisation maya (art, architecture, sciences) se situe pendant la période",
                                                              "options":  [
                                                                              "Préclassique",
                                                                              "Classique (250-900 ap . J.-C.)",
                                                                              "Postclassique",
                                                                              "Coloniale"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1455,
                                                              "texte":  "Les Mayas ont développé un système de numération positionnel en base 20. Ils ont inventé la notion de",
                                                              "options":  [
                                                                              "Zéro",
                                                                              "Fractions",
                                                                              "Nombres négatifs",
                                                                              "Algèbre"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1456,
                                                              "texte":  "Le calendrier maya comprenait un calendrier sacré de 260 jours ( Tzolk\u0027in ) et un calendrier solaire de 365 jours appelé",
                                                              "options":  [
                                                                              "Haab \u0027",
                                                                              "Katun",
                                                                              "Baktun",
                                                                              "Uinal"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1457,
                                                              "texte":  "La société maya était dominée par un souverain divin appelé",
                                                              "options":  [
                                                                              "Ajaw",
                                                                              "K\u0027uhul ajaw (\"seigneur sacré\")",
                                                                              "Halach uinic",
                                                                              "Batab"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1458,
                                                              "texte":  "L\u0027empire inca, à son apogée, s\u0027étendait sur près de 2 millions de km². Il s\u0027appelait en quechua",
                                                              "options":  [
                                                                              "Tahuantinsuyu (\"les quatre parties du monde\")",
                                                                              "Tawantinsuyu",
                                                                              "Inti Raymi",
                                                                              "Vilcabamba"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1459,
                                                              "texte":  "L\u0027empereur inca était considéré comme le fils du dieu soleil, appelé",
                                                              "options":  [
                                                                              "Inti",
                                                                              "Viracocha",
                                                                              "Pachamama",
                                                                              "Mama Quilla"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1460,
                                                              "texte":  "L\u0027expansion inca a été fulgurante sous le règne de Pachacutec (1438-1471). Le Machu Picchu est attribué à",
                                                              "options":  [
                                                                              "Pachacutec",
                                                                              "Tupac Yupanqui",
                                                                              "Huayna Capac",
                                                                              "Atahualpa"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1461,
                                                              "texte":  "Les Incas n\u0027avaient pas d\u0027écriture. Ils utilisaient un système de cordelettes nouées pour enregistrer des données, appelé",
                                                              "options":  [
                                                                              "Quipu",
                                                                              "Chasqui",
                                                                              "Ayllu",
                                                                              "Mita"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1462,
                                                              "texte":  "L\u0027empire inca a été conquis par les Espagnols menés par Francisco Pizarro à partir de 1532, profitant d\u0027une guerre de succession entre",
                                                              "options":  [
                                                                              "Pachacutec et Tupac Yupanqui",
                                                                              "Huayna Capac et Ninan Cuyochi",
                                                                              "Huáscar et Atahualpa",
                                                                              "Manco Inca et Túpac Amaru"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1463,
                                                              "texte":  "Le Qhapaq Ñan était",
                                                              "options":  [
                                                                              "Le réseau routier inca (plus de 30 000 km)",
                                                                              "Le temple du Soleil à Cuzco",
                                                                              "La capitale inca",
                                                                              "Le code juridique inca"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1464,
                                                              "texte":  "L\u0027organisation sociale inca était fondée sur l\u0027ayllu, qui était",
                                                              "options":  [
                                                                              "Une communauté de parenté",
                                                                              "Une unité militaire",
                                                                              "Un marché",
                                                                              "Une classe sociale"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1465,
                                                              "texte":  "Les Incas pratiquaient la corvée obligatoire, appelée",
                                                              "options":  [
                                                                              "Mita",
                                                                              "Ayni",
                                                                              "Minca",
                                                                              "Chasqui"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1466,
                                                              "texte":  "La cité inca la plus célèbre, perchée dans les Andes, est",
                                                              "options":  [
                                                                              "Cuzco",
                                                                              "Ollantaytambo",
                                                                              "Machu Picchu",
                                                                              "Pisac"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1467,
                                                              "texte":  "Dans la mythologie grecque, Poséidon est le dieu de la mer. Son attribut est",
                                                              "options":  [
                                                                              "La foudre",
                                                                              "Le trident",
                                                                              "Le caducée",
                                                                              "La lyre"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1468,
                                                              "texte":  "Le héros grec Persée a tué Méduse, une Gorgone dont le regard pétrifiait. Méduse avait des cheveux de",
                                                              "options":  [
                                                                              "Serpents",
                                                                              "Feu",
                                                                              "Fleurs",
                                                                              "Épines"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1469,
                                                              "texte":  "Cerbère est le chien à trois têtes qui garde",
                                                              "options":  [
                                                                              "Le palais de Zeus",
                                                                              "L\u0027entrée des Enfers",
                                                                              "Les écuries d\u0027Augias",
                                                                              "Le jardin des Hespérides"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1470,
                                                              "texte":  "L\u0027hydre de Lerne est un serpent d\u0027eau à plusieurs têtes qui repoussent quand on les coupe. Elle a été tuée par",
                                                              "options":  [
                                                                              "Persée",
                                                                              "Héraclès",
                                                                              "Thésée",
                                                                              "Jason"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1471,
                                                              "texte":  "Le Sphinx, monstre à corps de lion, tête de femme et ailes d\u0027aigle, posait des énigmes. Œdipe a résolu l\u0027énigme",
                                                              "options":  [
                                                                              "\"Qui marche à quatre pattes le matin, deux à midi et trois le soir ?\"",
                                                                              "\"Quel est l\u0027animal qui n\u0027a jamais froid ?\"",
                                                                              "\"Qui est le plus fort des dieux ?\"",
                                                                              "\"Quel est le nom du héros qui me tuera ?\""
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1472,
                                                              "texte":  "Dans l\u0027Odyssée, Ulysse met 10 ans à revenir à Ithaque après la guerre de Troie. Il affronte le cyclope",
                                                              "options":  [
                                                                              "Polyphème",
                                                                              "Antée",
                                                                              "Géryon",
                                                                              "Cerbère"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1474,
                                                              "texte":  "Le serment d\u0027Hippocrate est un code de déontologie médicale hérité de la Grèce antique. Hippocrate est considéré comme",
                                                              "options":  [
                                                                              "Le père de la philosophie",
                                                                              "Le père de la médecine",
                                                                              "Le père de l\u0027histoire",
                                                                              "Le père des mathématiques"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1475,
                                                              "texte":  "La civilisation maya a décliné à partir de la fin du VIIIe siècle. Les causes probables sont",
                                                              "options":  [
                                                                              "Sécheresses",
                                                                              "Guerres",
                                                                              "Crises écologiques",
                                                                              "Toutes ces réponses"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1476,
                                                              "texte":  "Les codex mayas étaient des livres fabriqués à partir de",
                                                              "options":  [
                                                                              "Peau de bête",
                                                                              "Papier d\u0027écorce",
                                                                              "Argile",
                                                                              "Métal"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1477,
                                                              "texte":  "Le dieu inca Viracocha était considéré comme",
                                                              "options":  [
                                                                              "Le dieu soleil",
                                                                              "Le dieu créateur",
                                                                              "Le dieu de la guerre",
                                                                              "Le dieu de la lune"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1478,
                                                              "texte":  "Les sacrifices humains chez les Incas, appelés capacocha , étaient pratiqués",
                                                              "options":  [
                                                                              "Régulièrement chaque mois",
                                                                              "Lors d\u0027événements majeurs (catastrophes, décès de l\u0027empereur)",
                                                                              "Jamais",
                                                                              "Uniquement pour les prisonniers de guerre"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1479,
                                                              "texte":  "Le quechua, langue des Incas, est encore parlé aujourd\u0027hui par des millions de personnes dans les Andes. L\u0027autre grande langue amérindienne des Andes est",
                                                              "options":  [
                                                                              "Le guarani",
                                                                              "L\u0027aymara",
                                                                              "Le nahuatl",
                                                                              "Le maya"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1484,
                                                              "texte":  "La volonté de retrouver le légendaire royaume du \"Prêtre Jean\" (identifié plus tard au Négus d\u0027Éthiopie) relève des causes",
                                                              "options":  [
                                                                              "Économiques",
                                                                              "Politiques",
                                                                              "Religieuses",
                                                                              "Scientifiques"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1488,
                                                              "texte":  "Marco Polo (1271-1295) a traversé l\u0027Asie centrale et séjourné à la cour de Kubilai Khan. Son \"Livre des merveilles\" a décrit les richesses de",
                                                              "options":  [
                                                                              "L\u0027Afrique",
                                                                              "L\u0027Amérique",
                                                                              "L\u0027Orient ( Cipangu , Cathay)",
                                                                              "L\u0027Europe du Nord"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1489,
                                                              "texte":  "L\u0027explorateur marocain Ibn Battûta (1325-1355) a parcouru pendant trente ans",
                                                              "options":  [
                                                                              "Seulement l\u0027Afrique du Nord",
                                                                              "Le Moyen-Orient, l\u0027Afrique, l\u0027Asie centrale, l\u0027Inde et la Chine",
                                                                              "Les Amériques",
                                                                              "L\u0027Europe uniquement"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1490,
                                                              "texte":  "Le prince portugais qui a impulsé l\u0027exploration systématique des côtes africaines est surnommé",
                                                              "options":  [
                                                                              "Henri le Conquérant",
                                                                              "Henri le Navigateur",
                                                                              "Henri le Grand",
                                                                              "Henri le Marin"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1491,
                                                              "texte":  "Gil Eanes a franchi le cap Bojador en 1434. Ce cap était considéré jusqu\u0027alors comme",
                                                              "options":  [
                                                                              "Le point le plus au sud de l\u0027Afrique",
                                                                              "Infranchissable",
                                                                              "La porte de l\u0027Inde",
                                                                              "Le début de l\u0027Amérique"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1492,
                                                              "texte":  "Bartolomeu Dias a doublé le \"cap des Tempêtes\" en 1487-1488. Le roi Jean II du Portugal l\u0027a rebaptisé",
                                                              "options":  [
                                                                              "Cap Vert",
                                                                              "Cap de Bonne-Espérance",
                                                                              "Cap Horn",
                                                                              "Cap des Aiguilles"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1494,
                                                              "texte":  "Pedro Álvares Cabral, en tentant de suivre la route de Vasco de Gama, a été déporté vers l\u0027ouest par les alizés et a découvert",
                                                              "options":  [
                                                                              "L\u0027Afrique du Sud",
                                                                              "Le Brésil",
                                                                              "Les Antilles",
                                                                              "Madagascar"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1499,
                                                              "texte":  "Le nouveau continent a été nommé \" America \" en l\u0027honneur d\u0027 Amerigo Vespucci, qui a le premier compris qu\u0027il s\u0027agissait",
                                                              "options":  [
                                                                              "D\u0027une partie de l\u0027Asie",
                                                                              "D\u0027une terra nova distincte de l\u0027Asie",
                                                                              "D\u0027une île gigantesque",
                                                                              "Du jardin d\u0027Éden"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1503,
                                                              "texte":  "L\u0027afflux massif d\u0027or et d\u0027argent des Amériques (mines du Potosí, Zacatecas) a provoqué en Europe",
                                                              "options":  [
                                                                              "Une baisse des prix (déflation)",
                                                                              "Une \"révolution des prix\" (inflation)",
                                                                              "Une crise monétaire",
                                                                              "L\u0027abandon de l\u0027étalon-or"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1505,
                                                              "texte":  "L\u0027« échange colombien » désigne",
                                                              "options":  [
                                                                              "Le commerce triangulaire",
                                                                              "Le transfert biologique et culturel entre l\u0027Ancien et le Nouveau Monde",
                                                                              "L\u0027échange de marchandises entre l\u0027Europe et l\u0027Asie",
                                                                              "La découverte de l\u0027Amérique par Christophe Colomb"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1508,
                                                              "texte":  "Les maladies infectieuses importées d\u0027Europe en Amérique (variole, rougeole, grippe) ont provoqué",
                                                              "options":  [
                                                                              "Une légère baisse de la population amérindienne",
                                                                              "Un effondrement démographique (80 à 90 % en un siècle)",
                                                                              "Une immunité naturelle des Amérindiens",
                                                                              "Une migration massive des Amérindiens vers l\u0027Europe"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1509,
                                                              "texte":  "La traite atlantique organisée d\u0027esclaves noirs d\u0027Afrique vers l\u0027Amérique a débuté dès",
                                                              "options":  [
                                                                              "1450",
                                                                              "1492",
                                                                              "1520",
                                                                              "1600"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1510,
                                                              "texte":  "Hernán Cortés a soumis l\u0027empire aztèque entre 1519 et 1521. Francisco Pizarro a soumis l\u0027empire inca entre",
                                                              "options":  [
                                                                              "1521-1525",
                                                                              "1531-1535",
                                                                              "1540-1545",
                                                                              "1550-1555"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1513,
                                                              "texte":  "Le détroit qui sépare l\u0027Amérique du Sud de la Terre de Feu porte le nom de",
                                                              "options":  [
                                                                              "Détroit de Magellan",
                                                                              "Détroit de Drake",
                                                                              "Détroit de Béring",
                                                                              "Détroit de Gibraltar"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1517,
                                                              "texte":  "Le légendaire royaume du \"Prêtre Jean\" a été identifié par les Européens au royaume chrétien d\u0027",
                                                              "options":  [
                                                                              "Nubie",
                                                                              "Éthiopie",
                                                                              "Congo",
                                                                              "Arménie"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1520,
                                                              "texte":  "Le gouvernail d\u0027étambot, fixé sous la coque, permettait",
                                                              "options":  [
                                                                              "De mieux remonter le vent",
                                                                              "De contrôler la direction plus efficacement",
                                                                              "D\u0027augmenter la vitesse",
                                                                              "De stabiliser le navire"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1522,
                                                              "texte":  "L\u0027empire inca a été conquis par Francisco Pizarro alors qu\u0027il était affaibli par une guerre de succession entre",
                                                              "options":  [
                                                                              "Pachacutec et Tupac Yupanqui",
                                                                              "Huáscar et Atahualpa",
                                                                              "Manco Inca et Túpac Amaru",
                                                                              "Huayna Capac et Ninan Cuyochi"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1523,
                                                              "texte":  "Le royaume de Kongo, en Afrique centrale, a été un des premiers à entrer en contact avec les Portugais. Le roi Nzinga Nkuwu a été baptisé en",
                                                              "options":  [
                                                                              "1482",
                                                                              "1491",
                                                                              "1500",
                                                                              "1520"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1525,
                                                              "texte":  "La guerre de Sept Ans (1756-1763) a laissé la Grande-Bretagne",
                                                              "options":  [
                                                                              "Enrichie et sans dettes",
                                                                              "Lourdement endettée, cherchant à accroître ses revenus",
                                                                              "Affaiblie militairement",
                                                                              "Alliée à la France"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1526,
                                                              "texte":  "Le cri de ralliement des colons américains contre les taxes britanniques était",
                                                              "options":  [
                                                                              "\"Liberté, égalité, fraternité\"",
                                                                              "\"No taxation without representation \"",
                                                                              "\"Vivre libre ou mourir\"",
                                                                              "\"Un pour tous, tous pour un\""
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1531,
                                                              "texte":  "Les premiers affrontements armés de la guerre d\u0027indépendance américaine ont eu lieu à Lexington et Concord en",
                                                              "options":  [
                                                                              "Avril 1775",
                                                                              "Juillet 1776",
                                                                              "Octobre 1777",
                                                                              "Septembre 1781"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1532,
                                                              "texte":  "La Déclaration d\u0027indépendance des États-Unis a été adoptée le 4 juillet 1776. Elle a été rédigée principalement par",
                                                              "options":  [
                                                                              "George Washington",
                                                                              "Benjamin Franklin",
                                                                              "Thomas Jefferson",
                                                                              "John Adams"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1533,
                                                              "texte":  "La Déclaration d\u0027indépendance proclame les droits inaliénables à",
                                                              "options":  [
                                                                              "\"La vie, la liberté et la propriété\"",
                                                                              "\"La vie, la liberté et la recherche du bonheur\"",
                                                                              "\"La liberté, l\u0027égalité et la fraternité\"",
                                                                              "\"La paix, le travail et la justice\""
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1534,
                                                              "texte":  "L\u0027Armée continentale, pendant la guerre d\u0027indépendance américaine, était commandée par",
                                                              "options":  [
                                                                              "Thomas Jefferson",
                                                                              "Benjamin Franklin",
                                                                              "George Washington",
                                                                              "Marquis de La Fayette"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1536,
                                                              "texte":  "Le traité d\u0027alliance entre la France et les insurgés américains a été signé en",
                                                              "options":  [
                                                                              "1776",
                                                                              "1777",
                                                                              "1778",
                                                                              "1779"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1537,
                                                              "texte":  "La capitulation britannique à Yorktown (1781) a scellé le sort de la guerre d\u0027indépendance. Les troupes françaises étaient commandées par",
                                                              "options":  [
                                                                              "La Fayette",
                                                                              "Rochambeau",
                                                                              "De Grasse",
                                                                              "Napoléon Bonaparte"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1538,
                                                              "texte":  "Le traité de Paris (1783) a reconnu",
                                                              "options":  [
                                                                              "La souveraineté britannique sur les colonies",
                                                                              "L\u0027indépendance des États-Unis",
                                                                              "Le partage de l\u0027Amérique du Nord entre la France et l\u0027Angleterre",
                                                                              "La création du Canada"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1539,
                                                              "texte":  "La Constitution des États-Unis (1787) instaure une république fédérale avec un équilibre des pouvoirs. Le premier président des États-Unis (1789-1797) fut",
                                                              "options":  [
                                                                              "Thomas Jefferson",
                                                                              "John Adams",
                                                                              "George Washington",
                                                                              "Benjamin Franklin"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1540,
                                                              "texte":  "La Constitution des États-Unis est la plus ancienne constitution écrite encore en vigueur. Le Bill of Rights (1791) ajoute les libertés fondamentales, dont",
                                                              "options":  [
                                                                              "Liberté d\u0027expression",
                                                                              "Liberté de religion",
                                                                              "Droit de porter des armes",
                                                                              "Toutes ces réponses"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1541,
                                                              "texte":  "La Révolution française a débuté officiellement le 5 mai 1789 avec",
                                                              "options":  [
                                                                              "La prise de la Bastille",
                                                                              "La réunion des États généraux à Versailles",
                                                                              "Le Serment du Jeu de paume",
                                                                              "L\u0027abolition des privilèges"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1542,
                                                              "texte":  "La société française d\u0027Ancien Régime était divisée en trois ordres : le Clergé (1er ordre), la Noblesse (2e ordre) et",
                                                              "options":  [
                                                                              "La Bourgeoisie (3e ordre)",
                                                                              "Le Tiers état (3e ordre)",
                                                                              "Le Peuple (3e ordre)",
                                                                              "Les paysans (3e ordre)"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1551,
                                                              "texte":  "La Première République française a été proclamée le 21 septembre 1792, après",
                                                              "options":  [
                                                                              "La prise de la Bastille",
                                                                              "L\u0027abolition de la monarchie (10 août 1792)",
                                                                              "La mort de Louis XVI",
                                                                              "Le coup d\u0027État du 18 Brumaire"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1553,
                                                              "texte":  "La Terreur (1793-1794) se caractérisait par",
                                                              "options":  [
                                                                              "La loi des suspects",
                                                                              "Le Tribunal révolutionnaire",
                                                                              "Les exécutions massives (guillotine)",
                                                                              "Toutes ces réponses"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1556,
                                                              "texte":  "Le coup d\u0027État du 18 Brumaire (9 novembre 1799) a été mené par",
                                                              "options":  [
                                                                              "Robespierre",
                                                                              "Danton",
                                                                              "Napoléon Bonaparte",
                                                                              "La Fayette"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1557,
                                                              "texte":  "Le coup d\u0027État du 18 Brumaire a mis fin à la Révolution et instauré le Consulat. Napoléon Bonaparte est devenu",
                                                              "options":  [
                                                                              "Premier consul",
                                                                              "Consul à vie",
                                                                              "Empereur",
                                                                              "Président de la République"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1558,
                                                              "texte":  "Napoléon Bonaparte a consolidé les acquis de la Révolution en",
                                                              "options":  [
                                                                              "Abolissant les privilèges",
                                                                              "Vendang les biens nationaux",
                                                                              "Rédigeant le Code civil",
                                                                              "Toutes ces réponses"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1559,
                                                              "texte":  "Les États généraux de 1789 se sont bloqués sur la question",
                                                              "options":  [
                                                                              "Du vote par tête ou par ordre",
                                                                              "De l\u0027abolition de la monarchie",
                                                                              "De la déclaration de guerre à l\u0027Autriche",
                                                                              "Du partage des terres"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1565,
                                                              "texte":  "La \"loi des suspects\" (septembre 1793) permettait d\u0027arrêter",
                                                              "options":  [
                                                                              "Les ennemis de la Révolution",
                                                                              "Les nobles",
                                                                              "Les prêtres réfractaires",
                                                                              "Toutes les personnes suspectées d\u0027opposition"
                                                                          ],
                                                              "correct":  3
                                                          },
                                                          {
                                                              "id":  1566,
                                                              "texte":  "Le Tribunal révolutionnaire a été créé pour juger les \"ennemis de la Révolution\". Ses condamnations se terminaient presque toujours par",
                                                              "options":  [
                                                                              "L\u0027emprisonnement",
                                                                              "La déportation",
                                                                              "La guillotine",
                                                                              "La libération"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1567,
                                                              "texte":  "La guerre de Vendée (1793-1796) a été réprimée par l\u0027armée républicaine avec une extrême brutalité. Le nombre de victimes est estimé entre",
                                                              "options":  [
                                                                              "10 000 et 20 000",
                                                                              "50 000 et 100 000",
                                                                              "170 000 et 250 000",
                                                                              "500 000 et 1 000 000"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1568,
                                                              "texte":  "Le calendrier républicain a été instauré par la Révolution. L\u0027an I a commencé le",
                                                              "options":  [
                                                                              "1er janvier 1792",
                                                                              "14 juillet 1789",
                                                                              "22 septembre 1792 (proclamation de la République)",
                                                                              "1er janvier 1793"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1569,
                                                              "texte":  "La Révolution française a inspiré des mouvements démocratiques dans le monde, notamment",
                                                              "options":  [
                                                                              "La révolution américaine",
                                                                              "Les révolutions de 1830 et 1848 en Europe",
                                                                              "La révolution russe de 1917",
                                                                              "La décolonisation de l\u0027Afrique"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1570,
                                                              "texte":  "La révolution industrielle a débuté en Grande-Bretagne à la fin du",
                                                              "options":  [
                                                                              "XVIIe siècle",
                                                                              "XVIIIe siècle",
                                                                              "XIXe siècle",
                                                                              "XXe siècle"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1571,
                                                              "texte":  "Le déclenchement officiel de la guerre de Cent Ans a lieu lorsque le roi d\u0027Angleterre Édouard III revendique le trône de France en tant que petit-fils de",
                                                              "options":  [
                                                                              "Philippe III le Hardi",
                                                                              "Philippe IV le Bel",
                                                                              "Louis X le Hutin",
                                                                              "Charles IV le Bel"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1571,
                                                              "texte":  "Les enclosures (regroupement des terres) et les nouvelles techniques agricoles ont provoqué",
                                                              "options":  [
                                                                              "Une baisse de la productivité agricole",
                                                                              "Une augmentation de la productivité agricole",
                                                                              "L\u0027exode rural",
                                                                              "La libération de main-d\u0027œuvre pour l\u0027industrie"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1573,
                                                              "texte":  "La guerre de Cent Ans est traditionnellement divisée en trois grandes phases : édouardienne, caroline et",
                                                              "options":  [
                                                                              "Valoisienne",
                                                                              "Lancastrienne",
                                                                              "Plantagenêt",
                                                                              "Capétienne"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1574,
                                                              "texte":  "La machine à vapeur a été améliorée par",
                                                              "options":  [
                                                                              "Darby",
                                                                              "Watt",
                                                                              "Bessemer",
                                                                              "Edison"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1574,
                                                              "texte":  "La phase édouardienne (1337-1360) est marquée par les victoires anglaises de Crécy (1346) et",
                                                              "options":  [
                                                                              "Azincourt (1415)",
                                                                              "Poitiers (1356)",
                                                                              "Formigny (1450)",
                                                                              "Castillon (1453)"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1575,
                                                              "texte":  "La phase caroline (1369-1389) voit les Français reprendre l\u0027avantage sous la direction du roi Charles V le Sage et du connétable",
                                                              "options":  [
                                                                              "Bertrand du Guesclin",
                                                                              "Jean de Bureau",
                                                                              "La Hire",
                                                                              "Gilles de Rais"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1576,
                                                              "texte":  "La phase lancastrienne (1415-1453) est marquée par la victoire anglaise écrasante à Azincourt (1415) et le traité de Troyes (1420) qui",
                                                              "options":  [
                                                                              "Met fin à la guerre",
                                                                              "Déshérite le dauphin Charles (futur Charles VII)",
                                                                              "Donne la Guyenne à l\u0027Angleterre",
                                                                              "Proclame Jeanne d\u0027Arc sainte"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1577,
                                                              "texte":  "L\u0027intervention de Jeanne d\u0027Arc en 1429 est un tournant décisif. Elle lève le siège de",
                                                              "options":  [
                                                                              "Paris",
                                                                              "Orléans",
                                                                              "Reims",
                                                                              "Rouen"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1577,
                                                              "texte":  "Le libéralisme économique prône",
                                                              "options":  [
                                                                              "La libre concurrence",
                                                                              "Le protectionnisme",
                                                                              "Le laissez-faire",
                                                                              "L\u0027interventionnisme d\u0027État"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1578,
                                                              "texte":  "Selon Max Weber, l\u0027éthique protestante (notamment calviniste) a favorisé le capitalisme en valorisant",
                                                              "options":  [
                                                                              "Le travail",
                                                                              "L\u0027épargne",
                                                                              "La réussite matérielle",
                                                                              "L\u0027oisiveté"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1578,
                                                              "texte":  "Jeanne d\u0027Arc fait sacrer Charles VII à Reims en 1429. Elle est capturée par les Bourguignons et brûlée vive par les Anglais en",
                                                              "options":  [
                                                                              "1430",
                                                                              "1431",
                                                                              "1432",
                                                                              "1433"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1579,
                                                              "texte":  "Le premier secteur à être mécanisé lors de la première révolution industrielle fut",
                                                              "options":  [
                                                                              "La sidérurgie",
                                                                              "L\u0027industrie textile (coton)",
                                                                              "Les transports",
                                                                              "La chimie"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1579,
                                                              "texte":  "L\u0027alliance franco-bourguignonne (traité d\u0027Arras, 1435) isole les Anglais. La Bourgogne était alors alliée à l\u0027Angleterre depuis le traité de",
                                                              "options":  [
                                                                              "Troyes (1420)",
                                                                              "Arras (1435)",
                                                                              "Paris (1423)",
                                                                              "Amiens (1425)"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1580,
                                                              "texte":  "Charles VII réorganise l\u0027armée française en créant une armée permanente et en développant",
                                                              "options":  [
                                                                              "La cavalerie lourde",
                                                                              "L\u0027artillerie",
                                                                              "La marine",
                                                                              "Les archers"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1580,
                                                              "texte":  "La navette volante, la spinning jenny, la water frame et le métier à tisser mécanique sont des inventions liées à",
                                                              "options":  [
                                                                              "La métallurgie",
                                                                              "L\u0027industrie textile",
                                                                              "Les transports",
                                                                              "La chimie"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1581,
                                                              "texte":  "Les pays moteurs de la première révolution industrielle (fin XVIIIe - milieu XIXe siècle) étaient",
                                                              "options":  [
                                                                              "Royaume-Uni, Belgique, France, Suisse",
                                                                              "Allemagne, États-Unis, Japon",
                                                                              "Russie, Italie, Espagne",
                                                                              "Pays-Bas, Suède, Danemark"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1582,
                                                              "texte":  "Les pays moteurs de la deuxième révolution industrielle (fin XIXe - début XXe siècle) étaient",
                                                              "options":  [
                                                                              "Royaume-Uni, Belgique, France",
                                                                              "Allemagne, États-Unis, Japon",
                                                                              "Suisse, Suède, Norvège",
                                                                              "Russie, Italie, Espagne"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1582,
                                                              "texte":  "Après la guerre de Cent Ans, les Anglais ne conservent qu\u0027une seule possession en France",
                                                              "options":  [
                                                                              "Bordeaux",
                                                                              "Bayonne",
                                                                              "Calais",
                                                                              "Cherbourg"
                                                                          ],
                                                              "correct":  2
                                                          },
                                                          {
                                                              "id":  1583,
                                                              "texte":  "La guerre de Cent Ans a pour conséquence",
                                                              "options":  [
                                                                              "L\u0027affirmation des identités nationales française et anglaise",
                                                                              "L\u0027affaiblissement de la noblesse féodale au profit du pouvoir royal (monarchie absolue en France)",
                                                                              "Le déclin de la cavalerie lourde face à l\u0027infanterie et à l\u0027artillerie",
                                                                              "L\u0027unification des deux royaumes"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1584,
                                                              "texte":  "Jeanne d\u0027Arc a été canonisée par l\u0027Église catholique en",
                                                              "options":  [
                                                                              "1909",
                                                                              "1920",
                                                                              "1925",
                                                                              "1931"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1585,
                                                              "texte":  "La Première Guerre mondiale est également appelée",
                                                              "options":  [
                                                                              "La Grande Guerre",
                                                                              "La Der des Ders",
                                                                              "La Guerre des empires",
                                                                              "La Guerre totale"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1586,
                                                              "texte":  "L\u0027assassinat de l\u0027archiduc François-Ferdinand, héritier du trône d\u0027Autriche-Hongrie, a eu lieu le 28 juin 1914 à",
                                                              "options":  [
                                                                              "Vienne",
                                                                              "Sarajevo",
                                                                              "Belgrade",
                                                                              "Prague"
                                                                          ],
                                                              "correct":  1
                                                          },
                                                          {
                                                              "id":  1587,
                                                              "texte":  "L\u0027assassin de l\u0027archiduc François-Ferdinand était un nationaliste serbe de Bosnie nommé",
                                                              "options":  [
                                                                              "Gavrilo Princip",
                                                                              "Nedeljko Čabrinović",
                                                                              "Dragutin Dimitrijević (Apis)",
                                                                              "Nikola Pašić"
                                                                          ],
                                                              "correct":  0
                                                          },
                                                          {
                                                              "id":  1589,
                                                              "texte":  "La Triple-Alliance ( Triplice ) regroupait l\u0027Allemagne, l\u0027Autriche-Hongrie et",
                                                              "options":  [
                                                                              "La Russie",
                                                                              "L\u0027Italie",
                                                                              "La France",
                                                                              "Le Royaume-Uni"
                                                                          ],
                                                              "correct":  1
                                                          }
                                                      ]
                                    },
    "les_grandes_decouvertes":  {
                                    "titre":  "Les grandes découvertes",
                                    "questions":  [
                                                      {
                                                          "id":  1473,
                                                          "texte":  "La ville de Byzance, fondée par les Grecs, a été rebaptisée Constantinople par l\u0027empereur romain",
                                                          "options":  [
                                                                          "Dioclétien",
                                                                          "Constantin",
                                                                          "Théodose",
                                                                          "Justinien"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1480,
                                                          "texte":  "La prise de Constantinople par les Turcs ottomans en 1453 a eu pour conséquence",
                                                          "options":  [
                                                                          "L\u0027ouverture de la route de la soie",
                                                                          "Le blocage de l\u0027accès aux épices via les routes terrestres",
                                                                          "La découverte de l\u0027Amérique",
                                                                          "L\u0027invention de la caravelle"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1485,
                                                          "texte":  "L\u0027astrolabe, perfectionné par les Portugais, permettait de",
                                                          "options":  [
                                                                          "Mesurer la profondeur des océans",
                                                                          "Calculer la latitude en observant le Soleil ou les étoiles",
                                                                          "S\u0027orienter grâce au champ magnétique terrestre",
                                                                          "Voir plus loin à l\u0027horizon"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1486,
                                                          "texte":  "La boussole, importée de Chine, a permis aux navigateurs européens de",
                                                          "options":  [
                                                                          "Calculer leur vitesse",
                                                                          "S\u0027orienter hors de vue des côtes",
                                                                          "Mesurer la température de l\u0027eau",
                                                                          "Prévoir les tempêtes"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1487,
                                                          "texte":  "La caravelle, inventée par les Portugais au XVe siècle, était un navire capable de remonter le vent grâce à ses voiles",
                                                          "options":  [
                                                                          "Carrées",
                                                                          "Latines (triangulaires)",
                                                                          "Auriques",
                                                                          "Au tiers"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1493,
                                                          "texte":  "Vasco de Gama a réalisé le premier voyage maritime direct de l\u0027Europe vers l\u0027Inde. Il a atteint Calicut le",
                                                          "options":  [
                                                                          "20 mai 1497",
                                                                          "20 mai 1498",
                                                                          "20 mai 1499",
                                                                          "20 mai 1500"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1496,
                                                          "texte":  "Le 12 octobre 1492, Christophe Colomb a atteint une île des Bahamas qu\u0027il a nommée",
                                                          "options":  [
                                                                          "Hispaniola",
                                                                          "Cuba",
                                                                          "San Salvador",
                                                                          "Guanahani (nom local qu\u0027il a rebaptisé San Salvador)"
                                                                      ],
                                                          "correct":  3
                                                      },
                                                      {
                                                          "id":  1497,
                                                          "texte":  "Le traité de Tordesillas (1494) a partagé le \"Nouveau Monde\" entre",
                                                          "options":  [
                                                                          "La France et l\u0027Angleterre",
                                                                          "L\u0027Espagne et le Portugal",
                                                                          "Le Portugal et les Pays-Bas",
                                                                          "L\u0027Espagne et la France"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1498,
                                                          "texte":  "Le traité de Tordesillas a été arbitré par le pape",
                                                          "options":  [
                                                                          "Alexandre VI",
                                                                          "Jules II",
                                                                          "Léon X",
                                                                          "Paul III"
                                                                      ],
                                                          "correct":  0
                                                      },
                                                      {
                                                          "id":  1500,
                                                          "texte":  "La première circumnavigation de la Terre (1519-1522) a été achevée par le navire la Victoria commandé par Juan Sebastián Elcano, après la mort de son capitaine",
                                                          "options":  [
                                                                          "Christophe Colomb",
                                                                          "Vasco de Gama",
                                                                          "Fernand de Magellan",
                                                                          "Jean Cabot"
                                                                      ],
                                                          "correct":  2
                                                      },
                                                      {
                                                          "id":  1501,
                                                          "texte":  "Jean Cabot (Vénitien au service de l\u0027Angleterre) a atteint en 1497",
                                                          "options":  [
                                                                          "Le Brésil",
                                                                          "Terre-Neuve, le Labrador et la Nouvelle-Angleterre",
                                                                          "La Floride",
                                                                          "Le Canada (remontant le Saint-Laurent)"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1502,
                                                          "texte":  "Jacques Cartier, mandaté par le roi de France François Ier, a remonté le Saint-Laurent et pris possession du Canada en",
                                                          "options":  [
                                                                          "1492-1493",
                                                                          "1497-1498",
                                                                          "1534-1535",
                                                                          "1598-1600"
                                                                      ],
                                                          "correct":  2
                                                      },
                                                      {
                                                          "id":  1511,
                                                          "texte":  "Le Brésil est devenu une colonie portugaise. Dans le partage du traité de Tordesillas, le Brésil se trouvait",
                                                          "options":  [
                                                                          "À l\u0027ouest du méridien (zone espagnole)",
                                                                          "À l\u0027est du méridien (zone portugaise)",
                                                                          "Sur la ligne de partage",
                                                                          "Hors du traité"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1512,
                                                          "texte":  "Le navigateur portugais qui a découvert le Brésil en 1500 est",
                                                          "options":  [
                                                                          "Vasco de Gama",
                                                                          "Bartolomeu Dias",
                                                                          "Pedro Álvares Cabral",
                                                                          "Diogo Cam"
                                                                      ],
                                                          "correct":  2
                                                      },
                                                      {
                                                          "id":  1514,
                                                          "texte":  "Le navigateur portugais Fernand de Magellan a navigué pour le compte de",
                                                          "options":  [
                                                                          "Le Portugal",
                                                                          "L\u0027Espagne",
                                                                          "La France",
                                                                          "L\u0027Angleterre"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1515,
                                                          "texte":  "La première circumnavigation de la Terre a prouvé définitivement",
                                                          "options":  [
                                                                          "Que la Terre est plate",
                                                                          "La rotondité de la Terre et l\u0027immensité du Pacifique",
                                                                          "Que l\u0027Amérique est reliée à l\u0027Asie",
                                                                          "L\u0027existence du continent Antarctique"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1518,
                                                          "texte":  "Le navigateur français Jacques Cartier a pris possession du Canada au nom du roi",
                                                          "options":  [
                                                                          "Louis XII",
                                                                          "François Ier",
                                                                          "Henri II",
                                                                          "Charles IX"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1519,
                                                          "texte":  "La caravelle, utilisée par les Portugais, mesurait environ",
                                                          "options":  [
                                                                          "10 à 15 m",
                                                                          "20 à 30 m",
                                                                          "30 à 40 m",
                                                                          "40 à 50 m"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1521,
                                                          "texte":  "Les tables de déclinaison aidaient les navigateurs à",
                                                          "options":  [
                                                                          "Calculer la longitude",
                                                                          "Tenir compte des variations de la déclinaison solaire",
                                                                          "Prévoir les marées",
                                                                          "Mesurer la profondeur"
                                                                      ],
                                                          "correct":  1
                                                      },
                                                      {
                                                          "id":  1524,
                                                          "texte":  "Les \"Indes\" auxquelles Christophe Colomb croyait être arrivé désignaient",
                                                          "options":  [
                                                                          "L\u0027Amérique",
                                                                          "Les Indes orientales (Asie)",
                                                                          "Les Indes occidentales (Caraïbes)",
                                                                          "L\u0027Inde actuelle"
                                                                      ],
                                                          "correct":  1
                                                      }
                                                  ]
                                },
    "la_revolution_americaine_et_la_revolution_francaise":  {
                                                                "titre":  "La révolution américaine et la révolution française",
                                                                "questions":  [
                                                                                  {
                                                                                      "id":  1527,
                                                                                      "texte":  "Le Stamp Act (1765) imposait un timbre fiscal sur",
                                                                                      "options":  [
                                                                                                      "Le thé",
                                                                                                      "Tous les documents officiels",
                                                                                                      "Le sucre",
                                                                                                      "Le papier journal"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1528,
                                                                                      "texte":  "La Boston Tea Party (16 décembre 1773) était une protestation contre",
                                                                                      "options":  [
                                                                                                      "Le Stamp Act",
                                                                                                      "Le monopole de la Compagnie anglaise des Indes orientales et la taxe sur le thé",
                                                                                                      "Le massacre de Boston",
                                                                                                      "Les Intolerable Acts"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1529,
                                                                                      "texte":  "Lors de la Boston Tea Party, des colons déguisés en",
                                                                                      "options":  [
                                                                                                      "Soldats britanniques",
                                                                                                      "Amérindiens",
                                                                                                      "Marchands hollandais",
                                                                                                      "Pirates"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1535,
                                                                                      "texte":  "La victoire américaine à Saratoga (1777) a convaincu la France de",
                                                                                      "options":  [
                                                                                                      "Rester neutre",
                                                                                                      "Soutenir les Britanniques",
                                                                                                      "Conclure une alliance militaire avec les insurgés américains",
                                                                                                      "Envahir le Canada"
                                                                                                  ],
                                                                                      "correct":  2
                                                                                  },
                                                                                  {
                                                                                      "id":  1545,
                                                                                      "texte":  "Le Serment du Jeu de paume (20 juin 1789) a été prêté par les députés du Tiers état, qui juraient de",
                                                                                      "options":  [
                                                                                                      "Renverser le roi",
                                                                                                      "Donner une Constitution à la France",
                                                                                                      "Abolir la monarchie",
                                                                                                      "Proclamer la République"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1546,
                                                                                      "texte":  "La prise de la Bastille, symbole de l\u0027arbitraire royal, a eu lieu le",
                                                                                      "options":  [
                                                                                                      "5 mai 1789",
                                                                                                      "14 juillet 1789",
                                                                                                      "4 août 1789",
                                                                                                      "26 août 1789"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1548,
                                                                                      "texte":  "La Déclaration des droits de l\u0027homme et du citoyen a été adoptée le",
                                                                                      "options":  [
                                                                                                      "14 juillet 1789",
                                                                                                      "4 août 1789",
                                                                                                      "26 août 1789",
                                                                                                      "21 septembre 1792"
                                                                                                  ],
                                                                                      "correct":  2
                                                                                  },
                                                                                  {
                                                                                      "id":  1549,
                                                                                      "texte":  "La Déclaration des droits de l\u0027homme et du citoyen affirme que \"les hommes naissent et demeurent",
                                                                                      "options":  [
                                                                                                      "Libres et égaux en droits\"",
                                                                                                      "Libres et égaux devant la loi\"",
                                                                                                      "Libres et frères\"",
                                                                                                      "Égaux en devoirs\""
                                                                                                  ],
                                                                                      "correct":  0
                                                                                  },
                                                                                  {
                                                                                      "id":  1550,
                                                                                      "texte":  "La fuite du roi Louis XVI à Varennes (1791) a discrédité la monarchie constitutionnelle. Louis XVI a été guillotiné en",
                                                                                      "options":  [
                                                                                                      "janvier 1792",
                                                                                                      "janvier 1793",
                                                                                                      "janvier 1794",
                                                                                                      "janvier 1795"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1552,
                                                                                      "texte":  "Le Comité de salut public, dominé par Robespierre, a instauré la Terreur (1793-1794) pour faire face aux crises internes (guerre de Vendée) et externes (Première Coalition). La guerre de Vendée était",
                                                                                      "options":  [
                                                                                                      "Une insurrection républicaine",
                                                                                                      "Une insurrection royaliste et catholique",
                                                                                                      "Une guerre contre l\u0027Angleterre",
                                                                                                      "Une guerre contre l\u0027Autriche"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1554,
                                                                                      "texte":  "Robespierre a été renversé le 9 thermidor an II (27 juillet 1794) et exécuté. Il était surnommé",
                                                                                      "options":  [
                                                                                                      "\"L\u0027Incorruptible\"",
                                                                                                      "\"Le Grand\"",
                                                                                                      "\"Le Juste\"",
                                                                                                      "\"Le Républicain\""
                                                                                                  ],
                                                                                      "correct":  0
                                                                                  },
                                                                                  {
                                                                                      "id":  1555,
                                                                                      "texte":  "Après la chute de Robespierre, le Directoire (1795-1799) a tenté de stabiliser le régime, mais il était miné par",
                                                                                      "options":  [
                                                                                                      "L\u0027instabilité politique",
                                                                                                      "Les difficultés économiques",
                                                                                                      "La corruption",
                                                                                                      "Toutes ces réponses"
                                                                                                  ],
                                                                                      "correct":  3
                                                                                  },
                                                                                  {
                                                                                      "id":  1560,
                                                                                      "texte":  "Le Serment du Jeu de paume a été prêté dans une salle de jeu de paume à Versailles. Les députés juraient de ne pas se séparer avant d\u0027avoir",
                                                                                      "options":  [
                                                                                                      "Renversé le roi",
                                                                                                      "Aboli les privilèges",
                                                                                                      "Donné une Constitution à la France",
                                                                                                      "Proclamé la République"
                                                                                                  ],
                                                                                      "correct":  2
                                                                                  },
                                                                                  {
                                                                                      "id":  1561,
                                                                                      "texte":  "Le 10 août 1792, le peuple parisien a pris le palais des Tuileries. Louis XVI a été suspendu et la royauté abolie. Ce jour marque",
                                                                                      "options":  [
                                                                                                      "Le début de la Révolution",
                                                                                                      "La fin de la monarchie constitutionnelle",
                                                                                                      "Le début de la Terreur",
                                                                                                      "La proclamation de l\u0027Empire"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1562,
                                                                                      "texte":  "La Convention montagnarde (1792-1795) était dominée par les députés les plus radicaux, surnommés",
                                                                                      "options":  [
                                                                                                      "Les Girondins",
                                                                                                      "Les Montagnards",
                                                                                                      "Les Feuillants",
                                                                                                      "Les Royalistes"
                                                                                                  ],
                                                                                      "correct":  1
                                                                                  },
                                                                                  {
                                                                                      "id":  1563,
                                                                                      "texte":  "Les Girondins étaient des députés plus modérés de la Convention. Ils ont été éliminés par les Montagnards lors de l\u0027insurrection du 31 mai au 2 juin 1793. Le chef des Girondins était",
                                                                                      "options":  [
                                                                                                      "Robespierre",
                                                                                                      "Danton",
                                                                                                      "Brissot",
                                                                                                      "Marat"
                                                                                                  ],
                                                                                      "correct":  2
                                                                                  },
                                                                                  {
                                                                                      "id":  1564,
                                                                                      "texte":  "Marat, journaliste radical et figure de la Révolution, a été assassiné en juillet 1793 par",
                                                                                      "options":  [
                                                                                                      "Charlotte Corday",
                                                                                                      "Robespierre",
                                                                                                      "Danton",
                                                                                                      "Louis XVI"
                                                                                                  ],
                                                                                      "correct":  0
                                                                                  }
                                                                              ]
                                                            },
    "la_revolution_industrielle":  {
                                       "titre":  "La révolution industrielle",
                                       "questions":  [
                                                         {
                                                             "id":  1575,
                                                             "texte":  "L\u0027utilisation du coke (charbon dégazéifié ) dans la sidérurgie a été développée par",
                                                             "options":  [
                                                                             "Watt",
                                                                             "Darby",
                                                                             "Cort",
                                                                             "Bessemer"
                                                                         ],
                                                             "correct":  0
                                                         },
                                                         {
                                                             "id":  1576,
                                                             "texte":  "Le puddlage, un procédé permettant d\u0027affiner la fonte pour obtenir du fer, a été inventé par",
                                                             "options":  [
                                                                             "Darby",
                                                                             "Watt",
                                                                             "Cort",
                                                                             "Bessemer"
                                                                         ],
                                                             "correct":  1
                                                         },
                                                         {
                                                             "id":  1583,
                                                             "texte":  "La dynamo, qui permet de produire du courant électrique, a été inventée par",
                                                             "options":  [
                                                                             "Edison",
                                                                             "Gramme",
                                                                             "Tesla",
                                                                             "Volta"
                                                                         ],
                                                             "correct":  1
                                                         },
                                                         {
                                                             "id":  1584,
                                                             "texte":  "L\u0027ampoule électrique a été rendue pratique par",
                                                             "options":  [
                                                                             "Gramme",
                                                                             "Tesla",
                                                                             "Edison",
                                                                             "Westinghouse"
                                                                         ],
                                                             "correct":  1
                                                         },
                                                         {
                                                             "id":  1585,
                                                             "texte":  "Le moteur à combustion interne a ouvert la voie à",
                                                             "options":  [
                                                                             "L\u0027automobile",
                                                                             "L\u0027aviation",
                                                                             "La machine à vapeur",
                                                                             "Le chemin de fer"
                                                                         ],
                                                             "correct":  0
                                                         },
                                                         {
                                                             "id":  1586,
                                                             "texte":  "Le convertisseur Bessemer a permis de produire",
                                                             "options":  [
                                                                             "De la fonte",
                                                                             "Du fer",
                                                                             "De l\u0027acier en grande quantité et à bas coût",
                                                                             "Du coke"
                                                                         ],
                                                             "correct":  1
                                                         },
                                                         {
                                                             "id":  1587,
                                                             "texte":  "Le taylorisme est une organisation scientifique du travail basée sur",
                                                             "options":  [
                                                                             "La parcellisation des tâches",
                                                                             "Le travail à la chaîne",
                                                                             "La polyvalence des ouvriers",
                                                                             "La rotation des postes"
                                                                         ],
                                                             "correct":  0
                                                         }
                                                     ]
                                   },
    "la_revolution_russe":  {
                                "titre":  "La révolution russe",
                                "questions":  [

                                              ]
                            }
};


if (typeof globalThis !== 'undefined') {
    globalThis.thematiquesMonde = thematiquesMonde;
}

const rubriquesQuiz = {
    burkina: {
        titre: '🇧🇫 Connaître le Burkina Faso',
        description: 'Toutes les thématiques existantes sont regroupées ici.',
        disponible: true
    },
    afrique: {
        titre: '🌍 Connaître l\'Afrique',
        description: 'Quiz organisés par thématiques sur l\'Afrique.',
        disponible: true
    },
    reste_monde: {
        titre: '🌐 Connaître le Reste du Monde',
        description: 'Quiz organisés par thématiques sur le monde.',
        disponible: true
    },
    diverses: {
        titre: '🧩 Questions diverses',
        description: 'Questions variées réparties en séries progressives.',
        disponible: true
    },
    examen: {
        titre: '📋 Passer un examen',
        description: 'Examen complet de 50 questions.',
        disponible: true
    }
};

function showQuizThematique() {
    const container = document.getElementById('quizContent');
    if (!container) return;

    let html = `
        <div class="rubriques-header">
            <h3>📚 Vos rubriques d'entraînement</h3>
            <p>Sélectionnez une rubrique pour commencer votre préparation.</p>
        </div>
        <div class="rubriques-grid">
    `;

    for (const [key, rubrique] of Object.entries(rubriquesQuiz)) {
        const disabledClass = rubrique.disponible ? '' : 'disabled';
        const clickAction = rubrique.disponible ? `onclick="ouvrirRubriqueQuiz('${key}')"` : '';
        const badgeClass = rubrique.disponible ? 'ready' : 'soon';
        const badgeText = rubrique.disponible ? 'Disponible' : 'Bientot';

        let metaText = 'Contenu a venir';
        if (key === 'burkina') {
            metaText = `${Object.keys(thematiques).length} thematiques`;
        } else if (key === 'afrique') {
            const afriqueThemes = (typeof globalThis !== 'undefined' && globalThis.thematiquesAfrique)
                ? globalThis.thematiquesAfrique
                : null;
            metaText = afriqueThemes
                ? `${Object.keys(afriqueThemes).length} thematiques`
                : 'Thematiques en preparation';
        } else if (key === 'reste_monde') {
            metaText = `${Object.keys(thematiquesMonde).length} thematiques`;
        } else if (key === 'diverses') {
            const nbSeries = Object.keys(seriesDiverses).length;
            const nbQuestions = getTotalQuestionsDiverses();
            metaText = nbSeries > 0
                ? `${nbSeries} series (${nbQuestions} questions)`
                : 'Series en preparation';
        } else if (key === 'examen') {
            metaText = 'Examen de 50 questions';
        }

        html += `
            <div class="rubrique-card ${disabledClass}" data-rubrique-key="${rubrique.disponible ? key : ''}" ${clickAction} onclick="if (typeof ouvrirRubriqueQuiz === 'function') ouvrirRubriqueQuiz('${key}')">
                <div class="rubrique-top">
                    <span class="rubrique-badge ${badgeClass}">${badgeText}</span>
                </div>
                <h4>${rubrique.titre}</h4>
                <p>${rubrique.description}</p>
                <div class="rubrique-meta">${metaText}</div>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;

    container.querySelectorAll('.rubrique-card[data-rubrique-key]').forEach((card) => {
        const key = card.getAttribute('data-rubrique-key');
        if (!key) return;
        card.addEventListener('click', () => ouvrirRubriqueQuiz(key));
    });

    container.onclick = (event) => {
        const card = event.target.closest('.rubrique-card[data-rubrique-key]');
        if (!card || !container.contains(card)) return;
        const key = card.getAttribute('data-rubrique-key');
        if (key) ouvrirRubriqueQuiz(key);
    };
}

function ouvrirRubriqueQuiz(rubriqueKey) {
    if (rubriqueKey === 'burkina') {
        showThemesBurkinaFaso();
        return;
    }

    if (rubriqueKey === 'afrique') {
        showThemesAfrique();
        return;
    }

    if (rubriqueKey === 'reste_monde') {
        showThemesMonde();
        return;
    }

    if (rubriqueKey === 'diverses') {
        showSeriesDiverses();
        return;
    }

    if (rubriqueKey === 'examen') {
        showExamen();
        return;
    }
}

function showThemesBurkinaFaso() {
    const container = document.getElementById('quizContent');
    if (!container) return;

    let html = `
        <div class="quiz-header">
            <h3>🇧🇫 Connaître le Burkina Faso</h3>
            <div class="quiz-progress">${Object.keys(thematiques).length} thématiques</div>
        </div>
        <div class="thematiques-grid">
    `;

    for (const [key, theme] of Object.entries(thematiques)) {
        const nbQuestions = theme.questions.length;
        html += `
            <div class="theme-card" data-theme-key="${key}" onclick="if (typeof demarrerQuiz === 'function') demarrerQuiz('${key}')">
                <h4>${theme.titre}</h4>
                <p>${nbQuestions} questions</p>
            </div>
        `;
    }

    html += `
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.theme-card[data-theme-key]').forEach((card) => {
        const key = card.getAttribute('data-theme-key');
        if (!key) return;
        card.addEventListener('click', () => demarrerQuiz(key));
    });

    container.onclick = (event) => {
        const card = event.target.closest('.theme-card[data-theme-key]');
        if (!card || !container.contains(card)) return;
        const key = card.getAttribute('data-theme-key');
        if (key) demarrerQuiz(key);
    };
}

function showThemesMonde() {
    const container = document.getElementById('quizContent');
    if (!container) return;

    let html = `
        <div class="quiz-header">
            <h3>🌐 Connaître le Reste du Monde</h3>
            <div class="quiz-progress">${Object.keys(thematiquesMonde).length} thématiques</div>
        </div>
        <div class="thematiques-grid">
    `;

    for (const [key, theme] of Object.entries(thematiquesMonde)) {
        const nbQuestions = theme.questions.length;
        html += `
            <div class="theme-card" data-monde-theme-key="${key}" onclick="if (typeof demarrerQuizMonde === 'function') demarrerQuizMonde('${key}')">
                <h4>${theme.titre}</h4>
                <p>${nbQuestions} questions</p>
            </div>
        `;
    }

    html += `
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.theme-card[data-monde-theme-key]').forEach((card) => {
        const key = card.getAttribute('data-monde-theme-key');
        if (!key) return;
        card.addEventListener('click', () => demarrerQuizMonde(key));
    });

    container.onclick = (event) => {
        const card = event.target.closest('.theme-card[data-monde-theme-key]');
        if (!card || !container.contains(card)) return;
        const key = card.getAttribute('data-monde-theme-key');
        if (key) demarrerQuizMonde(key);
    };
}

function showSeriesDiverses() {
    const container = document.getElementById('quizContent');
    if (!container) return;

    const seriesEntries = Object.entries(seriesDiverses);
    if (seriesEntries.length === 0) {
        container.innerHTML = `
            <div class="quiz-header">
                <h3>🧩 Questions diverses</h3>
            </div>
            <p style="text-align:center; color:#666;">Les series ne sont pas encore chargees.</p>
            <div class="quiz-nav">
                <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
            </div>
        `;
        return;
    }

    let html = `
        <div class="quiz-header">
            <h3>🧩 Questions diverses</h3>
            <div class="quiz-progress">${seriesEntries.length} series • ${getTotalQuestionsDiverses()} questions</div>
        </div>
        <div class="thematiques-grid">
    `;

    for (const [key, serie] of seriesEntries) {
        const nbQuestions = Array.isArray(serie.questions) ? serie.questions.length : 0;
        html += `
            <div class="theme-card" data-divers-serie-key="${key}" onclick="if (typeof demarrerSerieDiverses === 'function') demarrerSerieDiverses('${key}')">
                <h4>${serie.titre}</h4>
                <p>${nbQuestions} questions</p>
            </div>
        `;
    }

    html += `
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.theme-card[data-divers-serie-key]').forEach((card) => {
        const key = card.getAttribute('data-divers-serie-key');
        if (!key) return;
        card.addEventListener('click', () => demarrerSerieDiverses(key));
    });

    container.onclick = (event) => {
        const card = event.target.closest('.theme-card[data-divers-serie-key]');
        if (!card || !container.contains(card)) return;
        const key = card.getAttribute('data-divers-serie-key');
        if (key) demarrerSerieDiverses(key);
    };
}

function demarrerSerieDiverses(serieKey) {
    const serie = seriesDiverses[serieKey];
    if (!serie || !Array.isArray(serie.questions) || serie.questions.length === 0) {
        alert('Cette serie ne contient pas encore de questions.');
        return;
    }

    currentQuiz = {
        titre: `🧩 Questions diverses - ${serie.titre}`,
        questions: serie.questions,
    };
    currentThemeContext = { group: 'diverses', key: serieKey };
    currentAnswers = new Array(currentQuiz.questions.length).fill(null);
    afficherQuestion(0);
}

function demarrerQuizMonde(themeKey) {
    const theme = thematiquesMonde[themeKey];
    if (!theme || theme.questions.length === 0) {
        alert('Cette thématique ne contient pas encore de questions.');
        return;
    }
    currentQuiz = theme;
    currentThemeContext = { group: 'monde', key: themeKey };
    currentAnswers = new Array(currentQuiz.questions.length).fill(null);
    afficherQuestion(0);
}

function demarrerQuiz(themeKey) {
    const theme = thematiques[themeKey];
    if (!theme || theme.questions.length === 0) {
        alert('Cette thématique ne contient pas encore de questions.');
        return;
    }
    currentQuiz = theme;
    currentThemeContext = { group: 'burkina', key: themeKey };
    currentAnswers = new Array(currentQuiz.questions.length).fill(null);
    afficherQuestion(0);
}

function afficherQuestion(index) {
    if (index >= currentQuiz.questions.length) {
        afficherCorrectionQuiz();
        return;
    }
    
    const q = currentQuiz.questions[index];
    const isMulti = isMultiAnswerQuestion(q);
    let optionsHtml = '';
    q.options.forEach((opt, optIndex) => {
        const isChecked = isOptionSelected(index, optIndex, q);
        const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
        const inputType = isMulti ? 'checkbox' : 'radio';
        optionsHtml += `
            <div class="quiz-option" onclick="repondre(${index}, ${optIndex})">
                <input type="${inputType}" name="q${index}" id="q${index}_${optIndex}" value="${optIndex}" ${isChecked ? 'checked' : ''}>
                <label for="q${index}_${optIndex}"><strong>${letter}.</strong> ${opt}</label>
            </div>
        `;
    });
    
    const container = document.getElementById('quizContent');
    container.innerHTML = `
        <div class="quiz-header">
            <h3>${currentQuiz.titre}</h3>
            <div class="quiz-progress">Question ${index + 1}/${currentQuiz.questions.length}</div>
        </div>
        <div class="quiz-question">
            <p><strong>${q.texte}</strong></p>
            ${isMulti ? '<p style="margin-top:-8px; color:#666; font-size:14px;">Selectionnez plusieurs reponses si necessaire.</p>' : ''}
            <div class="quiz-options">
                ${optionsHtml}
            </div>
        </div>
        <div class="quiz-nav">
            ${index > 0 ? `<button class="quiz-nav-btn" onclick="afficherQuestion(${index - 1})">◀ Précédent</button>` : ''}
            <button class="quiz-nav-btn primary" onclick="afficherQuestion(${index + 1})">Suivant ▶</button>
            <button class="quiz-nav-btn warning" onclick="afficherCorrectionQuiz()">Terminer</button>
        </div>
    `;
}

function repondre(questionIndex, reponseIndex) {
    const question = currentQuiz.questions[questionIndex];
    if (isMultiAnswerQuestion(question)) {
        const selected = Array.isArray(currentAnswers[questionIndex]) ? [...currentAnswers[questionIndex]] : [];
        const existingIndex = selected.indexOf(reponseIndex);
        if (existingIndex >= 0) {
            selected.splice(existingIndex, 1);
        } else {
            selected.push(reponseIndex);
        }
        currentAnswers[questionIndex] = selected;
        afficherQuestion(questionIndex);
        return;
    }

    currentAnswers[questionIndex] = reponseIndex;
}

function afficherCorrectionQuiz() {
    let score = 0;
    let correctionHtml = '<h3>📝 Correction du quiz</h3>';
    const isSerieQuiz = currentThemeContext && currentThemeContext.group === 'diverses';
    const restartLabel = isSerieQuiz ? 'Reprendre le quiz' : 'Reprendre ce quizz';
    const nextLabel = isSerieQuiz
        ? 'Passer au quizz de la serie suivante'
        : 'Passer au quiz de la thematique suivante';
    
    currentQuiz.questions.forEach((q, i) => {
        const estCorrect = isAnswerCorrect(q, currentAnswers[i]);
        if (estCorrect) score++;
        
        const userAnswer = formatUserAnswer(q, currentAnswers[i]);
        const correctAnswer = formatCorrectAnswer(q);
        
        correctionHtml += `
            <div class="correction-card ${estCorrect ? 'correct' : 'incorrect'}">
                <div class="correction-question">Question ${i+1}: ${q.texte}</div>
                <div class="correction-answer">Votre réponse: <strong>${userAnswer}</strong></div>
                <div class="correction-correct">Réponse correcte: <strong>${correctAnswer}</strong></div>
            </div>
        `;
    });
    
    const pourcentage = Math.round(score / currentQuiz.questions.length * 100);
    correctionHtml += `
        <div class="quiz-score">
            <h3>Votre score: ${score}/${currentQuiz.questions.length} (${pourcentage}%)</h3>
            <div class="score-bar">
                <div class="score-fill" style="width: ${pourcentage}%"></div>
            </div>
        </div>
        <div class="quiz-nav" style="justify-content:center; margin-top:16px;">
            <button class="quiz-nav-btn" onclick="restartCurrentThemeQuiz()">${restartLabel}</button>
            <button class="quiz-nav-btn primary" onclick="startNextThemeQuiz()">${nextLabel}</button>
        </div>
        <div class="quiz-nav" style="justify-content:center; margin-top:10px;">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;
    
    document.getElementById('quizContent').innerHTML = correctionHtml;
}

function showExamen() {
    const questions = genererExamen(50);
    currentQuiz = { questions: questions, titre: 'Examen complet (50 questions)' };
    currentAnswers = new Array(questions.length).fill(null);
    afficherQuestionExamen(0);
}

function afficherQuestionExamen(index) {
    if (index >= currentQuiz.questions.length) {
        afficherCorrectionExamen();
        return;
    }
    
    const q = currentQuiz.questions[index];
    const isMulti = isMultiAnswerQuestion(q);
    let optionsHtml = '';
    q.options.forEach((opt, optIndex) => {
        const isChecked = isOptionSelected(index, optIndex, q);
        const letter = String.fromCharCode(65 + optIndex);
        const inputType = isMulti ? 'checkbox' : 'radio';
        optionsHtml += `
            <div class="quiz-option" onclick="repondreExamen(${index}, ${optIndex})">
                <input type="${inputType}" name="q${index}" id="q${index}_${optIndex}" value="${optIndex}" ${isChecked ? 'checked' : ''}>
                <label for="q${index}_${optIndex}"><strong>${letter}.</strong> ${opt}</label>
            </div>
        `;
    });
    
    const container = document.getElementById('quizContent');
    container.innerHTML = `
        <div class="quiz-header">
            <h3>${currentQuiz.titre}</h3>
            <div class="quiz-progress">Question ${index + 1}/${currentQuiz.questions.length}</div>
        </div>
        <div class="quiz-question">
            <p><strong>${q.texte}</strong></p>
            ${isMulti ? '<p style="margin-top:-8px; color:#666; font-size:14px;">Selectionnez plusieurs reponses si necessaire.</p>' : ''}
            <div class="quiz-options">
                ${optionsHtml}
            </div>
        </div>
        <div class="quiz-nav">
            ${index > 0 ? `<button class="quiz-nav-btn" onclick="afficherQuestionExamen(${index - 1})">◀ Précédent</button>` : ''}
            <button class="quiz-nav-btn primary" onclick="afficherQuestionExamen(${index + 1})">Suivant ▶</button>
            <button class="quiz-nav-btn warning" onclick="afficherCorrectionExamen()">Terminer l'examen</button>
        </div>
    `;
}

function repondreExamen(questionIndex, reponseIndex) {
    const question = currentQuiz.questions[questionIndex];
    if (isMultiAnswerQuestion(question)) {
        const selected = Array.isArray(currentAnswers[questionIndex]) ? [...currentAnswers[questionIndex]] : [];
        const existingIndex = selected.indexOf(reponseIndex);
        if (existingIndex >= 0) {
            selected.splice(existingIndex, 1);
        } else {
            selected.push(reponseIndex);
        }
        currentAnswers[questionIndex] = selected;
        afficherQuestionExamen(questionIndex);
        return;
    }

    currentAnswers[questionIndex] = reponseIndex;
}

function reprendreExamenActuel() {
    if (!currentQuiz || !Array.isArray(currentQuiz.questions) || currentQuiz.questions.length === 0) {
        showExamen();
        return;
    }

    currentAnswers = new Array(currentQuiz.questions.length).fill(null);
    afficherQuestionExamen(0);
}

function afficherCorrectionExamen() {
    let score = 0;
    let correctionHtml = '<h3>📋 Correction de l\'examen</h3>';
    
    currentQuiz.questions.forEach((q, i) => {
        const estCorrect = isAnswerCorrect(q, currentAnswers[i]);
        if (estCorrect) score++;
        
        correctionHtml += `
            <div class="correction-card ${estCorrect ? 'correct' : 'incorrect'}">
                <div class="correction-question">Question ${i+1}: ${q.texte}</div>
                <div class="correction-answer">Votre reponse: ${formatUserAnswer(q, currentAnswers[i])}</div>
                <div class="correction-correct">Reponse correcte: ${formatCorrectAnswer(q)}</div>
            </div>
        `;
    });
    
    const pourcentage = Math.round(score / currentQuiz.questions.length * 100);
    correctionHtml += `
        <div class="quiz-score">
            <h3>Votre score: ${score}/${currentQuiz.questions.length} (${pourcentage}%)</h3>
            <div class="score-bar">
                <div class="score-fill" style="width: ${pourcentage}%"></div>
            </div>
        </div>
    `;
    
    correctionHtml += `
        <div class="quiz-nav" style="justify-content:center; margin-top:16px;">
            <button class="quiz-nav-btn" onclick="reprendreExamenActuel()">Reprendre l'examen</button>
            <button class="quiz-nav-btn primary" onclick="showExamen()">Passer à l'examen suivant</button>
        </div>
        <div class="quiz-nav" style="justify-content:center; margin-top:10px;">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;
    
    document.getElementById('quizContent').innerHTML = correctionHtml;
}

function showThemesAfrique() {
    const container = document.getElementById('quizContent');
    if (!container) return;

    const afriqueThemes = (typeof globalThis !== 'undefined' && globalThis.thematiquesAfrique)
        ? globalThis.thematiquesAfrique
        : null;

    if (!afriqueThemes) {
        container.innerHTML = `
            <div class="quiz-header">
                <h3>🌍 Connaître l'Afrique</h3>
            </div>
            <p style="text-align:center; color:#b71c1c;">Les données AFRIQUE ne sont pas encore chargées.</p>
            <div class="quiz-nav">
                <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
            </div>
        `;
        return;
    }

    let html = `
        <div class="quiz-header">
            <h3>🌍 Connaître l'Afrique</h3>
            <div class="quiz-progress">${Object.keys(afriqueThemes).length} thématiques</div>
        </div>
        <div class="thematiques-grid">
    `;

    for (const [key, theme] of Object.entries(afriqueThemes)) {
        const nbQuestions = theme.questions.length;
        html += `
            <div class="theme-card" data-afrique-theme-key="${key}" onclick="if (typeof demarrerQuizAfrique === 'function') demarrerQuizAfrique('${key}')">
                <h4>${theme.titre}</h4>
                <p>${nbQuestions} questions</p>
            </div>
        `;
    }

    html += `
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="showQuizThematique()">◀ Retour aux rubriques</button>
        </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll('.theme-card[data-afrique-theme-key]').forEach((card) => {
        const key = card.getAttribute('data-afrique-theme-key');
        if (!key) return;
        card.addEventListener('click', () => demarrerQuizAfrique(key));
    });

    container.onclick = (event) => {
        const card = event.target.closest('.theme-card[data-afrique-theme-key]');
        if (!card || !container.contains(card)) return;
        const key = card.getAttribute('data-afrique-theme-key');
        if (key) demarrerQuizAfrique(key);
    };
}

function demarrerQuizAfrique(themeKey) {
    const afriqueThemes = (typeof globalThis !== 'undefined' && globalThis.thematiquesAfrique)
        ? globalThis.thematiquesAfrique
        : null;

    if (!afriqueThemes) {
        alert('Les données AFRIQUE ne sont pas chargées.');
        return;
    }

    const theme = afriqueThemes[themeKey];
    if (!theme || theme.questions.length === 0) {
        alert('Cette thématique ne contient pas encore de questions.');
        return;
    }

    currentQuiz = theme;
    currentThemeContext = { group: 'afrique', key: themeKey };
    currentAnswers = new Array(currentQuiz.questions.length).fill(null);
    afficherQuestion(0);
}

// Assure la disponibilité globale pour les handlers onclick injectés en HTML.
if (typeof window !== 'undefined') {
    window.showQuizThematique = showQuizThematique;
    window.ouvrirRubriqueQuiz = ouvrirRubriqueQuiz;
    window.showThemesBurkinaFaso = showThemesBurkinaFaso;
    window.showThemesAfrique = showThemesAfrique;
    window.showThemesMonde = showThemesMonde;
    window.showSeriesDiverses = showSeriesDiverses;
    window.demarrerQuiz = demarrerQuiz;
    window.demarrerQuizAfrique = demarrerQuizAfrique;
    window.demarrerQuizMonde = demarrerQuizMonde;
    window.demarrerSerieDiverses = demarrerSerieDiverses;
    window.restartCurrentThemeQuiz = restartCurrentThemeQuiz;
    window.startNextThemeQuiz = startNextThemeQuiz;
    window.showExamen = showExamen;
    window.reprendreExamenActuel = reprendreExamenActuel;
}

// Donnees generees automatiquement depuis les fichiers DOCX AFRIQUE
// Source: assets/ENCYCLOPEDIE AFRIQUE  - QCM.docx + CORRECTION.docx
const thematiquesAfrique = {
    aux_origines_lafrique_berceau_de_lhumanite: { titre: 'Aux origines : L’Afrique, berceau de l’humanité', questions: [] },
    les_grandes_civilisations_anciennes_dafrique: { titre: 'Les grandes civilisations anciennes d’Afrique', questions: [] },
    les_empires_et_etats_medievaux: { titre: 'Les empires et etats medievaux', questions: [] },
    la_traite_negriere_lesclavage: { titre: 'La traite négrière (l\'esclavage', questions: [] },
    de_limperialisme_a_la_conference_de_berlin: { titre: 'De l\'impérialisme à la conférence de Berlin', questions: [] },
    la_colonisation_conquetes_resistances_systemes_et: { titre: 'La colonisation : Conquêtes, résistances, systèmes et exploitation', questions: [] },
    de_la_decolonisation_aux_independances: { titre: 'De la decolonisation aux independances', questions: [] },
    crise_socio_politique_en_afrique_post_independante: { titre: 'Crise socio-politique en Afrique post-indépendante', questions: [] },
    pays_africains_capitale_devise_monnaie_president_a: { titre: 'Pays africains : Capitale, devise (monnaie), président actuel', questions: [] },
    hauts_sommets_fleuves_lacs_et_deserts_dafrique: { titre: 'Hauts sommets, fleuves, lacs et déserts d\'Afrique', questions: [] },
    organisations_et_institutions_africaines: { titre: 'Organisations et institutions africaines', questions: [] },
    sport_en_afrique: { titre: 'Sport en Afrique', questions: [] },
};

if (typeof globalThis !== 'undefined') {
    globalThis.thematiquesAfrique = thematiquesAfrique;
}

thematiquesAfrique.aux_origines_lafrique_berceau_de_lhumanite.questions = [
    { texte: 'La région considérée comme le berceau de l\'humanité se situe principalement :', options: ['En Afrique australe', 'En Afrique de l\'Ouest', 'En Afrique de l\'Est (vallée du Grand Rift)', 'En Afrique du Nord'], correct: 2 },
    { texte: 'Toumaï ( Sahelanthropus tchadensis ) a été découvert en 2001 au Tchad, dans :', options: ['Le lac Tchad', 'Le désert du Djourab', 'La région de N\' Djaména', 'Les monts du Tibesti'], correct: 1 },
    { texte: 'Le nom " Toumaï " signifie en langue gorane :', options: ['"Premier homme"', '"Espoir de vie"', '"Fils de la terre"', '"Ancêtre"'], correct: 1 },
    { texte: 'Le fossile de Toumaï est daté d\'environ :', options: ['7 millions d\'années', '5 millions d\'années', '3,2 millions d\'années', '2,4 millions d\'années'], correct: 0 },
    { texte: 'Lucy ( Australopithecus afarensis ) a été découverte en 1974 en Éthiopie dans la région :', options: ['De l\'Omo', 'Du Tigré', 'De l\'Afar (site de Hadar )', 'Du Shewa'], correct: 2 },
    { texte: 'Le squelette de Lucy est exceptionnel car :', options: ['C\'est le plus ancien fossile humain', 'Il est complet à 100 %', 'Il est complet à environ 40 %', 'Il a été retrouvé avec des outils'], correct: 2 },
    { texte: 'La taille estimée de Lucy est d\'environ :', options: ['0,90 m', '1,10 m', '1,30 m', '1,50 m'], correct: 1 },
    { texte: 'La bipédie est une caractéristique majeure des australopithèques. Qu\'est-ce que la bipédie ?', options: ['La capacité à fabriquer des outils', 'La capacité à marcher sur deux jambes', 'La capacité à parler', 'La capacité à maîtriser le feu'], correct: 1 },
    { texte: 'Le "berceau de l\'humanité" ( Cradle of Humankind ) en Afrique du Sud est inscrit au patrimoine mondial de l\'UNESCO. Quels sites y sont célèbres ?', options: ['Olduvai et Laetoli', 'Sterkfontein et Swartkrans', 'Hadar et Omo', 'Jebel Irhoud et Herto'], correct: 1 },
    { texte: 'Le genre Homo apparaît en Afrique de l\'Est il y a environ :', options: ['4 à 3,5 millions d\'années', '3 à 2,5 millions d\'années', '2,8 à 2,4 millions d\'années', '2 à 1,5 million d\'années'], correct: 2 },
    { texte: 'Homo habilis doit son nom ("homme habile") � :', options: ['Sa capacit� � marcher debout', 'Sa capacit� � fabriquer des outils en pierre taill�e', 'Sa capacit� � ma�triser le feu', 'Son volume cr�nien �lev�'], correct: 1 },
    { texte: 'Les premiers outils en pierre taillée (industrie oldowayenne ) sont attribués à :', options: ['Australopithecus afarensis', 'Homo erectus', 'Homo habilis', 'Homo ergaster'], correct: 2 },
    { texte: 'La gorge d\'Olduvai, où ont été découverts de nombreux fossiles d\'Homo habilis, se trouve en :', options: ['Éthiopie', 'Kenya', 'Tanzanie', 'Ouganda'], correct: 2 },
    { texte: 'Homo ergaster est considéré comme le premier hominidé à :', options: ['Fabriquer des bifaces', 'Sortir d\'Afrique (coloniser l\'Eurasie)', 'Maîtriser le feu', 'Développer un langage articulé'], correct: 1 },
    { texte: 'Le volume cr�nien d\'Homo ergaster est d\'environ :', options: ['550-650 cm�', '650-750 cm�', '850-900 cm�', '1 300-1 500 cm�'], correct: 2 },
    { texte: 'La maîtrise du feu par Homo erectus remonterait à environ :', options: ['2,5 millions d\'années', '2 millions d\'années', '1,5 à 1 million d\'années', '500 000 ans'], correct: 2 },
    { texte: 'L\'industrie acheuléenne, caractérisée par la fabrication de bifaces, est attribuée à :', options: ['Homo habilis', 'Homo ergaster / Homo erectus', 'Australopithecus', 'Homo sapiens'], correct: 1 },
    { texte: 'Les plus anciens fossiles d\'Homo sapiens connus à ce jour ont été découverts à Jebel Irhoud (Maroc) et datés d\'environ :', options: ['200 000 ans', '250 000 ans', '315 000 ans', '400 000 ans'], correct: 2 },
    { texte: 'Le site d\'Omo Kibish en Éthiopie a livré des fossiles d\'Homo sapiens datés d\'environ :', options: ['315 000 ans', '195 000 ans', '160 000 ans', '100 000 ans'], correct: 1 },
    { texte: 'Le volume cr�nien d\'Homo sapiens est d\'environ :', options: ['850-900 cm�', '1 000-1 200 cm�', '1 300-1 500 cm�', '1 600-1 800 cm�'], correct: 2 },
    { texte: 'Parmi les caractéristiques d\'Homo sapiens, on peut citer :', options: ['Un front vertical', 'Un menton développé', 'Un squelette gracile', 'Toutes ces réponses'], correct: 3 },
    { texte: 'La sortie d\'Afrique (Out of Africa ) la plus décisive d\'Homo sapiens a eu lieu il y a environ :', options: ['200 000 à 150 000 ans', '100 000 à 60 000 ans', '50 000 à 30 000 ans', '30 000 à 15 000 ans'], correct: 1 },
    { texte: 'L\'Australie a été colonisée par Homo sapiens il y a environ :', options: ['100 000 ans', '70 000 ans', '50 000 ans', '30 000 ans'], correct: 2 },
    { texte: 'Les Amériques ont été colonisées par Homo sapiens il y a environ :', options: ['100 000 à 80 000 ans', '60 000 à 40 000 ans', '30 000 à 20 000 ans', '20 000 à 15 000 ans'], correct: 3 },
    { texte: 'La théorie de l\'origine africaine récente (Out of Africa ) est confirmée par :', options: ['Les études paléontologiques uniquement', 'Les études génétiques (ADN mitochondrial, chromosome Y)', 'Les études linguistiques', 'Les études archéologiques uniquement'], correct: 1 },
    { texte: 'Selon la théorie de l\'origine africaine récente, tous les humains actuels descendent d\'une population originaire :', options: ['D\'Asie', 'D\'Europe', 'D\'Afrique', 'D\'Australie'], correct: 2 },
    { texte: 'La théorie multirégionale, aujourd\'hui abandonnée, postulait :', options: ['Une origine unique en Afrique', 'Une évolution parallèle sur plusieurs continents', 'Une origine en Asie', 'Une origine en Europe'], correct: 1 },
    { texte: 'Le site de Herto en Éthiopie a livré des fossiles d\'Homo sapiens datés d\'environ :', options: ['315 000 ans', '195 000 ans', '160 000 ans', '100 000 ans'], correct: 2 },
    { texte: 'Quels étaient les hominidés déjà présents en Eurasie qu\'Homo sapiens a rencontrés et remplacés ?', options: ['Australopithèques et Paranthropes', 'Néandertaliens et Dénisoviens', 'Homo habilis et Homo ergaster', 'Sahelanthropus et Orrorin'], correct: 1 },
    { texte: 'La dispersion d\'Homo sapiens hors d\'Afrique a commencé il y a environ :', options: ['100 000-80 000 ans', '80 000-70 000 ans', '70 000-60 000 ans', '60 000-50 000 ans'], correct: 2 },
];

thematiquesAfrique.les_grandes_civilisations_anciennes_dafrique.questions = [
    { texte: 'L\'Égypte antique s\'étend le long du Nil, de la première cataracte (Assouan) à :', options: ['La mer Rouge', 'La Méditerranée', 'L\'océan Atlantique', 'La mer Noire'], correct: 1 },
    { texte: 'Les trois saisons �gyptiennes li�es au cycle du Nil sont :', options: ['Akhet , Peret , Shemou', 'Akhet , Peret , Khamsin', 'Akhet , Shemou , H�py', 'Peret , Shemou , Ma�t'], correct: 0 },
    { texte: 'Le dieu de l\'inondation du Nil est :', options: ['Osiris', 'R�', 'H�py', 'Anubis'], correct: 2 },
    { texte: 'L\'unification de la Haute et de la Basse-Égypte est attribuée au roi :', options: ['Djéser', 'Khéops', 'Narmer (Ménès)', 'Thoutmôsis III'], correct: 2 },
    { texte: 'La capitale de l\'Égypte unifiée sous Narmer est :', options: ['Thèbes', 'Alexandrie', 'Memphis', 'Abydos'], correct: 2 },
    { texte: 'L\'Ancien Empire (�ge des pyramides) correspond aux dynasties :', options: ['I�re-IIe', 'IIIe-VIe', 'XIe-XIIe', 'XVIIIe-XXe'], correct: 1 },
    { texte: 'La pyramide à degrés de Saqqarah, première grande construction en pierre, a été construite sous le règne de :', options: ['Khéops', 'Djéser', 'Mykérinos', 'Sésostris Ier'], correct: 1 },
    { texte: 'L\'architecte de la pyramide à degrés de Djéser , divinisé par la suite, est :', options: ['Imhotep', 'Sénènmout', 'Hémiounou', 'Inéni'], correct: 0 },
    { texte: 'La Grande Pyramide de Gizeh a été construite par Khéops. Sa hauteur d\'origine était d\'environ :', options: ['136 m', '146 m', '156 m', '166 m'], correct: 1 },
    { texte: 'Le Sphinx de Gizeh a le visage probablement à l\'effigie du pharaon :', options: ['Khéops', 'Khéphren', 'Mykérinos', 'Djéser'], correct: 1 },
    { texte: 'Hatshepsout est une figure exceptionnelle car elle fut :', options: ['La premi�re reine d\'�gypte', 'La premi�re femme pharaon � r�gner en tant que roi', 'La m�re de Tout�nkhamon', 'La derni�re pharaon de l\'�gypte antique'], correct: 1 },
    { texte: 'Le temple mortuaire d\'Hatshepsout se trouve à :', options: ['Karnak', 'Louxor', 'Deir el- Bahari', 'Abou Simbel'], correct: 2 },
    { texte: 'Thoutmôsis III est surnommé le "Napoléon de l\'Égypte" en raison de :', options: ['Ses constructions monumentales', 'Ses 17 campagnes militaires', 'Sa réforme religieuse', 'Son code de lois'], correct: 1 },
    { texte: 'La première bataille historiquement documentée est celle de :', options: ['Qadesh', 'Megiddo', 'Actium', 'Zama'], correct: 1 },
    { texte: 'Le pharaon Akhenaton est connu pour avoir impos� le culte exclusif du dieu :', options: ['Amon', 'R�', 'Aton (disque solaire)', 'Osiris'], correct: 2 },
    { texte: 'La nouvelle capitale créée par Akhenaton s\'appelait :', options: ['Akhetaton (Tell el-Amarna)', 'Amarna', 'Pi-Ramsès', 'Thèbes'], correct: 0 },
    { texte: 'L\'art amarnien se caractérise par :', options: ['La rigidité et l\'idéalisation', 'Le réalisme et l\'allongement des corps', 'L\'abstraction', 'Les couleurs vives uniquement'], correct: 1 },
    { texte: 'Le c�l�bre masque fun�raire en or provient de la tombe de :', options: ['Akhenaton', 'Rams�s II', 'Tout�nkhamon', 'Thoutm�sis III'], correct: 2 },
    { texte: 'Le traité de paix signé entre Ramsès II et les Hittites après la bataille de Qadesh (1274 av. J.-C.) est considéré comme :', options: ['Le premier traité de paix connu', 'Le plus long traité de l\'Antiquité', 'Un traité de vassalité', 'Un traité commercial'], correct: 0 },
    { texte: 'Ramsès III est connu pour avoir repoussé les invasions des :', options: ['Assyriens', 'Peuples de la mer et Libyens', 'Perses', 'Grecs'], correct: 1 },
    { texte: 'Cl�op�tre VII est la derni�re souveraine de l\'�gypte antique. Son origine ethnique �tait :', options: ['�gyptienne', 'Grecque (ptol�ma�que)', 'Romaine', 'Persane'], correct: 1 },
    { texte: 'La bataille d\'Actium (31 av. J.-C.) oppose Octave � l\'alliance de Cl�op�tre et :', options: ['Jules C�sar', 'Marc Antoine', 'Pomp�e', 'Brutus'], correct: 1 },
    { texte: 'La pierre de Rosette (1799) est une stèle trilingue (hiéroglyphes, démotique, grec) qui a permis à Champollion de déchiffrer les hiéroglyphes en :', options: ['1799', '1812', '1822', '1832'], correct: 2 },
    { texte: 'Le Livre des Morts est placé dans les tombes pour :', options: ['Raconter la vie du défunt', 'Aider le défunt à surmonter les épreuves de l\'au-delà', 'Honorer les dieux', 'Recenser les biens du défunt'], correct: 1 },
    { texte: 'Le royaume de Koush naît en Nubie, correspondant à l\'actuel :', options: ['Éthiopie', 'Soudan', 'Érythrée', 'Tchad'], correct: 1 },
    { texte: 'La première capitale du royaume de Koush , centre prospère contrôlant les routes commerciales, est :', options: ['Napata', 'Méroé', 'Kerma', 'Aksoum'], correct: 2 },
    { texte: 'Les rois de Koush de la XXVe dynastie égyptienne sont surnommés les pharaons :', options: ['Rouges', 'Noirs', 'Blancs', 'Verts'], correct: 1 },
    { texte: 'Le plus c�l�bre des pharaons noirs de la XXVe dynastie, mentionn� dans la Bible, est :', options: ['Pi�nkhy', 'Chabaka', 'Taharqa', 'Tanutamon'], correct: 2 },
    { texte: 'Après l\'invasion de la Nubie par Psammétique II (591 av. J.-C.), la capitale koushite est déplacée vers le sud à :', options: ['Napata', 'Kerma', 'Méroé', 'Aksoum'], correct: 2 },
    { texte: 'Méroé devient un grand centre sidérurgique, surnommé la "Birmingham de l\'Afrique antique" pour sa production de :', options: ['Or', 'Cuivre', 'Fer', 'Bronze'], correct: 2 },
    { texte: 'Les reines guerrières de Méroé, souvent représentées en tenue de combat, sont appelées :', options: ['Candaces', 'Pharaonnes', 'Nubiennes', 'Aksoumites'], correct: 0 },
    { texte: 'Le royaume de Koush s\'effondre vers 350 apr. J.-C. après avoir été envahi par le royaume d\' :', options: ['Égypte', 'Aksoum', 'Rome', 'Perse'], correct: 1 },
    { texte: 'Le royaume d\'Aksoum se développe dans la région du Tigré, correspondant au nord de l\'actuelle :', options: ['Éthiopie et Érythrée', 'Soudan et Égypte', 'Somalie et Djibouti', 'Kenya et Tanzanie'], correct: 0 },
    { texte: 'Aksoum b�n�ficie de la route maritime directe entre l\'�gypte romaine et l\'Inde gr�ce � la d�couverte des vents de :', options: ['Aliz�s', 'Mousson', 'Trade- winds', '�t�siens'], correct: 1 },
    { texte: 'Sous le règne du roi Ezana (320-360), Aksoum se convertit au christianisme, devenant le troisième État chrétien après l\'Arménie et :', options: ['La Géorgie', 'Byzance', 'Rome', 'La Nubie'], correct: 0 },
    { texte: 'Le prophète perse Mani (mort en 274) classe Aksoum parmi les quatre grandes puissances de son temps, aux côtés de la Perse, de Rome et de :', options: ['La Grèce', 'L\'Égypte', 'La Chine', 'L\'Inde'], correct: 2 },
    { texte: 'Selon la tradition éthiopienne ( Kebra Nagast ), l\'Arche d\'alliance serait conservée dans l\'église Sainte-Marie-de-Sion à :', options: ['Addis-Abeba', 'Gondar', 'Aksoum', 'Lalibela'], correct: 2 },
    { texte: 'Carthage est fond�e en 814 av. J.-C. sur la c�te de l\'actuelle Tunisie par la princesse ph�nicienne :', options: ['Cl�op�tre', 'Didon', 'Hatshepsout', 'Guimbi'], correct: 1 },
    { texte: 'Le nom "Carthage" ( Qart Hadasht ) signifie :', options: ['Ville sainte', 'Nouvelle Ville', 'Ville du soleil', 'Porte de l\'Afrique'], correct: 1 },
    { texte: 'Le général carthaginois Hannibal Barca traverse les Alpes avec des éléphants lors de la :', options: ['Première guerre punique', 'Deuxième guerre punique', 'Troisième guerre punique', 'Guerres siciliennes'], correct: 1 },
    { texte: 'Hannibal est finalement vaincu à Zama (202 av. J.-C.) par le général romain :', options: ['Scipion l\'Africain', 'Scipion Émilien', 'César', 'Pompée'], correct: 0 },
    { texte: 'La Troisième guerre punique (149-146 av. J.-C.) se solde par :', options: ['La défaite romaine', 'Un traité de paix', 'La destruction complète de Carthage', 'Le partage de Carthage entre Rome et la Grèce'], correct: 2 },
    { texte: 'Après sa destruction, Carthage est reconstruite par Jules César puis Auguste et devient capitale de la province romaine :', options: ['D\'Égypte', 'D\'Afrique', 'De Numidie', 'De Maurétanie'], correct: 1 },
    { texte: 'Les ports artificiels de Carthage sont appelés :', options: ['Cothon', 'Phare', 'Docks', 'Bassins'], correct: 0 },
    { texte: 'En 1985, les maires de Rome et de Carthage ont signé symboliquement un traité de paix, mettant fin à :', options: ['1 000 ans d\'hostilité', '1 500 ans d\'hostilité', '2 000 ans d\'hostilité', '2 131 ans d\'hostilité'], correct: 3 },
];

thematiquesAfrique.les_empires_et_etats_medievaux.questions = [
    { texte: 'L\'Empire du Ghana, également connu sous le nom de Wagadou , a été fondé par quel peuple ?', options: ['Les Peuls', 'Les Soninkés', 'Les Mandingues', 'Les Haoussas'], correct: 1 },
    { texte: 'L\'Empire du Ghana émerge vers le VIe siècle dans la région située entre les fleuves :', options: ['Niger et Congo', 'Sénégal et Niger', 'Nil et Niger', 'Volta et Sénégal'], correct: 1 },
    { texte: 'La capitale de l\'Empire du Ghana était :', options: ['Tombouctou', 'Djenné', 'Koumbi Saleh', 'Gao'], correct: 2 },
    { texte: 'Au VIIIe siècle, quel souverain a conquis de nouveaux territoires et agrandi l\'Empire du Ghana ?', options: ['Soundiata Keïta', 'Khaya Manga Cissé', 'Soumaoro Kanté', 'Mansa Moussa'], correct: 1 },
    { texte: 'L\'Empire du Ghana contrôlait les gisements aurifères du Bambouk , du Bouré et du :', options: ['Galam', 'Bélédougou', 'Kaarta', 'Macina'], correct: 0 },
    { texte: 'Le sel, importé du désert, était échangé contre l\'or, l\'ivoire et :', options: ['Le cuivre', 'Les esclaves', 'Le coton', 'Les épices'], correct: 1 },
    { texte: 'Au Xe siècle, le géographe arabe Ibn Hawqal qualifie le souverain du Ghana de :', options: ['"Roi le plus puissant"', '"Roi le plus riche de la terre"', '"Empereur de l\'or"', '"Seigneur du désert"'], correct: 1 },
    { texte: 'Dans l\'Empire du Ghana, la succession du roi était :', options: ['Patrilinéaire', 'Matrilinéaire', 'Élective', 'Par primogéniture'], correct: 1 },
    { texte: 'La capitale Koumbi Saleh était une ville double. Le quartier musulman comptait combien de mosquées ?', options: ['6', '8', '10', '12'], correct: 3 },
    { texte: 'Le serpent Bida était considéré comme :', options: ['Un ennemi du royaume', 'Une divinité protectrice', 'Un symbole de l\'islam', 'Un roi légendaire'], correct: 1 },
    { texte: 'L\'Empire du Ghana s\'est affaibli sous les coups des Almoravides, des Berbères musulmans venus du :', options: ['Maghreb', 'Machrek', 'Sahel', 'Hoggar'], correct: 0 },
    { texte: 'En 1076, quel chef almoravide a envahi Koumbi Saleh et imposé l\'islam ?', options: ['Abdellah ben Yassin', 'Abou Bakr ben Omar', 'Ibn Battûta', 'Tariq ibn Ziyad'], correct: 1 },
    { texte: 'Le royaume de Sosso (ou Soso ) a été fondé par le clan des :', options: ['Traoré', 'Kanté', 'Keïta', 'Ouattara'], correct: 1 },
    { texte: 'La capitale du royaume de Sosso était :', options: ['Koumbi Saleh', 'Niagassola (ou Sosso )', 'Niani', 'Kukuba'], correct: 1 },
    { texte: 'Soumaoro Kanté est décrit par la tradition orale comme un roi :', options: ['Juste et pieux', 'Cruel et oppresseur, magicien redouté', 'Faible et indécis', 'Pacifique et commerçant'], correct: 1 },
    { texte: 'La bataille de Kirina , qui a opposé Soundiata Keïta à Soumaoro Kanté, a eu lieu le :', options: ['30 avril 1230', '30 avril 1235', '30 avril 1240', '30 avril 1245'], correct: 1 },
    { texte: 'Selon l\'épopée, les pouvoirs magiques de Soumaoro Kanté ont été neutralisés par :', options: ['Une flèche empoisonnée', 'Un ergot de coq blanc', 'Une prière sacrée', 'Un sortilège de Soundiata'], correct: 1 },
    { texte: 'L\'Empire du Mali est également appelé Empire :', options: ['Mandingue', 'Soninké', 'Peul', 'Haoussa'], correct: 0 },
    { texte: 'La Charte du Manden ( Kurukan Fuga ), proclamée par Soundiata Keïta, est inscrite au patrimoine immatériel de :', options: ['L\'UNESCO', 'L\'UA', 'L\'ONU', 'La Francophonie'], correct: 0 },
    { texte: 'Soundiata Keïta a pris le titre de :', options: ['Faama', 'Mansa', 'Askia', 'Ghana'], correct: 1 },
    { texte: 'La capitale de l\'Empire du Mali sous Soundiata Keïta était :', options: ['Tombouctou', 'Djenné', 'Niani', 'Gao'], correct: 2 },
    { texte: 'Mansa Moussa ( Kankou Mouss', options: ['a régné de 1312 à : a) 1327', '1332', '1337', '1342'], correct: 2 },
    { texte: 'Le pèlerinage de Mansa Moussa à La Mecque en 1324 est célèbre pour :', options: ['Le nombre de pèlerins', 'La quantité d\'or distribuée', 'La construction de mosquées', 'La rencontre avec le sultan du Maroc'], correct: 1 },
    { texte: 'Mansa Moussa a fait construire la mosquée Djingareyber à :', options: ['Gao', 'Djenné', 'Tombouctou', 'Niani'], correct: 2 },
    { texte: 'L\'université de Sankoré , centre intellectuel majeur, a été fondée sous le règne de :', options: ['Soundiata Keïta', 'Mansa Moussa', 'Askia Mohammed', 'Sonni Ali Ber'], correct: 1 },
    { texte: 'L\'Empire songhaï trouve ses racines dans l\'ancien royaume de Gao, qui était d\'abord vassal de :', options: ['L\'Empire du Ghana', 'L\'Empire du Mali', 'L\'Empire du Kanem-Bornou', 'L\'Empire toucouleur'], correct: 1 },
    { texte: 'Le véritable fondateur de l\'Empire songhaï, qui a unifié la boucle du Niger, est :', options: ['Askia Mohammed Touré', 'Sonni Ali Ber', 'Sonni Baro', 'Askia Daoud'], correct: 1 },
    { texte: 'Sonni Ali Ber s\'empare de Tombouctou en :', options: ['1465', '1467', '1469', '1471'], correct: 2 },
    { texte: 'Après la mort de Sonni Ali Ber, son fils Sonni Baro est renversé par le général :', options: ['Sonni Daoud', 'Askia Mohammed Touré', 'Askia Daoud', 'Sonni Mamadou'], correct: 1 },
    { texte: 'Askia Mohammed Touré a reçu du calife abbasside le titre de :', options: ['"Commandeur des croyants"', '" Khalīfa du Soudan"', '"Sultan du Soudan"', '"Émir des croyants"'], correct: 1 },
    { texte: 'L\'Empire songhaï est structuré autour de deux centres : Gao, la capitale impériale, et Tindirma , base du :', options: ['Kanfari (vice-roi de l\'Ouest)', 'Farimba', 'Sarki', 'Mansa'], correct: 0 },
    { texte: 'En 1591, le sultan marocain Ahmad al-Mansur envoie une armée de mercenaires commandée par le pacha Yuder . Les Songhaï sont écrasés à la bataille de :', options: ['Tondibi', 'Kirina', 'Feyiase', 'Qadesh'], correct: 0 },
    { texte: 'Après la chute de l\'Empire songhaï, la dynastie Askia se replie dans le Dendi (actuel Niger) où elle survit jusqu\'au :', options: ['XVIe siècle', 'XVIIe siècle', 'XVIIIe siècle', 'XIXe siècle'], correct: 1 },
    { texte: 'Selon la légende, le héros fondateur des cités-États haoussa est :', options: ['Bayajidda', 'Usman dan Fodio', 'Muhammad Rumfa', 'Muhammad Korau'], correct: 0 },
    { texte: 'La dynastie Bagauda de Kano a été fondée vers :', options: ['900', '999', '1050', '1100'], correct: 1 },
    { texte: 'Le royaume du Kanem naît vers le VIIIe siècle autour du lac Tchad. Il est fondé par les :', options: ['Zaghawa', 'Sao', 'Kanouri', 'Toubou'], correct: 0 },
    { texte: 'La capitale du Kanem était :', options: ['Ngazargamu', 'Njimi', 'Kukawa', 'Dikwa'], correct: 1 },
    { texte: 'L\'apogée du Kanem sous Dounama Dibalami (1220-1259) lui permet de contrôler les oasis de :', options: ['Kaouar', 'Fezzan', 'Touat', 'Hoggar'], correct: 0 },
    { texte: 'Vers 1380, les Boulalas chassent la dynastie Sefuwa du Kanem. Les rois se réfugient de l\'autre côté du lac Tchad, dans la région du :', options: ['Bornou (actuel Nigeria)', 'Baguirmi', 'Wadai', 'Darfour'], correct: 0 },
    { texte: 'L\'apogée du Kanem-Bornou est atteint sous Idriss III Alaoma (1571-1603), qui adopte les :', options: ['Armes à feu', 'Éléphants de guerre', 'Chars de combat', 'Bateaux à vapeur'], correct: 0 },
    { texte: 'Le royaume du Bénin est situé dans l\'actuel :', options: ['Bénin', 'Nigeria', 'Togo', 'Ghana'], correct: 1 },
    { texte: 'La première dynastie du royaume du Bénin, celle des "rois du ciel", s\'appelait :', options: ['Obas', 'Ogiso', 'Eweka', 'Oranmiyan'], correct: 1 },
    { texte: 'Le prince yoruba Oranmiyan , venu du royaume d\'Ife, fonde la dynastie des :', options: ['Obas', 'Ogiso', 'Alafin', 'Ooni'], correct: 0 },
    { texte: 'L\'�ge d\'or du royaume du B�nin commence avec Ewuare le Grand (r. 1440-1473), qui fait fortifier la capitale :', options: ['Igodo', 'Benin City', 'Ife', 'Oyo'], correct: 1 },
    { texte: 'L\'art du bronze du Bénin (plaques en laiton, têtes de reine mère) est réalisé à la technique de :', options: ['La fonte directe', 'La cire perdue', 'Le martelage', 'Le repoussé'], correct: 1 },
    { texte: 'En 1897, une expédition punitive britannique menée par l\'amiral Rawson pille et incendie Benin City. L\'Oba est exilé à :', options: ['Lagos', 'Calabar', 'Accra', 'Freetown'], correct: 1 },
    { texte: 'Le royaume du Dahomey est fondé vers 1600 sur le plateau d\'Abomey par le peuple :', options: ['Yoruba', 'Fon', 'Aja', 'Edo'], correct: 1 },
    { texte: 'Le roi Agadja (1711-1740) conquiert le port de Ouidah (1727), s\'emparant ainsi du lucratif commerce :', options: ['Des épices', 'Des esclaves', 'De l\'or', 'De l\'ivoire'], correct: 1 },
    { texte: 'Le corps militaire féminin du Dahomey, les "Amazones", s\'appelait :', options: ['Agojie', 'Sokoban', 'Akposso', 'Abomey'], correct: 0 },
    { texte: 'Le roi Béhanzin (1889-1894), surnommé le "Roi Requin", est vaincu par les Français en 1894 et exilé en :', options: ['Guyane', 'Martinique', 'Algérie', 'Madagascar'], correct: 1 },
    { texte: 'L\'Empire toucouleur est fondé par El Hadj Oumar Tall , un érudit originaire du :', options: ['Fouta -Toro (actuel Sénégal)', 'Fouta-Djalon (Guinée)', 'Macina (Mali)', 'Liptako (Burkina)'], correct: 0 },
    { texte: 'Oumar Tall est investi comme calife de la confrérie soufie :', options: ['Qadiriyya', 'Tidjaniya', 'Mouridiyya', 'Sanousiya'], correct: 1 },
    { texte: 'Oumar Tall conquiert Ségou (capitale du royaume bambar', options: ['en 1861 et en fait sa capitale. En 1862, il s\'empare de Hamdullahi , capitale de l\'empire peul du : a) Macina', 'Liptako', 'Boundou', 'Fouta-Djalon'], correct: 0 },
    { texte: 'Oumar Tall est vaincu et tué en 1864 par les Peuls du Macina menés par :', options: ['Ahmadou Tall', 'Tidiani Tall', 'Ba Lobbo', 'Samori Touré'], correct: 2 },
    { texte: 'L\'Empire wassoulou est fondé en 1878 par :', options: ['El Hadj Oumar Tall', 'Samori Touré', 'Babemba Traoré', 'Tiéba Traoré'], correct: 1 },
    { texte: 'L\'armée de Samori Touré, disciplinée et modernisée, s\'appelait :', options: ['Les Sofas', 'Les Tirailleurs', 'Les Amazones', 'Les Janjawid'], correct: 0 },
    { texte: 'Pour ralentir l\'avancée française, Samori Touré pratique la tactique de :', options: ['La guérilla', 'La terre brûlée', 'L\'embuscade', 'La fuite en avant'], correct: 1 },
    { texte: 'Samori Touré est capturé le 29 septembre 1898 à Guélémou (actuelle Côte d\'Ivoire) par le commandant français :', options: ['Gouraud', 'Archinard', 'Borgnis-Desbordes', 'Voulet'], correct: 0 },
    { texte: 'Le royaume de Kong, situ� dans l\'actuelle C�te d\'Ivoire, atteint son �ge d\'or sous le r�gne de :', options: ['S�kou Ouattara', 'Famagan Ouattara', 'Usuf Traor�', 'Lasiri Gbomb�l�'], correct: 0 },
    { texte: 'Le royaume du Kongo est fondé vers 1390. Le titre du roi était :', options: ['Oba', 'Manikongo', 'Mansa', 'Faama'], correct: 1 },
    { texte: 'Le roi du Kongo Nzinga Nkuwu est baptisé en 1491. Son fils, Alphonse Ier ( Mvemba a Nzinga ), fait du christianisme la religion d\'État et envoie son fils Dom Henrique étudier au Portugal. Dom Henrique devient en 1518 :', options: ['Le premier évêque noir de l\'histoire', 'Le premier cardinal africain', 'Le premier pape africain', 'Le premier missionnaire au Congo'], correct: 0 },
    { texte: 'L\'Empire ashanti est fondé par le peuple Akan dans l\'actuel Ghana. Le symbole sacré de l\'unité ashanti est :', options: ['Le trône d\'or ( Sika Dwa )', 'L\'épée sacrée', 'Le tambour royal', 'Le masque sacré'], correct: 0 },
    { texte: 'Le fondateur de l\'Empire ashanti, Osei Tutu Ier, vainc le royaume rival de Denkyira à la bataille de Feyiase en :', options: ['1698', '1701', '1705', '1710'], correct: 1 },
    { texte: 'La reine mère Yaa Asantewaa a mené l\'ultime révolte ashanti contre les Britanniques en 1900 lors de la guerre :', options: ['De la côte', 'Du trône d\'or', 'De l\'indépendance', 'Des Amazones'], correct: 1 },
    { texte: 'Les cités-États swahilies se développent sur la côte est-africaine à partir du VIIIe siècle. La langue swahili est un métissage entre le bantou et :', options: ['L\'arabe et le persan', 'Le portugais et l\'arabe', 'L\'anglais et le persan', 'Le français et l\'arabe'], correct: 0 },
    { texte: 'La cité swahilie la plus puissante au XIIIe siècle, contrôlant l\'or du royaume du Zimbabwe, était :', options: ['Mombasa', 'Zanzibar', 'Kilwa', 'Lamu'], correct: 2 },
    { texte: 'Le voyageur marocain Ibn Battûta décrit Kilwa comme l\'une des plus belles villes du monde en :', options: ['1300', '1325', '1331', '1350'], correct: 2 },
    { texte: 'En 1698, les Omanais prennent Fort Jésus et expulsent les Portugais de :', options: ['Kilwa', 'Mombasa', 'Zanzibar', 'Sofala'], correct: 1 },
    { texte: 'Le califat de Sokoto est fondé au début du XIXe siècle par le prédicateur peul :', options: ['Usman dan Fodio', 'Mohammed Bello', 'Atikou', 'Ali'], correct: 0 },
    { texte: 'Usman dan Fodio proclame le djihad contre les rois haoussa en 1804 et se proclame :', options: ['"Sultan de Sokoto"', '"Commandeur des croyants"', '"Khalife du Soudan"', '"Émir des fidèles"'], correct: 1 },
    { texte: 'Les deux capitales du califat de Sokoto étaient Sokoto (à l\'ouest) et :', options: ['Gwandu (à l\'est)', 'Kano (à l\'est)', 'Katsina (à l\'est)', 'Zaria (à l\'est)'], correct: 0 },
    { texte: 'En 1903, les Britanniques occupent Kano puis Sokoto. Le califat est intégré au protectorat du :', options: ['Nigeria du Nord', 'Nigeria du Sud', 'Gold Coast', 'Sierra Leone'], correct: 0 },
];

thematiquesAfrique.la_traite_negriere_lesclavage.questions = [
    { texte: 'La traite négrière désigne le commerce d\'êtres humains principalement à destination de deux régions. Lesquelles ?', options: ['L\'Europe et l\'Asie', 'Les Amériques et le monde arabo-musulman', 'L\'Asie et l\'Océanie', 'L\'Europe et l\'Océanie'], correct: 1 },
    { texte: 'La traite négrière s\'étend approximativement du :', options: ['IVe au XVe siècle', 'VIIe au XIXe siècle', 'Xe au XXe siècle', 'Ve au XVIIIe siècle'], correct: 1 },
    { texte: 'Avant l\'arrivée des Européens, l\'esclavage existait-il en Afrique ?', options: ['Non, l\'esclavage a été introduit par les Européens', 'Oui, sous des formes traditionnelles', 'Oui, mais uniquement en Afrique du Nord', 'Non, l\'Afrique ne pratiquait pas l\'esclavage'], correct: 1 },
    { texte: 'Dans les sociétés africaines anciennes, posséder un grand nombre d\'esclaves et de femmes (polygamie) était :', options: ['Un signe de honte', 'Un signe de richesse et de pouvoir', 'Interdit par la coutume', 'Réservé aux chefs religieux'], correct: 1 },
    { texte: 'Selon les récits de Mungo Park (1771-1805), quel était le statut d\'environ un quart des hommes des régions sahéliennes ?', options: ['Commerçants', 'Esclaves ou travailleurs forcés', 'Guerriers', 'Prêtres'], correct: 1 },
    { texte: 'Les "captifs de case" étaient généralement :', options: ['Maltraités et vendus rapidement', 'Intégrés au cercle familial et traités comme des domestiques', 'Sacrifiés lors de cérémonies', 'Envoyés dans les mines'], correct: 1 },
    { texte: 'Quelle est la principale cause économique de la traite atlantique ?', options: ['La recherche de nouvelles terres', 'La recherche de main-d\'œuvre pour les plantations américaines', 'L\'exportation de produits manufacturés', 'La recherche de métaux précieux'], correct: 1 },
    { texte: 'Quelles cultures tropicales exigeaient une main-d\'œuvre abondante dans les plantations américaines ?', options: ['Blé, orge, avoine', 'Canne à sucre, café, cacao, coton, tabac', 'Riz, maïs, manioc', 'Pomme de terre, tomate, haricot'], correct: 1 },
    { texte: 'Pourquoi les populations amérindiennes n\' ont-elles pas pu fournir la main-d\'œuvre nécessaire aux plantations ?', options: ['Elles étaient trop peu nombreuses', 'Elles étaient décimées par les maladies et les mauvais traitements', 'Elles refusaient de travailler', 'Elles étaient protégées par des lois'], correct: 1 },
    { texte: 'La prise de Constantinople par les Turcs ottomans en 1453 a eu pour conséquence :', options: ['L\'ouverture de la route de la soie', 'Le blocage de la route de l\'Asie, poussant les Européens à chercher de nouvelles voies maritimes', 'La fin du commerce avec l\'Asie', 'L\'alliance entre Européens et Ottomans'], correct: 1 },
    { texte: 'Le mot arabe " abid ", qui désigne un serviteur ou un esclave, est devenu synonyme de :', options: ['"Blanc"', '"Noir"', '"Berbère"', '"Arabe"'], correct: 1 },
    { texte: 'La traite orientale (arabo-musulmane) a débuté avec :', options: ['Les conquêtes musulmanes', 'L\'arrivée des Portugais', 'La découverte de l\'Amérique', 'La révolution industrielle'], correct: 0 },
    { texte: 'La traite orientale aurait déporté environ combien de personnes ?', options: ['7 millions', '12 millions', '17 millions', '25 millions'], correct: 2 },
    { texte: 'Le dernier marché d\'esclaves de la traite orientale a fermé au Maroc en :', options: ['1900', '1910', '1920', '1930'], correct: 2 },
    { texte: 'La traite atlantique commence au XVe siècle avec quel pays européen ?', options: ['L\'Espagne', 'La France', 'Le Portugal', 'L\'Angleterre'], correct: 2 },
    { texte: 'L\'intensification de la traite atlantique est liée à la découverte de l\'Amérique par Christophe Colomb en :', options: ['1482', '1492', '1502', '1512'], correct: 1 },
    { texte: 'À partir du XVIe siècle, le centre économique de l\'Europe se déplace des pays méditerranéens vers :', options: ['Les pays d\'Europe du Sud', 'Les pays d\'Europe de l\'Est', 'Les pays d\'Europe de Nord-Ouest (France, Royaume-Uni, Pays-Bas)', 'Les pays scandinaves'], correct: 2 },
    { texte: 'Le commerce triangulaire est un circuit commercial entre trois continents :', options: ['Europe, Asie, Afrique', 'Europe, Afrique, Amérique', 'Afrique, Asie, Amérique', 'Europe, Amérique, Asie'], correct: 1 },
    { texte: 'Lors de la première étape du commerce triangulaire (Europe vers Afrique), les navires européens transportaient :', options: ['Des esclaves', 'Des produits tropicaux', 'De la pacotille (alcool, tissus, armes, miroirs)', 'De l\'or et de l\'ivoire'], correct: 2 },
    { texte: 'La "traversée du milieu" désigne :', options: ['Le voyage de l\'Europe vers l\'Afrique', 'Le transport des captifs africains vers l\'Amérique', 'Le retour des navires vers l\'Europe', 'Le voyage des esclaves vers les plantations'], correct: 1 },
    { texte: 'Lors de la traversée du milieu, on estime qu\'environ quel pourcentage des captifs mourait ?', options: ['5 à 10 %', '15 à 20 %', '25 à 30 %', '35 à 40 %'], correct: 1 },
    { texte: 'La révolution haïtienne (1791-1804) aboutit à la création du premier État noir indépendant, Haïti, le :', options: ['1er janvier 1802', '1er janvier 1803', '1er janvier 1804', '1er janvier 1805'], correct: 2 },
    { texte: 'La "Société des Amis des Noirs", qui dénonçait l\'esclavage comme une violation des droits de l\'homme, a été créée à Paris en :', options: ['1785', '1786', '1787', '1788'], correct: 3 },
    { texte: 'Quel pays européen a été le premier à abolir la traite (1792, effective en 1803) ?', options: ['Le Royaume-Uni', 'La France', 'Le Danemark', 'Les Pays-Bas'], correct: 2 },
    { texte: 'La Convention montagnarde vote l\'abolition de l\'esclavage dans les colonies françaises le :', options: ['4 février 1794', '4 février 1795', '4 février 1796', '4 février 1797'], correct: 0 },
    { texte: 'Qui a rétabli l\'esclavage dans les colonies françaises en 1802 ?', options: ['Louis XVI', 'Robespierre', 'Bonaparte', 'Louis XVIII'], correct: 2 },
    { texte: 'Le Royaume-Uni interdit la traite des Noirs en :', options: ['1805', '1807', '1809', '1811'], correct: 1 },
    { texte: 'L\'abolition définitive de l\'esclavage dans les colonies françaises est votée le 27 avril 1848 sous l\'impulsion de :', options: ['Lamartine', 'Ledru-Rollin', 'Victor Schœlcher', 'Louis Blanc'], correct: 2 },
    { texte: 'L\'esclavage est aboli aux États-Unis en 1865, après la guerre de :', options: ['D\'indépendance', 'De Sécession (1861-1865)', 'Anglo-américaine', 'De 1812'], correct: 1 },
    { texte: 'Quel est le dernier pays des Amériques à avoir aboli l\'esclavage (1888) ?', options: ['Cuba', 'Haïti', 'Le Brésil', 'Les États-Unis'], correct: 2 },
    { texte: 'Le nombre total estimé de personnes déportées par les deux traites (atlantique et orientale) est d\'environ :', options: ['15 millions', '20 millions', '25 millions', '30 millions'], correct: 3 },
    { texte: 'La traite atlantique a déporté environ :', options: ['5 à 8 millions de personnes', '8 à 10 millions de personnes', '12 à 15 millions de personnes', '18 à 20 millions de personnes'], correct: 2 },
    { texte: 'Quelles régions d\'Afrique ont été particulièrement saignées par la traite atlantique ?', options: ['L\'Afrique du Nord et l\'Afrique de l\'Est', 'L\'Angola et le Congo', 'L\'Afrique de l\'Ouest et le Sahel', 'La corne de l\'Afrique'], correct: 1 },
    { texte: 'La traite a favorisé la formation d\'États esclavagistes comme :', options: ['L\'Empire du Ghana et l\'Empire du Mali', 'Le Dahomey (actuel Bénin) et l\'empire ashanti (actuel Ghana)', 'Le royaume du Kongo et l\'Empire songhaï', 'Le royaume de Koush et l\'Empire aksoum'], correct: 1 },
    { texte: 'Paradoxalement, la traite a aussi introduit en Afrique de nouvelles plantes cultivées venues d\'Amérique, comme :', options: ['Le blé et l\'orge', 'Le manioc, le maïs, l\'arachide et le piment', 'Le riz et le sorgho', 'Le café et le cacao'], correct: 1 },
    { texte: 'Les ports négriers européens ont connu un essor spectaculaire. Lequel de ces ports n\'était pas un grand port négrier ?', options: ['Nantes', 'Liverpool', 'Marseille', 'Bordeaux'], correct: 2 },
    { texte: 'Le Code noir, promulgué par la France entre 1685 et 1724, définissait l\'esclave comme :', options: ['Une personne humaine ayant des droits', 'Un "bien meuble" pouvant être vendu et acheté', 'Un citoyen français', 'Un travailleur libre'], correct: 1 },
    { texte: 'Le Code noir comportait combien d\'articles ?', options: ['40', '50', '60', '70'], correct: 2 },
    { texte: 'Le Code noir a été définitivement supprimé en :', options: ['1794', '1802', '1833', '1848'], correct: 3 },
    { texte: 'L\'asiento (de negros ) est un contrat de monopole accordé par la couronne d\'Espagne pour :', options: ['L\'exploitation des mines d\'or', 'La fourniture exclusive d\'esclaves noirs aux colonies espagnoles d\'Amérique', 'Le commerce des épices', 'La construction de navires'], correct: 1 },
    { texte: 'L\'asiento était généralement concédé pour une durée limitée de :', options: ['10 à 20 ans', '20 à 30 ans', '30 à 40 ans', '40 à 50 ans'], correct: 1 },
    { texte: 'Successivement, l\'asiento a été détenu par les Portugais, les Hollandais, les Français (1701-1713) puis, après le traité d\'Utrecht (1713), par :', options: ['Les Espagnols', 'Les Anglais', 'Les Danois', 'Les Allemands'], correct: 1 },
    { texte: 'La "pièce d\'Inde" était :', options: ['Une monnaie utilisée en Inde', 'Une unité de compte et une mesure de la valeur d\'un esclave', 'Un bateau négrier', 'Un comptoir commercial'], correct: 1 },
    { texte: 'Une "pi�ce d\'Inde" de r�f�rence d�signait initialement :', options: ['Une femme �g�e de 15 � 30 ans', 'Un enfant robuste', 'Un esclave noir de sexe masculin, �g� de 15 � 30 ans, grand, robuste et ayant toutes ses dents', 'Un homme �g� de plus de 30 ans'], correct: 2 },
    { texte: 'Vers 1770, une "pièce d\'Inde" atteignait environ :', options: ['1 000 livres (monnaie française)', '1 800 livres', '2 400 livres', '3 000 livres'], correct: 2 },
];

thematiquesAfrique.de_limperialisme_a_la_conference_de_berlin.questions = [
    { texte: 'L\'impérialisme est une doctrine politique qui préconise :', options: ['L\'égalité entre les peuples', 'La domination politique et économique des États les plus forts sur les plus faibles', 'La non-ingérence dans les affaires des autres États', 'Le libre-échange mondial'], correct: 1 },
    { texte: 'Quelles doctrines majeures du XIXe siècle ont poussé l\'Europe à la conquête coloniale ?', options: ['Le libéralisme', 'Le socialisme', 'Le nationalisme', 'Le communisme'], correct: 0 },
    { texte: 'Le libéralisme économique a favorisé le développement de l\'industrie, créant de nouveaux besoins en :', options: ['Main-d\'œuvre qualifiée', 'Matières premières et débouchés', 'Énergie renouvelable', 'Terres agricoles'], correct: 1 },
    { texte: 'Au XIXe siècle, la grandeur d\'un pays se mesurait par :', options: ['Son niveau d\'éducation', 'L\'importance de ses possessions coloniales', 'Sa puissance militaire uniquement', 'Sa production agricole'], correct: 1 },
    { texte: 'Le machinisme a provoqué :', options: ['Une diminution de la production', 'Une révolution industrielle et agricole', 'L\'arrêt du commerce international', 'La fin de l\'esclavage'], correct: 1 },
    { texte: 'L\'économie européenne du XIXe siècle souffrait de surproduction et de barrières douanières. Ce phénomène est appelé :', options: ['L\'inflation', 'La mévente', 'La récession', 'La stagnation'], correct: 1 },
    { texte: 'Quelles sont les causes principales de l\'expansion européenne en Afrique ?', options: ['Économiques', 'Politiques', 'Climatiques', 'Stratégiques'], correct: 0 },
    { texte: 'La recherche de matières premières et de débouchés pour les produits européens relève des causes :', options: ['Politiques', 'Économiques', 'Idéologiques', 'Religieuses'], correct: 1 },
    { texte: 'La volonté d\'exprimer son prestige et sa grandeur nationale par l\'acquisition de territoires relève des causes :', options: ['Économiques', 'Démographiques', 'Politiques', 'Humanitaires'], correct: 2 },
    { texte: 'L\'explosion démographique en Europe (baby-boom) a poussé les Européens à chercher :', options: ['De nouvelles routes commerciales', 'Des colonies de peuplement', 'Des alliés militaires', 'Des sources d\'énergie'], correct: 1 },
    { texte: 'Les Européens justifiaient la colonisation par des causes secondaires. Lesquelles ?', options: ['Idéologiques ("civiliser" l\'Afrique)', 'Humanitaires (apporter la science)', 'Religieuses (convertir au christianisme)', 'Touristiques'], correct: 0 },
    { texte: 'Jusqu\'au début du XIXe siècle, l\'intérieur de l\'Afrique était pour les Européens une :', options: ['Terre promise', 'Terra incognita (terre inconnue)', 'Colonie modèle', 'Zone protégée'], correct: 1 },
    { texte: 'À partir des années 1850, les explorateurs et les missionnaires ont commencé à sillonner l\'Afrique. Les missionnaires étaient souvent :', options: ['Les derniers à arriver', 'Les premiers Européens à s\'enfoncer à l\'intérieur des terres', 'Uniquement présents sur les côtes', 'Absents du continent africain'], correct: 1 },
    { texte: 'Les explorations avaient des buts scientifiques, économiques, politiques et :', options: ['Touristiques', 'Humanitaires et religieux', 'Sportifs', 'Culinaires'], correct: 1 },
    { texte: 'Lequel de ces explorateurs est le premier Européen à atteindre le fleuve Niger ?', options: ['René Caillé', 'Mungo Park', 'Heinrich Barth', 'David Livingstone'], correct: 1 },
    { texte: 'Quel explorateur français a été le premier Européen à entrer à Tombouctou et à en revenir vivant (1828) ?', options: ['Louis Faidherbe', 'René Caillé', 'Pierre Savorgnan de Brazza', 'Charles de Foucauld'], correct: 1 },
    { texte: 'L\'explorateur allemand Heinrich Barth a cartographié systématiquement la région du Sahara, du Sahel et du lac Tchad entre :', options: ['1820-1825', '1835-1840', '1850-1855', '1865-1870'], correct: 2 },
    { texte: 'Richard Burton et John Hanning Speke sont célèbres pour avoir recherché :', options: ['Les sources du Nil', 'Les mines d\'or du royaume du Ghana', 'La cité perdue de Tombouctou', 'Le passage vers l\'Inde'], correct: 0 },
    { texte: 'John Hanning Speke a découvert le lac Victoria, source du Nil Blanc. Ses découvertes ont :', options: ['Mis fin à la colonisation', 'Attisé les rivalités coloniales', 'Rapproché les Européens et les Africains', 'Découragé les explorateurs'], correct: 1 },
    { texte: 'David Livingstone était à la fois explorateur et :', options: ['Marchand d\'esclaves', 'Missionnaire', 'Militaire', 'Roi'], correct: 1 },
    { texte: 'Les récits de David Livingstone sur l\'esclavage ont poussé l\'Europe à :', options: ['Abolir immédiatement l\'esclavage', 'S\'intéresser à l\'intérieur des terres africaines', 'Quitter l\'Afrique', 'Renforcer la traite'], correct: 1 },
    { texte: 'Henry Morton Stanley a été envoyé au Congo par le roi des Belges :', options: ['Léopold Ier', 'Léopold II', 'Albert Ier', 'Baudouin'], correct: 1 },
    { texte: 'Pierre Savorgnan de Brazza a exploré le bassin du Congo pour le compte de :', options: ['La Belgique', 'Le Portugal', 'La France', 'L\'Allemagne'], correct: 2 },
    { texte: 'Le général Louis Faidherbe a organisé la conquête du Sénégal et la pénétration vers le Niger. Il était :', options: ['Anglais', 'Portugais', 'Français', 'Allemand'], correct: 2 },
    { texte: 'La conférence de Berlin s\'est déroulée du 15 novembre 1884 au :', options: ['26 janvier 1885', '26 février 1885', '26 mars 1885', '26 avril 1885'], correct: 1 },
    { texte: 'La conférence de Berlin a été organisée par le chancelier allemand :', options: ['Bismarck', 'Von Moltke', 'Hindenburg', 'Ludendorff'], correct: 0 },
    { texte: 'Combien de pays ont participé à la conférence de Berlin ?', options: ['10', '12', '14', '16'], correct: 2 },
    { texte: 'Des représentants africains ont-ils été invités à la conférence de Berlin ?', options: ['Oui, plusieurs chefs africains', 'Non, aucun représentant africain n\'a été invité', 'Oui, uniquement des rois d\'Afrique du Nord', 'Oui, mais ils ont refusé'], correct: 1 },
    { texte: 'Quelles étaient les principales causes de la conférence de Berlin ?', options: ['Rivalités coloniales autour du bassin du Congo', 'Prévention des conflits entre puissances européennes', 'Nécessité de règles communes pour le partage', 'Volonté d\'indépendance des colonies'], correct: 0 },
    { texte: 'Avant 1884, une simple déclaration ou un drapeau planté suffisait à revendiquer un territoire. La conférence de Berlin a imposé :', options: ['La signature d\'un traité international', 'Une occupation effective pour qu\'une annexion soit reconnue', 'L\'accord des populations locales', 'Un référendum'], correct: 1 },
    { texte: 'Le discours des "3 C" à la conférence de Berlin faisait référence à :', options: ['Commerce, Christianisme, Civilisation', 'Commerce, Colonisation, Coopération', 'Conquête, Conversion, Culture', 'Congo, Cameroun, Côte d\'Ivoire'], correct: 0 },
    { texte: 'L\'Acte général de Berlin a été signé le :', options: ['26 février 1884', '26 février 1885', '26 février 1886', '26 février 1887'], correct: 1 },
    { texte: 'La théorie de l\'Hinterland stipule qu\'une puissance établie sur la côte a le droit de :', options: ['Coloniser uniquement la côte', 'Prolonger ses frontières vers l\'intérieur des terres', 'Partager ses terres avec d\'autres puissances', 'Abandonner ses colonies'], correct: 1 },
    { texte: 'La conférence de Berlin a créé l\'État indépendant du Congo, propriété personnelle du roi :', options: ['Albert Ier de Belgique', 'Léopold II de Belgique', 'Guillaume II d\'Allemagne', 'Louis-Philippe de France'], correct: 1 },
    { texte: 'Les fleuves déclarés voies internationales, ouvertes à tous les pavillons, sont :', options: ['Le Nil et le Sénégal', 'Le Congo et le Niger', 'Le Zambèze et l\'Orange', 'Le Niger et le Nil'], correct: 1 },
    { texte: 'Pour qu\'une possession coloniale soit reconnue, la puissance doit y exercer :', options: ['Une simple présence militaire', 'Une administration réelle (police, justice, exploitation)', 'Une exploitation minière uniquement', 'Une mission religieuse'], correct: 1 },
    { texte: 'En 1902, quel pourcentage du continent africain était sous domination européenne ?', options: ['70 %', '80 %', '90 %', '100 %'], correct: 2 },
    { texte: 'Quels pays africains sont restés indépendants après le partage colonial (1902) ?', options: ['L\'Égypte et le Maroc', 'Le Liberia et l\'Éthiopie', 'Le Soudan et le Nigeria', 'Le Ghana et le Mali'], correct: 1 },
    { texte: 'Les règles posées à Berlin ont été reprises par la Société des Nations puis par l\'ONU sous le nom de :', options: ['Système de protectorat', 'Système des mandats (puis tutelle)', 'Système de colonisation directe', 'Système d\'association'], correct: 1 },
    { texte: 'Lequel de ces explorateurs a traversé l\'Afrique d\'ouest en est (Angola-Mozambique), renforçant les revendications portugaises ?', options: ['Serpa Pinto', 'Carl Peters', 'Charles de Foucauld', 'Henri Duveyrier'], correct: 0 },
    { texte: 'L\'explorateur allemand Carl Peters a signé des traités avec des chefs locaux en Afrique de l\'Est pour le compte de :', options: ['La France', 'La Belgique', 'L\'Allemagne', 'Le Royaume-Uni'], correct: 2 },
    { texte: 'Charles de Foucauld a exploré et cartographié des régions inconnues du Maroc et du Sahara. Il était également :', options: ['Militaire', 'Missionnaire (plus tard)', 'Marchand', 'Diplomate'], correct: 1 },
    { texte: 'La conférence de Berlin s\'est tenue au 77 Wilhelmstrasse dans quelle ville ?', options: ['Paris', 'Londres', 'Berlin', 'Vienne'], correct: 2 },
    { texte: 'L\'explorateur Henri Duveyrier est connu pour son exploration du Sahara algérien et l\'étude des :', options: ['Égyptiens', 'Touaregs', 'Peuls', 'Haoussas'], correct: 1 },
    { texte: 'La conférence de Berlin a été organisée à la demande du roi des Belges Léopold II et sur l\'initiative de quel autre pays ?', options: ['La France', 'Le Royaume-Uni', 'Le Portugal', 'L\'Allemagne'], correct: 2 },
];

thematiquesAfrique.la_colonisation_conquetes_resistances_systemes_et.questions = [
    { texte: 'Après le Congrès de Berlin (1884-1885), les puissances européennes se lancent dans :', options: ['Une course à l\'Afrique', 'Une course aux armements', 'Une course à l\'Asie', 'Une course aux alliances'], correct: 0 },
    { texte: 'Quels pays se sont imposés comme les deux principaux empires coloniaux en Afrique ?', options: ['L\'Allemagne et la Belgique', 'La France et le Royaume-Uni', 'Le Portugal et l\'Espagne', 'L\'Italie et les Pays-Bas'], correct: 1 },
    { texte: 'L\'Algérie était une colonie de peuplement. Elle dépendait du ministère :', options: ['Des Colonies', 'De l\'Intérieur', 'Des Affaires étrangères', 'De la Guerre'], correct: 1 },
    { texte: 'L\'Afrique Occidentale Française (AOF) a été créée en 1895. Sa capitale était d\'abord :', options: ['Dakar', 'Saint-Louis', 'Bamako', 'Conakry'], correct: 1 },
    { texte: 'L\'Afrique Équatoriale Française (AEF) a été créée en 1910. Sa capitale était :', options: ['Brazzaville', 'Libreville', 'Bangui', 'N\'Djamena'], correct: 0 },
    { texte: 'La plus grande île africaine, conquise par la France, est :', options: ['Zanzibar', 'Madagascar', 'La Réunion', 'Maurice'], correct: 1 },
    { texte: 'Les Britanniques contrôlaient la Gold Coast , qui correspond à l\'actuel :', options: ['Nigeria', 'Ghana', 'Sierra Leone', 'Gambie'], correct: 1 },
    { texte: 'Le canal de Suez, voie stratégique vers l\'Inde, était contrôlé par les Britanniques en :', options: ['Afrique du Nord (Égypte)', 'Afrique de l\'Ouest', 'Afrique australe', 'Afrique de l\'Est'], correct: 0 },
    { texte: 'L\'Afrique orientale allemande correspondait à l\'actuel :', options: ['Cameroun et Togo', 'Tanzanie, Rwanda et Burundi', 'Namibie', 'Kenya et Ouganda'], correct: 1 },
    { texte: 'L\'État indépendant du Congo (1885-1908) était la propriété personnelle du roi des Belges :', options: ['Albert Ier', 'Léopold Ier', 'Léopold II', 'Baudouin'], correct: 2 },
    { texte: 'Quelles colonies �taient poss�d�es par le Portugal en Afrique ?', options: ['Angola, Mozambique, Guin�e-Bissau, Cap-Vert, S�o Tom�-et-Pr�ncipe', 'Angola, Mozambique, Namibie, Cap-Vert', 'Angola, Mozambique, Tanzanie', 'Angola, Mozambique, Madagascar'], correct: 0 },
    { texte: 'L\'Italie possédait quelles colonies en Afrique ?', options: ['Libye, Tunisie, Érythrée', 'Libye, Érythrée, Somalie italienne', 'Libye, Somalie, Éthiopie', 'Tunisie, Érythrée, Somalie'], correct: 1 },
    { texte: 'Le roi Béhanzin du Dahomey a résisté aux Français de 1892 à 1894. Il est capturé et exilé en :', options: ['Martinique', 'Algérie', 'Gabon', 'Madagascar'], correct: 1 },
    { texte: 'Les Amazones du Dahomey étaient :', options: ['Des danseuses royales', 'Un corps militaire féminin d\'élite', 'Des prêtresses', 'Des commerçantes'], correct: 1 },
    { texte: 'Samori Touré, chef de l\'empire du Wassoulou , disposait d\'une armée de soldats appelés :', options: ['Tirailleurs', 'Sofas', 'Amazones', 'Janjawid'], correct: 1 },
    { texte: 'Samori Touré pratiquait la tactique de la terre brûlée pour :', options: ['Attirer les Français', 'Ralentir l\'avancée ennemie', 'Nourrir sa population', 'Construire des fortifications'], correct: 1 },
    { texte: 'Samori Touré est capturé le 29 septembre 1898 à Guélémou et déporté au :', options: ['Gabon', 'Sénégal', 'Madagascar', 'Algérie'], correct: 0 },
    { texte: 'Lat Dior, damel du Cayor , s\'est opposé à la construction du chemin de fer Dakar-Saint-Louis par les Français. Il est mort au combat en :', options: ['1883', '1885', '1886', '1888'], correct: 2 },
    { texte: 'Babemba Traoré, roi du Kénédougou , après la chute de Sikasso (1898), a choisi :', options: ['L\'exil en France', 'La collaboration avec les Français', 'La mort plutôt que la captivité', 'La reddition'], correct: 2 },
    { texte: 'Boukary Koutou ( Mogho-Naba Wobgo ) a résisté à la pénétration française dans le royaume :', options: ['Du Yatenga', 'De Ouagadougou (Mossi)', 'Du Gulmu', 'Du Liptako'], correct: 1 },
    { texte: 'L\'assassinat du consul anglais Philips à Bénin (Nigeri', options: ['a provoqué : a) Un traité de paix', 'Une expédition punitive britannique', 'L\'indépendance du Bénin', 'La fuite des Britanniques'], correct: 1 },
    { texte: 'Le roi Prempeh Ier de l\'empire ashanti a été exilé par les Britanniques aux Seychelles de 1896 à :', options: ['1914', '1918', '1922', '1924'], correct: 3 },
    { texte: 'En Haute-Volta, une coalition de Bwaba , Marka et Samo s\'est soulevée contre les Français entre 1915 et 1916. Cette révolte est appelée :', options: ['Révolte des Bwaba', 'Révolte des Lobi', 'Révolte du Bani -Volta', 'Révolte des Birifor'], correct: 0 },
    { texte: 'Quelles sont les principales causes de l\'échec des résistances africaines face aux colonisateurs ?', options: ['Le manque d\'unité entre Africains', 'La supériorité militaire européenne', 'Le soutien des populations locales', 'Les trahisons'], correct: 0 },
    { texte: 'La mitrailleuse Maxim, utilisée par les Européens, était :', options: ['Une arme traditionnelle africaine', 'Une arme à feu à répétition', 'Un canon', 'Un bateau de guerre'], correct: 1 },
    { texte: 'Dans le système colonial français, le "commandant de cercle" était considéré comme :', options: ['Un simple fonctionnaire', 'La "cheville ouvrière" du système colonial français', 'Un chef traditionnel', 'Un missionnaire'], correct: 1 },
    { texte: 'Les citoyens "assimilés" natifs de quatre communes du Sénégal (Gorée, Saint-Louis, Rufisque, Dakar) avaient :', options: ['Moins de droits que les Français', 'Les mêmes droits que les Français', 'Aucun droit politique', 'Un statut d\'esclaves'], correct: 1 },
    { texte: 'Les "indigènes sujets" dans l\'empire colonial français étaient soumis au :', options: ['Code civil', 'Code de l\'indigénat', 'Droit coutumier uniquement', 'Code pénal français'], correct: 1 },
    { texte: 'Le système colonial anglais est qualifié d\'administration indirecte ou "indirect rule ". Cela signifie que :', options: ['Les Anglais administraient directement les colonies', 'Les chefs locaux étaient maintenus pour percevoir les impôts et rendre la justice', 'Il n\'y avait aucune administration', 'Les colonies étaient indépendantes'], correct: 1 },
    { texte: 'Les territoires nouvellement conquis par les Anglais étaient souvent livrés à des :', options: ['Compagnies à charte', 'Missionnaires', 'Gouverneurs militaires', 'Colons individuels'], correct: 0 },
    { texte: 'Les colonies de la couronne anglaise dépendaient directement du :', options: ['Colonial Office', 'Ministère de l\'Intérieur', 'Foreign Office', 'Premier ministre'], correct: 0 },
    { texte: 'En Afrique, l\'Union sud-africaine était un dominion, c\'est-à-dire :', options: ['Une colonie sans aucun droit', 'Une colonie ayant une large autonomie (sauf politique étrangère)', 'Un protectorat', 'Un État indépendant'], correct: 1 },
    { texte: 'Les travaux forcés dans les colonies françaises étaient institués par :', options: ['Le Code civil', 'Le Code de l\'indigénat', 'La loi Defferre', 'La Charte coloniale'], correct: 1 },
    { texte: 'Chaque habitant adulte devait effectuer combien de semaines de travail forcé par an dans les colonies françaises ?', options: ['Une à deux semaines', 'Deux à six semaines', 'Six à dix semaines', 'Dix à douze semaines'], correct: 1 },
    { texte: 'La Haute-Volta était considérée comme un réservoir de main-d\'œuvre pour alimenter :', options: ['Le Sénégal et la Mauritanie', 'La Côte d\'Ivoire (plantations) et l\'Office du Niger', 'Le Mali et le Niger', 'Le Ghana et le Togo'], correct: 1 },
    { texte: 'Pendant les guerres mondiales, la France a recruté massivement des travailleurs coloniaux. Environ 75 000 travailleurs venaient d\' :', options: ['Algérie', 'Maroc', 'Tunisie', 'Madagascar'], correct: 0 },
    { texte: 'L\'impôt de capitation (système français) ou impôt de case (système anglais/allemand) était payé :', options: ['Uniquement en espèces', 'Uniquement en nature', 'En espèces ou en nature', 'Par le travail forcé'], correct: 2 },
    { texte: 'Dans les régions non pacifiées (comme chez les Lobi- Dagara de Haute-Volt', options: [', la perception de l\'impôt était : a) Facile et rapide', 'Périlleuse (flèches décrochées sur les percepteurs)', 'Volontaire', 'Confiée aux chefs locaux sans problème'], correct: 1 },
    { texte: 'Les cultures commerciales (agriculture de rente) étaient destinées à :', options: ['Nourrir les populations locales', 'Alimenter les industries européennes en matières premières', 'Exporter vers l\'Asie', 'Stocker pour les famines'], correct: 1 },
    { texte: 'Les compagnies à charte allemandes, britanniques, belges et françaises réalisaient des bénéfices sur :', options: ['Le bois, l\'ivoire et le caoutchouc', 'Les céréales', 'Les textiles', 'Les épices'], correct: 0 },
    { texte: 'Quelles colonies produisaient du thé (Kenya, Rwanda, Burundi) ?', options: ['Colonies françaises', 'Colonies britanniques', 'Colonies belges', 'Colonies allemandes'], correct: 1 },
    { texte: 'Les Européens ont réalisé de gros investissements dans l\'exploitation des mines africaines pour se procurer :', options: ['De la main-d\'œuvre', 'Des ressources minières nécessaires à leur industrie', 'Des terres agricoles', 'Des routes'], correct: 1 },
    { texte: 'Le cuivre du Congo belge, les diamants et l\'or d\'Afrique du Sud, le phosphate d\'Afrique du Nord étaient exploités pour :', options: ['Les besoins locaux', 'L\'industrie européenne', 'Le commerce intra-africain', 'La construction de monuments'], correct: 1 },
    { texte: 'En 1902, quel pourcentage du continent africain était sous domination européenne ?', options: ['70 %', '80 %', '90 %', '95 %'], correct: 2 },
    { texte: 'Quels pays africains sont restés indépendants après le partage colonial ?', options: ['Le Maroc et la Tunisie', 'Le Liberia et l\'Éthiopie', 'L\'Égypte et le Soudan', 'Le Ghana et le Mali'], correct: 1 },
    { texte: 'La conférence de Berlin (1884-1885) a légitimé le principe de "tutelle" des peuples colonisés, repris plus tard par :', options: ['La Société des Nations puis l\'ONU', 'L\'Union africaine', 'La Francophonie', 'Le Commonwealth'], correct: 0 },
    { texte: 'Le général français qui a organisé la conquête du Sénégal et la pénétration vers le Niger est :', options: ['Gallieni', 'Faidherbe', 'Borgnis-Desbordes', 'Archinard'], correct: 1 },
    { texte: 'L\'explorateur-missionnaire David Livingstone a sillonné l\'Afrique australe et centrale. Ses récits ont dénoncé :', options: ['La colonisation', 'L\'esclavage', 'Les maladies tropicales', 'La pauvreté'], correct: 1 },
    { texte: 'L\'explorateur Henry Morton Stanley a exploré le bassin du Congo pour le compte de :', options: ['La France', 'La Belgique (Léopold II)', 'Le Royaume-Uni', 'Le Portugal'], correct: 1 },
    { texte: 'L\'explorateur Pierre Savorgnan de Brazza a exploré le bassin du Congo pour le compte de :', options: ['La Belgique', 'La France', 'Le Portugal', 'L\'Allemagne'], correct: 1 },
    { texte: 'Le général Joseph Gallieni a mené des missions d\'exploration au Sénégal, au Niger et à Madagascar, préparant :', options: ['La conquête militaire', 'La construction de chemins de fer', 'L\'abolition de l\'esclavage', 'L\'indépendance des colonies'], correct: 0 },
    { texte: 'L\'explorateur allemand Carl Peters a signé des traités avec des chefs locaux en Afrique de l\'Est pour le compte de :', options: ['La France', 'La Belgique', 'L\'Allemagne', 'Le Royaume-Uni'], correct: 2 },
    { texte: 'Charles de Foucauld, explorateur et missionnaire, a cartographié des régions inconnues du Maroc et du :', options: ['Sahara', 'Sahel', 'Congo', 'Niger'], correct: 0 },
    { texte: 'L\'explorateur français Henri Duveyrier est connu pour son exploration du Sahara algérien et l\'étude des :', options: ['Touaregs', 'Peuls', 'Haoussas', 'Berbères sédentaires'], correct: 0 },
    { texte: 'Le système colonial français, avec son administration directe et centralisée, tendait à :', options: ['Respecter les spécificités locales', 'Uniformiser les sociétés', 'Donner l\'indépendance aux colonies', 'Favoriser l\'autonomie'], correct: 1 },
    { texte: 'Le Colonial Office britannique a été créé en :', options: ['1834', '1844', '1854', '1864'], correct: 2 },
    { texte: 'Le Nigeria fut longtemps administré par des compagnies à charte avant de devenir une colonie de la couronne. Ces compagnies à charte étaient :', options: ['Des entreprises publiques', 'Des compagnies privées à but commercial', 'Des missions religieuses', 'Des organisations humanitaires'], correct: 1 },
    { texte: 'Le code de l\'indigénat a été aboli en France en :', options: ['1848', '1881', '1900', '1946'], correct: 3 },
    { texte: 'La suppression de la colonie de Haute-Volta en 1932 a eu pour conséquence :', options: ['L\'indépendance de la Haute-Volta', 'L\'accélération du départ forcé de travailleurs voltaïques', 'La fin des travaux forcés', 'La création de l\'AOF'], correct: 1 },
    { texte: 'Le Service de l\'Organisation des Travailleurs Coloniaux (SOTC) gérait :', options: ['Les missionnaires', 'Les travailleurs coloniaux recrutés en métropole', 'Les travailleurs coloniaux en France pendant les guerres mondiales', 'Les fonctionnaires coloniaux'], correct: 2 },
    { texte: 'L\'impôt de case (système anglais et allemand) était un impôt :', options: ['Par tête d\'habitant', 'Par case (par famille)', 'Par parcelle de terre', 'Par récolte'], correct: 1 },
    { texte: 'Les "chefs improvisés" utilisés par l\'administration coloniale pour percevoir l\'impôt étaient souvent :', options: ['Respectés par la population', 'Dépourvus de prestige', 'Des chefs traditionnels légitimes', 'Des missionnaires'], correct: 1 },
    { texte: 'Les exploitations agricoles européennes en Afrique étaient des entreprises capitalistes qui utilisaient une main-d\'œuvre :', options: ['Uniquement salariée', 'Salariée ou souvent gratuite (travail forcé)', 'Uniquement volontaire', 'Exclusivement locale sans contrainte'], correct: 1 },
    { texte: 'Cecil Rhodes a joué un rôle majeur dans l\'expansion coloniale britannique en :', options: ['Afrique de l\'Ouest', 'Afrique du Sud et Rhodésie', 'Afrique de l\'Est', 'Afrique du Nord'], correct: 1 },
    { texte: 'Les pays colonisés n\'avaient aucune possibilité d\'exploiter leurs mines pour :', options: ['L\'exportation', 'Leurs propres besoins économiques et financiers', 'Le commerce local', 'La construction d\'infrastructures'], correct: 1 },
    { texte: 'Le phosphate d\'Afrique du Nord était exploité principalement pour :', options: ['L\'agriculture locale', 'L\'industrie européenne (engrais, chimie)', 'La construction', 'L\'alimentation animale'], correct: 1 },
    { texte: 'L\'explorateur écossais Mungo Park a atteint le fleuve Niger en :', options: ['1795', '1805', '1815', '1825'], correct: 0 },
    { texte: 'L\'explorateur français René Caillé a atteint Tombouctou en :', options: ['1824', '1826', '1828', '1830'], correct: 2 },
    { texte: 'L\'explorateur allemand Heinrich Barth a cartographié la région du lac Tchad et du Sahara entre :', options: ['1840-1845', '1845-1850', '1850-1855', '1855-1860'], correct: 2 },
    { texte: 'Les explorateurs britanniques Richard Burton et John Hanning Speke ont recherché les sources du Nil. Speke a découvert le lac Victoria en :', options: ['1856', '1858', '1860', '1862'], correct: 1 },
    { texte: 'Le Portugal possédait des colonies en Afrique. Laquelle de ces colonies n\'était pas portugaise ?', options: ['Angola', 'Mozambique', 'Guinée-Bissau', 'Namibie'], correct: 3 },
    { texte: 'L\'Espagne contrôlait le Sahara espagnol, la Guinée équatoriale et :', options: ['Des enclaves au Maroc', 'Le nord de la Mauritanie', 'L\'ouest de l\'Algérie', 'Le sud du Sénégal'], correct: 0 },
];

thematiquesAfrique.de_la_decolonisation_aux_independances.questions = [
    { texte: 'La décolonisation de l\'Afrique désigne :', options: ['La colonisation de l\'Afrique', 'Le processus d\'émancipation des colonies vis-à-vis des puissances colonisatrices', 'L\'installation des Européens en Afrique', 'La création de l\'Union africaine'], correct: 1 },
    { texte: 'Quels sont les facteurs internes de la décolonisation en Afrique ?', options: ['L\'éveil du sentiment nationaliste', 'L\'action des anciens combattants', 'La pression des États-Unis', 'Le rôle des syndicats et partis politiques'], correct: 0 },
    { texte: 'La négritude est un concept qui a favorisé :', options: ['L\'assimilation des Africains', 'Une prise de conscience culturelle et identitaire', 'La colonisation', 'L\'installation des missionnaires'], correct: 1 },
    { texte: 'La négritude a été portée principalement par :', options: ['Léopold Sédar Senghor', 'Aimé Césaire', 'Léon-Gontran Damas', 'Frantz Fanon'], correct: 0 },
    { texte: 'En participant aux deux guerres mondiales aux côtés des Européens, les soldats africains ont constaté que :', options: ['L\'homme blanc était invincible', 'L\'homme blanc n\'était pas invincible, brisant le mythe de sa supériorité', 'Les Européens étaient plus faibles que les Africains', 'La guerre était sans danger'], correct: 1 },
    { texte: 'En 1937, en Gold Coast (Ghan', options: [', le syndicat des planteurs de cacao a mené : a) Une grève', 'Une manifestation religieuse', 'Une élection', 'Une révolte armée'], correct: 0 },
    { texte: 'Quels sont les facteurs externes de la décolonisation en Afrique ?', options: ['L\'affaiblissement des métropoles après 1945', 'La pression des États-Unis et de l\'URSS', 'Le rôle de l\'ONU', 'La création de l\'Union africaine'], correct: 0 },
    { texte: 'La conférence de Bandung s\'est tenue du 18 au 24 avril 1955 en :', options: ['Inde', 'Indonésie', 'Birmanie', 'Ceylan'], correct: 1 },
    { texte: 'La conférence de Bandung a marqué un tournant en :', options: ['Condamnant le racisme', 'Affirmant la volonté du Tiers-Monde de peser sur la scène internationale', 'Créant l\'ONU', 'Abolissant l\'esclavage'], correct: 0 },
    { texte: 'Le Rassemblement Démocratique Africain (RDA) a été fondé en 1946 à :', options: ['Dakar', 'Abidjan', 'Bamako', 'Ouagadougou'], correct: 2 },
    { texte: 'Le RDA était dirigé par :', options: ['Léopold Sédar Senghor', 'Félix Houphouët-Boigny', 'Sékou Touré', 'Modibo Keïta'], correct: 1 },
    { texte: 'Le Front de libération nationale (FLN) a mené la guerre d\'indépendance de :', options: ['Tunisie', 'Maroc', 'Algérie', 'Cameroun'], correct: 2 },
    { texte: 'Le FLN a obtenu l\'indépendance de l\'Algérie en :', options: ['1960', '1961', '1962', '1963'], correct: 2 },
    { texte: 'Le Parti Démocratique de Guinée (PDG), dirigé par Sékou Touré, a appelé à voter "non" au référendum de 1958 sur :', options: ['L\'indépendance immédiate', 'La Communauté française', 'L\'Union française', 'La Constitution de la IVe République'], correct: 1 },
    { texte: 'Après le "non" de la Guinée au référendum de 1958, la France a :', options: ['Accordé l\'indépendance immédiate avec soutien', 'Retiré brutalement son administration, ses investissements et ses cadres', 'Renforcé sa présence', 'Déclaré la guerre'], correct: 1 },
    { texte: 'Le Bloc Démocratique Sénégalais (BDS) a été fondé en 1948 par :', options: ['Mamadou Dia', 'Léopold Sédar Senghor', 'Abdoulaye Wade', 'Macky Sall'], correct: 1 },
    { texte: 'L\'Union des Populations du Cameroun (UPC), dirigée par Ruben Um Nyobé , réclamait :', options: ['L\'autonomie interne', 'L\'indépendance immédiate', 'Le maintien de la colonisation', 'L\'assimilation à la France'], correct: 1 },
    { texte: 'Le Mouvement National Congolais (MNC) a été fondé en 1958 par :', options: ['Joseph Kasa-Vubu', 'Mobutu Sese Seko', 'Patrice Lumumba', 'Moïse Tshombé'], correct: 2 },
    { texte: 'Patrice Lumumba est devenu Premier ministre du Congo belge (RDC) en 1960. Il a été assassiné en :', options: ['1960', '1961', '1962', '1963'], correct: 1 },
    { texte: 'Le Convention People\'s Party (CPP) de la Gold Coast a été fondé en 1949 par :', options: ['Jomo Kenyatta', 'Kwame Nkrumah', 'Julius Nyerere', 'Hastings Banda'], correct: 1 },
    { texte: 'Le Ghana est devenu indépendant le 6 mars 1957. C\'est le premier pays d\'Afrique :', options: ['De l\'Ouest à obtenir l\'indépendance', 'Subsaharienne à obtenir l\'indépendance', 'Francophone à obtenir l\'indépendance', 'Lusophone à obtenir l\'indépendance'], correct: 1 },
    { texte: 'Le Kenya African National Union (KANU), dirigé par Jomo Kenyatta, a obtenu l\'indépendance du Kenya en :', options: ['1961', '1962', '1963', '1964'], correct: 2 },
    { texte: 'Le Tanganyika African National Union (TANU), dirigé par Julius Nyerere, a obtenu l\'indépendance du Tanganyika (Tanzanie) en :', options: ['1960', '1961', '1962', '1963'], correct: 1 },
    { texte: 'Au Maghreb, le Maroc et la Tunisie ont obtenu leur indépendance par la négociation en :', options: ['1954', '1955', '1956', '1957'], correct: 2 },
    { texte: 'Le MPLA ( Movimento Popular de Liberta��o de Angol', options: ['�tait un mouvement de lib�ration arm�e dans la colonie portugaise d\'Angola. Son id�ologie �tait : a) Lib�rale', 'Marxiste-l�niniste', 'Conservatrice', 'Nationaliste mod�r�e'], correct: 1 },
    { texte: 'Le FRELIMO ( Frente de Liberta��o de Mo�ambique ) a �t� fond� en 1962 et dirig� successivement par Eduardo Mondlane puis :', options: ['Samora Machel', 'Agostinho Neto', 'Am�lcar Cabral', 'Jonas Savimbi'], correct: 0 },
    { texte: 'Le PAIGC ( Partido Africano para a Independência da Guiné e Cabo Verde) était dirigé par :', options: ['Samora Machel', 'Agostinho Neto', 'Amílcar Cabral', 'Luís Cabral'], correct: 2 },
    { texte: 'La grève des cheminots de Thiès (Sénégal, 1947-1948) a duré :', options: ['3 mois', '4 mois', '5 mois', '6 mois'], correct: 2 },
    { texte: 'La conférence de Brazzaville s\'est tenue du 30 janvier au 8 février 1944. Elle a été organisée par :', options: ['Le gouvernement de Vichy', 'Le Comité français de libération nationale (France libre)', 'Les Allemands', 'Les Britanniques'], correct: 1 },
    { texte: 'Quelles ont été les décisions majeures de la conférence de Brazzaville ?', options: ['Suppression du code de l\'indigénat', 'Création d\'assemblées territoriales élues', 'Indépendance immédiate des colonies', 'Accès des Africains aux fonctions publiques'], correct: 0 },
    { texte: 'Lors de la conférence de Brazzaville, de Gaulle a réaffirmé que la France excluait :', options: ['Le maintien de la colonisation', 'Toute idée d\'autonomie ou d\'indépendance', 'Les réformes', 'La présence militaire'], correct: 1 },
    { texte: 'L\'Union française a été créée par la Constitution de la IVe République promulguée le :', options: ['27 octobre 1945', '27 octobre 1946', '27 octobre 1947', '27 octobre 1948'], correct: 1 },
    { texte: 'Dans l\'Union française, les colonies étaient dotées d\'assemblées territoriales élues au suffrage universel mais avec :', options: ['Un seul collège électoral', 'Un double collège (citoyens français et sujets africains)', 'Un vote indirect', 'L\'exclusion des Africains'], correct: 1 },
    { texte: 'L\'abolition du travail forcé dans les colonies françaises a été obtenue par la loi :', options: ['Defferre', 'Houphouët-Boigny (avril 1946)', 'Lamine Guèye', 'Senghor'], correct: 1 },
    { texte: 'La loi-cadre Defferre a été adoptée le 23 juin 1956 sous le gouvernement de :', options: ['Charles de Gaulle', 'Guy Mollet', 'Pierre Mendès France', 'Georges Pompidou'], correct: 1 },
    { texte: 'La loi-cadre Defferre a supprimé :', options: ['Les assemblées territoriales', 'Le double collège électoral (suffrage universel)', 'Les conseils de gouvernement', 'La citoyenneté française'], correct: 1 },
    { texte: 'La loi-cadre Defferre a créé dans chaque territoire des conseils de gouvernement composés de :', options: ['Uniquement de Français', 'Ministres africains (jusqu\'à la moitié des portefeuilles)', 'Uniquement d\'Africains', 'De représentants de l\'ONU'], correct: 1 },
    { texte: 'Sous la loi-cadre Defferre l es compétences régaliennes (affaires étrangères, défense, monnaie, justice) sont restées sous le contrôle de :', options: ['Les gouvernements africains', 'La France', 'L\'ONU', 'Les chefs traditionnels'], correct: 1 },
    { texte: 'La Constitution française de la Ve République a été adoptée le :', options: ['4 octobre 1957', '4 octobre 1958', '4 octobre 1959', '4 octobre 1960'], correct: 1 },
    { texte: 'Le référendum sur la Communauté franco-africaine a eu lieu le :', options: ['28 septembre 1957', '28 septembre 1958', '28 septembre 1959', '28 septembre 1960'], correct: 1 },
    { texte: 'Sékou Touré a appelé à voter "non" au référendum de 1958. Le "non" l\'a emporté avec :', options: ['85 %', '90 %', '95 %', '98 %'], correct: 2 },
    { texte: 'La Guinée a proclamé son indépendance le :', options: ['2 octobre 1958', '2 octobre 1959', '2 octobre 1960', '2 octobre 1961'], correct: 0 },
    { texte: 'Les autres colonies françaises (Sénégal, Côte d\'Ivoire, Haute-Volta, etc.) ont voté "oui" au référendum de 1958 et sont entrées dans :', options: ['L\'Union française', 'La Communauté franco-africaine', 'La Zone franc', 'L\'ONU'], correct: 1 },
    { texte: 'La Fédération du Mali (Sénégal + Soudan français) a été créée en juin 1960 mais a éclaté rapidement. Le Sénégal est devenu indépendant le :', options: ['20 juin 1960', '20 août 1960', '20 septembre 1960', '20 octobre 1960'], correct: 1 },
    { texte: 'L\'"année de l\'Afrique" (1960) a vu l\'accession à l\'indépendance de combien de pays africains ?', options: ['14', '15', '16', '17'], correct: 3 },
    { texte: 'La Gold Coast (Ghan', options: ['est devenue indépendante le 6 mars 1957 sous la direction de : a) Jomo Kenyatta', 'Kwame Nkrumah', 'John Rawlins', 'Nana Akufoh Ado'], correct: 1 },
    { texte: 'La voie pacifiqu e et négociée d’accès à l’indépendance a concerné principalement les :', options: ['Colonies de peuplement', 'Colonies d\'exploitation', 'Colonies portugaises', 'Colonies allemandes'], correct: 1 },
    { texte: 'La voie violente (lutte armée) a concerné principalement les :', options: ['Colonies d\'exploitation', 'Colonies de peuplement', 'Colonies françaises d\'Afrique noire', 'Colonies britanniques d\'Afrique de l\'Ouest'], correct: 1 },
    { texte: 'La guerre d\'indépendance de l\'Algérie a duré :', options: ['6 ans', '7 ans', '8 ans', '9 ans'], correct: 2 },
    { texte: 'La Rhodésie du Sud (actuel Zimbabwe) a proclamé unilatéralement son indépendance en 1965 pour maintenir la domination de la minorité :', options: ['Noire', 'Blanche', 'Métisse', 'Indienne'], correct: 1 },
    { texte: 'La révolution des Œillets au Portugal (1974) a renversé la dictature de :', options: ['Franco', 'Salazar', 'Mussolini', 'Hitler'], correct: 1 },
    { texte: 'La Namibie est le dernier pays africain à accéder à l\'indépendance par décolonisation en :', options: ['1988', '1989', '1990', '1991'], correct: 2 },
    { texte: 'L\'Érythrée a obtenu son indépendance par sécession de l\'Éthiopie en :', options: ['1991', '1992', '1993', '1994'], correct: 2 },
    { texte: 'Le Soudan du Sud a obtenu son indépendance par sécession du Soudan en :', options: ['2009', '2010', '2011', '2012'], correct: 2 },
    { texte: 'Frantz Fanon, psychiatre martiniquais, est l\'auteur de :', options: ['Peau noire, masques blancs (1952)', 'Les Damnés de la terre (1961)', 'Nations nègres et culture', 'L\'Épopée de Soundiata'], correct: 0 },
    { texte: 'Cheikh Anta Diop, historien sénégalais, a démontré dans Nations nègres et culture (1954) :', options: ['L\'origine arabe de la civilisation égyptienne', 'L\'origine négro-africaine de la civilisation égyptienne', 'L\'origine européenne de la civilisation égyptienne', 'L\'origine asiatique de la civilisation égyptienne'], correct: 1 },
    { texte: 'Le premier congrès panafricain a été organisé en 1919 par :', options: ['Marcus Garvey', 'Kwame Nkrumah', 'W.E.B. Du Bois', 'Blaise Diagne'], correct: 2 },
    { texte: 'Le Liberia a été colonisé par :', options: ['Des Européens', 'Des anciens esclaves afro-américains', 'Des Arabes', 'Des Asiatiques'], correct: 1 },
    { texte: 'L\'Éthiopie n\'a jamais été colonisée (sauf occupation italienne 1936-1941). Elle était un :', options: ['Royaume', 'Empire', 'République', 'Protectorat français'], correct: 1 },
    { texte: 'Le Sahara occidental est un territoire non autonome selon l\'ONU, disputé entre le Maroc et :', options: ['La Mauritanie', 'La République arabe sahraouie démocratique (Polisario)', 'L\'Algérie', 'L\'Espagne'], correct: 1 },
    { texte: 'Associez chaque date d\'indépendance au pays correspondant : Ghana, Guinée, Algérie, Angola.', options: ['1957 / 1958 / 1962 / 1975', '1958 / 1957 / 1962 / 1975', '1957 / 1962 / 1958 / 1975', '1975 / 1962 / 1958 / 1957'], correct: 0 },
    { texte: 'Associez chaque leader indépendantiste à son pays : Kwame Nkrumah, Jomo Kenyatta, Julius Nyerere, Patrice Lumumba.', options: ['Ghana / Kenya / Tanzanie / RDC', 'Kenya / Ghana / Tanzanie / RDC', 'Tanzanie / Ghana / Kenya / RDC', 'RDC / Ghana / Kenya / Tanzanie'], correct: 0 },
    { texte: 'La conférence de Brazzaville (1944) a marqué :', options: ['La fin de la colonisation', 'La première reconnaissance officielle par la France de la nécessité de réformes', 'L\'indépendance de l\'Algérie', 'La création de l\'OUA'], correct: 1 },
    { texte: 'L\'Union française (1946) remplaçait :', options: ['La Communauté française', 'L\'empire colonial français', 'La zone franc', 'L\'Union européenne'], correct: 1 },
    { texte: 'La loi-cadre Defferre a été élaborée par le ministre de la France d\'outre-mer :', options: ['Gaston Defferre', 'François Mitterrand', 'Pierre Mendès France', 'Guy Mollet'], correct: 0 },
    { texte: 'Le référendum de 1958 sur la Communauté française a été proposé par :', options: ['Guy Mollet', 'Charles de Gaulle', 'René Coty', 'Vincent Auriol'], correct: 1 },
    { texte: 'Le Ghana est devenu indépendant le 6 mars 1957. Son premier président était :', options: ['Kwame Nkrumah', 'Jomo Kenyatta', 'Julius Nyerere', 'Hastings Banda'], correct: 0 },
    { texte: 'La Guinée est devenue indépendante le 2 octobre 1958, mais la France a retiré son administration. Le premier président de la Guinée était :', options: ['Ahmed Sékou Touré', 'Lansana Conté', 'Alpha Condé', 'Mamadi Doumbouya'], correct: 0 },
    { texte: 'La guerre d\'Algérie (1954-1962) a fait plus d\'un million de morts. Les accords d\'Évian qui y ont mis fin ont été signés en :', options: ['1961', '1962', '1963', '1964'], correct: 1 },
    { texte: 'Les colonies portugaises ont obtenu leur indépendance après la révolution des Œillets (1974). L\'Angola est devenu indépendant en :', options: ['1974', '1975', '1976', '1977'], correct: 1 },
    { texte: 'Le Zimbabwe (ex-Rhodésie du Sud) a obtenu son indépendance en 1980 après une guerre de guérilla menée par la ZANOU (Robert Mugabe) et la ZAPU (Joshua Nkomo ). La Rhodésie du Sud avait proclamé unilatéralement son indépendance en :', options: ['1963', '1964', '1965', '1966'], correct: 2 },
    { texte: 'La Namibie, ancien Sud-Ouest africain allemand puis mandat sud-africain, a obtenu son indépendance en 1990. Son premier président était :', options: ['Sam Nujoma', 'Hage Geingob', 'Andimba Toivo ya Toivo', 'Lukas Pohamba'], correct: 0 },
    { texte: 'Le Soudan du Sud est devenu indépendant en 2011. Son premier président était :', options: ['John Garang', 'Salva Kiir', 'Riek Machar', 'Omar el-Béchir'], correct: 1 },
    { texte: 'Le Liberia a proclamé son indépendance le 26 juillet 1847. Il a été fondé par :', options: ['Des Européens', 'Des anciens esclaves afro-américains', 'Des esclaves affranchis du Brésil', 'Des missionnaires britanniques'], correct: 1 },
    { texte: 'L\'Éthiopie a résisté à la colonisation italienne et a conservé son indépendance (sauf occupation 1936-1941). L\'empereur qui a modernisé l\'Éthiopie et résisté aux Italiens était :', options: ['Haïlé Sélassié Ier', 'Ménélik II', 'Tewodros II', 'Yohannes IV'], correct: 1 },
    { texte: 'La fédération du Mali (Sénégal + Soudan français) a éclaté en août 1960. Le Sénégal est devenu indépendant sous la présidence de :', options: ['Mamadou Dia', 'Léopold Sédar Senghor', 'Abdoulaye Wade', 'Macky Sall'], correct: 1 },
    { texte: 'Le Congo belge (RDC) est devenu indépendant le 30 juin 1960. Son premier Premier ministre était Patrice Lumumba et son premier président :', options: ['Mobutu Sese Seko', 'Joseph Kasa-Vubu', 'Moïse Tshombé', 'Joseph-Désiré Mobutu'], correct: 1 },
    { texte: 'Le Togo est devenu indépendant le 27 avril 1960. Ancienne colonie allemande, il était sous mandat de la France après 1919. Son premier président était :', options: ['Gnassingbé Eyadéma', 'Sylvanus Olympio', 'Nicolas Grunitzky', 'Faure Gnassingbé'], correct: 1 },
    { texte: 'Le Cameroun est devenu indépendant le 1er janvier 1960. Ancienne colonie allemande, il était sous mandat de la France. Son premier président était :', options: ['Ahmadou Ahidjo', 'Paul Biya', 'Ruben Um Nyobé', 'Félix Moumié'], correct: 0 },
    { texte: 'La Somalie est née de la réunion de la Somalie italienne et du Somaliland britannique le 1er juillet 1960. Son premier président était :', options: ['Siad Barre', 'Aden Abdullah Osman Daar', 'Abdirashid Ali Shermarke', 'Hassan Sheikh Mohamud'], correct: 1 },
    { texte: 'Le Dahomey (actuel Bénin) est devenu indépendant le 1er août 1960. Son premier président était :', options: ['Mathieu Kérékou', 'Hubert Maga', 'Nicéphore Soglo', 'Patrice Talon'], correct: 1 },
    { texte: 'La Haute-Volta (actuel Burkina Faso) est devenue indépendante le 5 août 1960. Son premier président était :', options: ['Maurice Yaméogo', 'Sangoulé Lamizana', 'Thomas Sankara', 'Blaise Compaoré'], correct: 0 },
    { texte: 'La Côte d\'Ivoire est devenue indépendante le 7 août 1960. Son premier président était :', options: ['Alassane Ouattara', 'Laurent Gbagbo', 'Félix Houphouët-Boigny', 'Henri Konan Bédié'], correct: 2 },
    { texte: 'Le Nigeria est devenu indépendant le 1er octobre 1960. Son premier président était :', options: ['Nnamdi Azikiwe', 'Abubakar Tafawa Balewa', 'Olusegun Obasanjo', 'Goodluck Jonathan'], correct: 0 },
    { texte: 'Le Burundi et le Rwanda sont devenus indépendants le 1er juillet 1962. Ils étaient sous tutelle belge de l\'ONU (anciennes colonies allemandes). Le premier président du Rwanda était :', options: ['Grégoire Kayibanda', 'Juvénal Habyarimana', 'Pasteur Bizimungu', 'Paul Kagame'], correct: 0 },
    { texte: 'Le Kenya est devenu indépendant le 12 décembre 1963. Le premier président du Kenya était :', options: ['Daniel arap Moi', 'Jomo Kenyatta', 'Mwai Kibaki', 'Uhuru Kenyatta'], correct: 1 },
    { texte: 'La Zambie (ancienne Rhodésie du Nord) est devenue indépendante le 24 octobre 1964. Son premier président était :', options: ['Kenneth Kaunda', 'Frederick Chiluba', 'Levy Mwanawasa', 'Michael Sata'], correct: 0 },
    { texte: 'Le Malawi (ancien Nyassaland) est devenu indépendant le 6 juillet 1964. Son premier président (à vie) était :', options: ['Hastings Kamuzu Banda', 'Bakili Muluzi', 'Bingu wa Mutharika', 'Peter Mutharika'], correct: 0 },
    { texte: 'La Tanzanie est née de l\'union du Tanganyika et de Zanzibar en 1964. Le Tanganyika était devenu indépendant le 9 décembre 1961 sous la direction de :', options: ['Julius Nyerere', 'Abeid Amani Karume', 'Ali Hassan Mwinyi', 'Jakaya Kikwete'], correct: 0 },
    { texte: 'Les Comores sont devenues indépendantes le 6 juillet 1975. Ancienne colonie française, leur premier président était :', options: ['Ahmed Abdallah', 'Ali Soilih', 'Azali Assoumani', 'Mohamed Taki Abdoulkarim'], correct: 0 },
];

thematiquesAfrique.crise_socio_politique_en_afrique_post_independante.questions = [
    { texte: 'La première guerre civile soudanaise (1955-1972) a été déclenchée par une mutinerie de soldats sudistes à :', options: ['Khartoum', 'Darfour', 'Torit', 'Juba'], correct: 2 },
    { texte: 'Le mouvement rebelle Anyanya (qui signifie "venin" en langue Madi ) a combattu lors de la premi�re guerre civile soudanaise. Ce conflit a pris fin gr�ce � l\'accord d\'Addis-Abeba sign� en :', options: ['1970', '1971', '1972', '1973'], correct: 2 },
    { texte: 'Le président soudanais Gaafar Nimeiry a accepté la médiation et signé l\'accord d\'Addis-Abeba (1972) car :', options: ['Il était favorable à l\'indépendance du Sud', 'Il cherchait à consolider son pouvoir après son coup d\'État', 'Il était contraint par l\'ONU', 'Il avait perdu la guerre'], correct: 1 },
    { texte: 'La seconde guerre civile soudanaise (1983-2005) a été déclenchée par l\'abrogation de l\'accord d\'Addis-Abeba et l\'imposition de la charia par le président :', options: ['Omar el-Béchir', 'Gaafar Nimeiry', 'John Garang', 'Sadiq al-Mahdi'], correct: 1 },
    { texte: 'L\'Armée populaire de libération du Soudan (SPLA) était dirigée par :', options: ['Omar el-Béchir', 'Gaafar Nimeiry', 'John Garang', 'Riek Machar'], correct: 2 },
    { texte: 'La seconde guerre civile soudanaise s\'est achevée par l\'accord de Naivasha en 2005, qui prévoyait :', options: ['L\'indépendance immédiate du Sud', 'Un référendum d\'autodétermination pour le Sud', 'Le partage du Soudan en trois États', 'L\'instauration de la charia dans tout le pays'], correct: 1 },
    { texte: 'La guerre du Darfour (2003-2020) a opposé le régime d\'Omar el-Béchir aux populations noires non-arabes (Fours, Masalits , Zaghawas ). Les milices arabes supplétives du gouvernement étaient appelées :', options: ['Janjawid', 'Interahamwe', 'FSR', 'Anyanya'], correct: 0 },
    { texte: 'Le président Omar el-Béchir est le premier chef d\'État en exercice à avoir fait l\'objet de mandats d\'arrêt de la Cour pénale internationale (CPI) pour :', options: ['Crimes de guerre', 'Crimes contre l\'humanité', 'Génocide', 'Toutes ces réponses'], correct: 3 },
    { texte: 'La guerre civile au Soudan du Sud (2013-2020) a opposé le président Salva Kiir (ethnie Dink', options: ['à son ancien vice-président Riek Machar (ethnie : a) Dinka', 'Nuer', 'Shilluk', 'Azande'], correct: 1 },
    { texte: 'Le 15 avril 2023, une nouvelle guerre civile éclate au Soudan entre l\'armée régulière d\'Abdel Fattah al-Burhan et les Forces de soutien rapide (FSR) de :', options: ['Riek Machar', 'John Garang', 'Mohamed Hamdan Dogolo ( Hemedti )', 'Omar el-Béchir'], correct: 2 },
    { texte: 'La guerre du Bush de Rhodésie du Sud (1964-1979) opposait le gouvernement de la minorité blanche de Ian Smith aux mouvements nationalistes noirs ZANU et ZAPU. Le ZANU était dirigé par :', options: ['Joshua Nkomo', 'Robert Mugabe', 'Ian Smith', 'Abel Muzorewa'], correct: 1 },
    { texte: 'La Rhodésie du Sud a proclamé unilatéralement son indépendance en 1965 pour :', options: ['Accélérer l\'indépendance', 'Maintenir la domination de la minorité blanche', 'Rejoindre l\'Afrique du Sud', 'Éviter la guerre civile'], correct: 1 },
    { texte: 'L\'indépendance du Mozambique en 1975 a été un tournant dans la guerre du Bush car elle a offert une base arrière à la branche armée de la ZANU, la :', options: ['ZIPRA', 'ZANLA', 'FRELIMO', 'RENAMO'], correct: 1 },
    { texte: 'Les accords de Lancaster House (décembre 1979) ont mis fin à la guerre du Bush et abouti à l\'indépendance du Zimbabwe en avril 1980. Le premier président du Zimbabwe était :', options: ['Robert Mugabe (Premier ministre) et Canaan Banana (président)', 'Joshua Nkomo', 'Ian Smith', 'Abel Muzorewa'], correct: 0 },
    { texte: 'La guerre du Biafra (1967-1970) a été déclenchée par la sécession de la région orientale du Nigeria, majoritairement peuplée d\' Igbos , sous la direction du colonel :', options: ['Yakubu Gowon', 'Olusegun Obasanjo', 'Odumegwu Ojukwu', 'Murtala Mohammed'], correct: 2 },
    { texte: 'La guerre du Biafra a fait de 1 à 2 millions de morts civils, principalement à cause :', options: ['Des combats', 'De la famine due au blocus', 'Des bombardements', 'Des exécutions sommaires'], correct: 1 },
    { texte: 'La France (gaulliste) a soutenu clandestinement le Biafra pour :', options: ['Soutenir la démocratie', 'Affaiblir l\'influence britannique et anglo-saxonne au Nigeria', 'Protéger les chrétiens', 'Récupérer le pétrole'], correct: 1 },
    { texte: 'Les images de la famine au Biafra (enfants kwashiorkor) ont marqué un tournant humanitaire, conduisant à la création en 1971 de :', options: ['La Croix-Rouge internationale', 'Médecins sans frontières (MSF)', 'L\'UNICEF', 'Action contre la faim'], correct: 1 },
    { texte: 'La guerre du Sahara occidental (1975-1991) oppose le Maroc et la Mauritanie au Front Polisario. En 1979, la Mauritanie se retire du conflit car :', options: ['Elle soutenait le Polisario', 'Épuisée par les pertes et les attaques', 'Elle a obtenu des territoires', 'Elle a signé un accord avec le Maroc'], correct: 1 },
    { texte: 'Pour contrer la guérilla du Polisario, le Maroc a construit à partir de 1980 un gigantesque mur de sable d\'environ :', options: ['1 000 km', '1 700 km', '2 700 km', '3 700 km'], correct: 2 },
    { texte: 'La guerre civile angolaise (1975-2002) opposait le MPLA (marxiste, soutenu par l\'URSS et Cub', options: ['à l\'UNITA (soutenue par les États-Unis et l\'Afrique du Sud). L\'UNITA était dirigée par : a) Agostinho Neto', 'José Eduardo dos Santos', 'Jonas Savimbi', 'Holden Roberto'], correct: 2 },
    { texte: 'La guerre civile angolaise a pris fin après la mort de Jonas Savimbi en :', options: ['1999', '2000', '2001', '2002'], correct: 3 },
    { texte: 'La guerre civile du Mozambique (1977-1992) opposait le gouvernement du FRELIMO au mouvement antimarxiste RENAMO, soutenu par la Rhodésie puis l\'Afrique du Sud. Le RENAMO était décrit comme :', options: ['Un mouvement démocratique', '"Le mouvement le plus brutal depuis les Khmers rouges"', 'Une organisation humanitaire', 'Un parti politique légal'], correct: 1 },
    { texte: 'La guerre civile du Mozambique a pris fin par un accord de paix signé à Rome en :', options: ['1990', '1991', '1992', '1993'], correct: 2 },
    { texte: 'La guerre civile de la république du Congo (1997) opposait le président Pascal Lissouba (appuyé par les "Zoulous" et les "Ninjas") à l\'ancien président Denis Sassou Nguesso (à la tête des "Cobras"). Sassou Nguesso a bénéficié du soutien militaire déterminant de :', options: ['La France', 'L\'Angola', 'Le Gabon', 'La Russie'], correct: 1 },
    { texte: 'La première guerre civile libérienne (1989-1997) a été déclenchée par le Front patriotique national du Libéria (NPFL) de Charles Taylor, soutenu par :', options: ['Les États-Unis', 'La France', 'La Libye et le Burkina Faso', 'La Côte d\'Ivoire'], correct: 2 },
    { texte: 'Charles Taylor a été élu président du Libéria en 1997 avec 75,3 % des voix. Il a été condamné en 2012 à 50 ans de prison par le Tribunal spécial pour la Sierra Leone pour :', options: ['Corruption', 'Crimes contre l\'humanité', 'Son rôle dans la guerre civile en Sierra Leone', 'Trafic de diamants'], correct: 2 },
    { texte: 'La guerre civile en Sierra Leone (1991-2002) a été déclenchée par le Front révolutionnaire uni (RUF) de Foday Sankoh , soutenu par le président libérien Charles Taylor pour contrôler les mines de :', options: ['Or', 'Diamants', 'Coltan', 'Pétrole'], correct: 1 },
    { texte: 'La guerre civile en Sierra Leone a été marquée par des atrocités massives, notamment :', options: ['Des amputations systématiques de membres', 'Des viols en guise d\'arme de guerre', 'Le recrutement d\'enfants soldats', 'Toutes ces réponses'], correct: 3 },
    { texte: 'La guerre civile somalienne a débuté en 1991 avec la chute du dictateur :', options: ['Siad Barre', 'Mohamed Farah Aïdid', 'Ali Mahdi Mohamed', 'Hassan Sheikh Mohamud'], correct: 0 },
    { texte: 'L\'intervention humanitaire de l\'ONU et des États-Unis en Somalie (1992-1995) a tourné au désastre après la bataille de Mogadiscio (1993), immortalisée par le film "Black Hawk Down". Cette bataille a opposé les forces américaines aux miliciens du seigneur de guerre :', options: ['Ali Mahdi Mohamed', 'Mohamed Farah Aïdid', 'Siad Barre', 'Hassan Sheikh Mohamud'], correct: 1 },
    { texte: 'La guerre civile burundaise (1993-2005) a éclaté après l\'assassinat du premier président hutu, Melchior Ndadaye , par l\'armée dominée par les Tutsis. Ce conflit a fait environ :', options: ['100 000 morts', '200 000 morts', '300 000 morts', '500 000 morts'], correct: 2 },
    { texte: 'Le génocide des Tutsis au Rwanda (1994) a été déclenché par l\'assassinat du président rwandais Juvénal Habyarimana, dont l\'avion a été abattu le :', options: ['6 avril 1994', '7 avril 1994', '6 avril 1995', '7 avril 1995'], correct: 0 },
    { texte: 'En cent jours, environ combien de Tutsis et de Hutus modérés ont été massacrés au Rwanda ?', options: ['200 000 à 300 000', '400 000 à 500 000', '800 000 à 1 000 000', '1 500 000 à 2 000 000'], correct: 2 },
    { texte: 'La Radio Télévision Libre des Mille Collines (RTLM) a joué un rôle majeur dans le génocide rwandais en diffusant :', options: ['Des informations objectives', 'Une propagande haineuse appelant au massacre des Tutsis', 'Des appels à la paix', 'De la musique traditionnelle'], correct: 1 },
    { texte: 'Le Front patriotique rwandais (FPR), dominé par les Tutsis, a mis fin au génocide en prenant le pouvoir en juillet 1994. Son leader, Paul Kagame , est devenu :', options: ['Président de la République', 'Vice-président (puis président de facto)', 'Premier ministre', 'Chef de l\'armée'], correct: 1 },
    { texte: 'La première guerre du Congo (1996-1997) trouve son origine dans le génocide rwandais et l\'exode des Hutus (dont des miliciens Interahamwe ) vers l\'est du Zaïre. L\'Alliance des forces démocratiques pour la libération du Congo (AFDL) était dirigée par :', options: ['Joseph Kabila', 'Laurent-Désiré Kabila', 'Mobutu Sese Seko', 'Paul Kagame'], correct: 1 },
    { texte: 'La deuxième guerre du Congo (1998-2003) a impliqué neuf armées africaines et a fait plusieurs millions de morts, principalement :', options: ['Des combattants', 'Des civils (famine et maladies)', 'Des mercenaires', 'Des soldats de l\'ONU'], correct: 1 },
    { texte: 'La guerre du Kivu (depuis 2004) oppose l\'armée congolaise (FARDC) à de multiples groupes armés, dont le M23, une rébellion tutsie accusée d\'être soutenue par :', options: ['L\'Ouganda', 'Le Burundi', 'Le Rwanda', 'L\'Angola'], correct: 2 },
    { texte: 'La guerre entre l\'Érythrée et l\'Éthiopie (1998-2000) a éclaté à propos de la région frontalière de :', options: ['Badme', 'Asmara', 'Addis-Abeba', 'Tigré'], correct: 0 },
    { texte: 'La crise post-électorale en Côte d\'Ivoire (2010-2011) a opposé Alassane Ouattara (proclamé vainqueur par la communauté internationale) au président sortant qui refusait de céder le pouvoir :', options: ['Henri Konan Bédié', 'Laurent Gbagbo', 'Robert Guéï', 'Pascal Affi N\' Guessan'], correct: 1 },
    { texte: 'Laurent Gbagbo a été arrêté le 11 avril 2011 par les Forces républicaines de Côte d\'Ivoire (FRCI), soutenues par l\'ONUCI et la force française :', options: ['Serval', 'Barkhane', 'Licorne', 'Épervier'], correct: 2 },
    { texte: 'Le Printemps arabe a été déclenché en décembre 2010 par l\'immolation du vendeur ambulant tunisien :', options: ['Mohamed Bouazizi', 'Zine el- Abidine Ben Ali', 'Moncef Marzouki', 'Béji Caïd Essebsi'], correct: 0 },
    { texte: 'En Tunisie, le dictateur Ben Ali a fui le pays le 14 janvier 2011. En Égypte, le président Hosni Moubarak a été renversé le :', options: ['11 février 2011', '25 janvier 2011', '30 juin 2012', '3 juillet 2013'], correct: 0 },
    { texte: 'En Libye, le colonel Mouammar Kadhafi a été capturé et tué le 20 octobre 2011 à :', options: ['Tripoli', 'Benghazi', 'Syrte', 'Misrata'], correct: 2 },
    { texte: 'La guerre du Tigré en Éthiopie (2020-2022) a opposé le gouvernement fédéral d\' Abiy Ahmed au :', options: ['Front de libération du peuple du Tigré (FLPT)', 'Front de libération oromo', 'Armée érythréenne', 'Al- Shabaab'], correct: 0 },
    { texte: 'La guerre du Tigré a pris fin par un accord de cessez-le-feu signé à Pretoria le 2 novembre 2022. Le bilan humain est estimé entre :', options: ['100 000 et 200 000 morts', '200 000 et 300 000 morts', '385 000 et 600 000 morts', '600 000 et 800 000 morts'], correct: 2 },
    { texte: 'Boko Haram , mouvement djihadiste fondé par Mohamed Yusuf, prône l\'application stricte de la charia et rejette :', options: ['La démocratie', 'L\'éducation occidentale', 'Le christianisme', 'Les droits des femmes'], correct: 1 },
    { texte: 'L\'enlèvement de 276 lycéennes à Chibok (Nigeri', options: ['en 2014 a été perpétré par : a) L\'État islamique', 'Al-Qaïda', 'Boko Haram', 'Les forces gouvernementales'], correct: 2 },
    { texte: 'La guerre du Sahel a pris une ampleur majeure en 2012 lorsque des groupes djihadistes, alliés aux rebelles touaregs du MNLA, se sont emparés du nord du :', options: ['Niger', 'Burkina Faso', 'Mali', 'Tchad'], correct: 2 },
    { texte: 'L\'opération militaire française Serval (2013) puis Barkhane ont visé à chasser les djihadistes du nord du Mali. Les forces françaises se sont retirées du Sahel en :', options: ['2021', '2022', '2023', '2024'], correct: 2 },
    { texte: 'Le concept de "ceinture de coups d\'État" désigne la région du Sahel et de l\'Afrique de l\'Ouest où :', options: ['Il n\'y a jamais eu de coup d\'État', 'Les coups d\'État sont rares', 'Les interventions militaires se sont multipliées entre 2020 et 2023', 'Les démocraties sont solides'], correct: 2 },
    { texte: 'Le pays africain ayant connu le plus de tentatives de coup d\'État (17) est :', options: ['Le Burkina Faso', 'Le Nigeria', 'Le Soudan', 'Le Bénin'], correct: 2 },
    { texte: 'Le pays africain ayant connu le plus de coups d\'État réussis (8) est :', options: ['Le Soudan', 'Le Nigeria', 'Le Bénin', 'Le Burkina Faso'], correct: 3 },
    { texte: 'Depuis 2000, les trois quarts des putschs réussis en Afrique ont eu lieu dans :', options: ['D\'anciennes colonies britanniques', 'D\'anciennes colonies portugaises', 'D\'anciennes colonies françaises', 'D\'anciennes colonies belges'], correct: 2 },
    { texte: 'Le général algérien Houari Boumédiène a pris le pouvoir par un coup d\'État en 1965, renversant :', options: ['Ahmed Ben Bella', 'Chadli Bendjedid', 'Abdelaziz Bouteflika', 'Ferhat Abbas'], correct: 0 },
    { texte: 'Au Nigeria, une série de coups d\'État a marqué l\'histoire post-indépendance . Le général Murtala Mohammed a été assassiné en 1976 lors d\'une tentative de coup d\'État. Qui lui a succédé ?', options: ['Olusegun Obasanjo', 'Ibrahim Babangida', 'Sani Abacha', 'Yakubu Gowon'], correct: 0 },
    { texte: 'Le président ghanéen Kwame Nkrumah a été renversé par un coup d\'État en 1966 alors qu\'il était en voyage en :', options: ['Chine', 'Union soviétique', 'France', 'États-Unis'], correct: 0 },
    { texte: 'Au Tchad, le maréchal Idriss Déby Itno , arrivé au pouvoir par un coup d\'État en 1990, a été tué en 2021 sur le front. Son fils, Mahamat Idriss Déby , a pris le pouvoir à la tête d\'un conseil militaire de transition. Mahamat Idriss Déby a été élu président en 2024, mais l\'opposition a dénoncé une :', options: ['Élection libre', 'Transition démocratique', '" monarchisation " du pouvoir', 'Intervention étrangère'], correct: 2 },
    { texte: 'Le président égyptien Anouar el-Sadate a été assassiné en 1981 lors d\'un défilé militaire. Son successeur, Hosni Moubarak, a été renversé par le Printemps arabe en 2011. Moubarak a été condamné pour :', options: ['Corruption', 'Complicité dans la mort de manifestants', 'Trahison', 'Crimes de guerre'], correct: 1 },
    { texte: 'En Guinée, le capitaine Dadis Camara a pris le pouvoir par un coup d\'État en 2008 après la mort du président Lansana Conté. Il a survécu à une tentative d\'assassinat en 2009 et a été jugé en 2022 pour son rôle dans le massacre de :', options: ['Conakry', 'Nzérékoré', 'Kindia', 'Labé'], correct: 1 },
    { texte: 'Au Mali, le colonel Assimi Goïta a mené deux coups d\'État : le premier en août 2020 contre le président Ibrahim Boubacar Keïta, le second en mai 2021 contre le président de la transition :', options: ['Bah N\' Daw', 'Dioncounda Traoré', 'Modibo Keïta', 'Moussa Traoré'], correct: 0 },
    { texte: 'Au Niger, le président démocratiquement élu Mohamed Bazoum a été renversé par un coup d\'État le 26 juillet 2023 mené par le général :', options: ['Abdourahamane Tchiani', 'Salou Djibo', 'Mamadou Tandja', 'Mahamadou Issoufou'], correct: 0 },
    { texte: 'Au Burkina Faso, le capitaine Ibrahim Traoré a renversé le lieutenant-colonel Paul-Henri Sandaogo Damiba le 30 septembre 2022, invoquant l\'incapacité à lutter contre :', options: ['La corruption', 'La pauvreté', 'Le terrorisme', 'La mauvaise gouvernance'], correct: 2 },
    { texte: 'Le général Moussa Dadis Camara (Guinée), le capitaine Ibrahim Traoré (Burkina Faso) et le colonel Assimi Goïta (Mali) appartiennent à une nouvelle génération de putschistes qui justifient leur prise de pouvoir par :', options: ['La volonté de restaurer la monarchie', 'L\'incapacité des régimes civils à garantir la sécurité', 'Le soutien à la France', 'La défense des droits de l\'homme'], correct: 1 },
    { texte: 'La guerre du Darfour (2003-2020) a été qualifiée de "génocide" par les États-Unis. Le président Omar el-Béchir a été poursuivi par la CPI pour :', options: ['Crimes de guerre', 'Crimes contre l\'humanité', 'Génocide', 'Toutes ces réponses'], correct: 3 },
    { texte: 'La guerre civile angolaise (1975-2002) a vu l\'intervention massive de troupes cubaines (jusqu\'à 40 000 hommes) pour soutenir le MPLA. Les troupes cubaines se sont retirées après les accords de New York (1988) qui prévoyaient également le retrait des troupes :', options: ['Américaines', 'Sud-africaines', 'Soviétiques', 'Zimbabwéennes'], correct: 1 },
    { texte: 'La guerre du Bush de Rhodésie du Sud a pris fin après les accords de Lancaster House (1979). Ceux-ci ont été négociés sous la médiation de :', options: ['Les États-Unis', 'La France', 'La Grande-Bretagne', 'L\'ONU'], correct: 2 },
    { texte: 'La guerre du Sahara occidental a opposé le Maroc et la Mauritanie au Front Polisario. Aujourd\'hui, le Maroc contrôle environ 80 % du territoire, tandis que le Polisario contrôle une zone désertique. Le statut du Sahara occidental reste non résolu car le référendum d\'autodétermination prévu en 1991 n\'a jamais eu lieu, principalement en raison :', options: ['Du refus du Polisario', 'Du refus du Maroc', 'Des désaccords sur les listes électorales', 'De l\'opposition de l\'Algérie'], correct: 2 },
    { texte: 'La guerre du Biafra (1967-1970) a vu le Nigeria utiliser l\'arme de la famine contre les sécessionnistes. Le blocus a été rendu possible par le soutien aérien et naval de :', options: ['La France', 'Le Royaume-Uni', 'L\'Égypte', 'Les États-Unis'], correct: 1 },
    { texte: 'En 1979, le président centrafricain Jean-Bédel Bokassa, qui s\'était autoproclamé empereur, a été renversé par un coup d\'État soutenu par la France (opération Barracud', options: ['. Il a été remplacé par : a) André Kolingba', 'David Dacko', 'Ange-Félix Patassé', 'François Bozizé'], correct: 1 },
    { texte: 'Le président libérien Samuel Doe , arrivé au pouvoir par un coup d\'État en 1980, a été capturé et torturé à mort en 1990 par une faction dissidente du NPFL dirigée par :', options: ['Charles Taylor', 'Prince Johnson', 'Yormie Johnson', 'George Weah'], correct: 1 },
];

thematiquesAfrique.pays_africains_capitale_devise_monnaie_president_a.questions = [
    { texte: 'L\'Afrique est le deuxième plus grand continent du monde. Sa superficie est d\'environ :', options: ['20,4 millions de km²', '30,4 millions de km²', '40,4 millions de km²', '50,4 millions de km²'], correct: 1 },
    { texte: 'Combien de pays compte l\'Afrique ?', options: ['48', '50', '52', '54'], correct: 3 },
    { texte: 'La capitale officielle du Bénin est Porto-Novo, mais la plupart des institutions gouvernementales siègent à :', options: ['Cotonou', 'Abomey', 'Parakou', 'Djougou'], correct: 0 },
    { texte: 'La capitale politique de la Côte d\'Ivoire est Yamoussoukro, mais la capitale économique est :', options: ['Bouaké', 'San-Pédro', 'Abidjan', 'Daloa'], correct: 2 },
    { texte: 'Quel pays d\'Afrique de l\'Ouest n\'utilise pas le franc CFA ?', options: ['Sénégal', 'Ghana', 'Bénin', 'Togo'], correct: 1 },
    { texte: 'Le président actuel du Burkina Faso, Ibrahim Traoré, est arrivé au pouvoir en septembre 2022. Il est également :', options: ['Le plus vieux président d\'Afrique', 'Le plus jeune chef d\'État en exercice au monde', 'Le président ayant le plus long mandat', 'Le seul président militaire d\'Afrique de l\'Ouest'], correct: 1 },
    { texte: 'La monnaie de la Gambie est :', options: ['Le franc CFA', 'Le dalasi', 'Le cedi', 'La livre'], correct: 1 },
    { texte: 'Le président de la Guinée, Mamadi Doumbouya , est arrivé au pouvoir par :', options: ['Une élection démocratique', 'Un coup d\'État (2021)', 'Une transition pacifique', 'Une succession dynastique'], correct: 1 },
    { texte: 'La Mauritanie a une monnaie unique qui n\'est pas le franc CFA. Il s\'agit de :', options: ['L\'ouguiya', 'Le dirham', 'Le dinar', 'La roupie'], correct: 0 },
    { texte: 'Le président sénégalais Bassirou Diomaye Faye a été élu en 2024. Son prédécesseur immédiat était :', options: ['Abdoulaye Wade', 'Macky Sall', 'Léopold Sédar Senghor', 'Mamadou Dia'], correct: 1 },
    { texte: 'En Afrique du Nord, quel pays est une monarchie (roi) et non une république ?', options: ['Algérie', 'Tunisie', 'Maroc', 'Libye'], correct: 2 },
    { texte: 'La Libye est actuellement dirigée par un Conseil présidentiel présidé par Mohamed al- Menfi . Le pays reste instable depuis la chute de :', options: ['Mouammar Kadhafi (2011)', 'Hosni Moubarak', 'Zine el- Abidine Ben Ali', 'Omar el-Béchir'], correct: 0 },
    { texte: 'En Afrique de l\'Est, quel pays est dirigé par une femme présidente ( Sahle-Work Zewde ), mais le pouvoir exécutif est détenu par le Premier ministre Abiy Ahmed ?', options: ['Kenya', 'Ouganda', 'Éthiopie', 'Tanzanie'], correct: 2 },
    { texte: 'La Tanzanie a une femme présidente depuis 2021. Il s\'agit de :', options: ['Sahle-Work Zewde', 'Samia Suluhu Hassan', 'Ellen Johnson Sirleaf', 'Ameenah Gurib-Fakim'], correct: 1 },
    { texte: 'Le président rwandais Paul Kagame est au pouvoir depuis 2000. Il est souvent critiqué pour :', options: ['Son absence de réformes', 'Son autoritarisme et son maintien au pouvoir', 'Sa politique économique', 'Son alliance avec la France'], correct: 1 },
    { texte: 'Le président ougandais Yoweri Museveni est au pouvoir depuis 1986. Son fils, Muhoozi Kainerugaba , est souvent cité comme :', options: ['Son successeur désigné', 'Un opposant politique', 'Un diplomate', 'Un chef d\'entreprise'], correct: 0 },
    { texte: 'En Afrique centrale, le pr�sident camerounais Paul Biya est au pouvoir depuis 1982. Il est, � 93 ans (2026) :', options: ['Le plus jeune pr�sident d\'Afrique', 'Le chef d\'�tat le plus �g� du monde', 'Le pr�sident le plus populaire', 'Le seul pr�sident francophone'], correct: 1 },
    { texte: 'Le président de la Guinée équatoriale, Teodoro Obiang Nguema Mbasogo , est au pouvoir depuis 1979. Il détient le record :', options: ['Du plus long mandat en Afrique', 'Du plus jeune président', 'Du plus riche président', 'Du plus populaire président'], correct: 0 },
    { texte: 'Le Gabon est dirigé par le général Brice Oligui Nguema , arrivé au pouvoir après le renversement de :', options: ['Ali Bongo (coup d\'État de 2023)', 'Omar Bongo', 'Léon M\' ba', 'Jean Ping'], correct: 0 },
    { texte: 'En Afrique australe, l\'Afrique du Sud a trois capitales : Pretoria (administrative), Le Cap (législative) et :', options: ['Durban (judiciaire)', 'Johannesburg (judiciaire)', 'Bloemfontein (judiciaire)', 'Port Elizabeth (judiciaire)'], correct: 2 },
    { texte: 'Le roi Mswati III d\' Eswatini (ex-Swaziland) est l\'un des derniers monarques absolus d\'Afrique. Il est connu pour :', options: ['Ses réformes démocratiques', 'Sa polygamie (plusieurs épouses) et son train de vie', 'Son alliance avec l\'Afrique du Sud', 'Sa politique de développement'], correct: 1 },
    { texte: 'Le président zimbabwéen Emmerson Mnangagwa a succédé en 2017 à :', options: ['Robert Mugabe (après un coup d\'État)', 'Morgan Tsvangirai', 'Ian Smith', 'Canaan Banana'], correct: 0 },
    { texte: 'Les trois plus grands pays d\'Afrique par superficie sont l\'Algérie, la RDC et :', options: ['Le Soudan', 'La Libye', 'Le Tchad', 'Le Niger'], correct: 0 },
    { texte: 'Avant la sécession du Soudan du Sud en 2011, quel était le plus grand pays d\'Afrique ?', options: ['Algérie', 'RDC', 'Soudan', 'Libye'], correct: 2 },
    { texte: 'Le plus petit pays d\'Afrique est un �tat insulaire de l\'oc�an Indien :', options: ['Maurice', 'Comores', 'Seychelles', 'S�o Tom�-et-Pr�ncipe'], correct: 2 },
    { texte: 'Le plus petit pays d\'Afrique continentale (hors îles) est :', options: ['Gambie', 'Guinée-Bissau', 'Djibouti', 'Eswatini'], correct: 0 },
    { texte: 'La Gambie est le plus petit pays d\'Afrique continentale. Elle est entièrement entourée par :', options: ['Le Sénégal', 'La Guinée', 'La Guinée-Bissau', 'Le Mali'], correct: 0 },
    { texte: 'Les trois plus grandes villes d\'Afrique sont Le Caire (Égypte), Kinshasa (RDC) et :', options: ['Lagos (Nigéria)', 'Johannesburg (Afrique du Sud)', 'Nairobi (Kenya)', 'Dar es Salaam (Tanzanie)'], correct: 0 },
    { texte: 'La plus grande ville d\'Afrique de l\'Ouest est Lagos (Nigéri', options: ['. La deuxième est : a) Accra (Ghana)', 'Abidjan (Côte d\'Ivoire)', 'Dakar (Sénégal)', 'Bamako (Mali)'], correct: 1 },
    { texte: 'Le pays le plus peuplé d\'Afrique (environ 220 millions d\'habitants) est :', options: ['Égypte', 'Éthiopie', 'RDC', 'Nigeria'], correct: 3 },
    { texte: 'Le Nigeria est le pays le plus peuplé d\'Afrique. Il se classe également au rang mondial :', options: ['4e', '5e', '6e', '7e'], correct: 2 },
    { texte: 'La ville la plus peuplée d\'Afrique (23,07 millions d\'habitants en 2025) est :', options: ['Lagos', 'Kinshasa', 'Le Caire', 'Johannesburg'], correct: 2 },
    { texte: 'Le pays l e plus propre d\'Afrique est :', options: ['Kenya', 'Ouganda', 'Rwanda', 'Tanzanie'], correct: 2 },
    { texte: 'Madagascar est la plus grande île d\'Afrique. Sa superficie est d\'environ :', options: ['287 000 km²', '387 000 km²', '487 000 km²', '587 000 km²'], correct: 3 },
    { texte: 'Les Seychelles sont un archipel de combien d\'îles ?', options: ['85', '95', '105', '115'], correct: 3 },
    { texte: 'Zanzibar est un archipel semi-autonome rattaché à :', options: ['Kenya', 'Tanzanie', 'Mozambique', 'Comores'], correct: 1 },
    { texte: 'Le président ayant effectué le plus long mandat en Afrique (depuis 1979) est :', options: ['Paul Biya (Cameroun)', 'Teodoro Obiang Nguema Mbasogo (Guinée équatoriale)', 'Yoweri Museveni (Ouganda)', 'Denis Sassou Nguesso (Congo)'], correct: 1 },
    { texte: 'Paul Biya, président du Cameroun, est au pouvoir depuis quelle année ?', options: ['1979', '1982', '1980', '1985'], correct: 1 },
    { texte: 'La première femme élue chef d\'État en Afrique (Liberia, 2006-2018) est :', options: ['Sahle-Work Zewde', 'Samia Suluhu Hassan', 'Ellen Johnson Sirleaf', 'Ameenah Gurib-Fakim'], correct: 2 },
    { texte: 'La présidente éthiopienne Sahle-Work Zewde (2018-2024) avait un rôle essentiellement :', options: ['Exécutif', 'Cérémoniel', 'Législatif', 'Judiciaire'], correct: 1 },
    { texte: 'La présidente de Maurice (2015-2018), Ameenah Gurib-Fakim , était :', options: ['Une ancienne militaire', 'Une scientifique (biologiste)', 'Une avocate', 'Une économiste'], correct: 1 },
    { texte: 'Le pr�sident burkinab� Ibrahim Traor� est arriv� au pouvoir � l\'�ge de 34 ans (2022). Il est :', options: ['Le plus vieux pr�sident d\'Afrique', 'Le plus jeune chef d\'�tat en exercice au monde', 'Le premier pr�sident civil du Burkina', 'Le seul pr�sident ouest-africain'], correct: 1 },
    { texte: 'Le président algérien Abdelmadjid Tebboune a été élu en 2019 après la démission d\'Abdelaziz Bouteflika, poussé au départ par :', options: ['Un coup d\'État', 'Le mouvement de protestation Hirak', 'Une intervention étrangère', 'Une maladie'], correct: 1 },
    { texte: 'Le président tunisien Kaïs Saïed a été élu en 2019. En 2021, il a dissous le Parlement et gouverné par décrets, une dérive qualifiée de :', options: ['Transition démocratique', 'Coup d\'État constitutionnel', 'Révolution pacifique', 'Accord de coalition'], correct: 1 },
    { texte: 'Le président égyptien Abdel Fattah al-Sissi est arrivé au pouvoir après avoir renversé le président élu Mohamed Morsi en 2013. Morsi était issu du mouvement :', options: ['Des Frères musulmans', 'Des Wafd', 'Du Nasserisme', 'Du Parti national démocratique'], correct: 0 },
    { texte: 'Le président soudanais Omar el-Béchir, renversé en 2019, est poursuivi par la CPI pour génocide au Darfour. Il était au pouvoir depuis :', options: ['1985', '1989', '1993', '1999'], correct: 1 },
    { texte: 'Le président ghanéen Nana Akufo -Addo est au pouvoir depuis 2017. Il a été réélu en 2020. Son prédécesseur était :', options: ['John Atta Mills', 'John Dramani Mahama', 'Jerry Rawlings', 'John Kufuor'], correct: 1 },
    { texte: 'Le président du Botswana, Mokgweetsi Masisi , est au pouvoir depuis 2018. Le Botswana est souvent cité comme un modèle de :', options: ['Dictature militaire', 'Démocratie et stabilité en Afrique', 'État islamique', 'Monarchie absolue'], correct: 1 },
    { texte: 'Le président du Lesotho, Sam Matekane , élu en 2022, a succédé à :', options: ['Moeketsi Majoro', 'Tom Thabane', 'Pakalitha Mosisili', 'Letsie III (roi)'], correct: 0 },
    { texte: 'Le président namibien Nangolo Mbumba a succédé en 2024 à :', options: ['Hage Geingob (décédé)', 'Sam Nujoma', 'Pohamba', 'Theo-Ben Gurirab'], correct: 0 },
    { texte: 'Le président zimbabwéen Emmerson Mnangagwa , surnommé "le Crocodile", a succédé à Robert Mugabe après un coup d\'État en 2017. Mugabe était au pouvoir depuis :', options: ['1975', '1980', '1985', '1990'], correct: 1 },
    { texte: 'Le président malawite Lazarus Chakwera a été élu en 2020. Son prédécesseur, Peter Mutharika , était contesté pour :', options: ['Sa politique économique', 'Des allégations de corruption', 'Son alliance avec la Chine', 'Sa gestion de la pandémie'], correct: 1 },
    { texte: 'Le président kényan William Ruto a été élu en 2022. Il a battu Raila Odinga , qui était soutenu par son prédécesseur :', options: ['Mwai Kibaki', 'Uhuru Kenyatta', 'Daniel arap Moi', 'Jomo Kenyatta'], correct: 1 },
    { texte: 'Le président mozambicain Filipe Nyusi est au pouvoir depuis 2015. Son mandat a été marqué par une insurrection djihadiste dans la province de :', options: ['Cabo Delgado', 'Maputo', 'Gaza', 'Inhambane'], correct: 0 },
    { texte: 'Le président djiboutien Ismaïl Omar Guelleh est au pouvoir depuis 1999. Son pays abrite des bases militaires françaises, américaines, japonaises et :', options: ['Britanniques', 'Chinoises', 'Russes', 'Allemandes'], correct: 1 },
    { texte: 'Le président comorien Azali Assoumani est arrivé au pouvoir par un coup d\'État en 1999. Il a modifié la Constitution pour :', options: ['Instaurer une monarchie', 'Supprimer la limitation des mandats', 'Créer un parlement bicaméral', 'Rétablir la peine de mort'], correct: 1 },
    { texte: 'Le président mauricien Prithvirajsing Roopun ( Prithvirajsing ) est le chef de l\'État, mais le pouvoir exécutif est détenu par le Premier ministre Navin Ramgoolam, qui est :', options: ['Son fils', 'Le chef du gouvernement', 'Un opposant', 'Un diplomate'], correct: 1 },
    { texte: 'Le président seychellois Wavel Ramkalawan a été élu en 2020. Il est connu pour être :', options: ['Un ancien dictateur', 'Un ancien prêtre anglican', 'Un ancien militaire', 'Un ancien chef d\'entreprise'], correct: 1 },
    { texte: 'Le président du Cap-Vert, José Maria Neves , a été élu en 2021. Il est l\'ancien Premier ministre (2001-2016) et a succédé à :', options: ['Jorge Carlos Fonseca', 'Ulisses Correia e Silva', 'Pedro Pires', 'Aristides Pereira'], correct: 0 },
    { texte: 'Le pr�sident de S�o Tom�-et-Pr�ncipe, Carlos Vila Nova, a �t� �lu en 2021. Son pays est un archipel du golfe de Guin�e et une ancienne colonie :', options: ['Fran�aise', 'Britannique', 'Portugaise', 'Espagnole'], correct: 2 },
];

thematiquesAfrique.hauts_sommets_fleuves_lacs_et_deserts_dafrique.questions = [
    { texte: 'Le point culminant de l\'Afrique est le Kilimandjaro, avec une altitude de :', options: ['5 199 m', '5 642 m', '5 892 m', '6 895 m'], correct: 2 },
    { texte: 'Le Kilimandjaro est un volcan endormi composé de trois cônes. Lequel de ces cônes n\'est pas l\'un d\'eux ?', options: ['Kibo (pic Uhuru )', 'Mawenzi', 'Shira', 'Batian'], correct: 3 },
    { texte: 'Le mont Kenya, deuxième plus haut sommet d\'Afrique (5 199 m), se trouve dans la vallée du Grand Rift. Son pic le plus élevé s\'appelle :', options: ['Nelion', 'Lenana', 'Batian', 'Margherita'], correct: 2 },
    { texte: 'Le mont Stanley, point culminant du massif du Rwenzori (5 109 m), est situé à la frontière entre :', options: ['Kenya et Tanzanie', 'Ouganda et RDC', 'Rwanda et Burundi', 'Éthiopie et Soudan'], correct: 1 },
    { texte: 'Le pic principal du mont Stanley s\'appelle :', options: ['Pic Uhuru', 'Margherita Peak', 'Batian', 'Ras Dashan'], correct: 1 },
    { texte: 'Le mont Méru (Tanzanie) est un volcan actif. Sa dernière éruption remonte à :', options: ['1900', '1910', '1920', '1930'], correct: 1 },
    { texte: 'Ras Dashan (4 550 m) est le point culminant des monts Simien, situés dans le nord de :', options: ['Kenya', 'Tanzanie', 'Éthiopie', 'Ouganda'], correct: 2 },
    { texte: 'Le mont Karisimbi (4 507 m) est le plus haut sommet des montagnes des Virunga. Son nom signifie "coquillage blanc" en :', options: ['swahili', 'kinyarwanda', 'amharique', 'oromo'], correct: 1 },
    { texte: 'Le mont Elgon (4 321 m) est un volcan éteint dont le cratère est l\'un des plus grands au monde (8 km de diamètre). Il est situé à la frontière entre :', options: ['Kenya et Ouganda', 'Ouganda et RDC', 'Kenya et Tanzanie', 'Tanzanie et Burundi'], correct: 0 },
    { texte: 'Le Djebel Toubkal (4 165 m) est le point culminant du Maroc, de l\'Atlas et de :', options: ['l\'Afrique de l\'Ouest', 'l\'Afrique du Nord', 'l\'Afrique centrale', 'tout le Maghreb'], correct: 1 },
    { texte: 'Le mont Cameroun (4 095 m) est le point culminant de l\'Afrique de l\'Ouest. Il est également connu sous le nom de :', options: ['Fako', 'Kibo', 'Batian', 'Karisimbi'], correct: 0 },
    { texte: 'Le Pico Basile (3 007 m) est le point culminant de la Guin�e �quatoriale. Il est situ� sur l\'�le de :', options: ['Bioko', 'S�o Tom�', 'Pr�ncipe', 'Annob�n'], correct: 0 },
    { texte: 'Le Chappal Waddi (2 419 m) est le plus haut sommet du Nigeria. Il est situé sur le plateau de :', options: ['Jos', 'Mambila', 'Obudu', 'Bauchi'], correct: 1 },
    { texte: 'Le Pico de S�o Tom� (2 024 m) est le point culminant de S�o Tom�-e-Pr�ncipe. G�ologiquement, c\'est :', options: ['Un volcan actif', 'Le pic �merg� d\'un volcan bouclier', 'Une montagne de soul�vement', 'Un massif calcaire'], correct: 1 },
    { texte: 'Le mont Indoukat -n- Taglès (2 022 m) est le point culminant du Niger et du massif de :', options: ['l\'Aïr', 'du Djado', 'du Ténéré', 'du Hoggar'], correct: 0 },
    { texte: 'Le mont Bintumani (1 945 m), également appelé Loma Mansa, est le point culminant de :', options: ['Guinée', 'Sierra Leone', 'Liberia', 'Côte d\'Ivoire'], correct: 1 },
    { texte: 'Le Pico do Fogo (2 829 m) est le point culminant du Cap-Vert. C\'est un volcan actif situ� sur l\'�le de :', options: ['Santiago', 'Santo Ant�o', 'Fogo', 'Brava'], correct: 2 },
    { texte: 'Le mont Nimba (1 752 m) est le point culminant de trois pays. Lequel n\'est pas concerné ?', options: ['Côte d\'Ivoire', 'Guinée', 'Libéria', 'Sierra Leone'], correct: 3 },
    { texte: 'Le Nil est le plus long fleuve d\'Afrique. Sa longueur est d\'environ :', options: ['5 892 km', '6 895 km', '7 000 km', '7 500 km'], correct: 1 },
    { texte: 'Le Nil naît de la confluence du Nil Blanc et du Nil Bleu à :', options: ['Le Caire', 'Khartoum', 'Assouan', 'Alexandrie'], correct: 1 },
    { texte: 'Le fleuve Congo est le deuxième plus long d\'Afrique (4 700 km), mais il est le premier par son débit. Quel fleuve mondial a un débit supérieur ?', options: ['Nil', 'Yangtsé', 'Amazone', 'Mississippi'], correct: 2 },
    { texte: 'Le fleuve Niger naît en Guinée et traverse plusieurs pays. Lequel de ces pays n\'est pas traversé par le Niger ?', options: ['Mali', 'Niger', 'Burkina Faso', 'Nigeria'], correct: 2 },
    { texte: 'Le Zambèze est célèbre pour les chutes Victoria. Ce fleuve traverse également plusieurs barrages, dont :', options: ['Akosombo', 'Kariba', 'Kainji', 'Manantali'], correct: 1 },
    { texte: 'Le fleuve Orange est le plus long fleuve d\'Afrique du Sud. Il prend sa source dans les monts Drakensberg au :', options: ['Lesotho', 'Eswatini', 'Zimbabwe', 'Mozambique'], correct: 0 },
    { texte: 'L\'Okavango est un fleuve endoréique célèbre pour son delta intérieur situé au Botswana. Son delta est classé au patrimoine mondial de :', options: ['l\'ONU', 'l\'UNESCO', 'l\'UA', 'l\'OMS'], correct: 1 },
    { texte: 'Le Nil Bleu prend sa source au lac Tana, situé en :', options: ['Égypte', 'Soudan', 'Éthiopie', 'Ouganda'], correct: 2 },
    { texte: 'Le Nil Bleu fournit environ quel pourcentage du débit du Nil en saison des pluies ?', options: ['50 %', '60 %', '70 %', '80 %'], correct: 2 },
    { texte: 'Le lac Victoria est le plus grand lac d\'Afrique. Il est traversé par :', options: ['le tropique du Cancer', 'l\'équateur', 'le tropique du Capricorne', 'le méridien de Greenwich'], correct: 1 },
    { texte: 'Le lac Tanganyika est le deuxième plus profond du monde après le lac Baïkal. Sa profondeur maximale est d\'environ :', options: ['1 200 m', '1 350 m', '1 470 m', '1 642 m'], correct: 2 },
    { texte: 'Le lac Malawi (Nyass', options: ['est célèbre pour sa biodiversité exceptionnelle. Combien d\'espèces de poissons y trouve-t-on environ ? a) Plus de 500', 'Plus de 1 000', 'Plus de 1 500', 'Plus de 2 000'], correct: 1 },
    { texte: 'Le lac Volta, situé au Ghana, est le plus grand lac artificiel du monde en superficie. Il a été créé en 1965 par le barrage d\' :', options: ['Akosombo', 'Kariba', 'Kainji', 'Cahora Bassa'], correct: 0 },
    { texte: 'Le lac Turkana (Rudolf) est le plus grand lac permanent en milieu désertique. Il est surnommé la "Mer de Jade" à cause :', options: ['De sa profondeur', 'De ses couleurs émeraude', 'De sa salinité', 'De ses fossiles'], correct: 1 },
    { texte: 'Le lac Nasser est le lac de retenue du haut barrage d\'Assouan en Égypte. Sa construction a nécessité le déplacement de monuments, dont :', options: ['Les pyramides de Gizeh', 'Le temple d\'Abou Simbel', 'Le Sphinx', 'La mosquée d\'Alexandrie'], correct: 1 },
    { texte: 'Le réservoir de la Renaissance (Éthiopie), sur le Nil Bleu, est au centre d\'un conflit hydraulique avec :', options: ['L\'Ouganda et le Kenya', 'L\'Égypte et le Soudan', 'La Tanzanie et le Burundi', 'Le Rwanda et la RDC'], correct: 1 },
    { texte: 'Le lac Tchad a vu sa superficie considérablement diminuer. En 1963, elle était d\'environ 22 903 km². En 2015, elle n\'était plus que de :', options: ['1 350 km²', '2 500 km²', '5 000 km²', '8 000 km²'], correct: 0 },
    { texte: 'Le Sahara est le plus grand désert chaud du monde. Sa formation est liée à l\'assèchement d\'une mer ancienne il y a environ :', options: ['2 millions d\'années', '5 millions d\'années', '7 millions d\'années', '10 millions d\'années'], correct: 2 },
    { texte: 'Le d�sert du Namib est consid�r� comme le plus ancien d�sert du monde, avec un �ge estim� � :', options: ['25 millions d\'ann�es', '40 millions d\'ann�es', '55 millions d\'ann�es', '70 millions d\'ann�es'], correct: 2 },
    { texte: 'La "côte des Squelettes", célèbre pour ses épaves de navires et ossements de baleines, se trouve dans le désert de :', options: ['Sahara', 'Namib', 'Kalahari', 'Danakil'], correct: 1 },
    { texte: 'Le Kalahari est un désert semi-aride. Quelle est sa caractéristique principale ?', options: ['C\'est le plus grand désert de sable du monde', 'C\'est le plus grand désert chaud du monde', 'C\'est le plus ancien désert du monde', 'C\'est le plus haut désert du monde'], correct: 0 },
    { texte: 'Le désert du Danakil est l\'un des endroits les plus chauds et les plus bas du monde. Il se trouve à la confluence de trois plaques tectoniques : somalienne, arabe et :', options: ['indienne', 'eurasienne', 'africaine', 'antarctique'], correct: 2 },
    { texte: 'Le Karoo, en Afrique du Sud, est riche en fossiles. La première découverte importante a été faite par Andrew Geddes Bain en :', options: ['1828', '1838', '1848', '1858'], correct: 1 },
    { texte: 'Le désert de Lompoul , au Sénégal, est le plus petit désert d\'Afrique. Il est connu pour :', options: ['Ses dunes rouges', 'Le "Festival du Sahel"', 'Ses oasis', 'Sa faune désertique'], correct: 1 },
    { texte: 'La plante emblématique du désert du Namib, la Welwitschia mirabilis, peut vivre plus de :', options: ['500 ans', '1 000 ans', '1 500 ans', '2 000 ans'], correct: 1 },
    { texte: 'Le désert de Guban , en Somalie, est un désert côtier étroit. Ses précipitations annuelles sont d\'environ :', options: ['5 cm', '10 cm', '15 cm', '20 cm'], correct: 0 },
    { texte: 'Le Grand Bara, à Djibouti, est un ancien lit de lac asséché. Chaque année, il accueille une course à pied organisée par :', options: ['L\'armée française (Légion étrangère)', 'L\'ONU', 'L\'Union africaine', 'La Croix-Rouge'], correct: 0 },
    { texte: 'Le désert de Nyiri ( Taru ) au Kenya est situé dans l\'ombre pluviométrique du Kilimandjaro. Cette expression signifie que :', options: ['La montagne attire les nuages', 'La montagne bloque les nuages et crée une zone aride', 'La montagne provoque des pluies torrentielles', 'La montagne est couverte de neige'], correct: 1 },
    { texte: 'Le désert blanc, en Égypte, est célèbre pour ses formations calcaires blanches sculptées par l\'érosion. On y trouve également une stèle du pharaon :', options: ['Amenhotep', 'Thoutmôsis', 'Ramsès II', 'Akhenaton'], correct: 0 },
    { texte: 'Le fleuve Chari est le principal pourvoyeur du lac Tchad, fournissant environ 90 % de ses apports. Il est formé par la confluence de l\'Ouham et de :', options: ['La Salamat', 'La Bénoué', 'La Sangha', 'L\'Oubangui'], correct: 0 },
    { texte: 'Le fleuve Bénoué est le principal affluent du fleuve Niger. Il rejoint le Niger à :', options: ['Bamako', 'Niamey', 'Lokoja (Nigeria)', 'Gao'], correct: 2 },
    { texte: 'Le fleuve Vaal est le principal affluent de l\'Orange. Il arrose la région industrielle de Gauteng, où se trouvent :', options: ['Le Cap et Port Elizabeth', 'Johannesburg et Pretoria', 'Durban et Pietermaritzburg', 'Bloemfontein et Kimberley'], correct: 1 },
    { texte: 'Le lac Albert est alimenté par le Nil Victoria (issu du lac Victori', options: ['et donne naissance au : a) Nil Blanc', 'Nil Bleu', 'Nil Albert', 'Nil Victoria'], correct: 2 },
    { texte: 'Le lac Moero (Mweru) est situé entre la RDC et la Zambie. Il est alimenté par la Luapula, qui est l\'émissaire du lac :', options: ['Tanganyika', 'Malawi', 'Bangwelo', 'Victoria'], correct: 2 },
    { texte: 'Le lac Kivu est souvent cité parmi les Grands Lacs d\'Afrique de l\'Est. Combien de lacs composent généralement l\'ensemble des Grands Lacs ?', options: ['6', '7', '8', '9'], correct: 2 },
    { texte: 'Le lac Victoria abrite plus de 3 000 îles. Il est menacé par la prolifération d\'une plante aquatique invasive :', options: ['La jacinthe d\'eau', 'La lentille d\'eau', 'L\'algue verte', 'Le nénuphar'], correct: 0 },
    { texte: 'Le lac Tanganyika contient 18 900 km³ d\'eau, soit environ 16 % des réserves mondiales d\'eau douce de surface. Combien d\'espèces de poissons endémiques compte-t-il ?', options: ['Plus de 150', 'Plus de 200', 'Plus de 250', 'Plus de 300'], correct: 2 },
    { texte: 'Le lac Kariba, créé en 1959, produit de l\'électricité pour la Zambie et le Zimbabwe. Il est situé sur le fleuve :', options: ['Zambèze', 'Congo', 'Limpopo', 'Orange'], correct: 0 },
    { texte: 'Le lac Cahora Bassa, au Mozambique, est un réservoir sur le Zambèze créé en 1974. Il se trouve à l\'intérieur du parc national de :', options: ['Gorongosa', 'Zinave', 'Banhine', 'Limpopo'], correct: 1 },
    { texte: 'Le lac Rukwa , en Tanzanie, est un lac endoréique très peu profond. Cela signifie que :', options: ['Il se jette dans l\'océan', 'Il n\'a pas d\'émissaire et ses eaux s\'évaporent', 'Il est alimenté par la mer', 'Il est souterrain'], correct: 1 },
    { texte: 'Le lac Mai- Ndombe , en RDC, signifie "eaux noires" en :', options: ['swahili', 'lingala', 'kikongo', 'tshiluba'], correct: 1 },
    { texte: 'Le lac Kyoga , en Ouganda, est un lac peu profond parsemé de papyrus flottants. Il est alimenté par le Nil Victoria et drainé par le Nil :', options: ['Blanc', 'Bleu', 'Albert', 'Victoria'], correct: 0 },
    { texte: 'Le lac Kainji, au Nigeria, est un lac de retenue créé par un barrage sur le fleuve Niger en :', options: ['1965', '1966', '1967', '1968'], correct: 3 },
    { texte: 'Le lac Chilwa , au Malawi, est un lac endoréique très peu profond, bordé de vastes marais. Ses eaux sont :', options: ['Douces', 'Légèrement salées', 'Très salées', 'Alcalines'], correct: 1 },
    { texte: 'Le lac Abaya est le plus grand lac de la vallée du Grand Rift en Éthiopie. Il n\'a pas d\'émissaire, ce qui le rend :', options: ['Doux', 'Légèrement salé', 'Très salé', 'Alcalin'], correct: 1 },
    { texte: 'Le lac Eyasi , en Tanzanie, est un lac salé endoréique célèbre pour ses sites archéologiques. Il est situé au sud du :', options: ['Serengeti', 'Ngorongoro', 'Kilimandjaro', 'Manyara'], correct: 0 },
    { texte: 'Le mont Muhavura (4 127 m), dans les montagnes des Virunga, signifie "guide" en kinyarwanda car :', options: ['Il guide les voyageurs', 'Il sert de repère aux voyageurs', 'Il est le plus haut', 'Il est sacré'], correct: 1 },
    { texte: 'Le mont Gréboun (1 944 m) est un sommet granitique du massif de l\'Aïr, au Niger. Il est situé dans la réserve naturelle de :', options: ['l\'Aïr et du Ténéré', 'du Djado', 'du Termit', 'du Tadrart'], correct: 0 },
    { texte: 'Le désert du Chalbi , au Kenya, est un ancien lit de rivière. Son nom signifie "nu et salé" dans le dialecte :', options: ['Samburu', 'Gabbra', 'Turkana', 'Rendille'], correct: 1 },
    { texte: 'Le fleuve Dr�a , au Maroc, est le plus long fleuve du pays. Son cours est souvent � sec en �t� car :', options: ['Il est d�tourn� pour l\'irrigation', 'Il traverse des r�gions arides', 'Il est souterrain', 'Il se jette dans un lac'], correct: 1 },
    { texte: 'Le fleuve Bandama est le principal fleuve de Côte d\'Ivoire. Il naît de la réunion du Bandama Blanc et du Bandama Rouge et se jette dans :', options: ['Le golfe de Guinée', 'La lagune Lahou', 'L\'océan Atlantique', 'Le lac Kossou'], correct: 1 },
    { texte: 'Le fleuve Tana, au Kenya, prend sa source sur le mont Kenya et se jette dans l\'océan Indien. Il est équipé de barrages hydroélectriques, dont le plus connu est :', options: ['Kindaruma', 'Kariba', 'Kainji', 'Akosombo'], correct: 0 },
    { texte: 'Le fleuve Lomami est un affluent du Congo par la rive gauche. Il coule en parallèle du fleuve principal à travers :', options: ['La savane', 'La forêt dense', 'Les marais', 'Les montagnes'], correct: 1 },
    { texte: 'Le fleuve Aruwimi ( Lohale ) est un affluent du Congo. Il rejoint le fleuve près de :', options: ['Kisangani', 'Basoko', 'Mbandaka', 'Kinshasa'], correct: 1 },
];

thematiquesAfrique.organisations_et_institutions_africaines.questions = [
    { texte: 'L\'Organisation de l\'unité africaine (OUA) a été créée le 25 mai 1963 à :', options: ['Durban', 'Addis-Abeba', 'Lagos', 'Le Caire'], correct: 1 },
    { texte: 'L\'OUA a été remplacée par l\'Union africaine (UA) en 2002. La déclaration de Syrte (1999) a acté cette décision. Syrte se trouve en :', options: ['Égypte', 'Tunisie', 'Libye', 'Algérie'], correct: 2 },
    { texte: 'L\'Union africaine a été officiellement lancée le 9 juillet 2002 à :', options: ['Addis-Abeba', 'Durban', 'Johannesburg', 'Pretoria'], correct: 1 },
    { texte: 'Le siège de l\'Union africaine se trouve à :', options: ['Nairobi', 'Addis-Abeba', 'Dakar', 'Le Caire'], correct: 1 },
    { texte: 'L\'UA compte actuellement 55 États membres. Lequel a réintégré l\'organisation en 2017 après une absence de 33 ans ?', options: ['Égypte', 'Maroc', 'Tunisie', 'Libye'], correct: 1 },
    { texte: 'La pr�sidence de l\'UA est assur�e par rotation annuelle. Le pr�sident actuel (depuis f�vrier 2026) est :', options: ['Jo�o Louren�o (Angola)', '�variste Ndayishimiye (Burundi)', 'Azali Assoumani (Comores)', 'F�lix Tshisekedi (RDC)'], correct: 1 },
    { texte: 'La présidente de la Commission de l\'UA depuis 2025 est une personnalité djiboutienne. Il s\'agit de :', options: ['Moussa Faki Mahamat', 'Nkosazana Dlamini-Zuma', 'Mahamoud Ali Youssouf', 'Alpha Oumar Konaré'], correct: 2 },
    { texte: 'Le Parlement panafricain a un rôle consultatif. Parmi ses présidents, lequel a été le premier à occuper ce poste (2004-2008) ?', options: ['Gertrude Mongella (Tanzanie)', 'Idriss Ndele Moussa (Tchad)', 'Roger Nkodo Dang (Cameroun)', 'Fortune Charumbira (Zimbabwe)'], correct: 0 },
    { texte: 'L\'Alliance des États du Sahel (AES) est devenue une confédération le 6 juillet 2024. Quel pays n\'est pas membre de l\'AES ?', options: ['Burkina Faso', 'Mali', 'Niger', 'Tchad'], correct: 3 },
    { texte: 'Le drapeau de la Confédération AES a été lancé le 22 février 2025 à :', options: ['Ouagadougou', 'Bamako', 'Niamey', 'Nouakchott'], correct: 1 },
    { texte: 'L\'hymne officiel de la Confédération AES s\'intitule "Sahel benkan ", qui signifie en bamanakan :', options: ['"L\'unité du Sahel"', '"L\'entente du Sahel"', '"La force du Sahel"', '"La paix au Sahel"'], correct: 1 },
    { texte: 'La devise de la Confédération AES est :', options: ['"Unité, Travail, Justice"', '"Un Espace, Un Peuple, Un Destin"', '"Paix, Sécurité, Développement"', '"Liberté, Égalité, Fraternité"'], correct: 1 },
    { texte: 'La Banque Confédérale pour l\'Investissement et le Développement de l\'AES (BCID-AES) a été inaugurée le 23 décembre 2025. Elle est dotée de :', options: ['300 milliards FCFA', '400 milliards FCFA', '500 milliards FCFA', '600 milliards FCFA'], correct: 2 },
    { texte: 'Le passeport biométrique commun de l\'AES a été mis en circulation à partir du :', options: ['29 janvier 2024', '29 janvier 2025', '29 janvier 2026', '29 décembre 2025'], correct: 1 },
    { texte: 'Le prélèvement confédéral (PC-AES), une taxe de 0,5 %, a été instauré le 28 mars 2025 sur :', options: ['Les exportations', 'Les importations en provenance de pays extérieurs à l\'AES', 'Les transactions bancaires', 'Les produits pétroliers'], correct: 1 },
    { texte: 'La Commission nationale de la Confédération des États du Sahel (CN-CES) est présidée par :', options: ['Ibrahim Traoré', 'Bassolma Bazié', 'Apollinaire Kyélem de Tambèla', 'Jean-Emmanuel Ouédraogo'], correct: 1 },
    { texte: 'Le CILSS (Comité inter-États de lutte contre la sécheresse au Sahel) a été créé en 1973. Son siège se trouve à :', options: ['Nouakchott', 'Ouagadougou', 'Bamako', 'Niamey'], correct: 1 },
    { texte: 'Le CILSS compte 13 États membres. Combien d\'États côtiers en font partie ?', options: ['6', '7', '8', '9'], correct: 2 },
    { texte: 'Le G5 Sahel a été créé en 2014. Lequel de ces pays n\'était pas membre fondateur ?', options: ['Burkina Faso', 'Mali', 'Niger', 'Sénégal'], correct: 3 },
    { texte: 'Le G5 Sahel a été dissous en décembre 2023 après le retrait de trois pays. Quels sont ces trois pays ?', options: ['Burkina Faso, Mali, Niger', 'Burkina Faso, Mali, Tchad', 'Mali, Niger, Mauritanie', 'Burkina Faso, Niger, Tchad'], correct: 0 },
    { texte: 'La zone franc CFA a été créée le 26 décembre 1946. Le franc CFA est garanti par :', options: ['Le FMI', 'La Banque mondiale', 'Le Trésor français', 'La BCE'], correct: 2 },
    { texte: 'Le franc CFA de l\'UEMOA a pour code ISO 4217 :', options: ['XAF', 'XOF', 'XPF', 'KMF'], correct: 1 },
    { texte: 'La Banque centrale des États de l\'Afrique de l\'Ouest (BCEAO) émet le franc CFA pour l\'UEMOA. Son siège se trouve à :', options: ['Abidjan', 'Dakar', 'Ouagadougou', 'Bamako'], correct: 1 },
    { texte: 'La dévaluation de 50 % du franc CFA a eu lieu le 12 janvier 1994. À cette date, la parité est devenue :', options: ['50 F CFA = 1 FRF', '100 F CFA = 1 FRF', '150 F CFA = 1 FRF', '200 F CFA = 1 FRF'], correct: 1 },
    { texte: 'La CEDEAO a été fondée le 28 mai 1975 à Lagos. Son siège est à Abuja depuis :', options: ['1995', '2000', '2005', '2010'], correct: 2 },
    { texte: 'Le retrait du Mali, du Burkina Faso et du Niger de la CEDEAO est devenu effectif le :', options: ['28 janvier 2024', '25 janvier 2025', '28 janvier 2025', '15 décembre 2024'], correct: 1 },
    { texte: 'La présidente de la Commission de la CEDEAO depuis 2022 est une personnalité gambienne. Il s\'agit de :', options: ['Kadré Désiré Ouédraogo', 'Jean-Claude Kassi Brou', 'Omar Touray', 'Marcel de Souza'], correct: 2 },
    { texte: 'La CEEAC (Communauté économique des États de l\'Afrique centrale) a été créée le 18 octobre 1983. Son siège est à :', options: ['Yaoundé', 'Libreville', 'Brazzaville', 'Kinshasa'], correct: 1 },
    { texte: 'Le Rwanda a annoncé son retrait de la CEEAC le 18 février 2025, invoquant :', options: ['Des raisons économiques', '"L\'instrumentalisation" du bloc par la RDC', 'La violation des droits de l\'homme', 'Un non-paiement des cotisations'], correct: 1 },
    { texte: 'La force multinationale de la CEEAC, similaire à l\'ECOMOG de la CEDEAO, s\'appelle :', options: ['FOMAC', 'MICOPAX', 'MINUSCA', 'MONUSCO'], correct: 0 },
    { texte: 'La CEPGL (Communauté économique des Pays des Grands Lacs) a été créée en 1976. Ses trois membres fondateurs étaient :', options: ['Burundi, Rwanda, Ouganda', 'Burundi, Rwanda, Zaïre (RDC)', 'Burundi, Rwanda, Tanzanie', 'RDC, Ouganda, Rwanda'], correct: 1 },
    { texte: 'La CEPGL a été suspendue entre 1994 et 1996 en raison :', options: ['De la guerre civile au Burundi', 'Du génocide des Tutsis au Rwanda et de la guerre au Zaïre', 'De conflits frontaliers', 'De problèmes économiques'], correct: 1 },
    { texte: 'L\'UEMOA (Union économique et monétaire ouest-africaine) a été créée le 10 janvier 1994. Son siège se trouve à :', options: ['Dakar', 'Abidjan', 'Ouagadougou', 'Bamako'], correct: 2 },
    { texte: 'L\'UEMOA compte 8 pays membres. Lequel de ces pays n\'en fait pas partie ?', options: ['Bénin', 'Cap-Vert', 'Guinée-Bissau', 'Togo'], correct: 1 },
    { texte: 'La CEMAC (Communauté économique et monétaire de l\'Afrique centrale) a été créée en 1994. Son siège (Commission) se trouve à :', options: ['Yaoundé', 'Libreville', 'Bangui', 'N\'Djamena'], correct: 2 },
    { texte: 'La CEMAC est constituée de deux unions principales : l\'Union économique de l\'Afrique centrale (UEAC) et :', options: ['L\'Union monétaire de l\'Afrique centrale (UMAC)', 'L\'Union douanière d\'Afrique centrale', 'La Banque centrale d\'Afrique centrale', 'Le Fonds monétaire d\'Afrique centrale'], correct: 0 },
    { texte: 'Depuis mai 2015, les ressortissants de la CEMAC bénéficient :', options: ['De la libre circulation sans visa', 'D\'un passeport commun', 'D\'une monnaie unique (déjà existante)', 'D\'une cour de justice commune'], correct: 0 },
    { texte: 'La BCEAO (Banque centrale des États de l\'Afrique de l\'Ouest) a été créée en 1955. Le gouverneur actuel est :', options: ['Tiémoko Meyliet Koné', 'Jean-Claude Kassi Brou', 'Amadou Ba', 'Roch Marc Christian Kaboré'], correct: 1 },
    { texte: 'La BEAC (Banque des États de l\'Afrique centrale) a son siège à :', options: ['Douala', 'Libreville', 'Yaoundé', 'Brazzaville'], correct: 2 },
    { texte: 'La BEAC était historiquement réservée au Gabon, mais le poste de gouverneur est devenu rotatif. Le gouverneur actuel (depuis 2024) est :', options: ['Yvon Sana Bangui (République centrafricaine)', 'Baltasar Engonga Edjo\'o (Guinée équatoriale)', 'Abbas Mahamat Tolli (Tchad)', 'Lucas Abaga Nchama (Guinée équatoriale)'], correct: 0 },
    { texte: 'La Banque africaine de développement (BAD) a son siège à Abidjan. Elle a été temporairement relocalisée à Tunis entre 2003 et 2014 en raison :', options: ['De la pandémie', 'De la guerre civile ivoirienne', 'D\'un conflit avec le gouvernement ivoirien', 'De travaux de rénovation'], correct: 1 },
    { texte: 'Le président de la BAD depuis septembre 2025 est Sidi Ould Tah , originaire de :', options: ['Mauritanie', 'Sénégal', 'Mali', 'Niger'], correct: 0 },
    { texte: 'La BOAD (Banque Ouest-africaine de Développement) a son siège à :', options: ['Lomé', 'Cotonou', 'Ouagadougou', 'Niamey'], correct: 0 },
    { texte: 'Le premier président de la BOAD (1975-1981) était un Burkinabè :', options: ['Roch Marc Christian Kaboré', 'Pierre Claver Damiba', 'Thomas Sankara', 'Blaise Compaoré'], correct: 1 },
    { texte: 'L\'OHADA (Organisation pour l\'harmonisation en Afrique du droit des affaires) a été créée le 17 octobre 1993. Son siège est à :', options: ['Abidjan', 'Yaoundé', 'Ouagadougou', 'Porto-Novo'], correct: 1 },
    { texte: 'La Cour commune de justice et d\'arbitrage (CCJA) de l\'OHADA siège à :', options: ['Abidjan', 'Yaoundé', 'Ouagadougou', 'Porto-Novo'], correct: 0 },
    { texte: 'L\'École régionale supérieure de la magistrature (ERSUMA) de l\'OHADA siège à :', options: ['Abidjan', 'Yaoundé', 'Ouagadougou', 'Porto-Novo'], correct: 3 },
    { texte: 'Le Burkina Faso a ratifié le traité de l\'OHADA le 6 mars 1995. Le traité est entré en vigueur pour le Burkina le :', options: ['6 mars 1995', '18 septembre 1995', '6 mars 1996', '18 septembre 1996'], correct: 1 },
    { texte: 'Le CAMES (Conseil africain et malgache pour l\'Enseignement supérieur) a été créé en 1968. Son siège se trouve à :', options: ['Dakar', 'Ouagadougou', 'Abidjan', 'Yaoundé'], correct: 1 },
    { texte: 'Le premier secrétaire général du CAMES (1968-1981) était le célèbre historien burkinabè :', options: ['Joseph Ki- Zerbo', 'Rambré Moumouni Ouiminga', 'Pr Souleymane Konaté', 'Bertrand Mbatchi'], correct: 0 },
    { texte: 'L\'ASECNA (Agence pour la sécurité de la navigation aérienne) a été créée le 12 décembre 1959. Son siège est à :', options: ['Dakar', 'Bamako', 'Abidjan', 'Ouagadougou'], correct: 0 },
    { texte: 'L\'ASECNA compte 19 États membres. La France en est membre depuis la création. Le Rwanda a adhéré en :', options: ['2019', '2020', '2022', '2024'], correct: 3 },
    { texte: 'L\'espace aérien géré par l\'ASECNA couvre plus de la moitié de l\'Afrique, soit environ :', options: ['10 millions de km²', '13 millions de km²', '16 millions de km²', '19 millions de km²'], correct: 2 },
    { texte: 'Le directeur général actuel de l\'ASECNA, Prosper Zo\'o Minto\'o , a pris ses fonctions le :', options: ['1er janvier 2024', '1er janvier 2025', '1er juillet 2025', '1er septembre 2025'], correct: 1 },
    { texte: 'Le Mali s\'est retiré du G5 Sahel le 15 mai 2022. Quelle était la raison officielle invoquée ?', options: ['L\'inefficacité de l\'organisation', '"Une instrumentalisation" et l\'opposition à sa présidence', 'Le manque de financement', 'La dissolution de l\'organisation'], correct: 1 },
    { texte: 'La Guinée a offert un soutien diplomatique à l\'AES mais n\'est pas membre. Quel est le statut politique de la Guinée ?', options: ['Démocratie stable', 'Régime militaire (coup d\'État 2021)', 'Monarchie', 'Transition civile'], correct: 1 },
    { texte: 'La carte d\'identit� commune AES (CIB-AES) devient exigible � partir de l\'�ge de :', options: ['10 ans', '13 ans', '15 ans', '18 ans'], correct: 1 },
    { texte: 'Le franc pacifique (franc CFP) est utilisé dans les collectivités françaises du Pacifique. Son institut d\'émission est :', options: ['La BCEAO', 'La BEAC', 'L\'IEOM', 'La Banque de France'], correct: 2 },
    { texte: 'La CEDEAO a connu plusieurs présidents. Lequel a été président du Burkina Faso et a présidé la CEDEAO (2007-2008) ?', options: ['Thomas Sankara', 'Blaise Compaoré', 'Roch Marc Christian Kaboré', 'Ibrahim Traoré'], correct: 1 },
    { texte: 'La présidente de la Commission de l\'UA (2012-2017), Nkosazana Dlamini-Zuma , est originaire d\'Afrique du Sud. Elle a également été :', options: ['Première ministre', 'Ministre de la Santé', 'Ministre des Affaires étrangères', 'Présidente de la République'], correct: 2 },
    { texte: 'Le président de la BAD, Akinwumi Adesina (2015-2025), est originaire du Nigeria. Il a obtenu la plus importante augmentation de capital de l\'histoire de la Banque. Quel était son poste avant la BAD ?', options: ['Ministre de l\'Agriculture du Nigeria', 'Président du Nigeria', 'Gouverneur de la Banque centrale du Nigeria', 'Directeur du FMI'], correct: 0 },
    { texte: 'Le Fonds africain de développement (FAD) est une entité du groupe de la BAD créée en 1972. Il accorde :', options: ['Des prêts à taux élevé', 'Des prêts à taux zéro et des dons', 'Des garanties bancaires', 'Des investissements en actions'], correct: 1 },
    { texte: 'La BOAD dispose de guichets de financement. Le guichet concessionnel s\'appelle :', options: ['Guichet marchand', 'Fonds de développement énergie (FDE)', 'Fonds de développement et de cohésion (FDC)', 'Guichet spécial'], correct: 2 },
    { texte: 'Le président de la Confédération AES est actuellement le capitaine Ibrahim Traoré (Burkina Faso). Qui a précédé à ce poste (juillet-décembre 2025) ?', options: ['Assimi Goïta (Mali)', 'Abdourahamane Tiani (Niger)', 'Bassolma Bazié', 'Paul-Henri Sandaogo Damiba'], correct: 0 },
    { texte: 'L\'OHADA a modifié son traité initial le 17 octobre 2008. La modification a eu lieu à :', options: ['Paris', 'Québec', 'Bruxelles', 'Genève'], correct: 1 },
    { texte: 'La CCJA (Cour commune de justice et d\'arbitrage) de l\'OHADA est composée de juges élus pour 7 ans. Leur mandat est :', options: ['Renouvelable une fois', 'Renouvelable deux fois', 'Non renouvelable', 'À vie'], correct: 2 },
    { texte: 'La BOAD compte des membres non régionaux. Lequel de ces pays n\'est pas membre non régional ?', options: ['France', 'Allemagne', 'Canada', 'Chine'], correct: 2 },
    { texte: 'Le Traité de la CEDEAO a été signé en 1975. Le président togolais Gnassingbé Eyadéma a été l\'un des initiateurs. Il a présidé l\'organisation à plusieurs reprises, notamment en :', options: ['1975-1976', '1977-1978', '1980-1981', '1985-1986'], correct: 2 },
    { texte: 'La CEMAC a remplacé l\'UDEAC (Union douanière et économique de l\'Afrique centrale) créée en 1964. L\'UDEAC a été dissoute en :', options: ['1994', '1999', '2000', '2005'], correct: 0 },
    { texte: 'La BAD est notée AAA par les principales agences de notation. Cette note reflète :', options: ['Sa rentabilité', 'Sa solidité financière', 'Son niveau d\'endettement', 'Sa transparence'], correct: 1 },
    { texte: 'La BEAC a été créée en 1972. Son siège a été initialement basé à Paris avant d\'être transféré en 1977 à :', options: ['Douala', 'Yaoundé', 'Libreville', 'Brazzaville'], correct: 1 },
    { texte: 'L\'ASECNA a été créée par la Convention de Saint-Louis (Sénégal) en 1959. La convention actuelle est la Convention de Dakar révisée en :', options: ['2000', '2005', '2010', '2015'], correct: 2 },
    { texte: 'Le CAMES organise des concours d\'agrégation dans plusieurs disciplines. Laquelle de ces disciplines n\'est pas concernée ?', options: ['Médecine', 'Sciences juridiques et politiques', 'Sciences économiques et de gestion', 'Lettres et sciences humaines'], correct: 3 },
    { texte: 'Le secrétaire général actuel du CAMES, Pr Souleymane Konaté, est originaire de :', options: ['Burkina Faso', 'Côte d\'Ivoire', 'Mali', 'Sénégal'], correct: 1 },
    { texte: 'L\'Union africaine a 55 États membres. Combien d\'États comptaient l\'OUA à sa création en 1963 ?', options: ['28', '30', '32', '35'], correct: 2 },
    { texte: 'La BCEAO a été créée en 1955 sous le nom d\'Institut d\'émission de l\'Afrique-Occidentale française et du Togo. Elle est devenue BCEAO en :', options: ['1958', '1959', '1960', '1962'], correct: 1 },
    { texte: 'La BEAC a succédé à la Banque centrale des États de l\'Afrique équatoriale et du Cameroun (BCEAEC), créée en :', options: ['1950', '1953', '1955', '1958'], correct: 2 },
    { texte: 'La Guinée équatoriale a rejoint la BEAC le 1er janvier 1985. Quel est le statut de la Guinée équatoriale ?', options: ['Colonie espagnole', 'Pays lusophone', 'Pays anglophone', 'Pays francophone (membre de la CEMAC)'], correct: 3 },
    { texte: 'Le Mali a abandonné le franc CFA en 1962 et a adopté le franc malien. Il est revenu au franc CFA en :', options: ['1974', '1984', '1994', '2000'], correct: 1 },
    { texte: 'Le franc comorien (KMF) a été dévalué de 33 % le 12 janvier 1994. Sa parité est devenue :', options: ['50 KMF = 1 FRF', '75 KMF = 1 FRF', '100 KMF = 1 FRF', '125 KMF = 1 FRF'], correct: 1 },
    { texte: 'La zone franc (XAF, XOF, KMF, XPF) représente environ quel pourcentage de la masse monétaire de l\'euro ?', options: ['1 %', '2 %', '3 %', '4 %'], correct: 2 },
    { texte: 'Le président de la Confédération AES, Ibrahim Traoré, est également :', options: ['Président du Faso', 'Premier ministre', 'Président de l\'Assemblée', 'Ministre de la Défense'], correct: 0 },
    { texte: 'Le Mali s\'est retiré du G5 Sahel en mai 2022. Le Burkina Faso et le Niger ont suivi en décembre 2023. Le G5 Sahel a été dissous le :', options: ['6 décembre 2023', '16 septembre 2023', '2 décembre 2023', '15 mai 2022'], correct: 0 },
    { texte: 'La CEEAC a été créée dans le cadre du Plan d\'action de Lagos (avril 1980). Ce plan visait à :', options: ['Créer une monnaie unique africaine', 'Créer des communautés économiques régionales en Afrique', 'Lutter contre le terrorisme', 'Promouvoir l\'éducation'], correct: 1 },
    { texte: 'La FOMAC (Force multinationale de l\'Afrique centrale) est une force de la CEEAC. Quel événement récent a mis en évidence son rôle ?', options: ['La guerre au Darfour', 'Les conflits en RDC', 'La guerre du Tigré', 'Les coups d\'État au Tchad'], correct: 1 },
    { texte: 'La CEPGL a été relancée en 2008-2010 sous l\'impulsion des présidents Paul Kagame (Rwand', options: ['et Pierre Nkurunziza (Burundi). Quel était le troisième membre ? a) Ouganda', 'Tanzanie', 'RDC', 'Kenya'], correct: 2 },
    { texte: 'Le président de la BOAD, Serge Ekué , est originaire du Togo. Il a succédé en 2020 à Christian Adovèlandé , originaire du :', options: ['Bénin', 'Togo', 'Burkina Faso', 'Sénégal'], correct: 0 },
    { texte: 'La BOAD a approuvé l\'entrée d\'un nouveau membre non régional en décembre 2023 :', options: ['La Banque arabe pour le développement économique en Afrique (BADEA)', 'L\'Inde', 'Le Maroc', 'La Chine'], correct: 0 },
    { texte: 'Le CAMES a été créé dans le cadre de l\'Organisation commune africaine et malgache (OCAM). L\'OCAM a été dissoute en :', options: ['1975', '1985', '1995', '2005'], correct: 1 },
    { texte: 'L\'ASECNA gère 6 régions d\'information en vol (FIR). La France est membre de l\'ASECNA et contribue à la gestion de l\'espace aérien, notamment pour :', options: ['La métropole', 'Ses territoires d\'outre-mer (La Réunion, Mayotte)', 'Ses bases militaires', 'L\'ensemble de son espace aérien'], correct: 1 },
    { texte: 'Lesquels de ces pays sont membres fondateurs de l\'Organisation de l\'unité africaine (OUA) en 1963 ?', options: ['Ghana', 'Nigeria', 'Algérie', 'Maroc'], correct: 0 },
    { texte: 'Parmi ces États, lesquels ont annoncé leur retrait de la CEDEAO en janvier 2024 ?', options: ['Burkina Faso', 'Mali', 'Niger', 'Guinée'], correct: 0 },
    { texte: 'La Banque africaine de développement (BAD) a son siège à Abidjan. Laquelle de ces affirmations est correcte ?', options: ['La BAD a été créée en 1964 et a commencé ses activités en 1966', 'La BAD a été créée en 1960 et a commencé ses activités en 1962', 'La BAD a été créée en 1970 et a commencé ses activités en 1972', 'La BAD a été créée en 1950 et a commencé ses activités en 1952'], correct: 0 },
    { texte: 'Parmi ces institutions, lesquelles sont des organes de l\'Union africaine ?', options: ['La Conférence des chefs d\'État et de gouvernement', 'Le Parlement panafricain', 'La Cour internationale de justice', 'La Commission de l\'UA'], correct: 0 },
    { texte: 'Le G5 Sahel a été dissous en décembre 2023. Lequel de ces pays n\'était PAS membre fondateur du G5 Sahel en 2014 ?', options: ['Burkina Faso', 'Sénégal', 'Mauritanie', 'Tchad'], correct: 1 },
    { texte: 'Quels sont les objectifs fondamentaux de l\'Alliance des États du Sahel (AES) ?', options: ['Défense mutuelle', 'Création d\'une monnaie unique européenne', 'Lutte contre le terrorisme', 'Intégration économique et monétaire'], correct: 0 },
    { texte: 'Parmi ces organisations, lesquelles ont leur siège au Burkina Faso ?', options: ['CILSS', 'CAMES', 'ASECNA', 'UEMOA'], correct: 0 },
    { texte: 'La zone franc CFA comprend plusieurs monnaies. Lesquelles ?', options: ['Franc CFA (XOF) de l\'UEMOA', 'Franc CFA (XAF) de la CEMAC', 'Franc comorien (KMF)', 'Franc pacifique (XPF)'], correct: 0 },
    { texte: 'La CEEAC a connu des suspensions et retraits récents. Laquelle de ces affirmations est vraie ?', options: ['Le Gabon a été suspendu après le coup d\'État de 2023 puis réintégré', 'Le Rwanda a annoncé son retrait en février 2025', 'La Guinée équatoriale a quitté la CEEAC en 2024', 'Le Tchad a été exclu de la CEEAC en 2022'], correct: 0 },
    { texte: 'Parmi ces personnalités, lesquelles ont été secrétaires généraux du CAMES ?', options: ['Joseph Ki- Zerbo', 'Rambré Moumouni Ouiminga', 'Cheikh Anta Diop', 'Pr Souleymane Konaté'], correct: 0 },
    { texte: 'La BCEAO a des missions principales. Lesquelles ?', options: ['Émission monétaire du franc CFA (XOF)', 'Fixation des taux d\'intérêt', 'Gestion de la politique agricole de l\'UEMOA', 'Assistance aux États membres dans leurs relations financières internationales'], correct: 0 },
    { texte: 'Le président actuel de la Confédération AES est Ibrahim Traoré. Lequel de ces pays n\'a jamais été membre de l\'AES ?', options: ['Guinée', 'Burkina Faso', 'Mali', 'Niger'], correct: 0 },
    { texte: 'Parmi ces États, lesquels sont membres de l\'OHADA ?', options: ['Bénin', 'Burkina Faso', 'Sénégal', 'Algérie'], correct: 0 },
    { texte: 'La BEAC émet le franc CFA pour la CEMAC. Laquelle de ces affirmations concernant la BEAC est correcte ?', options: ['Son siège est à Yaoundé depuis 1977', 'Le poste de gouverneur est rotatif par ordre alphabétique des États membres', 'La Guinée équatoriale a rejoint la BEAC en 1985', 'Le gouverneur actuel est un Gabonais'], correct: 0 },
    { texte: 'Parmi ces organisations, lesquelles ont été créées avant 1970 ?', options: ['OUA (1963)', 'CILSS (1973)', 'ASECNA (1959)', 'BCEAO (1955)'], correct: 0 },
];

thematiquesAfrique.sport_en_afrique.questions = [
    { texte: 'La Confédération africaine de football (CAF) a été créée le 10 février 1957. Quels pays étaient présents à Lisbonne en juin 1956 pour décider de sa création ?', options: ['Égypte, Soudan, Éthiopie, Afrique du Sud', 'Égypte, Algérie, Maroc, Tunisie', 'Nigeria, Ghana, Côte d\'Ivoire, Cameroun', 'Sénégal, Mali, Guinée, Congo'], correct: 0 },
    { texte: 'Le siège de la CAF se trouve dans la "Ville du 6 octobre" en :', options: ['Tunisie', 'Maroc', 'Égypte', 'Algérie'], correct: 2 },
    { texte: 'La CAF compte actuellement combien d\'associations membres ?', options: ['52', '53', '54', '55'], correct: 2 },
    { texte: 'Parmi ces présidents de la CAF, lequel a eu le plus long mandat (1988-2017) ?', options: ['Ydnekatchew Tessema (Éthiopie)', 'Issa Hayatou (Cameroun)', 'Ahmad Ahmad (Madagascar)', 'Patrice Motsepe (Afrique du Sud)'], correct: 1 },
    { texte: 'Le président actuel de la CAF (depuis mars 2021) est :', options: ['Ahmad Ahmad', 'Issa Hayatou', 'Patrice Motsepe', 'Abdel Aziz Mostafa'], correct: 2 },
    { texte: 'La Coupe d\'Afrique des nations (CAN) a été créée en 1957. La première édition s\'est déroulée à :', options: ['Le Caire', 'Khartoum', 'Addis-Abeba', 'Lagos'], correct: 1 },
    { texte: 'Le tenant du titre de la CAN (2025) est le Maroc. Le Sénégal avait initialement gagné la finale, mais a été déclaré forfait par le Jury d\'appel de la CAF le :', options: ['17 mars 2025', '17 mars 2026', '17 mars 2027', '17 mai 2026'], correct: 1 },
    { texte: 'L\'Égypte est le pays le plus titré de la CAN avec 7 victoires. Quel est son dernier titre à ce jour ?', options: ['2008', '2010', '2015', '2019'], correct: 1 },
    { texte: 'Le Cameroun a remporté la CAN à 5 reprises. Sa dernière victoire remonte à :', options: ['2000', '2002', '2017', '2019'], correct: 2 },
    { texte: 'La Côte d\'Ivoire a remporté la CAN en 1992, 2015 et 2023. Lors de l\'édition 2023, le pays hôte était :', options: ['Cameroun', 'Côte d\'Ivoire', 'Égypte', 'Sénégal'], correct: 1 },
    { texte: 'Le meilleur buteur de l\'histoire de la CAN (18 buts) est :', options: ['Samuel Eto\'o (Cameroun)', 'Didier Drogba (Côte d\'Ivoire)', 'Mohamed Salah (Égypte)', 'Pierre- Emerick Aubameyang (Gabon)'], correct: 0 },
    { texte: 'Le joueur ayant inscrit le plus de buts en une seule édition de la CAN (9 buts en 1974) est :', options: ['Samuel Eto\'o', 'Pierre Ndaye Mulamba (Zaïre/RDC)', 'Rashidi Yekini', 'Kalusha Bwalya'], correct: 1 },
    { texte: 'Associez chaque pays à son surnom : Afrique du Sud, Algérie, Burkina Faso, Cameroun.', options: ['Bafana Bafana / Les Fennecs / Les Étalons / Lions Indomptables', 'Les Étalons / Bafana Bafana / Les Fennecs / Lions Indomptables', 'Lions Indomptables / Les Fennecs / Les Étalons / Bafana Bafana', 'Bafana Bafana / Lions Indomptables / Les Fennecs / Les Étalons'], correct: 0 },
    { texte: 'Le Sénégal est surnommé "Lions de la Téranga ". La Téranga est :', options: ['Une danse traditionnelle', 'Une valeur d\'hospitalité sénégalaise', 'Un plat national', 'Un stade'], correct: 1 },
    { texte: 'Le Nigeria est surnommé "Super Eagles". Quel autre pays est surnommé "Les Aigles" ?', options: ['Mali', 'Niger', 'Tunisie', 'Algérie'], correct: 0 },
    { texte: 'La prochaine CAN (36e édition) aura lieu en 2027 et sera organisée conjointement par :', options: ['Kenya, Ouganda, Tanzanie', 'Maroc, Algérie, Tunisie', 'Afrique du Sud, Zimbabwe, Botswana', 'Nigeria, Bénin, Togo'], correct: 0 },
    { texte: 'La Coupe d\'Afrique des nations féminine a été créée en 1998. Le pays le plus titré (12 titres) est :', options: ['Ghana', 'Cameroun', 'Nigeria', 'Afrique du Sud'], correct: 2 },
    { texte: 'La Ligue des champions de la CAF a été créée en 1964 sous le nom de :', options: ['Coupe des clubs champions africains', 'Coupe d\'Afrique des clubs', 'Supercoupe africaine', 'Coupe de la CAF'], correct: 0 },
    { texte: 'Le club le plus titré de la Ligue des champions de la CAF (12 titres) est :', options: ['Zamalek SC (Égypte)', 'TP Mazembe (RD Congo)', 'Al Ahly SC (Égypte)', 'Espérance de Tunis'], correct: 2 },
    { texte: 'Le meilleur buteur de l\'histoire de la Ligue des champions de la CAF (39 buts) est :', options: ['Trésor Mputu (RD Congo)', 'Flávio (Angola)', 'Mohamed Aboutrika (Égypte)', 'Youssef Msakni (Tunisie)'], correct: 0 },
    { texte: 'Le prix du Joueur africain de l\'année a été créé en 1992. Le dernier récipiendaire (2025) est :', options: ['Mohamed Salah (Égypte)', 'Victor Osimhen (Nigeria)', 'Achraf Hakimi (Maroc)', 'Sadio Mané (Sénégal)'], correct: 2 },
    { texte: 'Samuel Eto\'o (Cameroun) et Yaya Touré (Côte d\'Ivoire) sont les joueurs les plus titrés (4 fois chacun). Yaya Touré a remporté ses quatre titres consécutivement de :', options: ['2009 à 2012', '2010 à 2013', '2011 à 2014', '2012 à 2015'], correct: 2 },
    { texte: 'Le Nigeria est le pays le plus titré du prix du Joueur africain de l\'année (7 titres). Le dernier Nigérian à avoir remporté ce prix (2024) est :', options: ['Victor Osimhen', 'Ademola Lookman', 'Nwankwo Kanu', 'Rashidi Yekini'], correct: 1 },
    { texte: 'Quel joueur a remporté le prix du Joueur africain de l\'année en 1995, le seul Libérien à ce jour ?', options: ['James Debbah', 'Christopher Wreh', 'George Weah', 'Sekou Conneh'], correct: 2 },
    { texte: 'Liverpool est le club le plus titré avec 5 joueurs africains de l\'année. Lequel de ces joueurs n\'a pas joué à Liverpool ?', options: ['Mohamed Salah', 'Sadio Mané', 'Riyad Mahrez', 'El-Hadji Diouf'], correct: 2 },
    { texte: 'La Coupe d\'Afrique de rugby à XV (Rugby Afrique) a été créée en 2000. Le pays le plus titré (9 titres) est :', options: ['Afrique du Sud', 'Zimbabwe', 'Namibie', 'Kenya'], correct: 2 },
    { texte: 'Le tenant du titre de la Coupe d\'Afrique de rugby (2025) est :', options: ['Namibie', 'Afrique du Sud', 'Zimbabwe', 'Kenya'], correct: 2 },
    { texte: 'Le Championnat d\'Afrique masculin de basket-ball ( AfroBasket ) a été créé en 1962. Le pays le plus titré (12 titres) est :', options: ['Sénégal', 'Angola', 'Égypte', 'Tunisie'], correct: 1 },
    { texte: 'Le tenant du titre de l\' AfroBasket (2025) est :', options: ['Angola', 'Sénégal', 'Tunisie', 'Côte d\'Ivoire'], correct: 0 },
    { texte: 'Le Championnat d\'Afrique masculin de volley-ball a été créé en 1967. Le pays le plus titré (11 titres) est :', options: ['Égypte', 'Tunisie', 'Cameroun', 'Algérie'], correct: 1 },
    { texte: 'Le tenant du titre du Championnat d\'Afrique de volley-ball (2023) est :', options: ['Tunisie', 'Cameroun', 'Égypte', 'Algérie'], correct: 2 },
    { texte: 'La CAF organise plusieurs compétitions. Laquelle de ces compétitions est réservée aux joueurs évoluant dans leur championnat national ?', options: ['Coupe d\'Afrique des nations (CAN)', 'Championnat d\'Afrique des nations (CHAN)', 'Ligue des champions de la CAF', 'Coupe de la confédération'], correct: 1 },
    { texte: 'Le président de la CAF, Patrice Motsepe , est originaire d\'Afrique du Sud. Il est également :', options: ['Ancien footballeur', 'Homme d\'affaires milliardaire', 'Ancien ministre des Sports', 'Entraîneur'], correct: 1 },
    { texte: 'Le Ghana a remporté la CAN à 4 reprises (1963, 1965, 1978, 1982). Depuis 1982, le Ghana n\'a plus gagné. Sa meilleure performance récente est une finale perdue en :', options: ['2010', '2012', '2015', '2017'], correct: 2 },
    { texte: 'L\'Algérie a remporté la CAN en 1990 et 2019. En 2019, la finale s\'est déroulée au Caire. L\'Algérie a battu :', options: ['Sénégal', 'Tunisie', 'Nigeria', 'Maroc'], correct: 0 },
    { texte: 'Le Zaïre (actuelle RDC) a remporté la CAN en 1968 et 1974. En 1974, le Zaïre était également qualifié pour :', options: ['La Coupe du monde', 'Les Jeux olympiques', 'La Coupe des confédérations', 'Les Jeux de la Francophonie'], correct: 0 },
    { texte: 'La Zambie a remporté sa seule CAN en 2012. Cette victoire a eu une résonance particulière car elle a eu lieu :', options: ['À domicile', '20 ans après la mort de l\'équipe nationale dans un accide nt d\'avion', 'Sans encaisser de but', 'Aux tirs au but'], correct: 1 },
    { texte: 'Le Sénégal a remporté sa première CAN en 2021 (organisée en 2022 au Cameroun). Le capitaine de cette équipe était :', options: ['Sadio Mané', 'Kalidou Koulibaly', 'Édouard Mendy', 'Idrissa Gueye'], correct: 0 },
    { texte: 'La Tunisie a remporté sa seule CAN en 2004. Le pays organisateur était :', options: ['Tunisie', 'Maroc', 'Égypte', 'Libye'], correct: 0 },
    { texte: 'Le Congo a remporté sa seule CAN en 1972. Quel était le nom du pays à l\'époque ?', options: ['République populaire du Congo', 'Congo-Brazzaville', 'Congo-Léopoldville', 'Zaïre'], correct: 1 },
    { texte: 'L\'Éthiopie a remporté la CAN en 1962. Le pays organisateur était :', options: ['Éthiopie', 'Soudan', 'Égypte', 'Nigeria'], correct: 0 },
    { texte: 'Le Soudan a remporté la CAN en 1970. Le pays organisateur était :', options: ['Égypte', 'Soudan', 'Éthiopie', 'Libye'], correct: 1 },
    { texte: 'L\'Afrique du Sud a remporté la CAN en 1996. Le pays organisateur était :', options: ['Afrique du Sud', 'Tunisie', 'Nigeria', 'Ghana'], correct: 0 },
    { texte: 'Le Nigeria a remporté la CAN en 1980, 1994 et 2013. En 2013, la finale s\'est déroulée à Johannesburg contre :', options: ['Côte d\'Ivoire', 'Ghana', 'Burkina Faso', 'Mali'], correct: 2 },
    { texte: 'Le Cameroun a remporté sa première CAN en 1984. Le pays organisateur était :', options: ['Cameroun', 'Côte d\'Ivoire', 'Ghana', 'Nigeria'], correct: 0 },
    { texte: 'Le Maroc a remporté sa première CAN en 1976. La deuxième (2025) a été obtenue après la disqualification du vainqueur initial :', options: ['Sénégal', 'Égypte', 'Côte d\'Ivoire', 'Algérie'], correct: 0 },
    { texte: 'La CAF organise également la Ligue africaine de football. Quelle est la particularité de cette compétition ?', options: ['Elle oppose les champions des cinq zones de la CAF', 'Elle est réservée aux clubs les plus riches', 'Elle se joue sous forme de Supercoupe', 'Elle est réservée aux équipes nationales'], correct: 0 },
    { texte: 'Le TP Mazembe (RD Congo) a remporté la Ligue des champions de la CAF à 5 reprises. En 2010, le club a atteint la finale de :', options: ['La Coupe du monde des clubs', 'La Ligue des champions de l\'UEFA', 'La Coupe de la confédération', 'La Supercoupe d\'Afrique'], correct: 0 },
    { texte: 'Zamalek SC (Égypte) a remporté la Ligue des champions de la CAF à 5 reprises. Son rival, Al Ahly , en compte 12. Le derby entre ces deux clubs est appelé :', options: ['Derby du Nil', 'Derby du Caire', 'Derby égyptien', 'Derby d\'Afrique'], correct: 0 },
    { texte: 'La Coupe de la confédération de la CAF est l\'équivalent de :', options: ['La Ligue Europa (UEFA)', 'La Supercoupe (UEFA)', 'La Ligue des champions (UEFA)', 'La Coupe d\'Europe des vainqueurs de coupe'], correct: 0 },
    { texte: 'La Supercoupe de la CAF oppose chaque année le vainqueur de la Ligue des champions au vainqueur de :', options: ['La Coupe de la confédération', 'La Ligue africaine', 'La Coupe d\'Afrique des nations', 'Le CHAN'], correct: 0 },
    { texte: 'Le Championnat d\'Afrique des nations (CHAN) est réservé aux joueurs :', options: ['Évoluant dans leur championnat national', 'De moins de 23 ans', 'Évoluant en Europe', 'Amateurs'], correct: 0 },
    { texte: 'Le Ghana est surnommé "Black Stars". Quel pays est surnommé "Black Stars" également dans une autre discipline ?', options: ['Aucun', 'Le Nigeria en athlétisme', 'Le Sénégal en basket-ball', 'La Côte d\'Ivoire en rugby'], correct: 0 },
    { texte: 'Le Cameroun est surnommé "Lions Indomptables". Quel autre pays africain est surnommé "Les Lions" ?', options: ['Maroc', 'Sénégal', 'Les deux ( a et b)', 'Aucun'], correct: 2 },
    { texte: 'Le Bénin a changé son surnom des "Écureuils" à "Les Guépards" en :', options: ['2020', '2021', '2022', '2023'], correct: 2 },
    { texte: 'La Tanzanie est surnommée "Taifa Stars". "Taifa" signifie en swahili :', options: ['Équipe', 'Nation', 'Football', 'Étoile'], correct: 1 },
    { texte: 'La Zambie est surnommée " Chipolopolo ". Ce mot signifie en bemba :', options: ['Les balles de cuivre', 'Les guerriers', 'Les aigles', 'Les lions'], correct: 0 },
    { texte: 'Les Comores sont surnommées "Cœlacanthes". Le cœlacanthe est :', options: ['Un poisson préhistorique', 'Un oiseau rare', 'Un mammifère marin', 'Un reptile'], correct: 0 },
    { texte: 'La Guinée équatoriale est surnommée " Nzalang Nacional ". " Nzalang " signifie en fang :', options: ['Le tonnerre', 'La panthère', 'L\'éclair', 'L\'aigle'], correct: 0 },
    { texte: 'L\'Angola est surnommé " Palancas Negras " (antilopes noires). Ce surnom a été choisi en référence :', options: ['À un animal emblématique du pays', 'À une ancienne reine', 'À une montagne', 'À une rivière'], correct: 0 },
    { texte: 'Le Mozambique est surnommé "Les Mambas". Le mamba est :', options: ['Un serpent très venimeux', 'Un oiseau', 'Un arbre', 'Un fleuve'], correct: 0 },
    { texte: 'Le Niger est surnommé "Les Menas". Ce surnom fait référence :', options: ['Aux guerriers peuls', 'Au fleuve Niger', 'À une ethnie locale', 'À un oiseau'], correct: 0 },
    { texte: 'Le Zimbabwe est surnommé "Les Guerriers". L\'équipe était auparavant surnommée "Les Guerriers de la mort", mais ce nom a été abandonné car :', options: ['Jugé trop agressif', 'Il rappelait la guerre civile', 'La FIFA l\'a interdit', 'Il était trop long'], correct: 0 },
    { texte: 'Le Gabon est surnommé "Les Panthères". Le joueur le plus célèbre du Gabon, Pierre- Emerick Aubameyang , a remporté le prix du Joueur africain de l\'année en :', options: ['2013', '2015', '2017', '2019'], correct: 1 },
    { texte: 'Le Mali est surnommé "Les Aigles". Le joueur malien Frédéric Kanouté a remporté le prix du Joueur africain de l\'année en :', options: ['2005', '2006', '2007', '2008'], correct: 2 },
    { texte: 'L\'Ouganda est surnommé "Les Grues". La grue est un oiseau migrateur qui symbolise :', options: ['La paix', 'La vigilance', 'La liberté', 'La force'], correct: 1 },
];



// Recalcule la banque avec les th�mes Afrique
mettreAJourBanqueQuestions();




