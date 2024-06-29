import {test,expect} from '@playwright/test';

test('Alert Handling', async({page})=>{
   await page.goto('https://testautomationpractice.blogspot.com/')
    
   page.on('dialog', async dialog=>{
        //expect(dialog.message()).toContain('I am an alert box!')
       // console.log(dialog.message());
       await dialog.accept();
       
    })

    await page.locator('onclick="myFunctionAlert()"')
    await page.waitForTimeout(3000);
})