'use strict';

/**
 * dog-age router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::dog-age.dog-age');
