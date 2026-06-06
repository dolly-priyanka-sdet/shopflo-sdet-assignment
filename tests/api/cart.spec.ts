import { test, expect } from '@playwright/test';

test.describe('Cart CRUD API', () => {

  test('Create Cart - POST', async ({ request }) => {

    const response = await request.post(
      'https://fakestoreapi.com/carts',
      {
        data: {
          userId: 5,
          date: '2020-02-03',
          products: [
            {
              productId: 5,
              quantity: 1
            }
          ]
        }
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.userId).toBe(5);
  });

  test('Get Cart - GET', async ({ request }) => {

    const response = await request.get(
      'https://fakestoreapi.com/carts/1'
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(1);
  });

  test('Update Cart - PUT', async ({ request }) => {

    const response = await request.put(
      'https://fakestoreapi.com/carts/7',
      {
        data: {
          userId: 3,
          date: '2020-01-01',
          products: [
            {
              productId: 1,
              quantity: 4
            }
          ]
        }
      }
    );

    expect(response.status()).toBe(200);
  });

  test('Delete Cart - DELETE', async ({ request }) => {

    const response = await request.delete(
      'https://fakestoreapi.com/carts/6'
    );

    expect(response.status()).toBe(200);
  });

});