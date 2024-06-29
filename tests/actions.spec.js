import {test, expect} from '@playwright/test';


// radio button 
// test('Actions in Playwright', async({page})=>{
//     await page.goto('https://demoqa.com/radio-button')

//     await page.locator('//input[@id="yesRadio"]').check();

//     await expect(await page.locator('//input[@id="yesRadio"]')).toBeChecked()
//     await expect(await page.locator('//input[@id="yesRadio"]').isChecked).toBeTruthy()

//     await page.waitForTimeout(5000)
// })


   //Checkboxes
   
test('Checkboxes action', async ({page})=>{

    await page.goto('https://demoqa.com/checkbox')

    await page.locator("//span//button[@title='Toggle' and @aria-label='Toggle']").click();

    await page.getByText('Desktop').check();
    await page.getByText('Documents').check();
    await page.waitForTimeout(5000)
    
})

