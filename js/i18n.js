/* ============================================================
   NUNO AMARO — PORTFOLIO
   i18n.js — Bilingual system (EN / FR)
   Auto-detects browser language, remembers user choice.
   ============================================================ */

'use strict';

/* ─── Translations ──────────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    /* Navbar */
    'nav.work':     'Work',
    'nav.about':    'About',
    'nav.skills':   'Skills',
    'nav.contact':  'Contact',
    'nav.cta':      "Let's talk ↗",

    /* Hero */
    'hero.badge':        'Available for opportunities',
    'hero.currently':    'Currently building',
    'hero.title':        'Media<br /><em>Engineer</em><br />building<br /><span style="color:var(--text-muted);font-weight:400">experiences.</span>',
    'hero.subtitle':     'Front-end developer &amp; UX/UI designer<br />based in Switzerland.',
    'hero.tagline':      'I design and develop digital experiences at the intersection of design, technology, and user experience.',
    'hero.cta-work':     'View my work',
    'hero.cta-talk':     "Let's talk",
    'hero.meta-projects':'Projects',
    'hero.meta-year':    '3rd Year HEIG-VD',
    'hero.meta-country': 'Switzerland',
    'hero.scroll':       'Scroll',

    /* Home — About short */
    'about.label':   'About',
    'about.title':   'A little bit about <em>me.</em>',
    'about.p1':      "I'm a 3rd-year Media Engineering student at HEIG-VD in Switzerland, with a strong interest in building digital experiences that sit at the intersection of design, technology, and user experience.",
    'about.p2':      "My training gives me a global view of projects — from understanding a user's need and thinking through the experience, to crafting the interface and contributing to its development.",
    'about.more':    'More about me',
    'about.what':    'What I do',
    'about.p1-num':  '01 — Design',
    'about.p1-title':'UX / UI',
    'about.p1-i1':   'Wireframes &amp; prototypes',
    'about.p1-i2':   'User experience design',
    'about.p1-i3':   'Visual design &amp; design systems',
    'about.p2-num':  '02 — Development',
    'about.p2-title':'Front-end &amp; Web',
    'about.p2-i1':   'HTML, CSS, JavaScript',
    'about.p2-i2':   'Vue.js, PHP, Laravel',
    'about.p2-i3':   'Responsive &amp; accessible code',
    'about.p3-num':  '03 — Digital',
    'about.p3-title':'Media &amp; Communication',
    'about.p3-i1':   'Project management',
    'about.p3-i2':   'Digital communication &amp; strategy',
    'about.p3-i3':   'Creative development',

    /* Home — Work */
    'work.label':       'Selected work',
    'work.title':       "Things I've built.",
    'work.desc':        'A curated selection of projects across design, development, and digital experience.',
    'work.view-all':    'View all projects',
    'work.view-cs':     'View case study',
    'work.f1-desc':     'An interactive data-driven experience exploring the evolution of Formula 1 safety and performance from 1950 to today — scrollytelling, 3D, and live data visualizations.',
    'work.crewup-desc': 'A web application designed to organise and manage sporting events — from team creation to event coordination. Built with a focus on intuitive UX and clean interface design.',
    'work.hug-desc':    'A web platform promoting blood donation, developed in collaboration with Geneva University Hospitals (HUG).',
    'work.odds-desc':   'A digital platform designed to improve organ donation in Switzerland — from UX research to interface design and prototype.',
    'work.cdf-desc':    'Complete website designed and developed for the municipality of La Chaux-de-Fonds, based on a formal project brief.',
    'work.eb-desc':     'Redesign of the digital presence and online communication for a Lausanne restaurant.',

    /* Home — Skills */
    'skills.label': 'Expertise',
    'skills.title': 'Skills &amp; tools.',

    /* Home — Process */
    'process.label':    'Process',
    'process.title':    'How I work.',
    'process.subtitle': "I don't start by opening a code editor. I start by understanding.",
    'process.1-title':  'Understand',
    'process.1-desc':   'I begin by listening — to the problem, the users, and the goals. No assumptions. Understanding deeply before acting.',
    'process.2-title':  'Explore',
    'process.2-desc':   'Research, competitive analysis, user journeys. I generate ideas and challenge them before committing to a direction.',
    'process.3-title':  'Design',
    'process.3-desc':   'From rough wireframes to polished interfaces. I translate thinking into visuals — always with the user experience at the core.',
    'process.4-title':  'Build',
    'process.4-desc':   'I develop the solution with clean, maintainable code. Responsive by default. Accessible from the start.',
    'process.5-title':  'Improve',
    'process.5-desc':   'Shipping is not the end. I test, observe, and iterate — because good products grow over time.',

    /* Home — CTA */
    'cta.label':      "Let's connect",
    'cta.title':      'Have a project<br />in mind?',
    'cta.title-short':'Have a project in mind?',
    'cta.desc':       "A project, an opportunity, or just want to say hello? I'd love to hear from you.",
    'cta.btn':        'Get in touch',

    /* Work listing page */
    'wi.sublabel':  'Selected projects',
    'wi.title':     "Things I've<br />built.",
    'wi.desc':      'A selection of projects across web development, UX/UI design, and digital experience — from student projects to real-world collaborations.',
    'wi.count':     '6 projects',
    'wi.f1-cat':    'Data Visualization · Scrollytelling · 3D · Front-end',
    'wi.crewup-cat':'Web App · UX/UI · Front-end',
    'wi.hug-cat':   'UX/UI · Web · Real-world collaboration',
    'wi.odds-cat':  'UX Research · Digital Product · Inter-course',
    'wi.cdf-cat':   'Client Project · Web Design & Development',
    'wi.eb-cat':    'Digital Presence · UX/UI · Redesign',
    'wi.cta-desc':  "Let's build something great together.",

    /* Footer */
    'footer.brand':     'Designing and building digital experiences with curiosity.',
    'footer.nav-label': 'Navigation',
    'footer.soc-label': 'Social',
    'footer.tagline':   'Designed &amp; built with curiosity.',
    'footer.copy':      '© 2026 Nuno Amaro. All rights reserved.',

    /* About page */
    'ap.label':      'About',
    'ap.sublabel':   'The person behind the work',
    'ap.title':      'A little bit about <span style="color:var(--accent)">me.</span>',
    'ap.lead':       'Media engineer. Front-end developer. UX/UI designer. Based in Switzerland, curious by nature.',
    'ap.who-title':  'Who I am.',
    'ap.p1':         'I\'m Nuno Amaro, a 3rd-year Media Engineering student at <strong style="color:var(--text)">HEIG-VD</strong> in Yverdon-les-Bains, Switzerland.',
    'ap.p2':         "I'm particularly interested in the intersection of design and technology — building digital experiences that are both visually strong and technically solid. I enjoy working on projects where I can think about the user, design the interface, and contribute to the code.",
    'ap.p3':         "My formation at HEIG-VD gives me a global perspective on digital projects — from understanding a user's need and thinking through the experience, to designing the interface and participating in its development.",
    'ap.val-title':  'I like turning ideas into digital experiences.',
    'ap.v1-title':   'Design with purpose',
    'ap.v1-desc':    'I believe great design is invisible — it solves problems without drawing attention to itself.',
    'ap.v2-title':   'User-first thinking',
    'ap.v2-desc':    "I start every project by understanding the people who will use it. Their needs shape every decision.",
    'ap.v3-title':   'Build with care',
    'ap.v3-desc':    'Clean, maintainable code. Accessible interfaces. Fast, responsive experiences — on every device.',
    'ap.v4-title':   'Keep learning',
    'ap.v4-desc':    'The digital landscape changes fast. I stay curious, try new things, and embrace being a beginner.',
    'ap.edu-label':  'Education',
    'ap.edu-sub':    'Journey so far',
    'ap.edu-title':  'My journey.',
    'ap.bey-label':  'Personal',
    'ap.bey-sub':    'Beyond the screen',
    'ap.bey-title':  "When I'm not designing.",
    'ap.cta-title':  'Want to work together?',
    'ap.cta-desc':   "Whether it's a project, an internship, or just a conversation — I'm always open.",
    'ap.cta-work':   'View my work',
    'ap.stat-proj':  'Projects',
    'ap.stat-year':  'Year',
    'ap.stat-ch':    'Switzerland',

    /* Contact page */
    'cp.label':       'Contact',
    'cp.sublabel':    'Get in touch',
    'cp.title':       'Let\'s build<br /><span style="color:var(--accent)">something.</span>',
    'cp.lead':        "A project, an opportunity, a question, or just a hello? I'd love to hear from you.",
    'cp.badge':       'Open to internship &amp; project opportunities',
    'cp.form-title':  'Send a message',
    'cp.form-sub':    "I'll get back to you as soon as possible.",
    'cp.name-label':  'Your name',
    'cp.name-ph':     'John Doe',
    'cp.email-label': 'Email address',
    'cp.email-ph':    'hello@example.com',
    'cp.subj-label':  'Subject',
    'cp.subj-ph':     'Project, opportunity, collaboration...',
    'cp.msg-label':   'Message',
    'cp.msg-ph':      'Tell me about your project or opportunity...',
    'cp.submit':      'Send message',
    'cp.or-email':    'Or email me directly at',
    'cp.location':    '📍 Based in Switzerland · Available remotely',
  },

  fr: {
    /* Navbar */
    'nav.work':     'Projets',
    'nav.about':    'À propos',
    'nav.skills':   'Compétences',
    'nav.contact':  'Contact',
    'nav.cta':      'Parlons-en ↗',

    /* Hero */
    'hero.badge':        'Disponible pour des opportunités',
    'hero.currently':    'En cours de création',
    'hero.title':        'Media<br /><em>Engineer</em><br />qui crée des<br /><span style="color:var(--text-muted);font-weight:400">expériences.</span>',
    'hero.subtitle':     'Développeur front-end &amp; designer UX/UI basé en Suisse.',
    'hero.tagline':      "Je conçois et développe des expériences digitales à la croisée du design, de la technologie et de l'expérience utilisateur.",
    'hero.cta-work':     'Voir mes projets',
    'hero.cta-talk':     'Parlons-en',
    'hero.meta-projects':'Projets',
    'hero.meta-year':    '3e année HEIG-VD',
    'hero.meta-country': 'Suisse',
    'hero.scroll':       'Défiler',

    /* Home — About short */
    'about.label':   'À propos',
    'about.title':   'Un peu plus sur <em>moi.</em>',
    'about.p1':      "Je suis étudiant en 3e année d'Ingénierie des Médias à la HEIG-VD en Suisse, avec un fort intérêt pour la création d'expériences digitales à la croisée du design, de la technologie et de l'expérience utilisateur.",
    'about.p2':      "Ma formation me donne une vision globale des projets — de la compréhension du besoin utilisateur à la réflexion sur l'expérience, en passant par la conception de l'interface et la participation au développement.",
    'about.more':    'En savoir plus',
    'about.what':    'Ce que je fais',
    'about.p1-num':  '01 — Design',
    'about.p1-title':'UX / UI',
    'about.p1-i1':   'Wireframes &amp; prototypes',
    'about.p1-i2':   "Design de l'expérience utilisateur",
    'about.p1-i3':   'Design visuel &amp; systèmes de design',
    'about.p2-num':  '02 — Développement',
    'about.p2-title':'Front-end &amp; Web',
    'about.p2-i1':   'HTML, CSS, JavaScript',
    'about.p2-i2':   'Vue.js, PHP, Laravel',
    'about.p2-i3':   'Code responsive &amp; accessible',
    'about.p3-num':  '03 — Digital',
    'about.p3-title':'Médias &amp; Communication',
    'about.p3-i1':   'Gestion de projet',
    'about.p3-i2':   'Communication digitale &amp; stratégie',
    'about.p3-i3':   'Création digitale',

    /* Home — Work */
    'work.label':       'Projets sélectionnés',
    'work.title':       "Ce que j'ai construit.",
    'work.desc':        "Une sélection de projets couvrant le design, le développement et l'expérience digitale.",
    'work.view-all':    'Voir tous les projets',
    'work.view-cs':     "Voir l'étude de cas",
    'work.f1-desc':     "Une expérience interactive et data-driven explorant l'évolution de la sécurité et des performances en Formule 1 de 1950 à aujourd'hui — scrollytelling, 3D et visualisations de données.",
    'work.crewup-desc': "Une application web conçue pour organiser et gérer des événements sportifs — de la création d'équipes à la coordination. Axée sur une UX intuitive et une interface épurée.",
    'work.hug-desc':    "Une plateforme web de promotion du don du sang, développée en collaboration avec les Hôpitaux Universitaires de Genève (HUG).",
    'work.odds-desc':   "Une plateforme digitale visant à améliorer le don d'organes en Suisse — de la recherche UX à la conception de l'interface et au prototype.",
    'work.cdf-desc':    "Site web complet conçu et développé pour la commune de La Chaux-de-Fonds, à partir d'un cahier des charges.",
    'work.eb-desc':     "Refonte de la présence digitale et de la communication en ligne du restaurant Etoile Blanche à Lausanne.",

    /* Home — Skills */
    'skills.label': 'Expertise',
    'skills.title': 'Compétences &amp; outils.',

    /* Home — Process */
    'process.label':    'Processus',
    'process.title':    'Ma façon de travailler.',
    'process.subtitle': "Je ne commence pas par ouvrir un éditeur de code. Je commence par comprendre.",
    'process.1-title':  'Comprendre',
    'process.1-desc':   "Je commence par écouter — le problème, les utilisateurs, les objectifs. Pas d'hypothèses. Comprendre en profondeur avant d'agir.",
    'process.2-title':  'Explorer',
    'process.2-desc':   "Recherche, analyse concurrentielle, parcours utilisateur. Je génère des idées et les questionne avant de m'engager dans une direction.",
    'process.3-title':  'Concevoir',
    'process.3-desc':   "Des wireframes bruts aux interfaces polies. Je traduis la réflexion en visuels — toujours avec l'expérience utilisateur au cœur.",
    'process.4-title':  'Développer',
    'process.4-desc':   "Je développe la solution avec un code propre et maintenable. Responsive par défaut. Accessible dès le départ.",
    'process.5-title':  'Améliorer',
    'process.5-desc':   "La mise en ligne n'est pas la fin. Je teste, observe et itère — car les bons produits évoluent avec le temps.",

    /* Home — CTA */
    'cta.label':      'Travaillons ensemble',
    'cta.title':      'Un projet<br />en tête&nbsp;?',
    'cta.title-short':"Un projet en tête ?",
    'cta.desc':       "Un projet, une opportunité, ou juste envie d'échanger ? N'hésitez pas à me contacter.",
    'cta.btn':        'Me contacter',

    /* Work listing page */
    'wi.sublabel':  'Projets sélectionnés',
    'wi.title':     "Ce que j'ai<br />construit.",
    'wi.desc':      "Une sélection de projets couvrant le développement web, le design UX/UI et l'expérience digitale — de projets étudiants à des collaborations réelles.",
    'wi.count':     '6 projets',
    'wi.f1-cat':    'Visualisation de données · Scrollytelling · 3D · Front-end',
    'wi.crewup-cat':'Application Web · UX/UI · Front-end',
    'wi.hug-cat':   'UX/UI · Web · Collaboration réelle',
    'wi.odds-cat':  'Recherche UX · Produit Digital · Inter-cours',
    'wi.cdf-cat':   'Projet client · Design & Développement Web',
    'wi.eb-cat':    'Présence digitale · UX/UI · Refonte',
    'wi.cta-desc':  'Construisons quelque chose ensemble.',

    /* Footer */
    'footer.brand':     "Conception et développement d'expériences digitales avec curiosité.",
    'footer.nav-label': 'Navigation',
    'footer.soc-label': 'Réseaux',
    'footer.tagline':   'Conçu &amp; développé avec curiosité.',
    'footer.copy':      '© 2026 Nuno Amaro. Tous droits réservés.',

    /* About page */
    'ap.label':      'À propos',
    'ap.sublabel':   'La personne derrière le travail',
    'ap.title':      'Un peu plus sur <span style="color:var(--accent)">moi.</span>',
    'ap.lead':       'Ingénieur des médias. Développeur front-end. Designer UX/UI. Basé en Suisse, curieux par nature.',
    'ap.who-title':  'Qui je suis.',
    'ap.p1':         "Je suis Nuno Amaro, étudiant en 3e année d'Ingénierie des Médias à la <strong style=\"color:var(--text)\">HEIG-VD</strong> à Yverdon-les-Bains, en Suisse.",
    'ap.p2':         "Je m'intéresse particulièrement à l'intersection du design et de la technologie — construire des expériences digitales à la fois visuellement fortes et techniquement solides. J'aime travailler sur des projets où je peux penser à l'utilisateur, concevoir l'interface et contribuer au code.",
    'ap.p3':         "Ma formation à la HEIG-VD me donne une perspective globale sur les projets digitaux — de la compréhension du besoin utilisateur à la conception de l'interface et à la participation au développement.",
    'ap.val-title':  "J'aime transformer les idées en expériences digitales.",
    'ap.v1-title':   'Concevoir avec intention',
    'ap.v1-desc':    "Je crois que le grand design est invisible — il résout des problèmes sans attirer l'attention sur lui-même.",
    'ap.v2-title':   "L'utilisateur en premier",
    'ap.v2-desc':    "Je commence chaque projet en comprenant les personnes qui vont l'utiliser. Leurs besoins guident chaque décision.",
    'ap.v3-title':   'Développer avec soin',
    'ap.v3-desc':    "Un code propre et maintenable. Des interfaces accessibles. Des expériences rapides et responsives — sur chaque appareil.",
    'ap.v4-title':   'Apprendre en continu',
    'ap.v4-desc':    "Le monde digital évolue vite. Je reste curieux, j'essaie de nouvelles choses et j'accepte d'être débutant.",
    'ap.edu-label':  'Formation',
    'ap.edu-sub':    'Mon parcours',
    'ap.edu-title':  'Mon parcours.',
    'ap.bey-label':  'Personnel',
    'ap.bey-sub':    "Au-delà de l'écran",
    'ap.bey-title':  "Quand je ne conçois pas.",
    'ap.cta-title':  'Envie de collaborer ?',
    'ap.cta-desc':   "Que ce soit pour un projet, un stage ou juste une conversation — je suis toujours disponible.",
    'ap.cta-work':   'Voir mes projets',
    'ap.stat-proj':  'Projets',
    'ap.stat-year':  'Année',
    'ap.stat-ch':    'Suisse',

    /* Contact page */
    'cp.label':       'Contact',
    'cp.sublabel':    'Prendre contact',
    'cp.title':       'Construisons<br /><span style="color:var(--accent)">quelque chose.</span>',
    'cp.lead':        "Un projet, une opportunité, une question ou juste un bonjour ? Avec plaisir.",
    'cp.badge':       'Disponible pour stages &amp; projets',
    'cp.form-title':  'Envoyer un message',
    'cp.form-sub':    "Je vous répondrai dans les plus brefs délais.",
    'cp.name-label':  'Votre nom',
    'cp.name-ph':     'Jean Dupont',
    'cp.email-label': 'Adresse e-mail',
    'cp.email-ph':    'bonjour@exemple.com',
    'cp.subj-label':  'Sujet',
    'cp.subj-ph':     'Projet, opportunité, collaboration...',
    'cp.msg-label':   'Message',
    'cp.msg-ph':      'Parlez-moi de votre projet ou opportunité...',
    'cp.submit':      'Envoyer le message',
    'cp.or-email':    'Ou écrivez-moi directement à',
    'cp.location':    '📍 Basé en Suisse · Disponible à distance',
  }
};

