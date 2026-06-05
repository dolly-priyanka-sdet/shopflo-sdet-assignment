import { Page, Locator } from '@playwright/test';

export class CheckoutPage {

  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(private page: Page) {

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');

    this.successMessage = page.locator('.complete-header');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);

    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}