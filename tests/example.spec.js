// @ts-check
const { test, expect } = require('@playwright/test');



test('Busca producto y da clic', async ({ page }) => {
  console.log("Navegando a Amazon...");
  await page.goto('https://www.amazon.com.mx/');
  await page.locator('[id=navbar-main]').isVisible();
//  await page.locator('[id=nav-search-submit-button]').click();
  // console.log("Esperando que el campo de búsqueda sea visible...");
   await page.locator('[id=twotabsearchtextbox]').click();
  // console.log("Llenando el campo de búsqueda...");
 await page.locator('[id=twotabsearchtextbox]').fill('PS5');
  // console.log("Haciendo clic en el botón de búsqueda...");
   await page.locator('[id=nav-search-submit-button]').click();
  // console.log("Esperando resultados...");
  //await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]');
  // console.log("Haciendo clic en el primer resultado...");
   await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();
  // console.log("Prueba completada");
});

