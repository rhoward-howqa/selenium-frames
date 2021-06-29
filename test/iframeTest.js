const { Builder, By, Key } = require("selenium-webdriver");
const { Name } = require("selenium-webdriver/lib/command");

//describe block
describe("add todo tests", function () {
  //it block
  it("successfully adds a todo to application", async function () {
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://the-internet.herokuapp.com/nested_frames");

    //add a todo
    //await driver.switchTo().parentFrame()
    let topFrame = await driver.findElement(By.name('frame-top'))

    //await driver.switchTo().frame(topFrame).switchTo(leftFrame)

    //await driver.switchTo().defaultContent();
    
    await driver.switchTo().frame(topFrame)
    let leftFrame = await driver.findElement(By.name('frame-left1'))
    await driver.switchTo().frame(leftFrame)

    //close the browser
    await driver.quit();
  });
});

