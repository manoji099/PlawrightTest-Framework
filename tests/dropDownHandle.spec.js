import {test,expect} from '@playwright/test';

test('Drop Down handles', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator("//select[@id='country']").selectOption('India');
    //await page.locator("//select[@id='country']").selectOption({value: 'uk'})
   // await page.locator("//select[@id='country']").selectOption({index: 6});

   //const options = await page.locator("#country option")
  //await expect(options).toHaveCount(10);
   

   /* const totaloption = await page.$$("#country option")
    for(const opt of totaloption){
       console.log(await opt.textContent());
    }
   // await expect(totaloption.length).toBe(10)
   let textValue = totaloption.textContent();

   if(textValue.include("China")){
    console.log('true')
   }else
    console.log('false')
*/

//Selecting an option using loop
const totaloption = await page.$$("#country option")
    for(const option of totaloption){
       let value= await option.textContent();
       console.log(value)
       if(value.includes('China')){
        await page.selectOption('#country', value)
        break;
       }
    }

    //multiple dropdown clicks 
    await page.selectOption('#country',['India','China','United Kingdom'])
    
    await page.waitForTimeout(3000)
})