import { test, expect } from '@playwright/test';

const productIds = [1, 2, 3, 4];

for (const productId of productIds) {

  test(`Get Product ${productId}`, async ({ request }) => {

    const response = await request.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    
    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(productId);
    expect(body.title).toBeTruthy();
    expect(body.price).toBeTruthy();
  });
}
test('Product Schema Validation', async ({ request }) => {

  const response = await request.get(
    'https://fakestoreapi.com/products/1'
  );

  const body = await response.json();

  expect(typeof body.id).toBe('number');
  expect(typeof body.title).toBe('string');
  expect(typeof body.price).toBe('number');
  expect(typeof body.description).toBe('string');
  expect(typeof body.category).toBe('string');
});