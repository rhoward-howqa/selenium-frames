const { Builder, By, Key, JavascriptExecutor } = require("selenium-webdriver");

async function frames(){

    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://the-internet.herokuapp.com/nested_frames");

    
    //Navigate to left Frame 
    await driver.switchTo().frame(driver.findElement(By.name('frame-bottom')))

    //return name of current frame 
    let currentFrame = await driver.executeScript("return self.name");
    //output name of current frame
    console.log(currentFrame);


    //close the browser
    await driver.quit();


}
frames()