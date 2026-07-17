// dropdowns - single select dropdown


import { test, expect, Locator } from '@playwright/test';

test('Single select dropdowns', async ({ page }) => { 

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1. select a value from the dropdown by visible text

    //await (page.locator('select#country')).selectOption("India");

    //2. select a value from the dropdown by value attribute when <option value ="" is given

   // await  (page.locator('select#country')).selectOption({value:'USA'});

    //3. select a value from the dropdown by Label

    await (page.locator('select#country')).selectOption({label:'China'});

    // 4. capture a value by index

   // await (page.locator('select#country')).selectOption({index:4});

    // 5.  verify the selected value is correct or not

    const selectedValue:string | null = await (page.locator('select#country')).inputValue();
    await expect(selectedValue).toBe('china');


// count no. of options in the dropdown 

const dropdownOptions:Locator = await(page.locator('select#country>option'));
await expect(dropdownOptions).toHaveCount(10);


// check an option is present in the dropdown or not this could use allTextContents()  methods because there are options available rather than a single text
 const optionTexts:string[] = await dropdownOptions.allTextContents();

 optionTexts.map(text=> text.trim());

 console.log('Option Texts:', optionTexts);



  //expect(optionTexts).toContain('India');

  








});


