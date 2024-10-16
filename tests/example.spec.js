// @ts-check
const { test, expect } = require('@playwright/test');

test('pruebagoogle',{
  tag:['@UI']
} ,async ({ page })=>{
  await page.goto('https://www.google.com.mx/');
  await page.locator('//textarea[@aria-label="Buscar"]').click();
  await page.locator('//textarea[@aria-label="Buscar"]').fill('Playwright');
  await page.keyboard.press('Enter');
  
});



test.skip('Busca producto y da clic', async ({ page }) => {
  console.log("Navegando a Amazon...");
  await page.goto('https://www.amazon.com.mx/');
  await page.waitForTimeout(2000);
  await page.locator('[id=navbar-main]').isVisible();
  console.log("Encuentra nav...");
  await page.waitForTimeout(2000);

//  await page.locator('[id=nav-search-submit-button]').click();
  // console.log("Esperando que el campo de búsqueda sea visible...");
  // await page.locator('[id=twotabsearchtextbox]').click();
  await page.locator('//input[@id="twotabsearchtextbox"]').isVisible();
  console.log('is visible');
  // console.log("Llenando el campo de búsqueda...");
  await page.locator('//input[@id="twotabsearchtextbox"]').isEnabled();
console.log('si esta habilidado');
await page.waitForTimeout(2000);
 await page.locator('[id=twotabsearchtextbox]').fill('PS5');
 await page.waitForTimeout(2000);
  // console.log("Haciendo clic en el botón de búsqueda...");
   await page.locator('[id=nav-search-submit-button]').click();
   await page.waitForTimeout(2000);
  // console.log("Esperando resultados...");
  //await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]');
  // console.log("Haciendo clic en el primer resultado...");
   await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();
  // console.log("Prueba completada");
});

