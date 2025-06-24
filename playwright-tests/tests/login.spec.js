const { test, expect } = require('@playwright/test');

test('successful login', async ({ page }) => {
  await page.goto('http://127.0.0.1:51515/site/');

  await page.fill('#username', 'admin');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');

  const message = await page.locator('#message');
  await expect(message).toHaveText('Login successful!');
  await expect(message).toHaveClass(/success/);
});

test('failed login with wrong credentials', async ({ page }) => {
  await page.goto('http://127.0.0.1:51515/site/');

  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('button[type="submit"]');

  const message = await page.locator('#message');
  await expect(message).toHaveText('Invalid credentials.');
  await expect(message).toHaveClass(/error/);
});

test('failed login with wrong password', async ({ page }) =>{
  await page.goto('http://127.0.1:51515/site/');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'ajsdjksad');

});

test('redirects to dashboard after successful login', async ({ page }) => {
  await page.goto('http://127.0.0.1:51515/site/');

  await page.fill('#username', 'admin');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard.html');
  await expect(page.locator('h1')).toHaveText('Welcome to your dashboard');



});