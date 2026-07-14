import { test, expect } from '@playwright/test';

test('navigate to EPAM Client Work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Open the Services menu from the header.
  const servicesMenu = page.getByRole('link', { name: 'Services' }).first();
  await servicesMenu.hover();

  // Click the requested link from the opened menu.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the Client Work text is visible on the destination page.
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
