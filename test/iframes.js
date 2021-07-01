const { Builder, By, Key, JavascriptExecutor } = require("selenium-webdriver");

async function frames(){

    //launch the browser
    let driver = await new Builder().forBrowser("firefox").build();

    //navigate to our application
    await driver.get("https://the-internet.herokuapp.com/iframe");

    //Navigate to iframe   
    await driver.switchTo().frame(0)
    
    //retrieve text from "//p[normalize-space()='Your content goes here.']"
    let text = await driver.findElement(By.xpath("//p")).getText()
    .then((text) => { return text; });

    console.log(text)


    //close the browser
    await driver.quit();


}
frames()