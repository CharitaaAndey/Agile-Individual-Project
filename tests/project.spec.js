import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('heading', { name: 'Welcome to My Web System!' }).click();
  await page.getByText('This is the homepage of our web system project.').click();
});