import { expect, test } from '@playwright/test'

test.describe(() => {
test.describe.configure({ retries: 2 });
test('cross-browser snapshots', async ({ page }) => {
  await page.goto('');
  const autoPlayVideo = page.locator('video');

  await expect(page).toHaveScreenshot({
    mask: [autoPlayVideo],
  });
});
});