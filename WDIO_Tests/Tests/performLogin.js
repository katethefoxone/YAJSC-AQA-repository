import { expect, browser, $ } from '@wdio/globals'

describe('Test case perform login to saucedemo. Verification type: titles of items are displayed', () => {
    it( 'Perform login', async () => {
        await browser.url(`https://www.saucedemo.com/`)

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce')

        const button = await $('#login-button')
        await button.click();

        const elem = await $('#item_4_title_link')
        await expect(elem).toBeDisplayed()
    })
})