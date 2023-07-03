/* globals describe, expect, test */

import { Bundle, createAppTester, tools } from 'zapier-platform-core';

import App from '../index';

const appTester = createAppTester(App);
tools.env.inject();

describe('movie', () => {
  test('list movies', async () => {
    const bundle = { inputData: {} };
    const results = (await appTester(
      App.triggers.movie.operation.perform,
      bundle
    )) as Array<object>;

    expect(results.length).toBeGreaterThan(0);

    const firstMovie = results[0];
    expect(firstMovie).toMatchObject({
      id: '1',
      title: 'title 1',
    });
  });
});

describe('recipe', () => {
  test('list recipes', async () => {
    const bundle = { inputData: {} };
    const results = (await appTester(
        App.triggers.recipe.operation.perform,
        bundle
    )) as Array<object>;

    expect(results.length).toBeGreaterThan(0);

    const firstRecipe = results[0];
    expect(firstRecipe).toMatchObject({
      id: '1',
      createdAt: 1471984289,
      name: 'name 1',
      style: 'style 1',
      directions: 'directions 1',
      authorId: 63,
    });
  });
} );
