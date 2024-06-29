import{test,expect} from '@playwright/test';

test('Right Click', async({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktop = await page.locator('//*[@id="narbar-menu"]/ul/li[1]/a')
    await desktop.click({button: 'right'})

})