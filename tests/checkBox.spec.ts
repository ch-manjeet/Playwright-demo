// select a check box and verify it is checked or not

import { test, expect, Locator } from '@playwright/test';

test('Check box actions', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const sundayCheckbox:Locator = page.getByLabel('Sunday')
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();



    // capture all the checkboxes or days of the week
    // first keep all the labels /days in an array 
    // then using map return checkbox of every label and store them in a an array
     const days:string[]=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

     const checkboxesdays: Locator[] = days.map(index => page.getByLabel(index));

     // now return the & check that no. of checkboxesdays should be equal to 7

     expect(checkboxesdays.length).toBe(7);

     // select all the checkboxes and assert all are checked or not
      





});
