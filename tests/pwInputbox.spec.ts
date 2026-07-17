/*
playwright actions

*/

// URL : https://testautomationpractice.blogspot.com/

// texbox verify visibility enabled,maxlenghth allowed 

import { test, expect } from '@playwright/test';

test('Playwright Actions', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const inputBox = page.locator('input#name');
    await expect (inputBox).toBeVisible();
    await expect (inputBox).toBeEnabled();

    const maxLength:string | null =await inputBox.getAttribute('maxlength');
    //console.log('Max Length of Input Box is :', maxLength);
    
     expect(maxLength).toBe('15');

     await inputBox.fill("John Canedy");

     // capture the entered value and verify it is correct

     const enteredValue = await inputBox.inputValue();
     
     await expect(enteredValue).toBe("John Canedy");







    
});
