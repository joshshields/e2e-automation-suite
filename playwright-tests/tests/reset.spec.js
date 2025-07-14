import { test, expect } from '@playwright/test';

test.describe('Password Reset', () => {
  test('shows reset form', async ({ page }) => {
    await page.goto('http://127.0.0.1:51515/reset.html');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toHaveText('Reset Password');
  });

  test('shows error for unknown user', async ({ page }) => {
    await page.goto('http://127.0.0.1:51515/reset.html');
    await page.fill('#username', 'nonexistent');
    await page.click('button[type="submit"]');
    await expect(page.locator('#message')).toHaveText('Username not found.');
  });

  test('resets password for registered user', async ({ page }) => {
    // Register a user first
    await page.goto('http://127.0.0.1:51515/register.html');
    await page.fill('#username', 'resetuser');
    await page.fill('#password', 'resetme');
    await page.click('button[type="submit"]');

    // Now reset
    await page.goto('http://127.0.0.1:51515/reset.html');
    await page.fill('#username', 'resetuser');
    await page.click('button[type="submit"]');
    await expect(page.locator('#message')).toHaveText('Password reset successful!');
  });
});