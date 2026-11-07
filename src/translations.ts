export type HomeLanguage = 'fr' | 'en' | 'pt';

type HomeCopy = {
  menu: [string, string, string, string];
  hero: {
    ariaLabel: string;
    roleLines: [string, string];
    scrollLabel: string;
    headlineLead: string;
    headlineTop: string;
    headlineBottom: string;
    floatingWords: string[];
    intro: string;
    imageAlt: string;
  };
  productIndex: {
    ariaLabel: string;
    columns: [[string, string], [string, string], [string, string], [string, string]];
  };
  products: {
    title: string;
    ariaLabel: string;
    interactionHint: string;
    filtersLabel: string;
    filters: {
      highlight: string;
      all: string;
      web: string;
      uxui: string;
      data: string;
      communication: string;
    };
    categories: string[];
    imageAlts: string[];
  };
  services: {
    title: string;
    ariaLabel: string;
    rows: [[string, string], [string, string], [string, string], [string, string]];
  };
  tools: {
    title: string;
    ariaLabel: string;
    items: string[];
  };
  footer: {
    ctaLines: [string, string];
    contactLabel: string;
    menuTitle: string;
    socialTitle: string;
    legal: [string, string, string];
    pillCta: string;
    contactAriaLabel: string;
  };
};

export const homeTranslations: Record<HomeLanguage, HomeCopy> = {
  fr: {
    menu: ['ACCUEIL', 'PROJETS', 'À PROPOS', 'CONTACT'],
    hero: {
      ariaLabel: 'Présentation de Nuno Amaro',
      roleLines: ['INGÉNIEUR DES MÉDIAS', 'DESIGN · DÉVELOPPEMENT'],
      scrollLabel: 'DÉFILER',
      headlineLead: 'Du',
      headlineTop: 'design',
      headlineBottom: 'au digital',
      floatingWords: ['Interfaces', 'Curiosité', 'Prototypage', 'Mouvement', 'Récit interactif', 'Nouvelles idées', 'Expérimentation', 'Design', 'Code', 'Données', 'Animation', 'Idées', 'Détails', 'Systèmes', 'Usages'],
      intro:
        'Étudiant en ingénierie des médias à la HEIG-VD, je conçois et développe des expériences digitales à la rencontre du design, de la technologie et des besoins des utilisateurs.',
      imageAlt: 'Silhouette de Nuno Amaro assis, vu de trois quarts arrière',
    },
    productIndex: {
      ariaLabel: 'Profil et spécialités',
      columns: [
        ['SPÉCIALITÉ', 'UX / UI'],
        ['DÉVELOPPEMENT', 'Front-end'],
        ['FORMATION', 'HEIG-VD'],
        ['DISPONIBILITÉ', 'Stage 2027'],
      ],
    },
    products: {
      title: 'PROJETS',
      ariaLabel: 'Projets sélectionnés',
      interactionHint: 'Faites défiler horizontalement ou balayez pour parcourir les projets. Utilisez les flèches gauche et droite au clavier.',
      filtersLabel: 'Filtrer les projets',
      filters: {
        highlight: 'Highlight',
        all: 'Tous',
        web: 'Développement web',
        uxui: 'UX/UI Design',
        data: 'Data & Visualisation',
        communication: 'Communication digitale',
      },
      categories: [
        'DATA VISUALIZATION · SCROLLYTELLING · 3D',
        'WEB APP · UX/UI · FRONT-END',
        'UX/UI · WEB · COLLABORATION RÉELLE',
        'RECHERCHE UX · PRODUIT DIGITAL · INTER-COURS',
        'PROJET CLIENT · DESIGN & DÉVELOPPEMENT WEB',
        'PRÉSENCE DIGITALE · UX/UI · REFONTE',
        'E-COMMERCE · WORDPRESS · WOOCOMMERCE',
        'AUDIOVISUEL · RÉALISATION & CADRAGE · COURT-MÉTRAGE',
        'UX/UI DESIGN · APPLICATION MOBILE · GAMIFICATION',
        'UX/UI DESIGN · HEALTH TECH · IOT & DONNÉES',
      ],
      imageAlts: [
        'Projet interactif sur l’évolution de la sécurité en Formule 1',
        'Interface de l’application CrewUp pour organiser des événements sportifs',
        'Projet de don du sang réalisé avec les HUG',
        'Projet digital ODDS issu d’une recherche UX',
        'Site web de la ville de La Chaux-de-Fonds',
        'Projet de refonte digitale pour Etoile Blanche',
        'Page d’accueil de la boutique suisse BoxBoxF1',
        'Projet audiovisuel Savoir-Vivre',
        'Application mobile NaturaQuest',
        'Application de santé animale PetCare',
      ],
    },
    services: {
      title: 'EXPERTISE',
      ariaLabel: 'Expertises',
      rows: [
        [
          'UX / UI Design',
          'Recherche utilisateur, parcours, wireframes et prototypes — de la compréhension du besoin à une interface claire et cohérente.',
        ],
        [
          'Développement front-end',
          'HTML, CSS, JavaScript et Vue.js pour créer des interfaces responsives, accessibles et soignées.',
        ],
        [
          'Médias & communication',
          'Une approche transversale du numérique : contenu, stratégie, image et expérience de bout en bout.',
        ],
        [
          'Prototypage & outils',
          'Figma, Adobe Creative Suite, Git et méthodes de prototypage au service du travail en équipe.',
        ],
      ],
    },
    tools: {
      title: 'MES OUTILS',
      ariaLabel: 'Outils utilisés',
      items: [
        'HTML5',
        'CSS',
        'JavaScript',
        'PHP',
        'React.js',
        'Vue.js',
        'Node.js',
        'Tailwind CSS',
        'Laravel',
        'Figma',
        'FigJam',
        'Miro',
        'Wireframing',
        'Prototypage interactif',
        'Design System',
        'Responsive Design',
        'Suite Adobe',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere Pro',
        'MySQL',
        'PostgreSQL',
        'Visual Studio Code',
        'Git',
        'GitHub',
        'Docker',
        'Postman',
        'WordPress',
        'Google Analytics 4',
        'SEO',
        'Google Tag Manager',
        'Notion',
        'Jira',
        'Midjourney',
      ],
    },
    footer: {
      ctaLines: ['UN PROJET ?', 'PARLONS-EN.'],
      contactLabel: 'CONTACT',
      menuTitle: 'NAVIGATION',
      socialTitle: 'RÉSEAUX',
      legal: ['© 2026 Nuno Amaro. Tous droits réservés.', '', 'CV'],
      pillCta: 'ME CONTACTER',
      contactAriaLabel: 'Contacter Nuno Amaro',
    },
  },
  en: {
    menu: ['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'],
    hero: {
      ariaLabel: 'Introducing Nuno Amaro',
      roleLines: ['MEDIA ENGINEER', 'DESIGN · DEVELOPMENT'],
      scrollLabel: 'SCROLL DOWN',
      headlineLead: 'From',
      headlineTop: 'design',
      headlineBottom: 'to digital',
      floatingWords: ['Interfaces', 'Curiosity', 'Prototyping', 'Motion', 'Interactive stories', 'Fresh ideas', 'Experimentation', 'Design', 'Code', 'Data', 'Animation', 'Ideas', 'Details', 'Systems', 'Uses'],
      intro:
        'Media Engineering student at HEIG-VD, designing and building digital experiences where design, technology and people’s needs meet.',
      imageAlt: 'Silhouette of Nuno Amaro seated, seen from behind at an angle',
    },
    productIndex: {
      ariaLabel: 'Profile and specialties',
      columns: [
        ['SPECIALTY', 'UX / UI'],
        ['DEVELOPMENT', 'Front-end'],
        ['EDUCATION', 'HEIG-VD'],
        ['AVAILABILITY', 'Internship 2027'],
      ],
    },
    products: {
      title: 'PROJECTS',
      ariaLabel: 'Selected projects',
      interactionHint: 'Scroll horizontally or swipe to browse projects. Use the left and right arrow keys on your keyboard.',
      filtersLabel: 'Filter projects',
      filters: {
        highlight: 'Highlights',
        all: 'All',
        web: 'Web Development',
        uxui: 'UX/UI Design',
        data: 'Data & Visualization',
        communication: 'Digital Communication',
      },
      categories: [
        'DATA VISUALIZATION · SCROLLYTELLING · 3D',
        'WEB APP · UX/UI · FRONT-END',
        'UX/UI · WEB · REAL-WORLD COLLABORATION',
        'UX RESEARCH · DIGITAL PRODUCT · INTER-COURSE',
        'CLIENT PROJECT · WEB DESIGN & DEVELOPMENT',
        'DIGITAL PRESENCE · UX/UI · REDESIGN',
        'E-COMMERCE · WORDPRESS · WOOCOMMERCE',
        'AUDIOVISUAL · DIRECTION & CINEMATOGRAPHY · SHORT FILM',
        'UX/UI DESIGN · MOBILE APP · GAMIFICATION',
        'UX/UI DESIGN · HEALTH TECH · IOT & DATA',
      ],
      imageAlts: [
        'Interactive project exploring the evolution of Formula 1 safety',
        'CrewUp interface for organizing sporting events',
        'Blood donation project created with HUG',
        'ODDS digital product research project',
        'Website for the city of La Chaux-de-Fonds',
        'Digital redesign project for Etoile Blanche',
        'Homepage of the Swiss BoxBoxF1 store',
        'Savoir-Vivre audiovisual project',
        'NaturaQuest mobile app',
        'PetCare animal health app',
      ],
    },
    services: {
      title: 'EXPERTISE',
      ariaLabel: 'Expertise',
      rows: [
        [
          'UX / UI Design',
          'User research, journeys, wireframes and prototypes — from understanding a need to shaping a clear, cohesive interface.',
        ],
        [
          'Front-end Development',
          'HTML, CSS, JavaScript and Vue.js to build polished, accessible and responsive interfaces.',
        ],
        [
          'Media & Communication',
          'A broad view of digital work: content, strategy, visuals and end-to-end experience.',
        ],
        [
          'Prototyping & Tools',
          'Figma, Adobe Creative Suite, Git and prototyping methods that support effective teamwork.',
        ],
      ],
    },
    tools: {
      title: 'MY TOOLS',
      ariaLabel: 'Tools I use',
      items: [
        'HTML5',
        'CSS',
        'JavaScript',
        'PHP',
        'React.js',
        'Vue.js',
        'Node.js',
        'Tailwind CSS',
        'Laravel',
        'Figma',
        'FigJam',
        'Miro',
        'Wireframing',
        'Interactive Prototyping',
        'Design System',
        'Responsive Design',
        'Adobe Suite',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere Pro',
        'MySQL',
        'PostgreSQL',
        'Visual Studio Code',
        'Git',
        'GitHub',
        'Docker',
        'Postman',
        'WordPress',
        'Google Analytics 4',
        'SEO',
        'Google Tag Manager',
        'Notion',
        'Jira',
        'Midjourney',
      ],
    },
    footer: {
      ctaLines: ['HAVE A PROJECT?', 'LET’S TALK.'],
      contactLabel: 'CONTACT',
      menuTitle: 'NAVIGATION',
      socialTitle: 'SOCIAL',
      legal: ['© 2026 Nuno Amaro. All rights reserved.', '', 'CV'],
      pillCta: 'GET IN TOUCH',
      contactAriaLabel: 'Contact Nuno Amaro',
    },
  },
  pt: {
    menu: ['INÍCIO', 'PROJETOS', 'SOBRE', 'CONTACTO'],
    hero: {
      ariaLabel: 'Apresentação de Nuno Amaro',
      roleLines: ['ENGENHEIRO DE MEDIA', 'DESIGN · DESENVOLVIMENTO'],
      scrollLabel: 'DESLIZAR',
      headlineLead: 'Do',
      headlineTop: 'design',
      headlineBottom: 'ao digital',
      floatingWords: ['Interfaces', 'Curiosidade', 'Prototipagem', 'Movimento', 'Narrativas interativas', 'Novas ideias', 'Experimentação', 'Design', 'Código', 'Dados', 'Animação', 'Ideias', 'Detalhes', 'Sistemas', 'Usos'],
      intro:
        'Estudante de Engenharia de Media na HEIG-VD, concebo e desenvolvo experiências digitais que cruzam design, tecnologia e as necessidades das pessoas.',
      imageAlt: 'Silhueta de Nuno Amaro sentado, visto de trás em três quartos',
    },
    productIndex: {
      ariaLabel: 'Perfil e especialidades',
      columns: [
        ['ESPECIALIDADE', 'UX / UI'],
        ['DESENVOLVIMENTO', 'Front-end'],
        ['FORMAÇÃO', 'HEIG-VD'],
        ['DISPONIBILIDADE', 'Estágio 2027'],
      ],
    },
    products: {
      title: 'PROJETOS',
      ariaLabel: 'Projetos selecionados',
      interactionHint: 'Deslize horizontalmente ou faça swipe para explorar os projetos. Use as setas esquerda e direita do teclado.',
      filtersLabel: 'Filtrar projetos',
      filters: {
        highlight: 'Destaques',
        all: 'Todos',
        web: 'Desenvolvimento web',
        uxui: 'Design UX/UI',
        data: 'Dados e visualização',
        communication: 'Comunicação digital',
      },
      categories: [
        'VISUALIZAÇÃO DE DADOS · SCROLLYTELLING · 3D',
        'WEB APP · UX/UI · FRONT-END',
        'UX/UI · WEB · COLABORAÇÃO REAL',
        'PESQUISA UX · PRODUTO DIGITAL · INTERCURSOS',
        'PROJETO CLIENTE · DESIGN E DESENVOLVIMENTO WEB',
        'PRESENÇA DIGITAL · UX/UI · REDESIGN',
        'E-COMMERCE · WORDPRESS · WOOCOMMERCE',
        'AUDIOVISUAL · REALIZAÇÃO E IMAGEM · CURTA-METRAGEM',
        'DESIGN UX/UI · APLICAÇÃO MÓVEL · GAMIFICAÇÃO',
        'DESIGN UX/UI · HEALTH TECH · IOT E DADOS',
      ],
      imageAlts: [
        'Projeto interativo sobre a evolução da segurança na Fórmula 1',
        'Interface da CrewUp para organizar eventos desportivos',
        'Projeto de doação de sangue realizado com os HUG',
        'Projeto digital ODDS baseado em pesquisa UX',
        'Website da cidade de La Chaux-de-Fonds',
        'Projeto de redesign digital para Etoile Blanche',
        'Página inicial da loja suíça BoxBoxF1',
        'Projeto audiovisual Savoir-Vivre',
        'Aplicação móvel NaturaQuest',
        'Aplicação de saúde animal PetCare',
      ],
    },
    services: {
      title: 'COMPETÊNCIAS',
      ariaLabel: 'Competências',
      rows: [
        [
          'Design UX / UI',
          'Pesquisa com utilizadores, percursos, wireframes e protótipos — da compreensão da necessidade a uma interface clara e coerente.',
        ],
        [
          'Desenvolvimento front-end',
          'HTML, CSS, JavaScript e Vue.js para criar interfaces responsivas, acessíveis e cuidadas.',
        ],
        [
          'Media & Comunicação',
          'Uma visão abrangente do digital: conteúdo, estratégia, imagem e experiência de ponta a ponta.',
        ],
        [
          'Prototipagem & Ferramentas',
          'Figma, Adobe Creative Suite, Git e métodos de prototipagem para trabalhar em equipa.',
        ],
      ],
    },
    tools: {
      title: 'AS MINHAS FERRAMENTAS',
      ariaLabel: 'Ferramentas que utilizo',
      items: [
        'HTML5',
        'CSS',
        'JavaScript',
        'PHP',
        'React.js',
        'Vue.js',
        'Node.js',
        'Tailwind CSS',
        'Laravel',
        'Figma',
        'FigJam',
        'Miro',
        'Wireframing',
        'Prototipagem interativa',
        'Design System',
        'Responsive Design',
        'Suite Adobe',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe Premiere Pro',
        'MySQL',
        'PostgreSQL',
        'Visual Studio Code',
        'Git',
        'GitHub',
        'Docker',
        'Postman',
        'WordPress',
        'Google Analytics 4',
        'SEO',
        'Google Tag Manager',
        'Notion',
        'Jira',
        'Midjourney',
      ],
    },
    footer: {
      ctaLines: ['TEM UM PROJETO?', 'VAMOS FALAR.'],
      contactLabel: 'CONTACTO',
      menuTitle: 'NAVEGAÇÃO',
      socialTitle: 'REDES SOCIAIS',
      legal: ['© 2026 Nuno Amaro. Todos os direitos reservados.', '', 'CV'],
      pillCta: 'ENTRAR EM CONTACTO',
      contactAriaLabel: 'Contactar Nuno Amaro',
    },
  },
};

export function getSavedHomeLanguage(): HomeLanguage {
  try {
    const saved = window.localStorage.getItem('na-lang');
    if (saved === 'en' || saved === 'pt' || saved === 'fr') return saved;
  } catch {
    // Storage may be unavailable in private browsing; French remains the default.
  }
  return 'fr';
}
