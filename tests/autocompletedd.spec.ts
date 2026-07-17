// autocomplete dropdown

import{test,expect, Locator} from '@playwright/test'

test('amazon search bar', async({page})=>{

    await page.goto('https://www.amazon.in/');

    // 1. locate the dropdown bar and fill it with text yoga

     await page.locator('input#twotabsearchtextbox').fill('yoga');

     await page.waitForTimeout(5000);

     //2. list total no. of items available in the dropdown list [ use emulate focusable in dev tool ctrl+Shift+P]
    
    const options:Locator =  page.locator('div.left-pane-results-container>div');
    
    
    // 3. count no. of options and print 

    const count = await(options).count();

    console.log(count);


    // 4. print 5th value from the list 

   console.log(await (options.nth(5).innerText()));
    

    // 5.  Print all the items available in the list 

    for(let i =0;i<count;i++) {

       // console.log(await (options.nth(i).innerText())); // used for printing all option

       // for clicking on a particular text match use below

       const clickText =(await (options.nth(i).innerText()));

       if(clickText==='yogabar oats');
       {
        options.nth(i).click;
        break;
       }
    }

    // 6. select or click on yogabar oats.[ this could be done by storing all the options in a variable and check if condition so store the elements in above for lookp in a text variable]


    /*
    await expect (count).toBeGreaterThanOrEqual(1);
 

    // print all the suggested options in console

    //const suggestedOptions:string[] =  await (page.locator('div.left-pane-results-container>div')).allTextContents();
    //console.log(suggestedOptions);

   // locate the 3rd option available and extract its text

     page.locator('div.left-pane-results-container>div').nth(2);

     const optionText = await ( page.locator('div.left-pane-results-container>div').nth(2)).innerText();
     console.log(optionText);

    // PRINT all the options available 

    const alloptions =  page.locator('div.left-pane-results-container>div').allInnerTexts();
    console.log(alloptions);


     
*/
    







});