# Nuno Amaro — Portfolio

Portfolio personnel de Nuno Amaro, étudiant en ingénierie des médias à la HEIG-VD. Le site rassemble ses projets, son parcours, ses passions et ses coordonnées dans une expérience animée construite avec Vite, TypeScript, GSAP et Lenis. Le contenu est disponible en français, anglais et portugais; la langue choisie est mémorisée entre les pages.

## Lancer le site

Depuis ce dossier, dans un terminal :

```bash
npm install
npm run dev
```

Ouvre ensuite l’adresse affichée par Vite, généralement `http://localhost:5173`. Pour vérifier la version de production : `npm run build`.

## Pages

- `index.html` : accueil animé, projets sélectionnés, expertises et liens de contact.
- `public/work/index.html` : les dix projets du portfolio.
- `public/work/*.html` : études de cas détaillées.
- `public/about.html`, `public/passions.html` et `public/contact.html` : parcours, passions et contact.
- Les pages importées conservent leurs contenus, traductions et interactions d’origine; leur palette et leur typographie ont été rapprochées de la page d’accueil.

## Modifier le contenu

- Accueil : textes, projets mis en avant, expertises et liens dans `src/content.ts`; traductions de l’accueil dans `src/translations.ts`; génération du contenu dans `src/render.ts`.
- Animations de l’accueil : `src/main.ts`; styles de l’accueil : `src/styles.css`.
- Études de cas et pages secondaires : HTML dans `public/work/`, `public/about.html`, `public/passions.html` et `public/contact.html`.
- Styles et scripts des pages secondaires : `public/css/` et `public/js/`.
- Images, vidéos et documents : `public/assets/`.

Les fichiers et médias d’origine sont conservés dans `public/` afin que toutes les pages et ressources restent disponibles pendant le développement et dans le build.

## Déploiement

Lance `npm run build`, puis publie le contenu du dossier `dist/` sur un hébergeur statique.

## Licences

La structure et certains éléments de design proviennent du template AUVRA de HorizonX, dont l’utilisation est couverte par l’adhésion de son propriétaire. Les fichiers sources du template ne doivent pas être redistribués ou revendus comme template. Conditions : https://horizonx.so/terms. Les crédits et licences des bibliothèques et ressources d’origine sont dans `CREDITS.md`.
