document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            id: 'welhome',
            title: "Wel'home",
            category: 'Cyber',
            image: "Welc'home.png",
            description: "Projet de groupe réalisé en 1 semaine durant mon premier semestre de Bachelor Web et Multimédia. L'objectif était de concevoir une application d'entraide et d'accompagnement culturel, avec une approche accessible et claire.",
            why: "Ce projet de partiel m'a permis de travailler en conditions réelles sur un cycle complet : idée, cadrage, conception et présentation finale. Nous étions 3 étudiants répartis entre développement, UX/UI et design, avec une volonté commune de proposer une solution cohérente et utile.",
            highlights: [
                "Rôle principal sur le pôle informatique : réflexion globale et conception du fonctionnement de l'application.",
                "Définition des fonctionnalités clés, structuration des besoins techniques et participation active à la rédaction du cahier des charges.",
                "Cadrage du projet dans le cahier des charges : besoins utilisateurs, contraintes techniques, estimation coûts/délais et critères de réussite."
            ],
            learnings: [
                "J'ai renforcé mes compétences en conception d'application et en structuration d'un projet numérique de A à Z.",
                "J'ai mieux compris l'importance d'un cahier des charges précis pour aligner technique, design et expérience utilisateur.",
                "J'ai développé mes capacités de communication et de coordination dans un travail d'équipe pluridisciplinaire."
            ],
            challenges: "Le temps très limité (1 semaine) a rendu l'organisation plus exigeante. Il a fallu prioriser rapidement, bien répartir les tâches entre les pôles et maintenir une cohérence globale entre technique, UX/UI et identité visuelle.",
            next: "Ce projet m'a donné une base solide pour aller plus loin : approfondir la gestion de projet, améliorer encore la formalisation des besoins et transformer ce type de concept en prototype plus avancé.",
            link: 'assets/welhome-cahier-des-charges.pdf',
            type: 'fichier'
        },
        {
            id: 'audit-linux',
            title: 'Audit de sécurité Linux',
            category: 'Cyber',
            image: 'linux.png',
            description: "Projet d'initiation au pentesting réalisé dans le cadre de ma formation en Bachelor Web et Multimédia. L'environnement reposait sur deux machines virtuelles sous VirtualBox : Kali Linux (attaque) et Metasploitable (cible vulnérable).",
            why: "L'objectif était de découvrir les bases de la cybersécurité offensive en situation pratique : comprendre le comportement d'un système exposé, identifier ses failles et analyser les risques associés à une configuration insuffisamment sécurisée.",
            highlights: [
                "Mise en place d'un laboratoire virtuel réaliste avec séparation claire entre machine d'attaque et machine cible.",
                "Réalisation des phases essentielles d'exploration : scan des ports ouverts, identification des services actifs et analyse des protocoles.",
                "Étude des vulnérabilités exploitables et réflexion sur les mesures de sécurisation adaptées au contexte observé."
            ],
            learnings: [
                "J'ai mieux compris la communication réseau entre machines et l'exposition d'un service sur un système Linux.",
                "J'ai découvert une première méthodologie d'analyse en cybersécurité offensive, du repérage à l'interprétation des risques.",
                "J'ai renforcé ma culture des bonnes pratiques de durcissement : fermeture des ports inutiles, limitation des accès et configuration plus robuste."
            ],
            challenges: "Le principal défi était de relier les résultats techniques bruts (ports, services, versions) à une analyse de risque claire et compréhensible. J'ai appris à prioriser l'information pour distinguer les failles réellement critiques des constats secondaires.",
            next: "Ce projet constitue une première immersion solide en pentesting. Je souhaite poursuivre avec des scénarios plus avancés, des analyses plus approfondies et une démarche de remédiation encore plus structurée.",
            link: 'assets/audit-linux.pdf',
            type: 'fichier'
        },
        {
            id: 'dvwa',
            title: "Test d\'intrusion DVWA",
            category: 'Cyber',
            image: 'cyber2.png',
            description: "Exploitation contrôlée DVWA : XSS, SQLi, directory traversal et rapport de mitigation.",
            why: "J'ai travaillé sur DVWA pour pratiquer un test d'intrusion dans un environnement maîtrisé. Le but était de comprendre en profondeur le cycle attaque-détection-correction et d'améliorer ma capacité à expliquer les risques de manière pédagogique.",
            highlights: [
                "Simulation d'attaques web courantes dans un cadre de laboratoire sécurisé.",
                "Documentation des étapes d'exploitation pour rendre les scénarios reproductibles.",
                "Proposition de contre-mesures concrètes côté code, configuration et supervision."
            ],
            learnings: [
                "J'ai consolidé mes bases en XSS, SQLi et contrôle des entrées utilisateur.",
                "J'ai appris à mieux interpréter le comportement applicatif et les réponses serveur.",
                "J'ai progressé dans la rédaction de recommandations orientées développeur et administrateur."
            ],
            challenges: "Le défi principal était d'éviter une approche trop théorique. J'ai donc systématisé les preuves de concept, la validation des protections et la comparaison entre différents niveaux de sécurité de DVWA.",
            next: "La suite logique est d'étendre ce travail à des applications plus proches d'un contexte réel, avec un reporting plus détaillé sur la chaîne complète de remédiation.",
            link: 'assets/dvwa-pentest.pdf',
            type: 'fichier'
        },
        {
            id: 'lan',
            title: 'Simulateur de réseau LAN',
            category: 'Réseaux',
            image: 'assets/cisco-lan.jpg',
            description: "Projet réseau réalisé dans le cadre de ma formation, avec pour objectif de concevoir et simuler un réseau local (LAN) pour une petite entreprise, en combinant communication efficace et organisation sécurisée.",
            why: "L'objectif principal était de construire une infrastructure capable de faire communiquer plusieurs postes tout en structurant le réseau de façon logique. Ce projet m'a permis de me rapprocher d'un cas d'usage professionnel concret en administration réseau.",
            highlights: [
                "Utilisation d'équipements réseau (routeurs, switch, serveurs) pour reproduire une architecture d'entreprise.",
                "Configuration de la communication entre les machines d'un même réseau puis mise en place d'une segmentation par réseaux virtuels.",
                "Organisation des échanges entre services pour mieux contrôler les flux et limiter certaines communications pour des raisons de sécurité."
            ],
            learnings: [
                "J'ai développé mes compétences en adressage IP et en configuration de switches et de routeurs.",
                "J'ai renforcé ma compréhension de la segmentation réseau et de son intérêt pour la sécurité.",
                "J'ai mieux compris comment structurer un réseau selon les besoins d'une organisation, en intégrant gestion des flux et bonnes pratiques de base."
            ],
            challenges: "Le principal défi était d'obtenir une architecture à la fois claire, fonctionnelle et sécurisée. Il fallait équilibrer simplicité de communication entre postes et séparation logique des services pour éviter un réseau trop permissif.",
            next: "Cette expérience représente une première étape solide dans ma montée en compétences en administration réseau. Je souhaite poursuivre avec des scénarios plus avancés pour approfondir la conception d'infrastructures professionnelles.",
            link: 'assets/cisco-lan.pdf',
            type: 'fichier'
        },
        {
            id: 'maquette-reseau',
            title: 'Maquette infrastructure réseau',
            category: 'Réseaux',
            image: 'https://via.placeholder.com/700x400?text=Maquette+Reseau',
            description: "Documentation du déploiement d\'un réseau d\'entreprise avec VLAN, BGP et sécurité.",
            why: "Ce projet répondait au besoin de formaliser une infrastructure réseau complète avant implémentation. Je voulais démontrer ma capacité à passer de l'idée à un plan d'exécution détaillé, lisible et exploitable.",
            highlights: [
                "Production d'une documentation technique structurée avec schémas et plan d'adressage.",
                "Intégration des enjeux de routage externe (BGP) et de sécurisation des accès.",
                "Définition de procédures de mise en production et de vérification."
            ],
            learnings: [
                "J'ai amélioré ma qualité de documentation et ma clarté dans l'expression technique.",
                "J'ai renforcé mes bases sur l'articulation entre architecture interne et connectivité opérateur.",
                "J'ai appris à anticiper les points critiques en phase de déploiement."
            ],
            challenges: "Le principal défi était de garder un document à la fois précis pour les techniciens et compréhensible pour un lecteur non spécialiste. J'ai travaillé la structure et la hiérarchisation des informations.",
            next: "Je prévois d'ajouter des scénarios de migration et des procédures de retour arrière pour rendre la maquette encore plus opérationnelle.",
            link: 'assets/maquette-reseau.pdf',
            type: 'fichier'
        },
        {
            id: 'wan',
            title: 'Plan de redondance WAN',
            category: 'Réseaux',
            image: 'https://via.placeholder.com/700x400?text=WAN+Redondance',
            description: 'Design de redondance MPLS/SD-WAN + monitoring avec SNMP/NetFlow.',
            why: "J'ai conçu ce projet pour traiter une problématique critique : la continuité de service en cas de panne opérateur ou saturation de liens. L'objectif était d'assurer une connectivité stable et mesurable.",
            highlights: [
                "Conception d'un modèle de redondance multi-liens avec mécanismes de basculement.",
                "Prise en compte de la supervision pour détecter rapidement toute dégradation.",
                "Définition de tests de validation pour vérifier le comportement en situation de panne."
            ],
            learnings: [
                "J'ai appris à raisonner en termes de résilience plutôt que de simple connectivité.",
                "J'ai renforcé mes compétences sur le suivi des performances réseau via des métriques exploitables.",
                "J'ai progressé dans la mise en place de scénarios de test orientés disponibilité."
            ],
            challenges: "Le défi était de concilier robustesse technique et lisibilité du plan d'exploitation. J'ai simplifié les procédures de test et clarifié les conditions de bascule pour éviter toute ambiguïté.",
            next: "Je souhaite intégrer une stratégie de capacité plus prédictive et des tableaux de bord de disponibilité sur plusieurs périodes.",
            link: 'assets/wan-redondance.pdf',
            type: 'fichier'
        },
        {
            id: 'convertisseur-unites',
            title: 'Convertisseur de monnaie',
            category: 'Dev',
            image: 'convertisseur.png',
            description: "Application frontend développée en React JS pour convertir des montants entre différentes devises, avec une interface simple et rapide à utiliser.",
            why: "J'ai réalisé ce projet pour renforcer mes compétences en React JS sur un cas concret : manipuler des données numériques, gérer des formulaires et offrir une expérience utilisateur fluide sur une fonctionnalité utile au quotidien.",
            highlights: [
                "Développement d'une interface React JS claire avec saisie instantanée et affichage immédiat du résultat.",
                "Mise en place d'une logique de conversion centralisée pour assurer des calculs cohérents entre plusieurs devises.",
                "Validation des entrées utilisateur pour limiter les erreurs et fiabiliser les résultats affichés."
            ],
            learnings: [
                "J'ai progressé en React JS, notamment sur l'organisation des composants et la gestion d'état.",
                "J'ai amélioré ma gestion des calculs numériques (arrondis, précision, cas limites).",
                "J'ai renforcé ma capacité à concevoir une interface efficace à partir d'un besoin fonctionnel simple."
            ],
            challenges: "Le principal défi était d'assurer la précision des conversions tout en gardant une expérience utilisateur fluide. J'ai structuré la logique de calcul et ajouté des contrôles pour éviter les incohérences de saisie.",
            next: "Je souhaite enrichir le projet avec plus de devises, un historique des conversions et des préférences utilisateur pour personnaliser l'affichage.",
            link: 'https://example.com/dev4',
            type: 'lien'
        },
        {
            id: 'dashboard-analytics',
            title: 'Dashboard Analytics',
            category: 'Dev',
            image: 'gamejam.png',
            description: "Tableau de bord développé en React JS pour afficher des KPI métier, des graphiques et des filtres dynamiques afin de faciliter l'analyse des données.",
            why: "Ce projet avait pour objectif de transformer des données brutes en informations utiles à la décision. Il m'a permis de travailler la visualisation, la lisibilité des indicateurs et la structuration d'une interface d'analyse moderne en React JS.",
            highlights: [
                "Conception d'une interface React JS orientée KPI avec hiérarchisation des données les plus importantes.",
                "Intégration de graphiques et de filtres pour explorer les données de manière rapide et intuitive.",
                "Structuration du dashboard pour offrir une lecture claire selon différents besoins métier."
            ],
            learnings: [
                "J'ai progressé sur la sélection d'indicateurs pertinents selon le contexte d'analyse.",
                "J'ai renforcé mes compétences en visualisation de données et en design d'interface orienté lisibilité.",
                "J'ai amélioré ma maîtrise de React JS dans un projet frontend structuré par composants."
            ],
            challenges: "Le défi principal était de trouver le bon équilibre entre quantité d'informations et clarté d'affichage. J'ai retravaillé la hiérarchie visuelle pour garder une lecture rapide sans perdre en profondeur d'analyse.",
            next: "Je souhaite ajouter des comparaisons temporelles avancées, davantage de personnalisation et des options d'export pour les vues analytiques.",
            link: 'https://example.com/dev5',
            type: 'lien'
        },
        {
            id: 'dashboard-monitoring',
            title: 'Dashboard Monitoring',
            category: 'Dev',
            image: 'dashbord.png',
            description: 'Supervision de performances, alertes et état services.',
            why: "J'ai construit ce projet pour me rapprocher des usages opérationnels réels : suivre un système, détecter une anomalie rapidement et aider à la prise de décision en incident. Il complète naturellement mon intérêt pour les réseaux et la cybersécurité.",
            highlights: [
                "Affichage des indicateurs de disponibilité et de performance dans une vue centralisée.",
                "Mise en avant des alertes pour faciliter la réaction en cas de dégradation.",
                "Approche orientée exploitation avec lecture rapide de l'état global des services."
            ],
            learnings: [
                "J'ai appris à prioriser les métriques réellement utiles pour l'exploitation.",
                "J'ai renforcé ma compréhension des enjeux de supervision continue.",
                "J'ai progressé sur la conception d'interfaces destinées à des contextes critiques."
            ],
            challenges: "Le point sensible était d'éviter un tableau de bord trop chargé. J'ai simplifié l'affichage et défini des niveaux de priorité pour rendre l'information plus exploitable.",
            next: "Je veux intégrer des historiques plus détaillés, des seuils dynamiques et des notifications mieux contextualisées.",
            link: 'https://example.com/dev6',
            type: 'lien'
        }
    ];

    function getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    const projectId = getQueryParam('id');
    const project = projects.find(p => p.id === projectId);

    const titleEl = document.getElementById('project-title');
    const categoryEl = document.getElementById('project-category');
    const imageEl = document.getElementById('project-image');
    const descEl = document.getElementById('project-description');
    const whyEl = document.getElementById('project-why');
    const highlightsEl = document.getElementById('project-highlights');
    const learningsEl = document.getElementById('project-learnings');
    const challengesEl = document.getElementById('project-challenges');
    const nextEl = document.getElementById('project-next');
    const ctaEl = document.getElementById('project-cta');

    function renderList(container, items) {
        container.innerHTML = '';
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            container.appendChild(li);
        });
    }

    if (!project) {
        titleEl.textContent = 'Projet introuvable';
        categoryEl.textContent = 'Erreur: ce projet n’existe pas ou l’ID est incorrect.';
        descEl.textContent = '';
        return;
    }

    titleEl.textContent = project.title;
    categoryEl.textContent = 'Catégorie : ' + project.category;
    imageEl.src = project.image;
    imageEl.alt = 'Image du projet ' + project.title;
    descEl.textContent = project.description;
    whyEl.textContent = project.why;
    renderList(highlightsEl, project.highlights);
    renderList(learningsEl, project.learnings);
    challengesEl.textContent = project.challenges;
    nextEl.textContent = project.next;

    const openDetail = document.createElement('a');
    openDetail.className = 'project-link details';
    openDetail.href = project.link;
    openDetail.textContent = project.type === 'fichier' ? 'Télécharger / Ouvrir ressource' : 'Voir ressource';
    openDetail.target = '_blank';
    openDetail.rel = 'noopener noreferrer';

    ctaEl.appendChild(openDetail);
});