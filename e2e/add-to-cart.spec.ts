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

    await page.waitForTimeout(500)

    await page.getByTestId('login-submit-button').click()

    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Endereço e Bairro' }).click()

    await page.getByRole('textbox', { name: 'Endereço e Bairro' }).fill("Rua Luiz Juarez")

    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Complemento (opcional)' }).click()

    await page.getByRole('textbox', { name: 'Complemento (opcional)' }).fill("final da rua sem saída")

    await page.waitForTimeout(500)
    
    await page.getByRole('textbox', { name: 'Cidade' }).click()

    await page.getByRole('textbox', { name: 'Cidade' }).fill("São Paulo")

    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'Estado' }).click()

    await page.getByRole('textbox', { name: 'Estado' }).fill("São Paulo")

    await page.waitForTimeout(500)

    await page.getByRole('textbox', { name: 'CEP' }).click()

    await page.getByRole('textbox', { name: 'CEP' }).fill("02874-175")

    await page.waitForTimeout(500)

    await page.getByRole('button', { name: 'Continuar para pagamento' }).click()
    
    await page.waitForTimeout(1000)

    await page.getByRole('button', { name: 'Finalizar pedido' }).click()

    await page.waitForTimeout(1000)
})