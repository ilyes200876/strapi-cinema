export default ({ strapi }: { strapi: any }) => ({
  async getPopularMovies(ctx: any) {
    const data = await strapi.service('api::tmdb.tmdb').getPopularMovies();
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