import {test, expect} from '@playwright/test';
import { sign } from 'crypto';

test('Locators',async({page})=>{

    await page.goto('https://www.demoblaze.com/');

    let btnLogin = await page.click('id="login2"');
    let usenmae = await page.fill("//input[@id='loginusername']",'manoji09');
    const password = await page.type("//input[@id='loginpassword']",'mano@132');

   let loginbtn = await page.click("//button[@onclick='logIn()']");
   let signup = await page.locator('id="signin2"');

   await expect(signup).toBeVisible()

   await page.close()
})