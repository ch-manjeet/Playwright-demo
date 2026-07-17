// Dynamic table video 10


import { test, expect, Locator } from '@playwright/test';

test('verify chrome cpu load in dynamic table', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // step1 : capture entire table and validate its visible or not

    const Table:Locator = page.locator('table#taskTable tbody');
    await expect(Table).toBeVisible();


    // req 1. for chrome process get the value of CPU load.
        // step 1 : read each row to check chrome is present or not 
        // so select all the rows and find no. of rows

    
    const rows:Locator[] = await Table.locator('tr').all(); // this will extract/store locators  of each row


    console.log(rows);
    console.log("numer of rows in the Table ",rows.length);
    expect (rows).toHaveLength(4);

      // step2: to capture the cpu value we first need the name chrome and which is stored in first column so we no need to comapre it with entire data


    for(let firstrow of rows){

        const firstCol =  await firstrow.locator('td').nth(0).innerText();
        console.log(firstCol)



    }
      
    
      

    







});