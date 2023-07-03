"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listRecipes = async (z, bundle) => {
    z.console.log(' hello from a console log! ');
    const promise = z.request('https://auth-json-server.zapier-staging.com/recipes');
    return promise.then((response) => response.json);
};
exports.default = {
    key: 'recipe',
    noun: 'Recipe',
    display: {
        label: 'New Recipe',
        description: 'Triggers when a new recipe is added.'
    },
    operation: {
        perform: listRecipes,
        sample: {
            id: 1,
            createdAt: 1472069465,
            name: 'Best Spagetti Ever',
            authorId: 1,
            directions: '1. Boil Noodles\n2.Serve with sauce',
            style: 'italian',
        }
    }
};
