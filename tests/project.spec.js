const { test, expect } = require('@playwright/test');

// Change this URL to match your local Next.js server's URL
const nextjstest = 'http://localhost:3000/';

test('Homepage content', async ({ page }) => {
  // Navigate to the homepage
  await page.goto(nextjstest);

  // Verify the presence of heading and paragraph elements
  const heading = await page.$('h1');
  const paragraph = await page.$('p');

  // Assert that the heading and paragraph elements are present
  expect(heading).toBeTruthy();
  expect(paragraph).toBeTruthy();

  // Get the text content of the heading and paragraph elements
  const headingText = await heading.textContent();
  const paragraphText = await paragraph.textContent();

  // Verify the text content of the elements
  expect(headingText).toBe('Welcome to My Web System!');
  expect(paragraphText).toBe('This is the homepage of our web system project.');
});
