import{test,expect} from '@playwright/test';

test('keyword search redirects to /search page', async ({page}) => {

await page.goto('https://www.pluralsight.com/');
await page.getByPlaceholder('What do you want to learn?').first(). fill('java');
await page.keyboard.press('Enter');
await expect(page).toHaveURL('https://www.pluralsight.com/browse?q=java');

});
