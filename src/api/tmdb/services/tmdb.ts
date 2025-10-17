import type { TMDBMoviesResponse } from '../type/tmdb';

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
            tmdb_id: movie.id,
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

  async searchActors(query: string) {
    const apiKey = process.env.TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=fr-FR&query=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
})
    