const { Builder, By, Key, until } = require('selenium-webdriver');

async function signInToYouTube() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    try {
        // Open C-sharpcorner then login
        await driver.get('https://www.c-sharpcorner.com/');

        await driver.findElement(By.id('loginBtn')).click();
        await driver.findElement(By.id('TextBoxUserId')).sendKeys('demosunil9454@gmail.com', Key.RETURN);
        await driver.findElement(By.id('TextBoxPassword')).sendKeys('Press@2021', Key.RETURN);
        await driver.findElement(By.id('ctl00_ContentMain_ButtonSignIN')).click();
        //Refresh the browser
        await driver.navigate().refresh();
        //Minimize the browser
        await driver.manage().window().minimize();



        //await driver.findElement(By.id('ctl00_ContentMain_HyperlinkRegister')).click();
        // Wait for the password field and enter your password
        // await driver.wait(until.elementLocated(By.id('ctl00_ContentMain_TextBoxFirstName')), 10000);
        // await driver.findElement(By.id('ctl00_ContentMain_TextBoxFirstName')).sendKeys('Ram Pal', Key.RETURN);
        // await driver.wait(until.elementLocated(By.id('ctl00_ContentMain_TextBoxPassword')), 10000);
        // await driver.findElement(By.id('ctl00_ContentMain_TextBoxPassword')).sendKeys('Ram@123', Key.RETURN);
        // await driver.wait(until.elementLocated(By.id('ctl00_ContentMain_TextBoxPasswordConfirm')), 10000);
        // await driver.findElement(By.id('ctl00_ContentMain_TextBoxPasswordConfirm')).sendKeys('Ram@123', Key.RETURN);


        //await driver.wait(until.elementLocated(By.className('rc-anchor-checkbox-holder')), 10000);
        //await driver.findElement(By.id('recaptcha-anchor')).click();

        // Wait for the reCAPTCHA challenge to appear
        //await driver.wait(until.elementLocated(By.className('rc-anchor-checkbox-holder')), 10000);






        // Wait for the login to complete
        //await driver.wait(until.titleContains('YouTube'), 10000);

        console.log('Successfully signed in.');
    } finally {
        // Close the browser
        //await driver.quit();
    }
}

// Run the function
signInToYouTube();