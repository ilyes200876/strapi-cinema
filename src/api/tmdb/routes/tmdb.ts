export default {
  routes: [
    {
      method: 'GET',
      path: '/tmdb/movies/update',
      handler: 'tmdb.getPopularMoviesBdd',
      config: {
        policies: ['admin::isAuthenticatedAdmin'], 
      },
    },
    {
      method: 'GET',
      path: '/tmdb/actors/update',
      handler: 'tmdb.getPopularActorsBdd',
      config: {
        find: {
      policies: ['admin::isAuthenticatedAdmin'],
    },
      },
    },

    {
      method: 'GET',
      path: '/tmdb/genres/update',
      handler: 'tmdb.getGenresBdd',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },

    {
      method: 'GET',
      path: '/tmdb/link-movies',
      handler: 'tmdb.linkMoviesWithActorsAndGenres',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },

    {
      method: 'GET',
      path: '/tmdb/movies/:id',
      handler: 'tmdb.getMovieDetails',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
    {
      method: 'GET',
      path: '/tmdb/actor',
      handler: 'tmdb.searchActors',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};