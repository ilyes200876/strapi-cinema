import type { TMDBMoviesResponse } from '../type/tmdb';
import type { TMDBActorsResponse } from '../type/tmdb';

export default () => ({
  async getPopularMovies() {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const { results } = await response.json() as TMDBMoviesResponse;
    // return data; 
    // console.log('TMDB API response:', data);

    // const results = data.results;

    if (!results || !Array.isArray(results)) {
      throw new Error('TMDB API response does not contain a valid "results" array.');
    }

    for (const movie of results) {
      const existing = await strapi.entityService.findMany('api::movie.movie', {
        filters: { id_movie: String(movie.id) },
      });

      if (existing.length === 0) {
        await strapi.entityService.create('api::movie.movie', {
          data: {
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            description: movie.description,
            id_movie: String(movie.id),
          },
        });
      }
    }

    console.log('✅ Import movie terminé');
    return { message: 'Movies imported successfully', count: results.length };
  },
  

  async getMovieDetails(movieId: number | string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(String(movieId))}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },

  async getPopularActors(){
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const { results } = await response.json() as TMDBActorsResponse;
    // return data; 
    // console.log('TMDB API response:', data);

    // const results = data.results;

    if (!results || !Array.isArray(results)) {
      throw new Error('TMDB API response does not contain a valid "results" array.');
    }

    for (const actor of results) {
      const existing = await strapi.entityService.findMany('api::actor.actor', {
        filters: { id_actor: String(actor.id) },
      });

      if (existing.length === 0) {
        const fullName = actor.name.split(' ');
        const first_name = fullName.slice(0, -1).join(' ');
        const last_name = fullName.slice(-1).join('');
        await strapi.entityService.create('api::actor.actor', {
          data: {
            first_name,
            last_name,
            // birth_date: actor.birth_date,
            // poster_path: movie.poster_path,
            // vote_average: movie.vote_average,
            id_actor: String(actor.id),
          },
        });
        console.log(`le nom de l'acteur est ${actor.name}`);
      }
    }
    console.log("import acteur réussi");

    return { message: 'Actors imported successfully', count: results.length };
  },

  async searchActors(query: string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=fr-FR&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
})
    