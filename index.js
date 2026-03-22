document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            id: 'welhome',
            title: "Wel'home",
            description: "Entraide : aider les personnes en difficulté. Accompagnement : immersion culturelle. Transparence, accessibilité, échanges culturels et aide flexible.",
            category: 'cyber',
            image: 'Welc\'home.png',
            link: 'assets/welhome-cahier-des-charges.pdf',
            type: 'fichier',
            details: "Wel'home est un projet d'entraide et d'accueil interculturel."
        },
        {
            id: 'audit-linux',
            title: 'Audit de securite Linux',
            description: 'Rapport d\'audit avec scans Nmap, OpenVAS et recommandations de durcissement.',
            category: 'cyber',
            image: 'linux.png',
            link: 'assets/audit-linux.pdf',
            type: 'fichier',
            details: 'Audit de securite Linux sur un environnement serveur.'
        },
        {
            id: 'dvwa',
            title: 'Test d\'intrusion DVWA',
            description: 'Exploitation controlee DVWA : XSS, SQLi, directory traversal.',
            category: 'cyber',
            image: 'cyber2.png',
            link: 'assets/dvwa-pentest.pdf',
            type: 'fichier',
            details: 'Mise en place de DVWA avec scenarios pratiques.'
        },
        {
            id: 'lan',
            title: 'Simulateur de reseau LAN',
            description: 'Projet Cisco Packet Tracer : architecture 3 VLAN, routage inter-VLAN.',
            category: 'reseaux',
            image: 'assets/cisco-lan.jpg',
            link: 'assets/cisco-lan.pdf',
            type: 'fichier',
            details: 'Architecture complete avec 3 VLANs et routeurs Cisco.'
        },
        {
            id: 'maquette-reseau',
            title: 'Maquette infrastructure reseau',
            description: 'Documentation du deploiement d\'un reseau d\'entreprise avec VLAN, BGP et securite.',
            category: 'reseaux',
            image: 'https://via.placeholder.com/300x200?text=Maquette+Reseau',
            link: 'assets/maquette-reseau.pdf',
            type: 'fichier',
            details: 'Document technique de maquette reseau.'
        },
        {
            id: 'wan',
            title: 'Plan de redondance WAN',
            description: 'Design de redondance MPLS/SD-WAN + monitoring avec SNMP/NetFlow.',
            category: 'reseaux',
            image: 'https://via.placeholder.com/300x200?text=WAN+Redondance',
            link: 'assets/wan-redondance.pdf',
            type: 'fichier',
            details: 'Plan de resilience WAN multi-fournisseurs.'
        },
        {
            id: 'convertisseur-unites',
            title: 'Convertisseur d\'unites',
            description: 'Tool frontend React/Vue pour conversion d\'unites (longueur, poids, temperatures).',
            category: 'dev',
            image: 'convertisseur.png',
            link: 'https://example.com/dev4',
            type: 'lien',
            details: 'Interface moderne permettant de convertir rapidement entre plusieurs systemes d\'unites.'
        },
        {
            id: 'dashboard-analytics',
            title: 'Dashboard Analytics',
            description: 'Tableau de bord interactif affichant KPIs, graphiques et alertes temps reel.',
            category: 'dev',
            image: 'gamejam.png',
            link: 'https://example.com/dev5',
            type: 'lien',
            details: 'Application dashboard avec charts, filtres en temps reel et drill-down.'
        },
        {
            id: 'dashboard-monitoring',
            title: 'Dashboard Monitoring',
            description: 'Dashboard d\'etat de service pour supervision uptime, latence et charge.',
            category: 'dev',
            image: 'dashbord.png',
            link: 'https://example.com/dev6',
            type: 'lien',
            details: 'Interface de monitoring des indicateurs d\'infrastructure et alertes proactives.'
        }
    ];

    const grid = document.getElementById('projects-grid');

    function getCategoryLabel(category) {
        const labels = { dev: 'Dev', reseaux: 'Reseaux', cyber: 'Cyber' };
        return labels[category] || 'Autre';
    }

    function renderProjects() {
        grid.innerHTML = '';
        const shown = projects;

        if (shown.length === 0) {
            grid.innerHTML = '<p class="no-projects">Aucun projet disponible pour cette categorie.</p>';
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
