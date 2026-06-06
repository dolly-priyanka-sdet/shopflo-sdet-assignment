import { test, expect } from '@playwright/test';

test.describe('Authentication API', () => {

  test('Login with valid credentials', async ({ request }) => {

    const response = await request.post(
      'https://fakestoreapi.com/auth/login',
      {
        data: {
          username: 'mor_2314',
          password: '83r5^_'
        }
      }
    );

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body.token).toBeTruthy();

    console.log('Token:', body.token);
  });

});