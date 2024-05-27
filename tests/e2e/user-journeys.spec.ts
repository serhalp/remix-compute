import { expect, test } from '@playwright/test'

test.describe('User journeys', () => {
  test('loads google.com', async ({ page }) => {
    const response = await page.goto('https://google.com')
    expect(response?.status()).toBe(200)
  })
})
