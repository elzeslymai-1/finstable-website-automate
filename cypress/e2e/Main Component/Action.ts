
export class Actions {
    setup_wallet() {
        cy.setupMetamask(
            Cypress.env('secret_word'),
            {
                networkName: Cypress.env('network_name'),
                rpcUrl: Cypress.env('rpc_url'),
                chainId: Cypress.env('chain_id'),
                symbol: Cypress.env('symbole'),
                blockExplorer: Cypress.env('blockExpolorer'),
                isTestnet: true
            },
            Cypress.env('password')
        ).then(setupFinished => {
            expect(setupFinished).to.be.true;
        });

        cy.importMetamaskAccount(Cypress.env('acc_pay_private_key'))
    }

    // visit
    visit(baseURL: string) {
        cy.visit(baseURL)
    }

    // click
    click(locator: string) {
        cy.get(locator).click()
    }

    // double click
    dbclick(locator: string) {
        cy.get(locator).dblclick({ force: true })
    }

    // remove attr
    remove_attr(locator: string, attr: string) {
        cy.get(locator).invoke("removeAttr", attr)
    }

    // enter text
    enter_text(locator: string, message: string) {
        cy.get(locator).type(message, { delay: 0 })
    }

    // enter text [invoke]
    enter_text_invoke(locator: string, message: string) {
        cy.get(locator).type(message, { delay: 0 }).invoke('val', message)
    }

    // clear text
    clear_text(locator: string) {
        cy.get(locator).clear()
    }

    // click dropdown option
    click_dropdown_option(locator: string, option: string) {
        cy.get(locator).contains(option).click()
    }

    // select dropdown option
    select_dropdown_option(locator: string, option: string) {
        cy.get(locator).select(option)
    }
}