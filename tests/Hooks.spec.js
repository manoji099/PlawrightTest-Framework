import {test} from '@playwright/test'

let page;

test.beforeEach(async({browser})=>{
  page = browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    (await page).locator('#login2').click();
    (await page).locator()

})


// npx playwright test -g "add a todo item"  - o run a test with a specific title, use the -g flag followed by the title of the test.

// 
