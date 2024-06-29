import{test,expect} from '@playwright/test';

test('WebTables', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const table = await page.locator('#productTable')
    const columns = await table.locator('thead tr th')
    const colCount = await columns.count();
    console.log('no of colmuns',colCount)   

    const row = await table.locator('tbody tr')
    const rowCount = await row.count();
    console.log('no of rows',rowCount)

    await selectProducts(row,page,'Product 1');
    await selectProducts(row,page,'Product 3');
    await selectProducts(row,page,'Product 4');

// select single product
    // const matchedValue = row.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 5'
    // })

    //await matchedValue.locator('input').check();

    // select multiple product

    async function selectProducts(page, row, name)
    {
        const matchedValue = row.filter({
            has: page.locator('td'),
            hasText: name
        })
        await matchedValue.locator('input').check();
    }

})