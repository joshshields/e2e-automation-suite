const { Builder, By, until } = require('selenium-webdriver');

(async function testPasswordReset() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:51515/reset.html');

    const usernameInput = await driver.findElement(By.id('username'));
    const resetButton = await driver.findElement(By.css('button[type="submit"]'));

    await usernameInput.sendKeys('testuser');
    await resetButton.click();

    const message = await driver.wait(
      until.elementLocated(By.id('message')),
      1000
    );

    const text = await message.getText();
    if (text.includes('Password reset link sent')) {
      console.log('✅ Reset success message shown');
    } else {
      console.error('❌ Expected reset success message');
    }
  } finally {
    await driver.quit();
  }
})();
