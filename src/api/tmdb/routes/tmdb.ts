export default {
  routes: [
    {
      method: 'GET',
      path: '/tmdb/movies',
      handler: 'tmdb.getPopularMovies',
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
      path: '/tmdb/actors',
      handler: 'tmdb.searchActors',
      config: {
        auth: false,
      },
    },
  ],
};