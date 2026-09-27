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
    'work.boxboxf1-cat':'E-Commerce · WordPress',
    'work.boxboxf1-desc':'Swiss e-commerce platform and news blog dedicated to Formula 1 fans, powered by WordPress & WooCommerce.',
    'work.sv-cat':      'Audiovisual · Short Film',
    'work.sv-desc':     'A satirical dark comedy short film questioning the cost of politeness in modern society, made in an intensive 2-week video workshop.',
    'work.nq-cat':      'UX/UI · Mobile · Gamification',
    'work.nq-desc':     'Educational mobile app encouraging exploration of local biodiversity through GPS quests, AI species recognition, and collectible cards.',
    'work.petcare-cat': 'UX/UI · Health Tech · IoT',
    'work.petcare-desc':'Connected animal health mobile app combining IoT data, weather, and instant QR code sharing with veterinarians.',

    /* Home — Skills */
    'skills.label':   'Expertise',
    'skills.title':   'Skills &amp; tools.',
    'skills.dev':     'Development',
    'skills.design':  'Design',
    'skills.tools':   'Tools',
    'skills.digital': 'Digital',

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
    'wi.sublabel':     'Selected projects',
    'wi.title':        "Things I've<br />built.",
    'wi.desc':         'A selection of projects across web development, UX/UI design, and digital experience — from student projects to real-world collaborations.',
    'wi.count':        '10 projects',
    'wi.f1-cat':       'Data Visualization · Scrollytelling · 3D · Front-end',
    'wi.crewup-cat':   'Web App · UX/UI · Front-end',
    'wi.hug-cat':      'UX/UI · Web · Real-world collaboration',
    'wi.odds-cat':     'UX Research · Digital Product · Inter-course',
    'wi.cdf-cat':      'Client Project · Web Design & Development',
    'wi.eb-cat':       'Digital Presence · UX/UI · Redesign',
    'wi.boxboxf1-cat': 'E-Commerce · WordPress · WooCommerce',
    'wi.sv-cat':       'Audiovisual · Direction & Cinematography · Short Film',
    'wi.nq-cat':       'UX/UI Design · Mobile App · Gamification',
    'wi.petcare-cat':  'UX/UI Design · Health Tech · IoT & Data',
    'wi.cta-desc':     "Let's build something great together.",

    /* Common Case Study */
    'case.all-projects': 'All projects',
    'case.context-label':'Context',
    'case.date-label':   'Date / Period',
    'case.role-label':   'My Role',
    'case.team-label':   'Team & Role',
    'case.tech-label':   'Technologies',
    'case.tools-label':  'Tools',
    'case.next':         'Next project',

    /* BoxBoxF1 Case Study */
    'boxboxf1.lead':     'Full Swiss e-commerce ecosystem built on WordPress & WooCommerce for Formula 1 fans: hybrid business model (direct stock, Print-on-Demand, affiliate), editorial SEO blog, marketing automation, and green IT practices.',
    'boxboxf1.live-btn': 'Visit boxboxf1.ch ↗',
    'boxboxf1.s1-title': 'Bridging the F1 e-commerce gap in Switzerland.',
    'boxboxf1.s1-p1':    'With the rising global popularity of Formula 1 and Netflix’s Drive to Survive, Swiss fans faced a key friction: ordering from abroad meant unexpected customs duties, long delivery delays, and high shipping costs. BoxBoxF1 fills this void with a 100% Swiss-focused value proposition (net CHF prices, fast Swiss Post delivery, French customer support).',
    'boxboxf1.s1-p2':    'The goal was to design an end-to-end e-commerce brand combining a hybrid 3-pillar product catalog with an active editorial blog (Pit Lane) to build organic traffic and foster a passionate local community.',
    'boxboxf1.s2-title': 'A 3-pillar hybrid business model.',
    'boxboxf1.s3-title': 'Learnings & Impact.',
    'boxboxf1.s3-p1':    'Deploying BoxBoxF1 provided a 360° mastery of modern e-commerce: legal compliance (nLPD, Swiss GTC), unit economics, multi-channel logistics, mobile UX optimization, and marketing automation.',
    'boxboxf1.cta-link': 'Explore the live shop ↗',

    /* Savoir-Vivre Case Study */
    'sv.lead':     'A dark comedy produced during an intensive 2-week video workshop, exploring with irony the real cost of courtesy and kindness in modern society.',
    'sv.s1-title': 'The trap of ordinary kindness.',
    'sv.s1-p1':    'Responding to the brief "everyday kind gestures", our team took an ironic counter-perspective: questioning the place of altruism in a fast-paced, individualistic society.',
    'sv.s1-p2':    'The story: Valentin is a genuinely polite man. Rushing during his morning commute, he repeatedly stops to help strangers. These lost minutes add up until he arrives late at work and gets fired by his boss — not for lack of competence, but out of excess humanity.',
    'sv.s2-title': 'Direction and set management.',
    'sv.s2-p1':    'As cinematographer and director, my role involved shot-by-shot storyboarding, lighting, directing actors on set, and coordinating with the sound engineer under a strict 2-week deadline.',
    'sv.s3-title': 'Production & Deliverables.',
    'sv.s3-p1':    'The project resulted in a full production package complying with industry standards: 2-minute Full HD short film with live sound, 30s web teaser, 10s social teaser, A4 300dpi poster, and a 9-page production dossier.',
    'sv.video-btn':   'Watch Short Film ↗',
    'sv.teaser30-btn':'Watch 30s Teaser ↗',
    'sv.teaser10-btn':'Watch 10s Teaser ↗',
    'sv.pdf-btn':     'View Production Dossier (PDF) ↗',

    /* NaturaQuest Case Study */
    'nq.lead':     'UX/UI design of an educational mobile game encouraging exploration of local biodiversity through geolocation quests, AI species recognition, and collectible cards.',
    'nq.s1-title': 'Reconnecting people with local biodiversity.',
    'nq.s1-p1':    'Addressing sedentary lifestyles and lack of nature awareness, the mandate was to design an engaging mobile application encouraging outdoor exploration.',
    'nq.s1-p2':    'Together with Gabriel Cappai, we created NaturaQuest: a hybrid between an exploration game, naturalist Pokédex, and field science notebook.',
    'nq.s2-title': 'Engaging exploration mechanics.',
    'nq.s3-title': 'Standard quest workflow.',
    'nq.pdf-btn':  'View Presentation Dossier (PDF) ↗',

    /* PetCare Case Study */
    'petcare.lead':     'Preventive animal health mobile app centralising IoT tracker data, weather, and medical history with instant QR code sharing for veterinarians.',
    'petcare.s1-title': 'Better monitoring for better care, together.',
    'petcare.s1-p1':    'Pet owners often struggle to provide accurate health and activity metrics during vet visits. PetCare bridges this gap through proactive data aggregation.',
    'petcare.s1-p2':    'PetCare is 100% free for owners and allows instant consultation prep for veterinarians via a simple scanned QR code, without altering clinical software.',
    'petcare.s2-title': 'Aggregating 4 data sources.',
    'petcare.s3-title': 'From owner to veterinarian in one scan.',
    'petcare.s3-p1':    'Veterinarians scan the app\'s QR code to immediately view an interactive web dashboard with 7-day trends, anomalies, and vital alerts.',
    'petcare.btn-synth':'Synthesis Document (PDF) ↗',
    'petcare.btn-pitch':'Pitch Presentation (PDF) ↗',
    'petcare.btn-figma':'Complete Mockups (PDF) ↗',

    /* Footer */
    'footer.brand':     'Designing and building digital experiences with curiosity.',
    'footer.nav-label': 'Navigation',
    'footer.soc-label': 'Social',
    'footer.cv':        'Resume (PDF) ↗',
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
    'ap.cv-btn':     'Download CV (PDF) ↗',
    'ap.edu-heig-period': '2023 — Present',
    'ap.edu-heig-title':  'Media Engineering — HEIG-VD',
    'ap.edu-heig-sub':    "Bachelor's degree · Yverdon-les-Bains, Switzerland",
    'ap.edu-heig-desc':   'Specialising in web development, UX/UI design, front-end programming, databases, project management, and digital communication. Currently in 3rd year.',
    'ap.bey-label':  'Personal',
    'ap.bey-sub':    'Beyond the screen',
    'ap.bey-title':  "When I'm not designing.",
    'ap.cta-title':  'Want to work together?',
    'ap.cta-desc':   "Whether it's a project, an internship, or just a conversation — I'm always open.",
    'ap.cta-work':   'View my work',
    'ap.stat-proj':  'Projects',
    'ap.stat-year':  'Year',
    'ap.stat-ch':    'Switzerland',
    'ap.int-preview-cta':  'Explore passion',
    'ap.int-sport':        'Sport',
    'ap.int-sport-desc':   "Football, fitness & daily discipline.",
    'ap.int-sport-preview':"Sport is my daily engine. Passionate about football and physical training, it builds my discipline, team spirit, and drive to improve.",
    'ap.int-cars':         'Cars',
    'ap.int-cars-desc':    'Automotive design, engineering & motorsport.',
    'ap.int-cars-preview': 'A lifelong passion for cars — from automotive design and mechanical engineering to motorsport culture like Formula 1.',
    'ap.int-photo':        'Photo & Video',
    'ap.int-photo-desc':   'Capturing light, moments & storytelling.',
    'ap.int-photo-preview':'Capturing light, framing authentic moments and telling visual stories. A natural creative bridge between my aesthetic eye and technical skills.',
    'ap.int-animals':      'Animals',
    'ap.int-animals-desc': 'Loyalty, energy & grounding connections.',
    'ap.int-animals-preview':'A huge love for animals, their authenticity and pure energy. Spending time with them is my favorite way to recharge and stay grounded.',
    'ap.int-gaming':       'Gaming',
    'ap.int-gaming-desc':  'Immersive worlds, interactive UX & strategy.',
    'ap.int-gaming-preview':'Video games inspire me with their immersive storytelling, interactive world-building, and meticulous UI/UX interface systems.',
    'ap.int-friends':      'Friends',
    'ap.int-friends-desc': 'Shared laughs, adventures & daily inspiration.',
    'pass.back':           'Back to About',
    'pass.label':          'Beyond The Screen',
    'pass.hero-title':     'What fuels my creativity & energy.',
    'pass.hero-desc':      'A deeper dive into the things that keep me inspired, motivated, and balanced outside the digital workspace.',
    'pass.sport-title':    'Sport & Athletic Discipline',
    'pass.sport-desc':     'Sport is more than a hobby for me — it\'s an essential lifestyle anchor. Whether playing football on the pitch, following major leagues, or pushing myself through structured fitness training, physical activity sharpens my focus and instills a strong work ethic.',
    'pass.sport-h1':       'Team spirit, tactical strategy & mutual trust',
    'pass.sport-h2':       'Mental resilience and constant drive for self-improvement',
    'pass.sport-h3':       'The best way to reset focus after intense coding sessions',
    'pass.cars-title':     'Automotive Design & Motorsport',
    'pass.cars-desc':      'From aerodynamics and precision engineering to the thrill of Formula 1, cars represent the ultimate convergence of industrial design, cutting-edge technology, and human passion.',
    'pass.cars-h1':        'Appreciation for timeless automotive aesthetics & proportions',
    'pass.cars-h2':        'Following Formula 1 telemetry, strategy & engineering feats',
    'pass.cars-h3':        'The emotional connection between driver, machine and craft',
    'pass.photo-title':    'Visual Storytelling, Photography & Film',
    'pass.photo-desc':     'Photography and videography train my eye to capture lighting, framing, and genuine human emotions. This visual sensitivity directly enhances my digital UI/UX craft, helping me design interfaces with rhythm, contrast, and visual hierarchy.',
    'pass.photo-h1':       'Composition, color grading & cinematic framing',
    'pass.photo-h2':       'Documenting authentic real-world moments & travel',
    'pass.photo-h3':       'Bridging physical creative mediums with digital product design',
    'pass.animals-title':  'Animals & Nature Connection',
    'pass.animals-desc':   'Animals bring unmatched authenticity, loyalty, and joyful energy. Spending time around them and being out in nature is my favorite way to step away from screens, decompress, and maintain genuine peace of mind.',
    'pass.animals-h1':     'A natural antidote to screen fatigue and daily stress',
    'pass.animals-h2':     'Appreciating simple, loyal and unconditional moments',
    'pass.animals-h3':     'Staying grounded and connected with the natural world',
    'pass.gaming-title':   'Gaming, World-Building & Interactive UI',
    'pass.gaming-desc':    'Gaming is an extraordinary masterclass in user experience. From diegetic HUD interfaces and micro-feedback to multi-sensory feedback and immersive world-building, video games showcase how technology can evoke true emotion.',
    'pass.gaming-h1':      'Analyzing complex HUDs, accessible menus & player onboarding',
    'pass.gaming-h2':      'Tactical problem solving and collaborative multiplayer strategy',
    'pass.gaming-h3':      'Endless inspiration for fluid web animations and interactions',
    'pass.friends-title':  'Friends, Shared Moments & Energy',
    'pass.friends-desc':   'At the end of the day, human connections give everything purpose. Brainstorming ambitious side projects, sharing hearty laughs over dinner, or going on spontaneous road trips with close friends keeps me inspired and energised.',
    'pass.friends-h1':     'Surrounding myself with ambitious, creative and positive minds',
    'pass.friends-h2':     'Creating lasting memories beyond deadlines and work',
    'pass.friends-h3':     'A constant reminder of empathy, communication and active listening',
    'pass.cta-title':      'Want to chat or collaborate?',
    'pass.cta-desc':       'Whether it\'s about tech, cars, design projects, or an internship opportunity — my inbox is always open.',
    'pass.cta-btn':        'Get In Touch',

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
    'work.boxboxf1-cat':'E-Commerce · WordPress',
    'work.boxboxf1-desc':"Plateforme e-commerce suisse et blog d'actualités dédiés aux passionnés de Formule 1, développée sous WordPress & WooCommerce.",
    'work.sv-cat':      'Audiovisuel · Court-Métrage',
    'work.sv-desc':     "Court-métrage et comédie noire satirique sur le coût de la politesse dans notre société, réalisé en atelier vidéo intensif.",
    'work.nq-cat':      'UX/UI · Mobile · Gamification',
    'work.nq-desc':     "Application mobile ludo-éducative invitant à explorer la biodiversité locale grâce à des quêtes GPS, l'IA et une collection de cartes.",
    'work.petcare-cat': 'UX/UI · Health Tech · IoT',
    'work.petcare-desc':"Application de suivi de santé animale connectée combinant données IoT, météo et transmission instantanée au vétérinaire via QR code.",

    /* Home — Skills */
    'skills.label':   'Expertise',
    'skills.title':   'Compétences &amp; outils.',
    'skills.dev':     'Développement',
    'skills.design':  'Design',
    'skills.tools':   'Outils',
    'skills.digital': 'Digital',

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
    'wi.sublabel':     'Projets sélectionnés',
    'wi.title':        "Ce que j'ai<br />construit.",
    'wi.desc':         "Une sélection de projets couvrant le développement web, le design UX/UI et l'expérience digitale — de projets étudiants à des collaborations réelles.",
    'wi.count':        '10 projets',
    'wi.f1-cat':       'Visualisation de données · Scrollytelling · 3D · Front-end',
    'wi.crewup-cat':   'Application Web · UX/UI · Front-end',
    'wi.hug-cat':      'UX/UI · Web · Collaboration réelle',
    'wi.odds-cat':     'Recherche UX · Produit Digital · Inter-cours',
    'wi.cdf-cat':      'Projet client · Design & Développement Web',
    'wi.eb-cat':       'Présence digitale · UX/UI · Refonte',
    'wi.boxboxf1-cat': 'E-Commerce · WordPress · WooCommerce',
    'wi.sv-cat':       'Audiovisuel · Réalisation & Cadrage · Court-Métrage',
    'wi.nq-cat':       'UX/UI Design · Application Mobile · Gamification',
    'wi.petcare-cat':  'UX/UI Design · Health Tech · IoT & Données',
    'wi.cta-desc':     'Construisons quelque chose ensemble.',

    /* Common Case Study */
    'case.all-projects': 'Tous les projets',
    'case.context-label':'Contexte',
    'case.date-label':   'Date / Période',
    'case.role-label':   'Mon Rôle',
    'case.team-label':   'Équipe & Rôle',
    'case.tech-label':   'Technologies',
    'case.tools-label':  'Outils',
    'case.next':         'Projet suivant',

    /* BoxBoxF1 Case Study */
    'boxboxf1.lead':     "Plateforme e-commerce conçue sous WordPress & WooCommerce pour les passionnés suisses de Formule 1, combinant boutique spécialisée et espace blog d'actualités.",
    'boxboxf1.live-btn': 'Visiter boxboxf1.ch ↗',
    'boxboxf1.s1-title': 'Un shop F1 dédié au public suisse.',
    'boxboxf1.s1-p1':    "Dans le cadre du cours d'E-Commerce à la HEIG-VD, le projet consistait à créer de bout en bout une boutique en ligne fonctionnelle et optimisée. Passionné de sport automobile, j'ai identifié une opportunité claire : le manque d'offre e-commerce F1 dédiée au marché suisse, où les fans se heurtent souvent à des frais de douane imprévus et des délais de livraison longs depuis l'étranger.",
    'boxboxf1.s1-p2':    "Le défi était double : proposer une expérience d'achat fluide (catalogue clair, tunnel de commande optimisé, modes de paiement adaptés) tout en intégrant un volet éditorial (blog d'actualités F1) pour générer du trafic organique et fédérer une communauté locale.",
    'boxboxf1.s2-title': 'Une solution complète sous WordPress & WooCommerce.',
    'boxboxf1.s3-title': 'Apprentissages & Impact.',
    'boxboxf1.s3-p1':    "Le déploiement de BoxBoxF1 a permis de maîtriser l'ensemble du cycle de vie d'un projet e-commerce : du choix des plugins à la configuration des taxes, en passant par la personnalisation CSS poussée de thèmes WordPress et l'élaboration d'une stratégie de contenu ciblée.",
    'boxboxf1.cta-link': 'Explorer la boutique en ligne ↗',

    /* Savoir-Vivre Case Study */
    'sv.lead':     "Comédie noire réalisée en atelier intensif de 2 semaines, explorant avec ironie le véritable coût de la courtoisie et de la gentillesse dans notre société moderne.",
    'sv.s1-title': 'Le piège de la gentillesse ordinaire.',
    'sv.s1-p1':    "À partir de la consigne académique portant sur les « petits gestes gentils du quotidien », notre équipe a choisi une approche à contre-courant : interroger la place de l'altruisme dans un monde professionnel ultra-individualiste et cadencé par la rentabilité.",
    'sv.s1-p2':    "L'histoire : Valentin est un homme sincère et bienveillant. Pris dans la précipitation de sa routine matinale, il s'arrête systématiquement pour aider les personnes qu'il croise. Ces précieuses minutes perdues s'accumulent jusqu'à son licenciement par son employeur — non par manque de compétence, mais par excès d'humanité.",
    'sv.s2-title': 'Direction artistique et travail de plateau.',
    'sv.s2-p1':    "En tant que cadreur et réalisateur, ma mission comprenait la scénarisation visuelle (découpage technique, choix des focales, gestion de la lumière), la direction des acteurs sur le plateau et la coordination avec le preneur de son live sous un délai strict de 2 semaines.",
    'sv.s3-title': 'Production & Livrables.',
    'sv.s3-p1':    "Le projet s'est conclu par la livraison d'un écosystème de diffusion complet respectant les normes professionnelles : film principal de 2 minutes Full HD avec son live, teaser web (30s), teaser réseaux sociaux (10s), affiche A4 300 dpi et dossier technique complet de 9 pages.",
    'sv.video-btn':   'Consulter la vidéo de court-métrage ↗',
    'sv.teaser30-btn':'Consulter le teaser de 30 secondes ↗',
    'sv.teaser10-btn':'Consulter le teaser de 10 secondes ↗',
    'sv.pdf-btn':     'Consulter le dossier de production (PDF) ↗',

    /* NaturaQuest Case Study */
    'nq.lead':     "Conception d'une application mobile ludo-éducative encourageant l'exploration de la biodiversité locale grâce à des quêtes géolocalisées, la reconnaissance d'espèces par IA et une collection de cartes.",
    'nq.s1-title': 'Reconnecter la jeunesse à la biodiversité locale.',
    'nq.s1-p1':    "Face à la sédentarité croissante et à la méconnaissance des écosystèmes régionaux, le mandat consistait à imaginer une application mobile captivante capable d'inciter les utilisateurs à sortir dehors et observer la faune et la flore de Suisse.",
    'nq.s1-p2':    "Avec mon binôme Gabriel Cappai, nous avons conçu NaturaQuest : une expérience hybride entre le jeu d'exploration, le Pokédex naturaliste et le carnet de terrain scientifique.",
    'nq.s2-title': "Une mécanique d'exploration engageante.",
    'nq.s3-title': "Déroulement type d'une mission.",
    'nq.pdf-btn':  'Consulter le dossier de présentation complet (PDF) ↗',

    /* PetCare Case Study */
    'petcare.lead':     "Application mobile de santé préventive pour animaux de compagnie, centralisant données IoT, météo et profil médical avec transmission instantanée au vétérinaire par QR code.",
    'petcare.s1-title': 'Mieux suivre pour mieux soigner, ensemble.',
    'petcare.s1-p1':    "Lors d'une consultation vétérinaire, les propriétaires peinent souvent à fournir des données fiables et précises sur l'état de leur animal. PetCare résout ce problème par un suivi préventif continu et des alertes contextualisées.",
    'petcare.s1-p2':    "PetCare est 100% gratuit pour les propriétaires et permet aux vétérinaires de préparer les consultations en 1 seconde grâce à un simple QR code scanné, sans logiciel supplémentaire.",
    'petcare.s2-title': 'Agrégation et croisement de 4 sources de données.',
    'petcare.s3-title': 'Du propriétaire au vétérinaire en un scan.',
    'petcare.s3-p1':    "Le vétérinaire scanne le QR code généré par l'application pour afficher instantanément un tableau de bord web synthétique résumant les tendances des 7 derniers jours et les alertes prioritaires.",
    'petcare.btn-synth':'Document de Synthèse (PDF) ↗',
    'petcare.btn-pitch':'Support de Présentation (PDF) ↗',
    'petcare.btn-figma':'Maquettes Complètes (PDF) ↗',

    /* Footer */
    'footer.brand':     "Conception et développement d'expériences digitales avec curiosité.",
    'footer.nav-label': 'Navigation',
    'footer.soc-label': 'Réseaux',
    'footer.cv':        'CV (PDF) ↗',
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
    'ap.cv-btn':     'Télécharger mon CV (PDF) ↗',
    'ap.edu-heig-period': '2023 — Présent',
    'ap.edu-heig-title':  'Ingénierie des Médias — HEIG-VD',
    'ap.edu-heig-sub':    'Bachelor of Science · Yverdon-les-Bains, Suisse',
    'ap.edu-heig-desc':   'Spécialisation en développement web, design UX/UI, programmation front-end, bases de données, gestion de projet et communication digitale. Actuellement en 3e année.',
    'ap.bey-label':  'Personnel',
    'ap.bey-sub':    "Au-delà de l'écran",
    'ap.bey-title':  "Quand je ne conçois pas.",
    'ap.cta-title':  'Envie de collaborer ?',
    'ap.cta-desc':   "Que ce soit pour un projet, un stage ou juste une conversation — je suis toujours disponible.",
    'ap.cta-work':   'Voir mes projets',
    'ap.stat-proj':  'Projets',
    'ap.stat-year':  'Année',
    'ap.stat-ch':    'Suisse',
    'ap.int-preview-cta':  'Découvrir la passion',
    'ap.int-sport':        'Sport',
    'ap.int-sport-desc':   'Football, condition physique & discipline.',
    'ap.int-sport-preview':"Le sport est mon moteur quotidien. Passionné de football et d'entraînement physique, j'y puise ma rigueur, le sens du collectif et le dépassement de soi.",
    'ap.int-cars':         'Voitures',
    'ap.int-cars-desc':    'Design automobile, ingénierie & motorsport.',
    'ap.int-cars-preview': "Une passion née dès le plus jeune âge — du design automobile à l'ingénierie mécanique en passant par le sport auto et la Formule 1.",
    'ap.int-photo':        'Photo & Vidéo',
    'ap.int-photo-desc':   'Lumière, composition & storytelling visuel.',
    'ap.int-photo-preview':"Capturer la lumière, composer des plans et raconter des histoires visuelles. Le prolongement naturel de ma sensibilité créative et technique.",
    'ap.int-animals':      'Animaux',
    'ap.int-animals-desc': 'Loyauté, énergie & connexion essentielle.',
    'ap.int-animals-preview':"Grand amoureux des animaux, de leur authenticité et de leur énergie positive. Passer du temps avec eux me permet de déconnecter et de me ressourcer.",
    'ap.int-gaming':       'Gaming',
    'ap.int-gaming-desc':  'Univers immersifs, ergonomie UI/UX & stratégie.',
    'ap.int-gaming-preview':"Les jeux vidéo m'inspirent par leur narration immersive, la création d'univers interactifs et l'ergonomie poussée de leurs interfaces UX/UI.",
    'ap.int-friends':      'Amis',
    'ap.int-friends-desc': 'Rires partagés, projets & inspiration mutuelle.',
    'ap.int-friends-preview':"Partager des moments forts, des rires et des idées ambitieuses avec mes amis proches constitue la base de mon équilibre et de ma motivation.",
    'pass.back':           'Retour à À propos',
    'pass.label':          'Au-delà de l\'écran',
    'pass.hero-title':     'Ce qui nourrit ma créativité & mon énergie.',
    'pass.hero-desc':      'Une immersion dans ce qui m\'inspire, me motive et m\'équilibre au quotidien en dehors des écrans.',
    'pass.sport-title':    'Sport & Discipline Athlétique',
    'pass.sport-desc':     'Le sport est bien plus qu\'un passe-temps : c\'est un pilier fondamental de mon équilibre. Que ce soit sur le terrain de football, en suivant les grandes compétitions ou lors d\'entraînements physiques réguliers, l\'effort aiguise ma concentration et renforce ma rigueur.',
    'pass.sport-h1':       'Esprit d\'équipe, vision tactique et confiance mutuelle',
    'pass.sport-h2':       'Résilience mentale et constante recherche de progression',
    'pass.sport-h3':       'Le meilleur moyen de recharger les batteries après de longues sessions de design et code',
    'pass.cars-title':     'Design Automobile & Motorsport',
    'pass.cars-desc':      'De l\'aérodynamisme à la précision mécanique en passant par la passion de la Formule 1, l\'automobile représente pour moi la symbiose parfaite entre design industriel de pointe, innovation technologique et émotion pure.',
    'pass.cars-h1':        'Sensibilité aux proportions et à l\'esthétique intemporelle',
    'pass.cars-h2':        'Passion pour la télémétrie F1, les stratégies de course et la performance',
    'pass.cars-h3':        'La connexion émotionnelle entre le pilote, la machine et le détail',
    'pass.photo-title':    'Storytelling Visuel, Photo & Vidéo',
    'pass.photo-desc':     'La photographie et la vidéo entraînent mon œil à observer la lumière, le cadrage et l\'émotion brute. Cette sensibilité visuelle nourrit directement mon travail de designer UI/UX pour créer des interfaces harmonieuses avec du rythme et du contraste.',
    'pass.photo-h1':       'Composition, étalonnage des couleurs et cadrage cinématique',
    'pass.photo-h2':       'Immortaliser des instants authentiques et des paysages marquants',
    'pass.photo-h3':       'Le pont naturel entre création artistique physique et conception de produits digitaux',
    'pass.animals-title':  'Animaux & Reconnexion à la Nature',
    'pass.animals-desc':   'Les animaux apportent une loyauté et une énergie positive incomparables. Passer du temps avec eux et être au grand air est ma manière préférée de m\'éloigner des écrans, de décompresser et de garder les pieds sur terre.',
    'pass.animals-h1':     'L\'antidote idéal à la fatigue numérique et au stress du quotidien',
    'pass.animals-h2':     'Profiter de moments simples, sincères et inconditionnels',
    'pass.animals-h3':     'Rester ancré et attentif au monde naturel',
    'pass.gaming-title':   'Jeux Vidéo, Univers Immersifs & UI Interactive',
    'pass.gaming-desc':    'Le jeu vidéo est une incroyable référence en matière d\'expérience utilisateur. Des interfaces diégétiques intégrées au gameplay jusqu\'aux retours haptiques et à la narration interactive, il démontre comment la technologie peut susciter des émotions fortes.',
    'pass.gaming-h1':      'Analyse des HUDs complexes, des menus accessibles et de l\'onboarding joueur',
    'pass.gaming-h2':      'Résolution de problèmes tactiques et stratégie multijoueur',
    'pass.gaming-h3':      'Source inépuisable d\'inspiration pour les animations et interactions web fluides',
    'pass.friends-title':  'Amis, Moments Partagés & Énergie',
    'pass.friends-desc':   'Au final, ce sont les liens humains qui donnent du sens à tout le reste. Brainstormer des projets ambitieux, partager des rires autour d\'une table ou partir à l\'aventure entre amis proches me procure une énergie et une motivation constantes.',
    'pass.friends-h1':     'S\'entourer de personnes positives, créatives et ambitieuses',
    'pass.friends-h2':     'Créer des souvenirs durables au-delà du travail et des deadlines',
    'pass.friends-h3':     'Un rappel constant de l\'importance de l\'écoute, de l\'empathie et du partage',
    'pass.cta-title':      'Envie d\'échanger ou de collaborer ?',
    'pass.cta-desc':       'Que ce soit pour parler tech, auto, projets de design ou opportunité de stage — ma boîte mail est toujours ouverte.',
    'pass.cta-btn':        'Prendre contact',

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
