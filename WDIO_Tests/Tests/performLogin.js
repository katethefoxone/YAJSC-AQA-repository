import { expect, browser, $ } from '@wdio/globals'

describe('Log in to SauceDemo', () => {
    it( async () => {
        await browser.url(`https://www.saucedemo.com/`)

        await $('#user-name').setValue('standard_user')
        await $('#password').setValue('secret_sauce!')
        await $('button[type="submit"]').click()

        const elem = await $('#item_4_title_link')
        await expect(elem).toBeDisplayed()
    })
})