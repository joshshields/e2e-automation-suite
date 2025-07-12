const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('path');

(async function loginTest() {
  const options = new chrome.Options();
  options.addArguments('--headless=new'); // use headless mode
  options.addArguments('--no-sandbox');
  options.addArguments('--disable-dev-shm-usage');
  options.addArguments('--user-data-dir=/tmp/temp-profile'); // unique temp profile

  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  try {
    await driver.get('http://localhost:51515/site/');
    await driver.findElement(By.id('username')).sendKeys('admin');
    await driver.findElement(By.id('password')).sendKeys('1234');
    await driver.findElement(By.css('button[type="submit"]')).click();

    const message = await driver.wait(until.elementLocated(By.id('message')), 5000);
    const text = await message.getText();
    if (text.includes('Login successful!')) {
      console.log('✅ Login test passed');
    } else {
      console.log('❌ Login test failed');
    }
  } finally {
    await driver.quit();
  }
})();
