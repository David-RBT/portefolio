document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            id: 'welhome',
            title: 'Cahier des charges cybersécurité',
            description: 'Analyse cybersécurité des salles de sport : protection des données adhérents, sensibilisation des équipes et sécurisation de l’infrastructure.',
            category: 'cyber',
            image: 'cdc.png',
            link: 'cahier_des_charges_cybersecurite_fightness.pdf',
            type: 'fichier',
            details: 'Projet de cadrage cyber appliqué aux salles de fitness, avec plan d’actions organisationnel et technique.'
        },
        {
            id: 'audit-linux',
            title: 'Audit de sécurité Linux',
            description: 'Rapport d\'audit avec scans Nmap, OpenVAS et recommandations de durcissement.',
            category: 'cyber',
            image: 'linux.png',
            link: 'David-TP_Cyberscurit.pdf',
            type: 'fichier',
            details: 'Audit de sécurité Linux sur un environnement serveur.'
        },
        {
            id: 'dvwa',
            title: 'Test d\'intrusion DVWA',
            description: 'Exploitation contrôlée de DVWA : XSS, SQLi et directory traversal.',
            category: 'cyber',
            image: 'cyber2.png',
            link: 'TP2-cyber.pdf',
            type: 'fichier',
            details: 'Mise en place de DVWA avec scénarios pratiques.'
        },
        {
            id: 'lan',
            title: 'Simulateur de réseau LAN',
            description: 'Projet Cisco Packet Tracer : architecture 3 VLAN, routage inter-VLAN.',
            category: 'reseaux',
            image: 'assets/cisco-lan.jpg',
            link: 'Projet_cisco_1.pdf',
            type: 'fichier',
            details: 'Architecture complète avec 3 VLAN et routeurs Cisco.'
        },
        {
            id: 'maquette-reseau',
            title: 'DMZ',
            description: 'Projet réseau autour d\'une DMZ pour comprendre comment construire une architecture plus sécurisée.',
            category: 'reseaux',
            image: 'dmz.png',
            link: 'DMZ_Projet_Reseau.pdf',
            type: 'fichier',
            details: 'Maquette réseau avec DMZ et segmentation des flux.'
        },
        {
            id: 'wan',
            title: 'Administration et réseaux',
            description: 'Projet Ubuntu en 6 TP : terminal Linux, exploration système, droits/processus, script Bash, service réseau, supervision et sauvegarde.',
            category: 'reseaux',
            image: 'ubuntu.png',
            link: 'linux-tp.pdf',
            type: 'fichier',
            details: 'Parcours complet d\'administration Linux d\'un mini-serveur, de la ligne de commande à la maintenance.'
        },
        {
            id: 'convertisseur-unites',
            title: 'Convertisseur d\'unités',
            description: 'Application frontend React pour la conversion d\'unités (longueur, poids, températures).',
            category: 'dev',
            image: 'convertisseur.png',
            link: 'https://money-five-taupe.vercel.app/',
            type: 'lien',
            details: 'Interface moderne permettant de convertir rapidement entre plusieurs systèmes d\'unités.'
        },
        {
            id: 'dashboard-analytics',
            title: 'X-Trem Climate',
            description: 'Tableau de bord interactif affichant des KPI, des graphiques et des alertes en temps réel.',
            category: 'dev',
            image: 'gamejam.png',
            link: 'https://alexandre74739.itch.io/x-trem-climate',
            type: 'lien',
            details: 'Dashboard avec graphiques, filtres en temps réel et exploration détaillée des données.'
        },
        {
            id: 'dashboard-monitoring',
            title: 'Dashboard Monitoring',
            description: 'Dashboard d\'état des services pour la supervision de l\'uptime, de la latence et de la charge.',
            category: 'dev',
            image: 'dashbord.png',
            link: 'https://dashbord-two-red.vercel.app/',
            type: 'lien',
            details: 'Interface de supervision des indicateurs d\'infrastructure et des alertes proactives.'
        }
    ];

    const grid = document.getElementById('projects-grid');

    function getCategoryLabel(category) {
        const labels = { dev: 'Dev', reseaux: 'Réseaux', cyber: 'Cyber' };
        return labels[category] || 'Autre';
    }

    function renderProjects() {
        grid.innerHTML = '';
        const shown = projects;

        if (shown.length === 0) {
            grid.innerHTML = '<p class="no-projects">Aucun projet disponible pour cette catégorie.</p>';
            return;
        }

        shown.forEach(p => {
            const card = document.createElement('article');
            card.className = 'project-card';

            const img = document.createElement('img');
            img.src = p.image;
            img.alt = 'Image du projet ' + p.title;
            img.className = 'project-image';
            card.appendChild(img);

            const badge = document.createElement('span');
            badge.className = 'project-category-badge ' + p.category;
            badge.textContent = getCategoryLabel(p.category);
            card.appendChild(badge);

            const title = document.createElement('h3');
            title.textContent = p.title;
            card.appendChild(title);

            const actionGroup = document.createElement('div');
            actionGroup.className = 'project-actions';

            const details = document.createElement('a');
            details.className = 'project-link details';
            details.href = 'project.html?id=' + encodeURIComponent(p.id);
            details.textContent = 'Voir le projet';
            details.target = '_self';
            actionGroup.appendChild(details);

            card.appendChild(actionGroup);
            grid.appendChild(card);
        });
    }

    renderProjects();
});
