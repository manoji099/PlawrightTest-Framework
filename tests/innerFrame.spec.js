import{test,expect} from '@playwright/test';

test('Frames', async({page})=>{

   await page.goto('https://ui.vision/demo/webtest/frames/')
    const fillFrame =  await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
    const child = await fillFrame.childFrames();
    await child[0].locator('//*[@id="i5"]/div[3]/div').check();

})