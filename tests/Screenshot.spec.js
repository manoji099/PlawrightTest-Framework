import { test } from '@playwright/test'

test('Screenshot', async({page})=>{

   await page.goto('https://www.demoblaze.com/')
    await page.screenshot({path:'screenshot/'+Date.now()+'test.png'})
});

test('Full Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
     await page.screenshot({path:'screenshot/'+Date.now()+'Full.png', fullPage: true})
 });

 test('specific Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
     await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({path:'screenshot/'+Date.now()+'Specific.png', fullPage: true})
 });

 test.only('without screenshot Screenshot', async({page})=>{

    await page.goto('https://www.demoblaze.com/')
    // await page.locator('//*[@id="tbodyid"]/div[1]/div').screenshot({path:'screenshot/'+Date.now()+'Specific.png', fullPage: true})
 });
