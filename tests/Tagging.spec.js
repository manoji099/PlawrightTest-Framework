import{test,expect} from '@playwright/test';

test('test1@sanity', async({page})=>{
    console.log('this is 1...')
})

test('test2@sanity', async({page})=>{
    console.log('this is 2...')
})
test('test3@reg', async({page})=>{
    console.log('this is 3...')
})
test('test4@reg', async({page})=>{
    console.log('this is 4...')
})
test('test5@sanity@reg', async({page})=>{
    console.log('this is 5...')
})

 // npx playwright test example.spec.js --project chromium --grep @sanity
 // npx playwright test example.spec.js --project chromium --grep @sanity --grep-invert@regression
