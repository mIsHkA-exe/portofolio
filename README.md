# 👨‍💻 Portfolio — Kyllian Siewe Tiague

> **Cybersecurity Student • Developer • Building • Learning • Securing**

Bienvenue sur le dépôt de mon **portfolio personnel**. 

lien : https://kyllian-siewe-portofolio.netlify.app/

Ce projet présente mon parcours, mes compétences, mes projets et mon évolution dans le domaine du numérique, avec un intérêt particulier pour la **cybersécurité**, le **développement logiciel**, les **réseaux**, le **Cloud** et les pratiques **DevSecOps**.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)
  
🌐 **Live website:** *to be added after deployment*

---

## 📌 About the project

Ce portfolio a été conçu comme un site web **statique**, développé entièrement avec les technologies natives du Web.

L'objectif est de disposer d'un espace simple et performant permettant de présenter :

* 🎓 Mon parcours académique
* 🛡️ Mes compétences en cybersécurité
* 💻 Mes compétences en développement
* 🚀 Mes projets personnels et académiques
* 🔧 Les technologies et outils que j'utilise
* 📈 Mes objectifs professionnels
* 🔎 Mon évolution dans le domaine de la cybersécurité

Le projet privilégie une architecture simple, maintenable et compréhensible plutôt que l'utilisation d'un framework inutilement complexe pour un contenu essentiellement statique.

---

## ✨ Features

* 📱 **Responsive design** — adapté aux ordinateurs, tablettes et mobiles
* 🎨 **Custom UI** — design entièrement personnalisé
* ⚡ **No framework** — HTML, CSS et JavaScript natifs
* 🧩 **Modular CSS architecture**
* 🔍 **Project filtering** par catégorie
* 🎞️ **Scroll reveal animations**
* ♿ **Accessibility-focused**
* 🌙 **Dark interface**
* 🧠 **Progressive enhancement**
* ⌨️ **Keyboard navigation**
* 🥚 **Easter egg** sur la page d'accueil
* 🚫 **No build step**
* 📦 **No external dependencies**

---

## 🛠️ Tech Stack

### Frontend

| Technology            | Usage                                   |
| --------------------- | --------------------------------------- |
| 🟧 **HTML5**          | Structure et contenu                    |
| 🎨 **CSS3**           | Design, responsive layout et animations |
| 🟨 **JavaScript**     | Interactions et fonctionnalités         |
| 🔤 **Space Grotesk**  | Titres et interface                     |
| 🔤 **Inter**          | Texte courant                           |
| 💻 **JetBrains Mono** | Éléments techniques                     |

### CSS

* CSS Custom Properties
* CSS Grid
* Flexbox
* `clamp()`
* Media Queries
* CSS animations
* BEM-inspired naming convention

### JavaScript

* Vanilla JavaScript
* DOM API
* `IntersectionObserver`
* Event listeners
* `data-*` attributes
* Accessibility APIs

### Hosting

* ☁️ **Netlify**

---

## 🧠 Why Vanilla Web Technologies?

Ce portfolio ne nécessite pas de framework frontend.

Le contenu étant principalement statique, utiliser React, Vue, Angular ou un autre framework ajouterait une couche de complexité qui n'apporterait pas nécessairement de valeur au projet.

Trois principes ont donc guidé l'architecture :

### 1. 📄 Static HTML

Chaque page correspond directement à un fichier HTML.

> What ships is what you read.

Cela permet d'avoir une structure simple, facilement compréhensible et directement exploitable par le navigateur.

### 2. 🎨 Vanilla CSS

Le design du portfolio est entièrement personnalisé.

Aucun framework CSS n'est utilisé afin de conserver une identité visuelle propre au projet.

### 3. ⚡ Progressive Enhancement

Le contenu principal est présent directement dans le HTML.

JavaScript intervient uniquement pour ajouter des fonctionnalités :

* animations ;
* filtres ;
* interactions ;
* Easter egg.

Si JavaScript est désactivé, le contenu principal du site reste accessible.

---

# 📂 Project Structure

```text
portfolio/
│
├── index.html
├── about.html
├── skills.html
├── projects.html
│
├── projects/
│   ├── davinci-custom-garage.html
│   ├── meno-clean-services.html
│   ├── cpu-simulator.html
│   ├── show-reservation.html
│   └── das-auto.html
│
├── assets/
│   │
│   ├── css/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   │
│   ├── js/
│   │   ├── filters.js
│   │   ├── reveal.js
│   │   └── easter-egg.js
│   │
│   └── images/
│       └── projects/
│
├── favicon.svg
├── favicon.ico
└── apple-touch-icon.png
```

Les pages présentes dans `projects/` utilisent `../` pour accéder aux ressources situées à la racine du projet.

---

# 🎨 CSS Architecture

