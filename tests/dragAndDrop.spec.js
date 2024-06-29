import{test,expect} from '@playwright/test';

test('drag and drop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const drag = await page.locator('#draggable')
    const drop = await page.locator('#droppable')

     await drag.dragTo(drop)

})