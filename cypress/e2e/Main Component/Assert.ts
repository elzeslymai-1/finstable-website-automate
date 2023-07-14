export class Assertion {
    // check that have element
    check_Element(locator: string) {
        cy.get(locator).then((data) => {
            expect(data.length).equal(1)
        })
    }

    check_not_found_element(locator: string) {
        cy.get('body').then((data) => {
            expect(data.find(locator)).equal(0)
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

    // check text contain one or two string
    check_text_2_opt(locator: string, text1_val: string, text2_val: string) {
        cy.get(locator)
            .invoke('text')
            .then((text) => {
                expect(text).to.be.oneOf([text1_val, text2_val])
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
    check_attr(locator: string, attr_val: string, value: string) {
        cy.get(locator)
            .invoke('attr', attr_val)
            .should('contain', value)
    }

    //check scroll down
    check_scroll_down() {
        cy.window().then((win) => {
            const { scrollY } = win;
            // Perform assertions based on the scroll position, e.g.
            expect(scrollY).to.be.greaterThan(0); // Check if scrollY is greater than 0
        })
    }

    check_scroll_top() {
        cy.window().then((win) => {
            const { scrollY } = win;
            // Perform assertions based on the scroll position, e.g.
            expect(scrollY).to.be.equal(0); // Check if scrollY is greater than 0
        })
    }

}