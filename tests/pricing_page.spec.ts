
import {test,expect } from "@playwright/test";

test('pricing page screenshot comparison test',async({page})=> {

    await page.goto('https://www.pluralsight.com/industries/public-sector/pricing');

    await page.getByRole('link', { name: 'Contact sales' }).click();
    expect(page.url()).toBe('https://www.pluralsight.com/contact-sales');


     //await page.waitForLoadState('networkidle');
      //await expect(page).toHaveScreenshot('pricing-page.png', { animations: 'disabled' });



  



});