Le CSS est organisé en quatre fichiers ayant chacun une responsabilité précise.

```text
tokens.css
     ↓
base.css
     ↓
layout.css
     ↓
components.css
```

### `tokens.css`

Contient les valeurs réutilisables du design :

* couleurs ;
* typographie ;
* espacements ;
* rayons ;
* autres variables CSS.

### `base.css`

Contient les styles fondamentaux :

* reset ;
* éléments HTML natifs ;
* styles par défaut.

### `layout.css`

Gère la structure et le positionnement :

* Grid ;
* Flexbox ;
* dimensions ;
* positionnement ;
* espacements structurels.

### `components.css`

Gère l'apparence des composants :

* boutons ;
* cartes ;
* navigation ;
* badges ;
* états interactifs ;
* bordures ;
* couleurs.

---

# 🎨 Design System

Le portfolio utilise une interface sombre basée sur un **bleu-noir profond** plutôt qu'un noir absolu.

### Design Tokens

| Token                | Value     |
| -------------------- | --------- |
| `--color-bg`         | `#0B0B12` |
| `--color-surface`    | `#14141F` |
| `--color-text`       | `#EDEDF5` |
| `--color-text-muted` | `#A3A3BA` |
| `--color-accent`     | `#B49CFF` |
| `--color-highlight`  | `#F0B274` |

Les variables CSS permettent de modifier rapidement l'identité visuelle du site sans devoir modifier chaque composant individuellement.

---

# 📱 Responsive Design

Le site adopte une approche **mobile-first**.

Les layouts utilisent autant que possible des mécanismes CSS flexibles afin de limiter le nombre de breakpoints nécessaires.

Exemple :

```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```

La typographie utilise également `clamp()` afin de pouvoir s'adapter progressivement à la taille de l'écran.

```css
font-size: clamp(2rem, 5vw, 4rem);
```

L'objectif est d'éviter de concevoir plusieurs interfaces différentes et de laisser le navigateur adapter naturellement le layout.

---

# ⚙️ JavaScript Architecture

Le JavaScript est divisé en plusieurs scripts indépendants.

Tous les scripts sont chargés avec `defer`.

```text
assets/js/
├── filters.js
├── reveal.js
└── easter-egg.js
```

## 🔎 `filters.js`

Permet de filtrer les projets selon leur catégorie.

Les cartes utilisent :

```html
data-category
```

et les boutons utilisent :

```html
data-filter
```

Le système utilise également `aria-pressed` afin de communiquer l'état du filtre aux technologies d'assistance.

Les projets masqués utilisent l'attribut :

```html
hidden
```

afin de les retirer également de l'arbre d'accessibilité.

---

## 🎞️ `reveal.js`

Gère l'apparition progressive des éléments lors du scroll.

La fonctionnalité utilise :

```javascript
IntersectionObserver
```

Chaque élément est désobservé après son apparition afin de limiter le travail effectué par le navigateur.

Le script vérifie également la préférence utilisateur :

```text
prefers-reduced-motion
```

afin de désactiver les animations lorsque l'utilisateur préfère limiter les mouvements.

---

## 🥚 `easter-egg.js`

Un Easter egg est présent sur la page d'accueil.

Le système détecte une séquence de caractères saisie au clavier et affiche temporairement une interface spéciale.

Le script utilise un **sliding buffer** plutôt qu'un simple index de progression afin de gérer correctement les caractères répétés.

Le comportement peut être interrompu :

* ⏱️ automatiquement après quelques secondes ;
* 🖱️ avec un clic ;
* ⌨️ avec `Escape`.

---

# ♿ Accessibility

L'accessibilité a été prise en compte dès la conception.

### Navigation

* Skip link
* Navigation clavier
* `:focus-visible`
* Structure sémantique HTML5
* Sections correctement identifiées

### Screen readers

* `aria-labelledby`
* `aria-pressed`
* Live regions
* Visually hidden headings
* `hidden` pour les éléments filtrés

### Motion

Les animations respectent :

```text
prefers-reduced-motion
```

Lorsqu'une réduction des animations est demandée, les durées sont réduites afin de préserver le comportement attendu des événements CSS.

---

# 🚀 Running Locally

Aucune installation de dépendances n'est nécessaire.

Il suffit de servir le dossier avec un serveur HTTP local.

### Python

```bash
python3 -m http.server 8000
```

Puis ouvrir :

```text
http://localhost:8000
```

### Alternative

Avec VS Code, une extension de serveur local peut également être utilisée.

Il est recommandé d'utiliser un serveur HTTP plutôt que d'ouvrir directement :

```text
file:///...
```

car certains comportements du navigateur peuvent différer lorsqu'une page est exécutée directement depuis le système de fichiers.

---

# ☁️ Deployment

Le portfolio est prévu pour être déployé sur **Netlify**.

