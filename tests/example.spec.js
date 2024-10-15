// @ts-check
const { test, expect } = require('@playwright/test');



test('Busca producto y da clic', async ({ page }) => {
  console.log("Navegando a Amazon...");
  await page.goto('https://www.amazon.com.mx/');
  await page.waitForTimeout(5000);  // Espera adicional
  console.log("Esperando que el campo de búsqueda sea visible...");
  await expect(page.locator('[id=twotabsearchtextbox]')).toBeVisible({ timeout: 10000 });
  console.log("Llenando el campo de búsqueda...");
  await page.locator('[id=twotabsearchtextbox]').fill('PS5');
  console.log("Haciendo clic en el botón de búsqueda...");
  await page.locator('[id=nav-search-submit-button]').click();
  console.log("Esperando resultados...");
  await expect(page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]')).toBeVisible({ timeout: 10000 });
  console.log("Haciendo clic en el primer resultado...");
  await page.locator('a[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();
  console.log("Prueba completada");
});

