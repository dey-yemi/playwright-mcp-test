import { test, expect } from '@playwright/test';

test('logout from the secure area', async ({ page }) => {
  await test.step('open the secure area directly', async () => {
    await page.goto('https://the-internet.herokuapp.com/secure');
  });

  await test.step('confirm successful login message is shown', async () => {
    await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Welcome to the Secure Area. When you are done click logout below.' })
    ).toBeVisible();
  });

  await test.step('click the logout button', async () => {
    await page.getByRole('link', { name: 'Logout' }).click();
  });

  await test.step('confirm redirect to the login page', async () => {
    await expect(page).toHaveURL(/\/login$/);
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
  });

  await test.step('confirm logged-out message is shown', async () => {
    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
  });
});
