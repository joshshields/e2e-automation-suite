import { test, expect } from '@playwright/test';

test('unauthenticated access redirects to login', async ({ page }) => {
  await page.goto('http://127.0.0.1:51515/dashboard.html');
  await expect(page).toHaveURL(/.*index\.html/);
});

test('logout clears session and redirects', async ({ page }) => {
  await page.goto('http://127.0.0.1:51515/index.html');
  await page.fill('#username', 'admin');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');
  await page.waitForURL(/.*dashboard\.html/);

  // simulate logout
  await page.evaluate(() => localStorage.clear());
  await page.goto('http://127.0.0.1:51515/dashboard.html');
  await expect(page).toHaveURL(/.*index\.html/);
});
