export const brand = {
  name: 'Nuno Amaro',
  badgeAria: 'Nuno Amaro — ingénieur des médias',
  city: 'SUISSE',
  email: 'nunoamarofaria@hotmail.com',
  established: 'INGÉNIEUR DES MÉDIAS',
};

export const nav = {
  menuLabel: 'menu',
  links: [
    { label: 'ACCUEIL', href: '#top' },
    { label: 'PROJETS', href: '#pcards' },
    { label: 'À PROPOS', href: '/about.html' },
    { label: 'CONTACT', href: '/contact.html' },
  ],
};

export const hero = {
  roleLines: ['INGÉNIEUR DES MÉDIAS', 'DESIGN · DÉVELOPPEMENT'],
  scrollLabel: 'DÉFILER',
  intro:
    'Étudiant en ingénierie des médias à la HEIG-VD, je conçois et développe des expériences digitales à la rencontre du design, de la technologie et des besoins des utilisateurs.',
  image: '/assets/img/Nuno_photo2.jpg',
  imageAlt: 'Portrait de Nuno Amaro',
};

export const productIndex = {
  columns: [
    { category: 'SPÉCIALITÉ', name: 'UX / UI', href: '#pcards' },
    { category: 'DÉVELOPPEMENT', name: 'Front-end', href: '#services' },
    { category: 'FORMATION', name: 'HEIG-VD', href: '/about.html' },
    { category: 'PORTFOLIO', name: '10 projets', href: '/work/index.html' },
  ],
};

export const productCards = [
  {
    index: '01',
    category: 'DATA VISUALIZATION · SCROLLYTELLING · 3D',
    name: 'F1 SAFETY',
    featured: true,
    filters: ['data'],
    image: '/assets/img/projets/f1/f1HeroSection.png',
    imageAlt: 'Projet interactif sur l’évolution de la sécurité en Formule 1',
    href: '/work/f1-data-visualization.html',
  },
  {
    index: '02',
    category: 'WEB APP · UX/UI · FRONT-END',
    name: 'CREWUP',
    featured: false,
    filters: ['web', 'uxui'],
    image: '/assets/img/projets/CrewUp/CrewUp_HeroSection.png',
    imageAlt: 'Interface de l’application CrewUp pour organiser des événements sportifs',
    href: '/work/crewup.html',
  },
  {
    index: '03',
    category: 'UX/UI · WEB · COLLABORATION RÉELLE',
    name: 'BLOOD DONATION — HUG',
    featured: true,
    filters: ['web', 'uxui'],
    image: '/assets/img/projets/HUG/HUG_HeroSection.png',
    imageAlt: 'Projet de don du sang réalisé avec les HUG',
    href: '/work/hug.html',
  },
  {
    index: '04',
    category: 'RECHERCHE UX · PRODUIT DIGITAL · INTER-COURS',
    name: 'ODDS',
    featured: false,
    filters: ['uxui'],
    image: '/assets/img/projets/ODDS/ODDS_HeroSection.png',
    imageAlt: 'Projet digital ODDS issu d’une recherche UX',
    href: '/work/odds.html',
  },
  {
    index: '05',
    category: 'PROJET CLIENT · DESIGN & DÉVELOPPEMENT WEB',
    name: 'LA CHAUX-DE-FONDS',
    featured: false,
    filters: ['web'],
    image: '/assets/img/projets/ChauxFonds/ChauxFonds.png',
    imageAlt: 'Site web de la ville de La Chaux-de-Fonds',
    href: '/work/la-chaux-de-fonds.html',
  },
  {
    index: '06',
    category: 'PRÉSENCE DIGITALE · UX/UI · REFONTE',
    name: 'ETOILE BLANCHE',
    featured: true,
    filters: ['web', 'uxui', 'communication'],
    image: '/assets/img/projets/EtoileBlanche/etoileBlanche.jpg',
    imageAlt: 'Projet de refonte digitale pour Etoile Blanche',
    href: '/work/etoile-blanche.html',
  },
  {
    index: '07',
    category: 'E-COMMERCE · WORDPRESS · WOOCOMMERCE',
    name: 'BOXBOXF1',
    featured: false,
    filters: ['web', 'communication'],
    image: '/assets/img/projets/BoxBoxF1/BoxBoxF1_HeroSection.png',
    imageAlt: 'Page d’accueil de la boutique suisse BoxBoxF1',
    href: '/work/boxboxf1.html',
  },
  {
    index: '08',
    category: 'AUDIOVISUEL · RÉALISATION & CADRAGE · COURT-MÉTRAGE',
    name: 'SAVOIR-VIVRE',
    featured: false,
    filters: ['communication'],
    image: '/assets/img/projets/SavoirVivre/Savoir_Vivre.png',
    imageAlt: 'Projet audiovisuel Savoir-Vivre',
    href: '/work/savoir-vivre.html',
  },
  {
    index: '09',
    category: 'UX/UI DESIGN · APPLICATION MOBILE · GAMIFICATION',
    name: 'NATURAQUEST',
    featured: false,
    filters: ['uxui'],
    image: '/assets/img/projets/NaturaQuest/NaturaQuest.png',
    imageAlt: 'Application mobile NaturaQuest',
    href: '/work/naturaquest.html',
  },
  {
    index: '10',
    category: 'UX/UI DESIGN · HEALTH TECH · IOT & DONNÉES',
    name: 'PETCARE',
    featured: false,
    filters: ['uxui', 'data'],
    image: '/assets/img/projets/PetCare/PetCare.png',
    imageAlt: 'Application de santé animale PetCare',
    href: '/work/petcare.html',
  },
];

export const services = {
  title: 'EXPERTISE',
  rows: [
    {
      index: '01',
      name: 'UX / UI Design',
      description:
        'Recherche utilisateur, parcours, wireframes et prototypes — de la compréhension du besoin à une interface claire et cohérente.',
    },
    {
      index: '02',
      name: 'Développement front-end',
      description:
        'HTML, CSS, JavaScript et Vue.js pour créer des interfaces responsives, accessibles et soignées.',
    },
    {
      index: '03',
      name: 'Médias & communication',
      description:
        'Une approche transversale du numérique : contenu, stratégie, image et expérience de bout en bout.',
    },
    {
      index: '04',
      name: 'Prototypage & outils',
      description:
        'Figma, Adobe Creative Suite, Git et méthodes de prototypage au service du travail en équipe.',
    },
  ],
};

export const footer = {
  ctaLines: ['UN PROJET ?', 'PARLONS-EN.'],
  contactLabel: 'CONTACT',
  menuTitle: 'NAVIGATION',
  socialTitle: 'RÉSEAUX',
  socials: [
    { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/amaro-nuno/' },
    { label: 'GITHUB', href: 'https://github.com/Pantufas17' },
  ],
  legal: ['© 2026 NUNO AMARO', 'CONÇU EN SUISSE', 'CV'],
  pillCta: 'ME CONTACTER',
};
