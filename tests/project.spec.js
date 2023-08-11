const { test, expect } = require('@playwright/test');

const nextjstest = 'http://localhost:3000/';

test('Page title should be "Hello Professor"', async ({ page }) => {
  // Navigate to the homepage
  await page.goto(nextjstest);

  // Verify the title text in the browser tab
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Hello Professor');
});

test('Page title element has correct text content', async ({ page }) => {
  // Navigate to the homepage
  await page.goto(nextjstest);

  // Get the title element's text content
  const titleElement = await page.$('h1');
  const titleText = await titleElement.textContent();

  // Verify the text content of the title element
  expect(titleText).toBe('Hello Professor');
});
