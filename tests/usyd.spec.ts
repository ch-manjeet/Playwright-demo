import test, { expect } from "@playwright/test";

test("test nav bar has usyd logo visible",async({page})=>{
    
await page.goto("https://www.sydney.edu.au/", { waitUntil: 'domcontentloaded' });

const usydLogo =await page.getByRole('img', { name: 'University Home' })
// await page.getByAltText("University Home");
await expect(usydLogo).toBeVisible();

});
