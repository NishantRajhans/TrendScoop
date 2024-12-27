const { Builder, By, until, Key } = require("selenium-webdriver");
const proxyList = [
  "198.23.239.134:6540",
  "207.244.217.165:6712",
  "107.172.163.27:6543",
  "64.137.42.112:5157",
  "173.211.0.148:6641",
  "161.123.152.115:6360",
  "167.160.180.203:6754",
  "154.36.110.199:6853",
  "173.0.9.70:5653",
  "173.0.9.209:5792"
];
async function TweeterTrends() {
  const index=Math.floor(Math.random()*10)
   const selectedProxy = proxyList[index];
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://twitter.com/login");
      await driver.wait(until.elementLocated(By.name("text")), 20000);
      const useremailField = await driver.findElement(By.name("text"));
      await useremailField.sendKeys(process.env.TWITTER_USEREMAIL, Key.RETURN);
      await driver.wait(until.elementLocated(By.name("text")), 20000);
      const usernameField = await driver.findElement(By.name("text"));
      await usernameField.sendKeys(process.env.TWITTER_USERNAME, Key.RETURN);
      await driver.wait(until.elementLocated(By.name("password")), 20000);
      const passwordField = await driver.findElement(By.name("password"));
      await passwordField.sendKeys(process.env.TWITTER_PASSWORD, Key.RETURN);
      await driver.wait(until.urlContains("home"), 10000);
      await driver.wait(
        until.elementLocated(
          By.xpath(
            '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/section/div/div/div[7]/div/a'
          )
        ),
        10000
      );
      const showMoreButton = await driver.findElement(
        By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/section/div/div/div[7]/div/a'
        )
      );
      await showMoreButton.click();
      await driver.wait(until.urlContains("/explore/tabs/for-you"), 10000);
      await driver.wait(
        until.elementLocated(
          By.css(
            ".css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1bymd8e"
          )
        ),
        10000
      );
      const elements = await driver.findElements(
        By.css(
          ".css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1bymd8e"
        )
      );
      const trends = [];
      for (const element of elements) {
        const text = await element.getText();
        trends.push(text);
      }
      return { trends: trends.slice(0, 5), endTime: new Date() ,selectedProxy};
    } catch (error) {
      console.error("Error in WebScrapingLocalTest:", error);
      throw new Error(error.message);
    } finally {
      await driver.quit();
    }
  }
  module.exports={TweeterTrends}
/*const chrome = require("selenium-webdriver/chrome");
const { Builder, By, until, Key } = require("selenium-webdriver");
const proxy = require("selenium-webdriver/proxy");
const proxyList = [
  "198.23.239.134:6540",
  "207.244.217.165:6712",
  "107.172.163.27:6543",
  "64.137.42.112:5157",
  "173.211.0.148:6641",
  "161.123.152.115:6360",
  "167.160.180.203:6754",
  "154.36.110.199:6853",
  "173.0.9.70:5653",
  "173.0.9.209:5792"
];
const selectedProxy = proxyList[Math.floor(Math.random() * proxyList.length)];
const proxyString = `http://${selectedProxy}`;
async function TweeterTrends() {
  const options = new chrome.Options();
  options.setChromeBinaryPath(
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
  );
  options.addArguments("--ignore-certificate-errors");
  const driver = new Builder()
    .forBrowser("chrome")
    .setProxy(
      proxy.manual({
        http: proxyString,
        https: proxyString,
      })
    )
    .setChromeOptions(options)
    .build();
  try {
    await driver.get("https://twitter.com/login");
    await driver.wait(until.elementLocated(By.name("text")), 20000);
    const useremailField = await driver.findElement(By.name("text"));
    await useremailField.sendKeys(process.env.TWITTER_USEREMAIL, Key.RETURN);
    await driver.wait(until.elementLocated(By.name("text")), 20000);
    const usernameField = await driver.findElement(By.name("text"));
    await usernameField.sendKeys(process.env.TWITTER_USERNAME, Key.RETURN);
    await driver.wait(until.elementLocated(By.name("password")), 20000);
    const passwordField = await driver.findElement(By.name("password"));
    await passwordField.sendKeys(process.env.TWITTER_PASSWORD, Key.RETURN);
    await driver.wait(until.urlContains("home"), 10000);
    await driver.wait(
      until.elementLocated(
        By.xpath(
          '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/section/div/div/div[7]/div/a'
        )
      ),
      10000
    );
    const showMoreButton = await driver.findElement(
      By.xpath(
        '//*[@id="react-root"]/div/div/div[2]/main/div/div/div/div[2]/div/div[2]/div/div/div/div[4]/section/div/div/div[7]/div/a'
      )
    );
    await showMoreButton.click();
    await driver.wait(until.urlContains("/explore/tabs/for-you"), 10000);
    await driver.wait(
      until.elementLocated(
        By.css(
          ".css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1bymd8e"
        )
      ),
      10000
    );
    const elements = await driver.findElements(
      By.css(
        ".css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-b88u0q.r-1bymd8e"
      )
    );
    const trends = [];
    for (const element of elements) {
      const text = await element.getText();
      trends.push(text);
    }
    return { trends: trends.slice(0, 5), endTime: new Date() ,selectedProxy};
  } catch (error) {
    console.error("Error in WebScrapingLocalTest:", error);
    throw new Error(error.message);
  } finally {
    await driver.quit();
  }
}
module.exports = { TweeterTrends };
*/