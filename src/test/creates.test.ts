/* globals describe, expect, test */

import { createAppTester, tools } from 'zapier-platform-core';

import App from '../index';

const appTester = createAppTester(App);
tools.env.inject();

describe('movie', () => {
  test('create a movie', async () => {
    const bundle = { inputData: { title: 'hello', year: 2020 } };
    const result = await appTester( (App.creates.movie.operation.perform as any), bundle);
    expect(result).toMatchObject({
      title: 'hello',
      year: 2020,
    });
  });
});

describe('recipe', () => {
   test('create a recipe', async () => {
     const start = Date.now();
     const bundle = { inputData: { id: 200, createdAt: start, name: 'kafteji', style: 'tunisian street food', directions: 'tunisia', authorId: 1 } };

     const result = await appTester( (App.creates.recipe.operation.perform as any), bundle);
        expect(result).toMatchObject({
            id: 200,
            createdAt: start,
            name: 'kafteji',
            style: 'tunisian street food',
            directions: 'tunisia',
            authorId: 1,
        } );
   } );
} );
