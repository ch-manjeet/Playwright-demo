// use innertext() and textContext() methods 
// use allInnertext() and allTextContext()
// use all() and for in or for of loop to print the elements
// video 9



import {test,expect,Locator} from'@playwright/test'

test('comparing methods',async({page})=> {

    await page.goto('https://www.amazon.in/s?k=yoga+bar&crid=LIX7OAMDWC0G&sprefix=yoga+bar%2Caps%2C285&ref=nb_sb_noss_2');
    //await page.goto('https://demowebshop.tricentis.com/');

     const productList: Locator =  page.getByRole('listitem').locator('h2>span');

     const count =  await productList.count();
     console.log(count);

     for(let i=0;i<count;i++){

        //console.log(await (productList).nth(i).allInnerTexts());



     }







});