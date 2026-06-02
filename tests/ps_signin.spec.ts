import {test,expect, Locator} from '@playwright/test';

test('ps signin redirects to app', async ({page}) => {

    await page.goto('https://www.pluralsight.com/');
    const signInButton:Locator =  await page.getByRole('link', { name: 'Sign in' });
    await signInButton.click();
    await expect(page).toHaveURL('https://app.pluralsight.com/id');

})


