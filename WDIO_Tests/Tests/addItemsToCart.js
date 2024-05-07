import { expect, browser, $ } from '@wdio/globals'

describe('Test case perform login to saucedemo and further addition of items to a cart', () => {
    it( 'Perform login, add items', async () => {
        await browser.url(`https://www.saucedemo.com/`);

        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');

        const loginButton = await $('#login-button');
        await loginButton.click();

        const bagPack = await $('#item_4_title_link');
        await expect(bagPack).toBeDisplayed();

        const addToCart = await $('#add-to-cart-sauce-labs-backpack');
        await addToCart.click();

        const cartBadge = await $('.shopping_cart_badge');
        await expect(cartBadge).toHaveText('1');

        const shoppingCartLink = await $('.shopping_cart_link');
        await shoppingCartLink.click();

        const remove = await $('#remove-sauce-labs-backpack');
        await remove.click();

        await expect(cartBadge).not.toBeDisplayed();
    })
})