import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }, testInfo) => {
  const browserName = testInfo.project.name.replace(/^setup-/, '');
  const authFile = `.auth/${browserName}.json`;

  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('**/secure');
  await page.context().storageState({ path: authFile });
});
