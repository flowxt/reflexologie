# Réflexologie — Delphine Eminet

Site vitrine (Next.js 16 + Tailwind CSS v4) pour Delphine Eminet, réflexologue à
Saint-Jorioz et Annecy. Design épuré aux couleurs « paon » (dégradé bleu-vert)
avec effets de scintillement, présentation interactive en bulles, et réservation
en ligne via cal.com.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Où modifier le contenu

Tout le texte éditorial est centralisé dans **`lib/content.ts`** :

- `SITE` — nom, baseline, **`calLink`** (identifiant cal.com), e-mail de contact.
- `CABINETS` — adresses / horaires (Saint-Jorioz, Annecy le mardi après-midi).
- `PARCOURS` — bulles autour de la photo (sage-femme, petite enfance, Montessori…).
- `KEYWORDS` — les 3 mots mis en avant : Stress, Anxiété, Angoisse.
- `PUBLICS` — spécialisations (grossesse, nourrissons, ados, neuro-atypiques,
  endométriose, couples/PMA…).
- `TARIFS` — grille tarifaire complète (plantaire, palmaire, abonnements, cas
  particuliers).
- `FAIRY` — texte du concept « fée ».

## À configurer avant la mise en ligne

1. **cal.com** : remplacer `SITE.calLink` dans `lib/content.ts` par l'identifiant
   réel de la cliente (ex. `delphine-eminet/reflexologie-plantaire`). On peut créer
   un type d'événement par cabinet (Saint-Jorioz / Annecy mardi PM).
2. **Photo** : remplacer `public/element/delphine.jpg` par la vraie photo (même nom).
3. **E-mail / téléphone** : renseigner `SITE.email` (et `SITE.phone`).
4. **Fées** : les visuels sont détourés automatiquement (fond rendu transparent)
   dans `public/element/fee-clean.png` et `fee2-clean.png`.

## Notes

- Les fichiers sources `.docx` / `.pdf` présents dans `public/element/` sont servis
  publiquement. Les retirer de `public/` avant la mise en production si confidentiels.
- Effets : traînée de paillettes au curseur (`components/SparkleCursor.tsx`),
  fée-curseur dans la section magie, animations désactivées si l'utilisateur a
  activé « réduire les animations ».

## Pages

- `/` — Accueil : Hero, présentation (bulles → modale), Stress/Anxiété/Angoisse
  (cartes → modale), la réflexologie, pour qui, section fée.
- `/reservation` — Tarifs, formules/abonnements et réservation en ligne (cal.com).
- `/contact` — Coordonnées, cabinets et formulaire de contact.

Le `Header` et le `Footer` sont dans `app/layout.tsx` (communs à toutes les pages).

## Composants principaux

`components/` : `Header`, `Footer`, `PageBanner`, `Hero`, `Logo` (logo recréé en
SVG), `Sparkles` (quelques étoiles, Hero uniquement), `Modal`, `Presentation`
(photo + bulles), `Keywords`, `Reflexologie`, `Publics`, `FairySection` (fée
animée + poussière d'étoiles au curseur), `Tarifs`, `Reservation`, `Contact`.
