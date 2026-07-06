/* css selectors

1. Absolute CSS selectors: These selectors target elements based on their exact position in the DOM tree. They are not recommended for use in tests because they are brittle and can break easily if the structure of the page changes.
2. Relative CSS selectors: These selectors target elements based on their relationship to other elements in the DOM tree. They are more flexible than absolute selectors and are generally preferred for use in tests.

tag with id : tag#id
tag with class : tag.class 
tag with attribute : tag[attribute='value']
tag with atribute and class : tag.class[attribute='value']
tag with multiple classes : tag.class1.class2
tag with multiple attributes : tag[attribute1='value1'][attribute2='value2']
tag with pseudo-class : tag:pseudo-class
tag with pseudo-element : tag::pseudo-element  

URL : https://demowebshop.tricentis.com/


*/
// write the selectors for serahc box and diferent elements on the page

import  {test,expect,Locator} from "@playwright/test";

test ("css selectors",async({page})=>{

     await page.goto("https://demowebshop.tricentis.com/");
     const searchBox:Locator = await page.locator("input[id='small-searchterms']")
     await searchBox.fill("laptop");
     const checkbox:Locator =page.locator("input#pollanswers-1");
     await checkbox.check();

    
})

