import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Cart Functionality', () => {

  test('Add Product To Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('Remove Product From Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeProductFromCart();

    await expect(inventoryPage.cartBadge).toHaveCount(0);
});
test('Verify Cart Badge After Add To Cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.navigateToLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addProductToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
});
});