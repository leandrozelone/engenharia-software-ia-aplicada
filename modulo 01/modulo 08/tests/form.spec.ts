import { expect, test } from '@playwright/test';

test.describe('image form', () => {
  test('submits the form and updates the list', async ({ page }) => {
    const uniqueTitle = `Generated Image ${Date.now()}`;
    const imageUrl = 'https://example.com/test-image.png';

    await page.goto('');

    const cards = page.locator('#card-list article');
    await expect(cards).toHaveCount(3);

    await page.getByRole('textbox', { name: 'Image Title' }).fill(uniqueTitle);
    await page.getByRole('textbox', { name: 'Image URL' }).fill(imageUrl);
    await page.locator('#btnSubmit').click();

    await expect(cards).toHaveCount(4);
    await expect(page.getByRole('heading', { name: uniqueTitle })).toBeVisible();
    await expect(page.locator(`img[src="${imageUrl}"]`)).toBeVisible();
  });

  test('shows validation feedback when the form is submitted empty', async ({ page }) => {
    await page.goto('');

    const cards = page.locator('#card-list article');
    await expect(cards).toHaveCount(3);

    await page.locator('#btnSubmit').click();

    await expect(page.locator('form')).toHaveClass(/was-validated/);
    await expect(page.getByText('Please type a title for the image.')).toBeVisible();
    await expect(page.getByText('Please type a valid URL')).toBeVisible();
    await expect(cards).toHaveCount(3);
  });
});