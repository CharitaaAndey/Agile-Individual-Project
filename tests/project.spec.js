const { test, expect } = require('@playwright/test');

const nextjstest = 'http://localhost:3000/';

test('Page title should be "Hello Professor"', async ({ page }) => {
  // Navigate to the homepage
  await page.goto(nextjstest);

  // Verify the title text in the browser tab
  const pageTitle = await page.title();
  expect(pageTitle).toBe('Hello Professor');
});

test('Page title matches Figma mockup', async ({ page }) => {
  // Navigate to the homepage
  await page.goto(nextjstest);

  // Verify the page title font, size, color, etc. (use your Figma specs)
  // You might need to use selectors that correspond to the title element in the Figma design

  // For example (this is a hypothetical example)
  const titleElement = await page.$('.title-selector');
  const titleFont = await titleElement.evaluate(el => getComputedStyle(el).fontFamily);
  const titleSize = await titleElement.evaluate(el => getComputedStyle(el).fontSize);
  const titleColor = await titleElement.evaluate(el => getComputedStyle(el).color);

  // You can add more assertions for other design properties as needed
  expect(titleFont).toBe('ExpectedFontFamily');
  expect(titleSize).toBe('ExpectedFontSize');
  expect(titleColor).toBe('ExpectedColor');
});
