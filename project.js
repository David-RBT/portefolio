document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            id: 'welhome',
            title: 'Cahier des charges cybersécurité',
            category: 'Cyber',
            image: 'cdc.png',
            description: "Ce projet est un cahier des charges cybersécurité orienté salles de sport, avec un cas central autour de Fightness. L'objectif est de protéger les données sensibles des adhérents (identité, paiements, santé) tout en renforçant les pratiques des équipes et la robustesse des infrastructures.",
            why: "Choisir ce sujet n'a pas été simple : je voulais sortir d'un projet purement code pour faire un vrai travail d'analyse. J'ai voulu relier mon projet professionnel en cybersécurité à un univers qui me motive, le sport, et plus précisément la musculation. Ce choix me permet de traiter une problématique réelle qui touche de nombreuses salles de fitness confrontées aux mêmes risques.",
            highlights: [
                "Définition d'une séparation réseau claire entre Wi-Fi invité et réseau interne (segmentation/VLAN) pour empêcher qu'un incident côté visiteurs compromette les systèmes métiers.",
                "Formalisation des besoins fonctionnels : classification des données sensibles, politiques de sécurité, gestion des accès (IAM/MFA), sauvegardes chiffrées et supervision des activités.",
                "Traduction des besoins en mesures techniques : pare-feu, chiffrement des données en transit et au repos, gestion des correctifs, protection des API et sauvegardes redondantes.",
                "Intégration d'une analyse des risques structurée (référence EBIOS / ISO 27005) avec menaces typiques : phishing, ransomware, vol interne, mauvaise configuration et IoT vulnérable.",
                "Structuration d'un plan opérationnel complet : organisation du projet, plan de formation, communication, planning prévisionnel, budget et critères de réussite."
            ],
            learnings: [
                "J'ai renforcé ma capacité à analyser une problématique cyber métier avant de proposer des solutions techniques.",
                "J'ai progressé sur la rédaction d'un cahier des charges structuré, avec des objectifs mesurables et des priorités claires.",
                "J'ai consolidé ma compréhension du lien entre facteurs humains (sensibilisation) et sécurité technique (architecture, contrôle d'accès, supervision).",
                "J'ai appris à formuler un plan de sécurité compréhensible pour des profils différents : employés, responsables IT et direction."
            ],
            challenges: "Le principal défi était de transformer un sujet large en plan d'action concret. Il fallait relier les risques réels du terrain (erreur humaine, exposition réseau, failles applicatives) à des mesures adaptées, réalistes et priorisées pour une salle de sport.",
            process: "J'ai suivi une démarche progressive : définition du contexte, identification des menaces, formulation des objectifs côté employés et côté IT, puis rédaction des besoins fonctionnels et techniques. J'ai ensuite structuré la partie gouvernance (organisation, formation, communication, planning, budget, réussite) pour obtenir un document exploitable comme guide opérationnel.",
            next: "La suite est d'en faire une version encore plus opérationnelle, avec matrice de risques détaillée, échéancier par lot, indicateurs de suivi et scénarios de test pour valider l'efficacité des mesures dans le temps.",
            link: 'cahier_des_charges_cybersecurite_fightness.pdf',
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
            process: "Le procédé a commencé par la mise en place du lab virtuel, puis une phase d'observation et de tests progressifs. J'ai ensuite structuré les résultats et les recommandations en m'appuyant sur des supports techniques (articles spécialisés et tutoriels vidéo) pour valider les bonnes pratiques.",
            next: "Ce projet constitue une première immersion solide en pentesting. Je souhaite poursuivre avec des scénarios plus avancés, des analyses plus approfondies et une démarche de remédiation encore plus structurée.",
            link: 'David-TP_Cyberscurit.pdf',
            type: 'fichier'
        },
        {
            id: 'dvwa',
            title: "Test d'intrusion DVWA",
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
            process: "J'ai suivi un procédé clair : préparation de l'environnement, exécution des scénarios d'attaque, vérification des impacts, puis rédaction d'un plan de mitigation. J'ai complété ce travail avec de la veille sur des sites techniques et des vidéos pédagogiques.",
            next: "La suite logique est d'étendre ce travail à des applications plus proches d'un contexte réel, avec un reporting plus détaillé sur la chaîne complète de remédiation.",
            link: 'TP2-cyber.pdf',
            type: 'fichier'
        },
        {
            id: 'lan',
            title: 'Simulateur de réseau LAN',
            category: 'Réseaux',
            image: 'assets/cisco-lan.jpg',
            description: "Projet réseau réalisé pour concevoir et simuler un réseau local (LAN) pour une petite entreprise, en combinant communication efficace et organisation sécurisée.",
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
            process: "Pour terminer ce projet, j'ai suivi un procédé progressif : plan d'adressage, configuration des équipements, tests de connectivité puis ajustements de segmentation. Je me suis appuyé sur la documentation technique et des ressources vidéo pour valider chaque étape.",
            next: "Cette expérience représente une première étape solide dans ma montée en compétences en administration réseau. Je souhaite poursuivre avec des scénarios plus avancés pour approfondir la conception d'infrastructures professionnelles.",
            link: 'Projet_cisco_1.pdf',
            type: 'fichier'
        },
        {
            id: 'maquette-reseau',
            title: 'DMZ',
            category: 'Réseaux',
            image: 'dmz.png',
            description: "Dans ce projet réseau, j'ai voulu recréer un réseau plus sécurisé en reproduisant une DMZ. C'est un procédé assez complexe, mais il m'a permis de mieux comprendre le niveau de sécurité qu'une telle architecture peut apporter.",
            why: "Je voulais comprendre concrètement comment isoler les services exposés tout en protégeant davantage le réseau interne. Ce projet m'a permis de voir l'intérêt réel d'une DMZ dans une architecture réseau plus professionnelle.",
            highlights: [
                "Mise en place d'une architecture réseau avec séparation entre réseau interne et zone exposée.",
                "Réflexion sur les flux autorisés entre les différentes parties du réseau pour limiter les risques.",
                "Travail sur une logique de segmentation orientée sécurité et organisation des accès."
            ],
            learnings: [
                "J'ai mieux compris le rôle d'une DMZ dans la sécurisation d'une infrastructure réseau.",
                "J'ai renforcé mes bases en segmentation réseau et en contrôle des communications entre zones.",
                "J'ai appris à construire une architecture plus sécurisée tout en gardant un fonctionnement cohérent."
            ],
            challenges: "Le plus difficile était de reproduire quelque chose de plus sécurisé sans rendre l'ensemble trop complexe à configurer. Il fallait bien penser les échanges entre les zones et éviter de créer des accès inutiles.",
            process: "Pour arriver au résultat final, je suis passé par plusieurs étapes : recherches sur des sites comme IT-Connect, visionnage de vidéos pour mieux comprendre certains points, puis essais successifs sur la maquette. J'ai avancé progressivement en travaillant le plan du réseau, la séparation des zones, la place de la DMZ et la logique des flux jusqu'à obtenir un résultat plus clair et plus sécurisé.",
            next: "Je souhaite aller plus loin en ajoutant davantage de règles de sécurité, plus de tests de communication entre zones et d'autres scénarios proches d'un contexte réel.",
            link: 'DMZ_Projet_Reseau.pdf',
            type: 'fichier'
        },
        {
            id: 'wan',
            title: 'Administration et réseaux',
            category: 'Réseaux',
            image: 'ubuntu.png',
            description: "Projet Ubuntu structuré en 6 TP progressifs : prise en main du terminal, exploration système, gestion des utilisateurs et droits, scripting Bash, services réseau, supervision et sauvegarde d'un mini-serveur Linux.",
            why: "Ce projet avait pour objectif de construire des bases solides en administration système Linux avec une approche pratique. En suivant les TP dans l'ordre, j'ai appris à passer d'une simple utilisation du terminal à la gestion complète d'un mini-serveur prêt à être exploité et maintenu.",
            highlights: [
                "TP1 - Premiers pas dans le terminal Linux : navigation, manipulation de fichiers/répertoires, commandes de base et bonnes pratiques en ligne de commande.",
                "TP2 - Exploration du système Linux : lecture de l'arborescence, identification des dossiers clés (/etc, /var, /home...), inspection des informations système et compréhension de l'organisation globale.",
                "TP3 - Gestion des utilisateurs, droits et processus : création de comptes, attribution de groupes, gestion des permissions (chmod/chown) et suivi/contrôle des processus actifs.",
                "TP4 - Script utile pour le système : automatisation de tâches répétitives avec Bash (contrôles, affichage d'informations utiles, exécution séquencée de commandes).",
                "TP5 - Mise en place et diagnostic d'un service réseau : déploiement d'un service, vérification de son état, tests d'accès et diagnostic en cas d'anomalie.",
                "TP6 - Supervision et sauvegarde du mini-serveur : suivi des ressources, vérification de l'état des services, et mise en place d'une routine de sauvegarde pour sécuriser les données."
            ],
            learnings: [
                "J'ai consolidé une vraie méthodologie d'administration Linux, du diagnostic local à la maintenance continue.",
                "J'ai progressé sur la sécurité opérationnelle : gestion des droits, séparation des rôles utilisateurs et contrôle des services.",
                "J'ai renforcé ma capacité à automatiser des tâches avec des scripts Bash pour gagner du temps et limiter les erreurs manuelles.",
                "J'ai appris à superviser et sauvegarder un serveur de façon régulière pour améliorer la fiabilité et la continuité de service."
            ],
            challenges: "Le principal défi était de relier chaque compétence (commandes, droits, scripts, services, supervision) dans une logique d'exploitation réelle. J'ai dû être rigoureux sur la configuration, la vérification des droits et l'analyse des erreurs pour garder un système stable.",
            process: "J'ai suivi un procédé progressif en 6 étapes : prise en main du terminal, exploration du système, administration des utilisateurs/droits/processus, automatisation via script Bash, déploiement/diagnostic d'un service réseau, puis supervision et sauvegarde du mini-serveur. Chaque TP a été validé par des tests pratiques pour confirmer le bon fonctionnement avant de passer au suivant.",
            next: "Je souhaite aller plus loin avec des services supplémentaires, des scripts d'automatisation plus avancés, et une stratégie de supervision/sauvegarde encore plus complète pour me rapprocher d'un environnement professionnel.",
            link: 'linux-tp.pdf',
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
            process: "Pour finaliser ce projet, j'ai suivi un procédé progressif : conception de l'interface, implémentation de la logique métier, tests des cas limites puis améliorations UX. J'ai utilisé des tutoriels et de la documentation pour fiabiliser la gestion des conversions.",
            next: "Je souhaite enrichir le projet avec plus de devises, un historique des conversions et des préférences utilisateur pour personnaliser l'affichage.",
            link: 'https://money-five-taupe.vercel.app/',
            type: 'lien'
        },
        {
            id: 'dashboard-analytics',
            title: 'X-Trem Climate',
            category: 'Dev',
            image: 'gamejam.png',
            description: "X-Trem Climate est un jeu d'action-aventure développé avec Godot et pensé pour être jouable à la fois sur PC et sur mobile. L'univers se déroule après une catastrophe climatique : le joueur incarne un survivant qui affronte des mutants nés du chaos, notamment des ennemis de feu et de glace.",
            why: "Nous avons choisi ce projet pour créer une expérience interactive autour d'un sujet actuel : le climat. L'objectif était de raconter une histoire forte tout en construisant un gameplay dynamique, dans un format court de type game jam.",
            highlights: [
                "Développement du jeu à trois, avec une répartition claire des rôles entre gameplay, design/visuels et intégration technique.",
                "Création d'un univers post-catastrophe cohérent, avec une direction artistique centrée sur l'opposition feu/glace.",
                "Mise en place des mécaniques principales : déplacements, combat et gestion des ennemis mutants.",
                "Adaptation du projet pour une disponibilité sur deux supports, mobile et PC."
            ],
            learnings: [
                "J'ai renforcé mon travail en équipe sur un projet court avec des contraintes de temps fortes.",
                "J'ai progressé sur Godot, notamment sur l'organisation d'un projet de jeu et l'itération rapide sur le gameplay.",
                "J'ai appris à mieux équilibrer narration, ambiance visuelle et sensations de jeu."
            ],
            challenges: "Le principal défi était de livrer un jeu complet en une semaine. Il a fallu prioriser les fonctionnalités essentielles, garder une bonne communication d'équipe et stabiliser le jeu rapidement pour qu'il reste fluide sur les deux plateformes.",
            process: "Nous avons commencé par définir le concept et l'ambiance générale, puis nous avons construit un prototype jouable dès les premiers jours. Ensuite, nous avons enchaîné les itérations courtes : ajout des mécaniques de combat, réglage de la difficulté, intégration visuelle et tests réguliers jusqu'à la version finale.",
            next: "Les prochaines améliorations envisagées sont d'ajouter du contenu (niveaux, ennemis, compétences), d'affiner l'équilibrage et d'améliorer encore l'ergonomie mobile pour une expérience plus confortable.",
            link: 'https://alexandre74739.itch.io/x-trem-climate',
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
            process: "J'ai appliqué un procédé orienté exploitation : identification des métriques critiques, maquettage de l'écran, implémentation puis tests de lecture rapide en situation d'alerte. Comme pour d'autres projets, j'ai complété avec des recherches et des vidéos pour affiner l'approche.",
            next: "Je veux intégrer des historiques plus détaillés, des seuils dynamiques et des notifications mieux contextualisées.",
            link: 'https://dashbord-two-red.vercel.app/',
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
    const processEl = document.getElementById('project-process');
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
        categoryEl.textContent = 'Erreur : ce projet n’existe pas ou l’ID est incorrect.';
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
    processEl.textContent = project.process || '';
    nextEl.textContent = project.next;

    const openDetail = document.createElement('a');
    const hasLink = project.link && project.link.trim() !== '';

    openDetail.className = 'project-link details' + (hasLink ? '' : ' is-disabled');
    openDetail.href = hasLink ? project.link : '#';
    openDetail.textContent = project.type === 'fichier' ? 'Voir / Découvrir' : 'Voir ressource';

    if (hasLink) {
        openDetail.target = '_blank';
        openDetail.rel = 'noopener noreferrer';
    } else {
        openDetail.setAttribute('aria-disabled', 'true');
        openDetail.addEventListener('click', function (event) {
            event.preventDefault();
        });
    }

    ctaEl.appendChild(openDetail);
});
