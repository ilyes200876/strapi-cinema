export default {
    '0 0 * * *': async ({ strapi }: { strapi: any }) => {
    strapi.log.info('Mise à jour (chaque jour) des films et acteurs depuis TMDB...');

        try {
            await strapi.service('api::tmdb.tmdb').getPopularMoviesBdd();
            strapi.log.info('Mise à jour des movies réussie.');
        } catch (error) {
            strapi.log.error('Erreur lors de la mise à jour TMDB des movies', error);
        }

        try {
            await strapi.service('api::tmdb.tmdb').getPopularActorsBdd();
            strapi.log.info('Mise à jour des acteurs réussie.');
        } catch (error) {
            strapi.log.error('Erreur lors de la mise à jour TMDB des acteurs', error);
        }
    },

    
};

