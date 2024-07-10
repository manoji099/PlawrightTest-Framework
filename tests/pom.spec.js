import {test} from '@playwright/test';
import { Homepage } from '../pages/HomePage';

test('Page Object Model', async({page})=>{
    const home= new Homepage(page);
    await home.goToURL();
    await home.gotoLogin('mano','mano')
    await page.waitForTimeout(3000)
})