import { test, expect } from '@playwright/test';

test.describe('Cart API Negative Scenarios', () => {

  test('Get Invalid Cart', async ({ request }) => {

    const response = await request.get(
      'https://fakestoreapi.com/carts/999999'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);
  });

  test('Delete Invalid Cart', async ({ request }) => {

    const response = await request.delete(
      'https://fakestoreapi.com/carts/999999'
    );

    expect(response.status()).toBe(200);
  });

});