// program to click on a hidden dropdown in orange hrms

import{test,expect, Locator} from'@playwright/test'

test('click on hidden dropdown & actions', async({page})=> {

    // perform login action

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'commit'});


    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    //post login verify the PIM text
    await  (page.getByText('PIM')).click();

    // now click and select an option from the Job Title dropdown

    await page.locator('form i').nth(2).click();
    

    // then count no. f options available & print their value

    // first locate total no. of options in dd using emulate focused

    const options:Locator =  page.locator('div[role="listbox"] span');

    await options.first().waitFor({state:'visible'});

    const count:number = await options.count();
    console.log(count);

    // now print all the dropdown value

    for(let i=0;i<count;i++){
        console.log(await (options.nth(i).innerText())); // wil print all values

        // now if you want to click and check a particular text for that store the values in a variable and compare the expected text using if else
            


    }









});