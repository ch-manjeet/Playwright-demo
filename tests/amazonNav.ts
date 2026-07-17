import { test, expect, Locator } from '@playwright/test';

test('click on explore dropdown in nav bar', async ({ page }) => {
    // 1. Await the navigation so the page fully loads
    await page.goto("https://www.amazon.in/");

    const navOptions: Locator = page.locator('div#nav-xshop-container > div > ul>li');

    // print first element
    console.log(await navOptions.nth(0).innerText());

    // print all the elements in nav bar

    const count = await navOptions.count();
    console.log(count);

    for(let i=0;i<count;i++){

        // print all the nav options available

        console.log(await (navOptions).nth(i).innerText());

        // click on Mobiles link 

        const clickText = await (navOptions).nth(i).innerText();


    }

    

    




});
