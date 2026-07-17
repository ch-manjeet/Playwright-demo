// multiselect dropdowns

import { test, expect, Locator } from '@playwright/test';

test('Multi select dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //  locate the options , this could be done as its multiselect so options should be passed in an array 

    await page.locator('select#colors').selectOption(['Red', 'Blue', 'Green']); // Visible Text


    /*select by value attribute 

    await page.locator('select#colors').selectOption([{'red'}, {'blue'}, {'green'}]); // Value attribute



    // select by label

    await page.locator('select#colors').selectOption([{label: 'Red'}, {label: 'Blue'}, {label: 'Green'}]); // label


    // select using index

     await page.locator('select#colors').selectOption([{index: 0}, {index: 1}, {index: 2}]); // index


     */

     //check no. of options in the dropdown list (or count no. of options)
     // store the options locator in an array and print if its picking extra characters then map them and trim them

     const dropdownOptions:Locator =  page.locator('select#colors>option');

      await expect (dropdownOptions).toHaveCount(7);

      // check an option is present in the dropdown or not this could use allTextContents()  methods because there are options available rather than a single text

      const optionTexts:string[] =(await(dropdownOptions.allTextContents())).map((text)=>text.trim());
     

      // as the above will print with some extra characters so we can use map to trim them and then check if the option is present or not
       
      
       //console.log('Option Texts:', optionTexts);

         expect(optionTexts).toContain('Red');


         // 4. printing options from the dropdown

         for (const option of optionTexts){
            console.log(option);
            
         }
     






});
