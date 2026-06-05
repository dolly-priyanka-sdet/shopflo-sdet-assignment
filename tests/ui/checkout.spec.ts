import { test, expect } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('Complete Checkout Successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigateToLoginPage();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addProductToCart();

  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    'Dolly',
    'Priyanka',
    '515001'
  );

  await checkoutPage.finishCheckout();

  await expect(
    checkoutPage.successMessage
  ).toContainText('Thank you');

});
test('Checkout Without First Name', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    '',
    'Priyanka',
    '515001'
  );

  await expect(checkoutPage.errorMessage).toBeVisible();
});

test('Checkout Without Last Name', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    'Dolly',
    '',
    '515001'
  );

  await expect(checkoutPage.errorMessage).toBeVisible();
});

test('Checkout Without Postal Code', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart();
  await inventoryPage.openCart();

  await cartPage.proceedToCheckout();

  await checkoutPage.fillCheckoutInformation(
    'Dolly',
    'Priyanka',
    ''
  );

  await expect(checkoutPage.errorMessage).toBeVisible();
});

