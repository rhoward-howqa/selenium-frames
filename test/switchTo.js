//switch to frame using id
await driver.switchTo().frame('frame-id');

//switch to frame using name
await driver.switchTo().frame('frame-name');

//switch to frame using web element
await driver.switchTo().frame(driver.findElement(By.webLocator('frame-web-locator-property')));