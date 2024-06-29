const{test,expect} =require('@playwright/test');

test('Home Page',async ({page})=>{

    await page.goto('https://www.demoblaze.com/');
    let title = await page.title();
    console.log("page title is: ", title);

    await expect(page).toHaveTitle('STORE');

    let url = await expect(page).toHaveURL('https://www.demoblaze.com/');

    console.log("URL from the page", url);

    page.close();
})