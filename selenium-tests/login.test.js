const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function loginTest() {
  const options = new chrome.Options();
  options.addArguments('--headless');
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--user-data-dir=/tmp/selenium-profile'); // Avoid profile conflicts in CI

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    // Go to the login page
    await driver.get('http://127.0.0.1:51515/index.html');

    // Fill in the form
    await driver.findElement(By.id('username')).sendKeys('admin');
    await driver.findElement(By.id('password')).sendKeys('1234');
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait for redirect
    await driver.wait(until.urlContains('dashboard.html'), 5000);

    // Confirm we're on dashboard
    const heading = await driver.findElement(By.css('h1')).getText();
    if (heading.includes('Welcome')) {
      console.log('✅ Login test passed!');
    } else {
      console.log('❌ Login test failed: Dashboard text not found');
      process.exit(1);
    }

  } catch (err) {
    console.error('❌ Test error:', err);
    process.exit(1);
  } finally {
    await driver.quit();
  }
})();
