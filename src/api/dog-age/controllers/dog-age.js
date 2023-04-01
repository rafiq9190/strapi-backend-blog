'use strict';

/**
 * dog-age controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::dog-age.dog-age');
