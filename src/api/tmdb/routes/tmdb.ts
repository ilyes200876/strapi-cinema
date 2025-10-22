export default {
  routes: [
    {
      method: 'GET',
      path: '/tmdb/movies/update',
      handler: 'tmdb.getPopularMoviesBdd',
      config: {
        auth: false, 
      },
    },
    {
      method: 'GET',
      path: '/tmdb/actors/update',
      handler: 'tmdb.getPopularActorsBdd',
      config: {
        auth: false, 
      },
    },

    {
      method: 'GET',
      path: '/tmdb/genres/update',
      handler: 'tmdb.getGenresBdd',
      config: {
        auth: false, 
      },
    },

    {
      method: 'GET',
      path: '/tmdb/movies/:id',
      handler: 'tmdb.getMovieDetails',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/tmdb/actor',
      handler: 'tmdb.searchActors',
      config: {
        auth: false,
      },
    },
  ],
};