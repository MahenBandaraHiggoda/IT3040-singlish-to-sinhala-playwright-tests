const { test, expect } = require('@playwright/test');

test('Singlish input field accepts text (UI test)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputArea = page.locator('textarea').first();

  await inputArea.fill('mama gedhara yanavaa');

  await expect(inputArea).toHaveValue('mama gedhara yanavaa');
});
