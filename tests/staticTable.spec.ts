// static table  video 9

import{test,expect,Locator} from'@playwright/test'

test('perform web table operations',async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1.  validate the table is present on the or not

    const tableLocator:Locator = page.locator('table[name="BookTable"] tbody');

    await expect (tableLocator).toBeVisible();
    
    // 2. capture all the rows of the table & assert

    const rows:Locator = page.locator('table[name="BookTable"] tbody tr');

     await expect (rows).toHaveCount(7);

    //console.log(count);

    //3. another way  to count & assert row count 

    const rowCount:number = await (rows).count();

    expect (rowCount).toBe(7);


    //4. count and aseert no. of columns
    // use chaining of locators

    //const column:Locator =page.locator('table[name="BookTable"] tbody tr th');

    const column:Locator = rows.locator('th');  // here tje entore table locator is replaced with previously defined row locator because ro th is inside <tr 

    await expect (column).toHaveCount(4);

    // another way for column count & asssert

    const columnCount:number = await (column).count();
    expect (columnCount).toBe(4);
    console.log(columnCount);

    // 5. capture data from a specific row lets say row2

    const rowData2 = await (tableLocator.locator('tr').nth(2).innerText());

    console.log(rowData2);

    // or as per video 

    const secondrowCells=  rows.nth(2).locator('td');
    const secondrowData:string[] = await secondrowCells.allInnerTexts();
    console.log(secondrowData);

// 6. now print all the data of second row using for loop 
for (let text of secondrowData ){  // this could be applied only on arrays and not locator types so use secndroDara and not cells

    console.log(text);

    
}

// 7. now print all the elements of the table except headers

// so using all() method all the row locators will be converted into an locator type of array and all will extract the innertext array of the locator values
// inorder to apply the for of loop we need to have the elements stored in an array


  const rowData:Locator[] = await rows.all();

  for(let data of rowData){
    const cols: string[] = await data.locator('td').allInnerTexts();
    console.log(cols);
    console.log(cols.join('\t'));

  }


  // print bookname where author is mukesh


  const allrowData= await rows.all();

  for(let row of allrowData){

    const authorCols= await row.locator('td').nth(1).allInnerTexts();
    //console.log("author column text is:",authorCols);

    const author =authorCols[0];
    const Book = authorCols[1];

    if(author ==='Mukesh'){

        console.log(`${author}\t${Book}`);
        
    }


  }

  // remianing total price of the books to print




  





   






});