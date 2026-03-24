const { test, expect } = require('@playwright/test');

test('shows the image gallery and submit form', async ({ page }) => {
  await page.goto('');

  await expect(page.locator('#btnSubmit')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'AI Alien' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Predator Night Vision' })).toBeVisible();
});