export class Assertion {
    // check that have element
    check_Element(element_locator: string) {
        cy.get(element_locator).then((data) => {
            expect(data.length).equal(1)
        })
    }

    // check text with equal
    check_text(locator: string, text_val: string) {
        cy.get(locator).then((data) => {
            expect(data.text()).equal(text_val)
        })
    }

    // check text with contain
    check_text_contain(locator: string, text_val: string) {
        cy.get(locator).then((data) => {
            expect(data.text()).contain(text_val)
        })
    }

    //check value
    check_value(locator: string, value: string) {
        cy.get(locator).then((data) => {
            expect(data.val()).equal(value)
        })
    }

    // check checkox are checked
    check_checkbox_checked(locator: string) {
        cy.get(locator).should('be.checked')
    }

    // check url
    check_url(url: string) {
        cy.location().should((loc) => {
            expect(loc.href).equal(url)
        })
    }

    // check attr
    check_attr(locator: string, value: string) {
        cy.get(locator)
            .invoke('attr', 'class')
            .should('contain', value)
    }
}