import {test,expect } from "@playwright/test";
import { BASE_URL } from './env';

test('pricing page screenshot comparison test',async({page})=> {

    await page.goto(`${BASE_URL}/industries/public-sector/pricing`);

    await page.getByRole('link', { name: 'Contact sales' }).click();
    expect(page.url()).toBe(`${BASE_URL}/contact-sales`);

    // stabilized screenshot example - use fullPage if desired and/or lock to a specific element
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('pricing-page.png', { fullPage: true, animations: 'disabled' });

});


