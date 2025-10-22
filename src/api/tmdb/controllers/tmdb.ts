export default ({ strapi }: { strapi: any }) => ({
  async getPopularMoviesBdd(ctx: any) {
    const data = await strapi.service('api::tmdb.tmdb').getPopularMoviesBdd();
    ctx.body = data; 
  },

  async getPopularActorsBdd(ctx: any) {
    const data = await strapi.service('api::tmdb.tmdb').getPopularActorsBdd();
    ctx.body = data; 
  },

  async getGenresBdd(ctx: any) {
    const data = await strapi.service('api::tmdb.tmdb').getGenresBdd();
    ctx.body = data; 
  },

  async linkMoviesWithActorsAndGenres(ctx: any) {
    const data = await strapi.service('api::tmdb.tmdb').linkMoviesWithActorsAndGenres();
    ctx.body = data; 
  },

  async getMovieDetails(ctx: any) {
    const { id } = ctx.params;
    const data = await strapi.service('api::tmdb.tmdb').getMovieDetails(id);
    ctx.body = data; 
  },

  async searchActors(ctx: any) {
    const query = ctx.query.query || ''; 
    const data = await strapi.service('api::tmdb.tmdb').searchActors(query);
    ctx.body = data; 
  }
});