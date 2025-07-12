const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://127.0.0.1:51515/site/');
    await driver.findElement(By.id('username')).sendKeys('admin');
    await driver.findElement(By.id('password')).sendKeys('1234');
    await driver.findElement(By.css('button[type="submit"]')).click();

    await driver.wait(until.urlContains('dashboard'), 5000);
    console.log('✅ Login test passed!');
  } catch (err) {
    console.error('❌ Login test failed:', err);
  } finally {
    await driver.quit();
  }
})();
