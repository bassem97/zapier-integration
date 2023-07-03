"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("./creates/movie");
const recipe_1 = require("./creates/recipe");
const movie_2 = require("./triggers/movie");
const recipe_2 = require("./triggers/recipe");
const zapier_platform_core_1 = require("zapier-platform-core");
const { version } = require('../package.json');
const addApiKeyHeader = (req, z, bundle) => {
    // Hard-coded api key just to demo. DON'T do auth like this for your production app!
    req.headers = req.headers || {};
    req.headers['X-Api-Key'] = 'secret';
    return req;
};
exports.default = {
    version,
    platformVersion: zapier_platform_core_1.version,
    beforeRequest: [addApiKeyHeader],
    triggers: {
        [movie_2.default.key]: movie_2.default,
        [recipe_2.default.key]: recipe_2.default,
    },
    creates: {
        [movie_1.default.key]: movie_1.default,
        [recipe_1.default.key]: recipe_1.default,
    },
};
