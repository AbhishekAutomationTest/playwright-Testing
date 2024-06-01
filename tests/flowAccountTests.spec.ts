import { expect, test } from '@playwright/test'

test.describe.parallel('Flow Account website tests', () => {
    test('can change language', async({ page }) => {
        await page.goto('/')
        expect(await page.title()).toContain('FlowAccount')
        expect (await page.$$('.language-icon > a')).toBeTruthy
        page.click('.language-icon > a')
    })
})