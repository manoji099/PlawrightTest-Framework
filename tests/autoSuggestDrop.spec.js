import{test,exect} from '@playwright/test';

test('Auto Suggest Dropdown',async({page})=>{

   await page.goto('https://www.redbus.com/#backHome')
   await page.locator('/placeholder="Enter Area , City Name"').fill('Delhi');
   const srcCity = await page.$$("//ul[@class='city-list']//li/div[1]")

   for(const city of srcCity){
       let cities= city.textContent();
       console.log(cities);
   }


})