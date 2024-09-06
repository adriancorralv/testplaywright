// @ts-check
const { test, expect } = require('@playwright/test');



  test('Busca prroducto y da clic', async ({page})=>{
    await page.goto('https://www.amazon.com.mx/');
    await page.locator('[id=twotabsearchtextbox]').fill('PS5');
    await page.locator('[id=nav-search-submit-button]').click();
    await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();


});


