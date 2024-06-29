import {test,expect} from '@playwright/test'

test('Multiple Element',async({page})=>{

   await page.goto('https://www.demoblaze.com/');

   await page.waitForSelector("//div[@id='tbodyid']//div/h4/a");

   let mobileElem = await page.$$("//div[@id='tbodyid']//div/h4/a")

   for(let mobile of mobileElem){
        let display = mobile.textContent();
        console.log(display);
   }

   await page.close();
})