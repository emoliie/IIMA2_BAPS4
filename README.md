# Rueil Partage

## 📌 Description
Rueil Partage est une plateforme solidaire de **don et d'échange alimentaire** destinée aux habitants de **Rueil-Malmaison**. Ce projet a été développé dans le cadre de la **Bourse au Projet du Semestre 4** à l'**IIM Digital School**, avec pour objectif de **réduire le gaspillage alimentaire** et de **favoriser l'entraide locale**.

Grâce à cette plateforme, les utilisateurs peuvent :
- **Déposer gratuitement des aliments** dont ils n'ont plus besoin.
- **Récupérer des denrées** partagées par d'autres habitants.
- **Créer du lien social** en participant à une initiative solidaire et responsable.

## 🚀 Technologies utilisées
Le projet a été conçu avec les technologies suivantes :
- **Front-end :** React, Next.js, TypeScript
- **Back-end :** Supabase (PostgreSQL, Authentification)
- **UI Components :** Tailwind CSS, Shadcn/ui

## 🔧 Installation et exécution
### 1️⃣ Prérequis
- Node.js (>= 16.x)
- NPM ou Yarn
- Un compte Supabase (pour la gestion de la base de données)

### 2️⃣ Cloner le dépôt
```bash
git clone https://github.com/emoliie/IIMA2_BAPS4.git
cd IIMA2_BAPS4
```

### 3️⃣ Installer les dépendances
Avec npm :
```bash
npm install
```
Ou avec Yarn :
```bash
yarn install
```

### 4️⃣ Configurer les variables d'environnement
Créez un fichier `.env.local` à la racine du projet et ajoutez :
```env
NEXT_PUBLIC_SUPABASE_URL=Votre_URL_Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=Votre_Clé_Supabase
```

### 5️⃣ Lancer le projet en local
```bash
npm run dev
```
Ou avec Yarn :
```bash
yarn dev
```
Le projet sera accessible à l'adresse **http://localhost:3000**.

## 📌 Fonctionnalités principales
- 📍 **Inscription et connexion** (via Supabase Auth)
- 📦 **Ajout et suppression d'annonces** de don alimentaire
- 🔍 **Recherche et filtrage** des annonces par catégorie
- 💬 **Messagerie entre utilisateurs** pour organiser les échanges
- 📊 **Statistiques sur l'impact environnemental**

## 📌 Roadmap
🔜 **Prochaines améliorations prévues :**
- 📲 Version mobile optimisée
- 🏆 Système de points pour récompenser les contributeurs actifs
- 📅 Calendrier des événements locaux liés à l'alimentation durable

## 🛠️ Contribution
Les contributions sont les bienvenues ! Pour proposer une amélioration :
1. **Fork** le projet
2. Crée une **branche feature** : `git checkout -b ma-feature`
3. Fais tes modifications et **commit** : `git commit -m "Ajout de ma feature"`
4. Pousse la branche et ouvre une **Pull Request**

## 💬 Contact
Si vous avez des questions ou des suggestions, n'hésitez pas à contacter l'équipe via [GitHub Issues](https://github.com/emoliie/IIMA2_BAPS4/issues).

---
💚 **Ensemble, réduisons le gaspillage alimentaire et favorisons l'entraide locale !**

