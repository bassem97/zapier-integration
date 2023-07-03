"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perform = async (z, bundle) => {
    const response = await z.request({
        method: 'POST',
        url: 'https://auth-json-server.zapier-staging.com/recipes',
        body: {
            id: bundle.inputData.id,
            createdAt: bundle.inputData.createdAt,
            name: bundle.inputData.name,
            style: bundle.inputData.style,
            directions: bundle.inputData.directions,
            authorId: bundle.inputData.authorId,
        }
    });
    return response.data;
};
exports.default = {
    key: 'recipe',
    noun: 'Recipe',
    display: {
        label: 'Create Recipe',
        description: 'Creates a new recipe.',
    },
    operation: {
        perform,
        inputFields: [
            { key: 'id', required: true },
            { key: 'createdAt', type: 'integer' },
            { key: 'name', required: true },
            { key: 'style', required: true },
            { key: 'directions', required: true },
            { key: 'authorId', required: true },
        ],
        sample: {
            id: 1,
            createdAt: 1,
            name: 'example name',
            style: 'example style',
            directions: 'example directions',
            authorId: 1,
        }
    }
};