Architecture de déploiement :

```text
GitHub Repository
       │
       ▼
    Netlify
       │
       ▼
   Production
```

Aucune étape de build n'est nécessaire.

```text
Build command: None
Publish directory: /
```

Chaque modification poussée sur la branche principale peut déclencher automatiquement un nouveau déploiement.

---

# 🧪 Development Principles

Le projet suit plusieurs principes de développement :

### 🧩 Separation of concerns

Chaque couche possède une responsabilité claire.

```text
HTML        → Structure
CSS         → Presentation
JavaScript  → Behaviour
```

### ♻️ Reusability

Les composants utilisent des classes réutilisables plutôt que des sélecteurs fortement dépendants de la structure HTML.

### 📦 Minimal dependencies

Le projet ne dépend d'aucun framework ou package externe pour fonctionner.

### 🔐 Maintainability

L'organisation des fichiers doit permettre de modifier une fonctionnalité sans devoir parcourir l'ensemble du projet.

### ⚡ Performance

Le site privilégie :

* peu de JavaScript ;
* aucune dépendance lourde ;
* CSS natif ;
* images optimisées ;
* chargement différé lorsque pertinent.

---

# 📚 Projects

Le portfolio présente plusieurs projets réalisés dans le cadre de mon apprentissage et de ma formation.

| Project                   | Technologies          | Domain                |
| ------------------------- | --------------------- | --------------------- |
| 🚗 Da Vinci Custom Garage | HTML, CSS, JavaScript | Web Development       |
| 🧹 Meno Clean Services    | HTML, CSS, JavaScript | Web Development       |
| 🖥️ CPU Simulator         | C                     | Computer Architecture |
| 🎬 Show Reservation       | Symfony, PHP, SQL     | Web Development       |
| 🚘 DAS Auto               | Web technologies      | Web Development       |

Ces projets représentent différentes étapes de mon apprentissage et me permettent de développer progressivement mes compétences techniques.

---

# 🛡️ Cybersecurity Focus

Mon parcours académique est orienté vers la **cybersécurité**.

Les domaines qui m'intéressent particulièrement sont :

```text
Cybersecurity
     │
     ├── Network Security
     │
     ├── Cloud Security
     │
     ├── DevSecOps
     │
     ├── System Administration
     │
     ├── Secure Development
     │
     └── Infrastructure Security
```

L'objectif est de comprendre la sécurité non seulement comme une discipline indépendante, mais également comme une composante intégrée au développement, aux infrastructures et au Cloud.

---

# 🎯 Roadmap

### Portfolio

* [x] Structure HTML
* [x] Design responsive
* [x] Architecture CSS
* [x] Interactions JavaScript
* [x] Project filtering
* [x] Scroll animations
* [x] Accessibility features
* [ ] Production domain
* [ ] Open Graph metadata
* [ ] Twitter/X Card metadata
* [ ] `robots.txt`
* [ ] Sitemap
* [ ] WebP image optimization
* [ ] Lighthouse optimization
* [ ] Keyboard-only audit

### Career

* [ ] Develop more cybersecurity projects
* [ ] Build networking projects
* [ ] Develop Cloud Security skills
* [ ] Practice DevSecOps
* [ ] Complete cybersecurity labs
* [ ] Gain professional experience
* [ ] Build a stronger technical portfolio

---

# 📈 Future Improvements

Le portfolio évoluera progressivement avec mon parcours.

Les prochaines évolutions pourront notamment concerner :

* 🔐 Présentation de projets de cybersécurité
* ☁️ Projets Cloud
* 🔗 Projets réseau
* 🐳 Containerisation
* ⚙️ CI/CD
* 🛡️ DevSecOps
* 📊 Monitoring & observability
* 🧪 Security testing
* 📝 Technical write-ups

L'objectif n'est pas seulement de présenter des projets terminés, mais également de montrer **la progression de mes compétences techniques**.

---

# 👨‍💻 Author

## Kyllian Siewe Tiague

🎓 **Cybersecurity Student — ESILV**

📍 Île-de-France, France

### Areas of interest

```text
Cybersecurity
DevSecOps
Cloud Security
Network Security
Web Development
Systems
Infrastructure
```

### Currently learning

* 🐧 Linux
* 🌐 Networking
* 🐍 Python
* 💻 C
* 🟪 PHP / Symfony
* 🟨 JavaScript
* 🗄️ SQL
* ☁️ Cloud technologies
* 🔐 Cybersecurity

---

## 🔗 Connect

**GitHub:** `mIsHkA-exe`

**LinkedIn:** `kyllian-siewe-tiague`

---

## 📜 License

This portfolio is a personal project.

The source code is publicly available for educational and demonstration purposes.

© 2026 **Kyllian Siewe Tiague**
