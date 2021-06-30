const { Builder, By, Key } = require("selenium-webdriver");
const { Name } = require("selenium-webdriver/lib/command");

//describe block
describe("Navigating to frames in selenium WebDriver", function () {
  //it block
  it("successfully navigate to frame", async function () {
    
    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://the-internet.herokuapp.com/nested_frames");


    //top frame web element 
    let topFrame = await driver.findElement(By.name('frame-top'))

    //navigate to top frame 
    await driver.switchTo().frame(topFrame)
    
    //left frame web element 
    let leftFrame = await driver.findElement(By.name('frame-left'))
    await driver.switchTo().frame(leftFrame)

    //close the browser
    await driver.quit();
  });
});

