import{test,expect} from '@playwright/test';

test('doubleClick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const btn = await page.locator("//button[@onclick='myFunction()']")
    await btn.dblclick()
    //await desktop.click({button: 'right'})

})