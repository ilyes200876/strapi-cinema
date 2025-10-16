# 🎞️ US-14 — Parcours utilisateurs  
**Objectif :** Cartographier les parcours clés afin d’assurer une navigation fluide et une expérience utilisateur cohérente entre les écrans (films et acteurs).  
**Personas associés :**  
- Camille, le chercheur d’inspiration  
- Alex, le fan de Leonardo DiCaprio  

---

## 🧭 Parcours utilisateur 1 – Le chercheur d’inspiration

### 👤 Persona concerné
**Camille**, 29 ans, cinéphile occasionnel, cherche un film pour sa soirée du dimanche.

### 🌐 Contexte
- Support : smartphone  
- Moment : fin de week-end, recherche de détente  
- Objectif : trouver rapidement une idée de film à regarder

### 🪜 Étapes du parcours

| Étape | Action / Interaction | Écran ou fonctionnalité | Émotion | Irritants potentiels | Opportunités / solutions |
|:--|:--|:--|:--|:--|:--|
| 1 | Ouvre la page d’accueil de CineVerse | Page d’accueil / liste des films | Curiosité | Page vide, lenteur | Précharger les films populaires depuis TMDb |
| 2 | Fait défiler les affiches | Grille responsive de cartes (poster + titre + année) | Engagement | Trop de texte, peu d’images | Affiches TMDb et titres courts |
| 3 | Tape un mot-clé (ex. : “thriller”) | Barre de recherche | Intérêt | Recherche lente ou sans résultat | Filtrage instantané (debounce) + message “Aucun résultat” |
| 4 | Clique sur un film | Fiche film | Excitation | Synopsis trop long, navigation confuse | Mise en page claire : titre, date, réalisateur, top 5 acteurs, résumé concis |
| 5 | Trouve son film du soir | Fin du parcours | Satisfaction | — | Ajouter lien “Voir sur TMDb” ou “Disponible sur…” |

### ✅ Synthèse
- Parcours **mobile-first** et **visuel**  
- Accent sur la **découverte rapide**  
- Moins de **2 scrolls** pour trouver un film pertinent  

---

## 🧭 Parcours utilisateur 2 – Le fan de Leonardo DiCaprio

### 👤 Persona concerné
**Alex**, 35 ans, passionné de cinéma, souhaite consulter toute la filmographie de son acteur favori.

### 🌐 Contexte
- Support : mobile ou tablette  
- Moment : temps libre, après une séance de cinéma  
- Objectif : retrouver tous les films de Leonardo DiCaprio

### 🪜 Étapes du parcours

| Étape | Action / Interaction | Écran ou fonctionnalité | Émotion | Irritants potentiels | Opportunités / solutions |
|:--|:--|:--|:--|:--|:--|
| 1 | Saisit “Leonardo DiCaprio” dans la recherche | Barre de recherche (auto-suggestion) | Motivation | Aucun résultat, lenteur | Auto-complétion via API Strapi “actors” |
| 2 | Clique sur la fiche acteur | Fiche acteur | Enthousiasme | Photo absente, bio trop dense | Photo, biographie courte, date de naissance visible |
| 3 | Consulte la liste des films de l’acteur | Grille de cartes films | Plaisir | Liste incomplète ou non triée | Trier par année, pagination fluide |
| 4 | Clique sur un film pour détails | Fiche film | Nostalgie | Difficulté de retour | Bouton “← Retour” visible, historique navigation |
| 5 | Revient à la fiche acteur | Fin du parcours | Satisfaction | — | Indiquer “27 films listés” pour feedback positif |

### ✅ Synthèse
- Navigation **circulaire acteur ↔ film**  
- **Trier** et **filtrer** par année  
- Parcours complet en **moins de 3 clics**

---

## 🗺️ Schéma synthétique du flux

[Accueil / Liste films]  
↓  
[Recherche film / acteur] ←→ [Filtres]  
↓  
[Fiche Film] ←→ [Fiche Acteur]  
↖──────────────↙  
Navigation bidirectionnelle