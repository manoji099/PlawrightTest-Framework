import {test} from '@playwright/test'

let page;

test.beforeEach(async({browser})=>{
  page = browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    (await page).locator('#login2').click();
    (await page).locator()

})