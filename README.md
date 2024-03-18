## Introduction

J'ai développé ce projet avec Next.js en react. C'est un semblant de site e-commerce de jeux vidéos avec un panier et un onglet "Admin" qui permet de modifier la base de données (donc le nom, prix... des produits vendus). Cela me permet de montrer que je connais les bases en terme de programmation de sites web ainsi que de gestion de base de données postgreSQL. Ce projet n'est pas déployé sur un serveur, il est toujours en contexte de développement, il faudra donc le lancer avec npm :

```bash
npm run dev
```

puis lancer [localhost:3000](http://localhost:3000/) sur un navigateur web.

## Base de données

L'utilisation d'une base de données en local peut être contraignante, j'ai donc mis une option "utiliserDB" en ligne 10 de pages/index.js mis par défaut à false.
Lorsque l'option est à false, les données sont récupérées du fichier data.js au lieu de se connecter à une base de données. Cela enlève l'onglet "Admin" qui permet de modifier la base de données.

### Création de la base de données

Pour que le projet fonctionne avec une base de données, il faut que postgreSQL soit installé sur l'ordinateur. Il faudra modifier les paramètres du fichier .env afin qu'ils correspondent à votre configuration. Il faudra ensuite créer la base de données :

```bash
createdb reactdb
psql reactdb
```

puis dans psql :

```sql
CREATE TABLE jeux (
id integer,
img jsonb,
nom text,
disposur text[],
prix jsonb,
description text
);
COPY jeux FROM 'db-content.txt';
```
