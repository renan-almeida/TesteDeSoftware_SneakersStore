import test, { expect } from "@playwright/test";

test("adicionar ao carrinho", async ({page}) => {
    await page.goto("https://fiap-sneakers-store.vercel.app/");

    await page.waitForTimeout(1500)

    await page.getByRole('link', { name: 'Knu Skool Rhododendron Adidas' })
        .click()

    await page.waitForTimeout(2500)

    await page.getByRole('button', { name: '36' }).click()
    await page.getByRole('button', { name: 'Vermelho' }).click()

    await page.getByTestId("add-to-cart-button").click()
    
    await page.waitForTimeout(500)

    await page.getByRole('button', { name: '1 Carrinho' }).click()
    
    await page.waitForTimeout(500)

    await expect(page.getByRole('heading', { name: 'Carrinho de compras' }))
        .toBeVisible()

        await page.waitForTimeout(500)

    await page.getByRole('link', { name: 'Finalizar compra' }).click();

    await page.waitForTimeout(1500)

    await page.getByTestId('login-email-input').click()

    await page.getByTestId('login-email-input').fill("renanalmeidadantas2007@gmail.com")

    await page.waitForTimeout(1000)

    await page.getByTestId('login-password-input').click()

    await page.getByTestId('login-password-input').fill("Rejova135")

    

    
})