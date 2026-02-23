import { test, expect } from '@playwright/test';

test.describe('The Internet - Login Page', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    // Navigate to the login page
    await page.goto('https://the-internet.herokuapp.com/login');

    // Fill the username and password fields
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');

    // Click the login button
    await page.click('button[type="submit"]');

    // Verify the success message is visible
    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText('You logged into a secure area!');
    
    // Check the URL has changed to /secure
    await expect(page).toHaveURL(/.*secure/);
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPassword');
    await page.click('button[type="submit"]');

    const flashMessage = page.locator('#flash');
    await expect(flashMessage).toBeVisible();
    await expect(flashMessage).toContainText('Your username is invalid!');
  });
});
