'use strict';

/**
 * dog-age service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dog-age.dog-age');