/* ─── Currently-building items (both languages) ─────────────── */
const CURRENTLY_ITEMS = {
  en: ['this portfolio ✦', 'Vue.js projects', 'new UI concepts'],
  fr: ['ce portfolio ✦',  'des projets Vue.js', 'de nouveaux concepts UI']
};

/* ─── I18n Manager ───────────────────────────────────────────── */
const I18n = {
  STORAGE_KEY: 'na-lang',
  current: 'en',

  init() {
    const saved   = localStorage.getItem(this.STORAGE_KEY);
    const browser = navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    this.apply(saved || browser);
    this.bindToggles();
  },

  apply(lang) {
    this.current = lang;
    localStorage.setItem(this.STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    const t = TRANSLATIONS[lang];
    if (!t) return;

    /* Text content (no HTML tags) */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = t[el.dataset.i18n];
      if (val !== undefined) el.textContent = val;
    });

    /* HTML content (allows <em>, <br>, <span> inside) */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = t[el.dataset.i18nHtml];
      if (val !== undefined) el.innerHTML = val;
    });

    /* Placeholder attributes */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const val = t[el.dataset.i18nPh];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    /* Update toggle button active state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
    });

    /* Update currently-building items list */
    if (window._currentlyItems) {
      window._currentlyItems = CURRENTLY_ITEMS[lang];
    }
  },

  bindToggles() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.apply(btn.dataset.lang));
    });
  }
};

/* Expose for main.js */
window.I18n        = I18n;
window.CURRENTLY_ITEMS = CURRENTLY_ITEMS;

document.addEventListener('DOMContentLoaded', () => I18n.init());
