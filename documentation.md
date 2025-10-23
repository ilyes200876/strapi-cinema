# :aerial_tramway: Our different routes:
In order to fill our database and display the data to users, we have added several routes.

## I. Filling the database : 
Only the administrator can fill the database on the back end.
**bearer token** : Thanks to Strapi, we can create a token that will allow us to update the database.
### 1. 🎞️  Filling the Movie table:
To retrieve the movies, we call the route: 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/movies/update</a>**
- **GET**: Read the data.
- **api/tmdp/movies/update**: add endpoint to the file api/tmdb/routes/tmdb.ts
- **code retour**: On Postman, we get: 
```json
{
    "message": "Movies imported successfully",
    "count": 20
}
```


### 2. 👨‍💼 Filling the Actor table:
To retrieve the actors, we call the route: 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/actors/update</a>**
- **GET**: Read the data.
- **api/tmdp/actors/update**: add endpoint to the file api/tmdb/routes/tmdb.ts 
- **code retour**: On Postman, we get: 
```json
{
    "message": "Actors imported successfully.",
    "count": 20
}
```

### 3. 📜 Filling the Genre table:
To retrieve the genres, we call the route: 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/genres/update</a>**
- **GET**: Read the data.
- **api/tmdp/genres/update**: add endpoint to the file api/tmdb/routes/tmdb.ts 
- **code retour**: On Postman, we get:
```json
{
    "message": "Genres imported successfully",
    "count": 20
}
```

### 4. :chart_with_downwards_trend: Filling of the intermediate tables movie-genre et movie-actor:
To retreive the links between the three tables, we call the route: 
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/tmdb/link-movies</a>**
- **GET**: Read the data.
- **api/tmdp/link-movies**: add endpoint to the file api/tmdb/routes/tmdb.ts 
- **code retour**: On Postman, we get: 
```json
{
    "message": "All movies processed.",
    "total": 20,
    "linked": 20
}
```

## II. Displaying database data to users:
All users can retrieve the database data.

### 1. :movie_camera: Displaying the movies:
In order to display all the movies from the database, the front end sends a request to the back end:
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/movies**</a>
- **GET**: Read the data.
- **api/movies**: Endpoint created automatically by Strapi.
- **code retour**: On Postman, we get: 
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

### 2. 🤵‍♂️ Displaying the acteurs:
In order to display all the actors from the database, the front end sends a request to the back end:
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/actors</a>**
- **GET**: Read the data.
- **api/movies**: Endpoint created automatically by Strapi.
- **code retour**: On Postman, we get: 
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

### 3. 🔢 Displaying the genres:
In order to display all the genres from the database, the front end sends a request to the back end:
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/genres</a>**
- **GET**: Read the data.
- **api/movies**: Endpoint created automatically by Strapi.
- **code retour**: On Postman, we get: 
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

### 4. 📽️ Displaying one movie :
In order to display one movie from the database, the front end sends a request to the back end:
**<span style="color: green;">GET</span> <a href="" style="color: black; text-decoration: none;">http://localhost:1337/api/movies/:documentId</a>**
- **GET**: Read the data.
- **api/genres/:documentId**: Endpoint created automatically by Strapi.
- **code retour**: On Postman, we get for this exemple: GET <a href="" style="color:red;">http://localhost:1337/api/movies/t2of64xl8kffyakqz0xc9lzmt2of64xl8kffyakqz0xc9lzm</a>: 
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
