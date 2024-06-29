import{test,expect} from '@playwright/test';

test('Frames', async({page})=>{

   await page.goto('https://ui.vision/demo/webtest/frames/')
    const fillFrame =  await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await fillFrame.fill("//input[@name='mytext1']", 'Manoji')

    page.frameLocator('src="frame_2.html"').getByLabel('name')
})