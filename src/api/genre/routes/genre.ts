/**
 * genre router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::genre.genre', {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
  },
});
