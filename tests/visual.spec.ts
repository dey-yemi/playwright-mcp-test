import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

test('primary button matches its baseline', async ({ page }) => {
  await page.goto(pathToFileURL(path.join(__dirname, 'visual', 'button.html')).href);

  await expect(page.locator('#primary')).toHaveScreenshot('primary-button.png');
});
