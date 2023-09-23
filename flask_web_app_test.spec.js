import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5000/');
  await page.getByRole('link', { name: 'Page One' }).click();
  await page.getByRole('button', { name: 'Click Me!' }).click();
  await page.getByRole('button', { name: 'Click Me!' }).click({
    clickCount: 10
  });
  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Page Two' }).click();
  await page.getByRole('heading', { name: 'Morse Code to String' });
  await page.getByPlaceholder('Enter text ').click();
  await page.getByPlaceholder('Enter text ').fill('.-/....');
  await page.getByPlaceholder('Enter text ').press('Enter');
  await page.getByRole('link', { name: 'Page Three' }).click();
  await page.getByRole('heading', { name: 'Welcome to Page three' });
});