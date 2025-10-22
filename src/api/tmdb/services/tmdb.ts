import type { TMDBMoviesResponse } from '../type/tmdb';
import type { TMDBActorsResponse, TMDBActorDetails } from '../type/tmdb';
import type { TMDBGenresResponse } from '../type/tmdb';

export default () => ({
  async getPopularMoviesBdd() {
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
            id_movie: String(movie.id),
          },
        });
      }
    }

    
    return { message: 'Movies imported successfully', count: results.length };
  },
  

  async getMovieDetails(movieId: number | string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${encodeURIComponent(String(movieId))}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },

  async getPopularActorsBdd(){
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
        const actorDetailsResponse = await fetch(
        `https://api.themoviedb.org/3/person/${actor.id}?api_key=${apiKey}&language=fr-FR`
      );
      
      const actorDetails = await actorDetailsResponse.json() as TMDBActorDetails;

        const fullName = actor.name.split(' ');
        const first_name = fullName.slice(0, -1).join(' ');
        const last_name = fullName.slice(-1).join('');

        // const birthday = actorDetails.birthday ? new Date(actorDetails.birthday) : null;
        // const deathday = actorDetails.deathday ? new Date(actorDetails.deathday) : null;

        await strapi.entityService.create('api::actor.actor', {
          data: {
            first_name,
            last_name,
            birthday: actorDetails.birthday,
            place_of_birth: actorDetails.place_of_birth,
            deathday: actorDetails.deathday,
            biography: actorDetails.biography,
            profile_path: actor.profile_path,
            gender: actor.gender,
            // vote_average: movie.vote_average,
            id_actor: String(actor.id),
          },
        });
      }
    }

    return { message: 'Actors imported successfully', count: results.length };
  },


  async getGenresBdd(){
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const { genres } = await response.json() as TMDBGenresResponse;
    // return data; 
    // console.log('TMDB API response:', data);

    // const results = data.results;

    if (!genres || !Array.isArray(genres)) {
      throw new Error('TMDB API response does not contain a valid "results" array.');
    }

    for (const genre of genres) {
      const existing = await strapi.entityService.findMany('api::genre.genre', {
        filters: { id_genre: genre.id },
      });

      if (existing.length === 0) {
        
        await strapi.entityService.create('api::genre.genre', {
          data: {
            name: genre.name,
            id_genre: genre.id,
          },
        });
      }
    }

    return { message: 'Actors imported successfully', count: genres.length };
  },

  async searchActors(query: string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=fr-FR&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
})
    