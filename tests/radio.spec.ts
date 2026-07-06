// Actions for radio button

import{test,expect,Locator} from '@playwright/test';

test('Radio button actions',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const maleRadio :Locator= page.locator('#male');

    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();

    await maleRadio.check();

    await expect(maleRadio).toBeChecked();








});

