/**
 * movie router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::movie.movie', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
