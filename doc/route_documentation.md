# :aerial_tramway: Nos différentes routes :
Afin de remplir notre base de données et afficher les données aux utilisateurs, on a ajouté plusieurs routes.

## I. Remplissage de la base de données : 
Seulement l'administrateur peut remplir la base de donnée côté back
**bearer token** : Grace à Strapi on peux créer un token qui nous permettra de mettre à jour la base de données.
### 1. 🎞️  Remplissage de la table Movie :
Pour récupérer les films, on appelle la route : 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/movies/update</a>**
- **GET** : Lire les données.
- **api/tmdp/movies/update** : endpoint ajouter dans le fichier api/tmdb/routes/tmdb.ts
- **code retour** : sur postman, on obtient : 
```json
{
    "message": "Movies imported successfully",
    "count": 20
}
```


### 2. 👨‍💼 Remplissage de la table Actor :
Pour récupérer les acteurs, on appelle la route : 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/actors/update</a>**
- **GET** : Lire les données.
- **api/tmdp/actors/update** : endpoint ajouter dans le fichier api/tmdb/routes/tmdb.ts 
- **code retour** : sur postman, on obtient : 
```json
{
    "message": "Actors imported successfully.",
    "count": 20
}
```

### 3. 📜 Remplissage de la table Genre :
Pour récupérer les genres, on appelle la route : 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">**http://localhost:1337/api/tmdb/genres/update</a>**
- **GET** : Lire les données.
- **api/tmdp/genres/update** : endpoint ajouter dans le fichier api/tmdb/routes/tmdb.ts 
- **code retour** : sur postman, on obtient : 
```json
{
    "message": "Genres imported successfully",
    "count": 20
}
```

### 4. :chart_with_downwards_trend: Remplissage des tables intermédiaire movie-genre et movie-actor :
Pour récupérer les liens entre les trois tables, on appelle la route : 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/link-movies</a>**
- **GET** : Lire les données.
- **api/tmdp/link-movies** : endpoint ajouter dans le fichier api/tmdb/routes/tmdb.ts 
- **code retour** : sur postman, on obtient : 
```json
{
    "message": "All movies processed.",
    "total": 20,
    "linked": 20
}
```

## II. Affichage des données de la base de données aux utilisateurs :
Tous les utilisateurs peuvent récupérer les données de la base de données

### 1. :movie_camera: Affichage des movies :
Afin d'afficher tous les films de la base de données, le front envoie au back une requete :
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/movies**</a>
- **GET** : Lire les données.
- **api/movies** : endpoint créer automatiquement par Strapi.
- **code retour** : sur postman, on obtient : 
```json
{
    "data": [
        {
            "id": 416,
            "documentId": "t2of64xl8kffyakqz0xc9lzm",
            "title": "À contre-sens 3",
            "release_date": "2025-10-15",
            "director": null,
            "createdAt": "2025-10-23T07:02:48.386Z",
            "updatedAt": "2025-10-23T07:02:48.386Z",
            "publishedAt": "2025-10-23T07:02:48.433Z",
            "id_movie": "1156594",
            "overview": "Le mariage de Jenna et Lion marque les retrouvailles entre Noah et Nick après leur rupture. L'incapacité de Nick à pardonner à Noah représente un obstacle difficile à surmonter. Lui, héritier des affaires de son grand-père, et elle, qui débute sa carrière, évitent de raviver la flamme entre eux. Mais, maintenant qu'ils se retrouvent, l'amour l'emportera-t-il sur le ressentiment ?",
            "poster_path": "/iNncvRAgj8SQA25OhjNZeEElWCK.jpg",
            "vote_average": 7.77
        },
        .
        .
        .
    ]
}
```

