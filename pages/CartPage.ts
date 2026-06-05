import { Page, Locator } from '@playwright/test';

export class CartPage {

  readonly checkoutButton: Locator;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('#checkout');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}