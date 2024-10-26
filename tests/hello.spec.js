const { test, expect } = require('@playwright/test');

test('Open site FPL', async ({ page }) => {
  await page.goto('https://fantasy.premierleague.com/');
  const title = await page.title();
  expect(title).toBe('Fantasy Premier League, Official Fantasy Football Game of the Premier League');
});
