import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('banner').getByText('Noah Jones').click();
  await page.getByRole('menuitem', { name: 'About' }).click();
  await page.getByText('Company Name:').click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
});