### 2. 🤵‍♂️ Affichage des acteurs :
Afin d'afficher tous les acteurs de la base de données, le front envoie au back une requete :
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/actors</a>**
- **GET** : Lire les données.
- **api/movies** : endpoint créer automatiquement par Strapi.
- **code retour** : sur postman, on obtient : 
```json
{
    "data": [
        {
            "id": 1836,
            "documentId": "or54d6esrf6b6t1oc685fxa6",
            "last_name": "Guevara",
            "first_name": "Gabriel",
            "id_actor": "2786960",
            "createdAt": "2025-10-23T07:03:04.801Z",
            "updatedAt": "2025-10-23T07:03:04.801Z",
            "publishedAt": "2025-10-23T07:03:04.828Z",
            "profile_path": "/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg",
            "gender": 2,
            "deathday": null,
            "place_of_birth": "Madrid, Spain",
            "biography": "Gabriel Guevara est  est un acteur franco-espagnol, surtout connu pour son rôle récurrent de Cristian \"Cris\" Miralles Haro dans Skam España, l’adaptation espagnole de Skam, et comme Nick Leister dans le film original Prime Video My Fault, basé sur la série de romans à succès Wattpad de Mercedes Ron.",
            "birthday": "2001-02-06",
            "known_for_department": "Acting"
        },
        {
            "id": 1838,
            "documentId": "lote8ks1rcypxxvlvq9ch5at",
            "last_name": "Ασίκη",
            "first_name": "Νατάσα",
            "id_actor": "2373436",
            "createdAt": "2025-10-23T07:03:04.991Z",
            "updatedAt": "2025-10-23T07:03:04.991Z",
            "publishedAt": "2025-10-23T07:03:05.011Z",
            "profile_path": "/oF5LBSZCi7EDsRqNr0lJNoK0kSy.jpg",
            "gender": 1,
            "deathday": null,
            "place_of_birth": null,
            "biography": "",
            "birthday": null,
            "known_for_department": "Acting"
        },
        .
        .
        .
    ]
}
```

### 3. 🔢 Affichage des genres :
Afin d'afficher tous les genres de la base de données, le front envoie au back une requete :
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/genres</a>**
- **GET** : Lire les données.
- **api/movies** : endpoint créer automatiquement par Strapi.
- **code retour** : sur postman, on obtient : 
```json
{
    "data": [
        {
            "id": 40,
            "documentId": "mhf1vxzep4iddnfq2h3d808i",
            "name": "Action",
            "id_genre": 28,
            "createdAt": "2025-10-23T07:03:19.759Z",
            "updatedAt": "2025-10-23T07:03:19.759Z",
            "publishedAt": "2025-10-23T07:03:19.786Z"
        },
        {
            "id": 42,
            "documentId": "othjpo3ews2r5pdzy6eoju6a",
            "name": "Aventure",
            "id_genre": 12,
            "createdAt": "2025-10-23T07:03:19.843Z",
            "updatedAt": "2025-10-23T07:03:19.843Z",
            "publishedAt": "2025-10-23T07:03:19.859Z"
        },
        .
        .
        .
    ]
}
```

### 4. 📽️ Affichage d'une movie :
Afin d'afficher un film de la base de données, le front envoie au back une requete :
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/movies/:documentId</a>**
- **GET** : Lire les données.
- **api/genres/:documentId** : endpoint créer automatiquement par Strapi.
- **code retour** : sur postman, on obtient  pour l'exemple GET <a href="" style="color:red;">http://localhost:1337/api/movies/t2of64xl8kffyakqz0xc9lzmt2of64xl8kffyakqz0xc9lzm</a>: 
```json
{
    "data": {
        "id": 416,
        "documentId": "t2of64xl8kffyakqz0xc9lzm",
        "title": "À contre-sens 3",
        "release_date": "2025-10-15",
        "director": null,
        "createdAt": "2025-10-23T07:02:48.386Z",
        "updatedAt": "2025-10-23T07:02:48.386Z",
        "publishedAt": "2025-10-23T07:02:48.433Z",
        "id_movie": "1156594",
        "overview": "Le mariage de Jenna et Lion marque les retrouvailles entre Noah et Nick après leur rupture. L'incapacité de Nick à pardonner à Noah représente un obstacle difficile à surmonter. Lui, héritier des affaires de son grand-père, et elle, qui débute sa carrière, évitent de raviver la flamme entre eux. Mais, maintenant qu'ils se retrouvent, l'amour l'emportera-t-il sur le ressentiment ?",
        "poster_path": "/iNncvRAgj8SQA25OhjNZeEElWCK.jpg",
        "vote_average": 7.77
    },
    "meta": {}
}
```
