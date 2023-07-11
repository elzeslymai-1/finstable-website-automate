import { Actions } from "../../Main Component/Action";
import { Assertion } from "../../Main Component/Assert";
import { Footer_Element } from "../../Page Model/Footer/Footer_element";
import { Footer_Model } from "../../Page Model/Footer/Footer_model";

const action = new Actions()
const assert = new Assertion()
const element = new Footer_Element()
const footer = new Footer_Model()

describe('Footer Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check Footer Menu is Displayed', () => {
        it('[Check Element] => Home btn', () => {
            //Assert
            assert.check_Element(element.home)
            assert.check_text(element.home,'Home')
        })

        it('[Check Element] => Our Vission btn', () => {
            //Assert
            assert.check_Element(element.our_vission_btn)
            assert.check_text(element.our_vission_btn,'Our Vission Mission')
        })

        it('[Check Element] => Advisory Board btn', () => {
            //Assert
            assert.check_Element(element.advisory_board_btn)
            assert.check_text(element.advisory_board_btn,'Advisory Board')
        })

        it('[Check Element] => Prfessional Team btn', () => {
            //Assert
            assert.check_Element(element.professional_team_btn)
            assert.check_text(element.professional_team_btn,'Prfessional Team')
        })

        it('[Check Element] => Services btn', () => {
            //Assert
            assert.check_Element(element.services_btn)
            assert.check_text(element.services_btn,'Services')
        })

        it('[Check Element] => Affiliates btn', () => {
            //Assert
            assert.check_Element(element.affiliates_btn)
            assert.check_text(element.affiliates_btn,'Affiliates')
        })

        it('[Check Element] => Finstable Project btn', () => {
            //Assert
            assert.check_Element(element.finstable_project_btn)
            assert.check_text(element.finstable_project_btn,'Finstable Project')
        })

        it('[Check Element] => Customers btn', () => {
            //Assert
            assert.check_Element(element.customers_btn)
            assert.check_text(element.customers_btn,'Customers')
        })

        it('[Check Element] => Partnaers btn', () => {
            //Assert
            assert.check_Element(element.partners_btn)
            assert.check_text(element.partners_btn,'Partnaers')
        })

        it('[Check Element] => Presentation and Fact sheets slides btn', () => {
            //Assert
            assert.check_Element(element.presentation_btn)
            assert.check_text(element.presentation_btn,'Presentation and Fact sheets slides')
        })

        it('[Check Element] => Company Certificate btn', () => {
            //Assert
            assert.check_Element(element.company_btn)
            assert.check_text(element.company_btn,'Company Certificate')
        })

        it('[Check Element] => Privacy btn', () => {
            //Assert
            assert.check_Element(element.privacy_btn)
            assert.check_text(element.privacy_btn,'Privacy')
        })

        it('[Check Element] => All Events btn', () => {
            //Assert
            assert.check_Element(element.all_event_btn)
            assert.check_text(element.all_event_btn,'All Events')
        })

        it('[Check Element] => Upcoming Events btn', () => {
            //Assert
            assert.check_Element(element.upcoming_btn)
            assert.check_text(element.upcoming_btn,'Upcoming Events')
        })

        it('[Check Element] => Past Events btn', () => {
            //Assert
            assert.check_Element(element.past_btn)
            assert.check_text(element.past_btn,'Past Events')
        })

        it('[Check Element] => Apply Job btn', () => {
            //Assert
            assert.check_Element(element.apply_btn)
            assert.check_text(element.apply_btn,'Apply Job')
        })

        it('[Check Element] => Internship btn', () => {
            //Assert
            assert.check_Element(element.internship_btn)
            assert.check_text(element.internship_btn,'Internship')
        })

        it('[Check Element] => Phone btn', () => {
            //Assert
            assert.check_Element(element.phone_btn)
            assert.check_text(element.phone_btn,'076 600 848')
        })

        it('[Check Element] => Email btn', () => {
            //Assert
            assert.check_Element(element.email_btn)
            assert.check_text(element.email_btn,'info@finstable.co.th')
        })

        it('[Check Element] => Website btn', () => {
            //Assert
            assert.check_Element(element.website_btn)
            assert.check_text(element.website_btn,'www.finstable.co.th')
        })
    })

    context('Check element Menu Action', () => {
        it('[Check Action Click] => Home btn', () => {
            //Act
            action.click(element.home)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en')
            assert.check_text(element.assert_home,'WELCOME TO FINSTABLE')
        })

        it('[Check Action Click] => Our Vission btn', () => {
            //Act
            action.click(element.our_vission_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/about-us')
            assert.check_text(element.assert_our_vission_btn,'OURVISION MISSION')
        })

        it('[Check Action Click] => Advisory Board btn', () => {
            //Act
            action.click(element.advisory_board_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/about-us')
            assert.check_text(element.assert_advisory_board_btn,'Advisory Board')
        })

        it('[Check Action Click] => Prfessional Team btn', () => {
            //Act
            action.click(element.professional_team_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/about-us')
            assert.check_text(element.assert_professional_team_btn,'Professional Team')
        })

        it('[Check Action Click] => Services btn', () => {
            //Act
            action.click(element.services_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/our-service')
            assert.check_text(element.assert_services_btn,'OURSERVICES')
        })

        it('[Check Action Click] => Affiliates btn', () => {
            //Act
            action.click(element.affiliates_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/our-service')
            assert.check_text(element.assert_affiliates_btn,'OURAFFILIATES')
        })

        it('[Check Action Click] => Finstable Project btn', () => {
            //Act
            action.click(element.finstable_project_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/our-service')
            assert.check_text(element.assert_finstable_project_btn,'FINSTABLEPROJECTS')
        })

        it('[Check Action Click] => Customers btn', () => {
            //Act
            action.click(element.customers_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/our-service')
            assert.check_text(element.assert_customers_btn,'CUSTOMERS')
        })

        it('[Check Action Click] => Partnaers btn', () => {
            //Act
            action.click(element.partners_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/our-service')
            assert.check_text(element.assert_partners_btn,'PARTNERS')
        })

        it('[Check Action Click] => Presentation and Facsheet slide btn', () => {
            //Act
            action.click(element.presentation_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/documents')
            assert.check_text(element.assert_presentation_btn,'PRESENTATION AND FACT SHEETS SLIDES')
        })

        it('[Check Action Click] => Company Certificate btn', () => {
            //Act
            action.click(element.company_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/documents')
            assert.check_text(element.assert_company_btn,'COMPANY')
        })

        it('[Check Action Click] => Privacy btn', () => {
            //Act
            action.click(element.privacy_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/documents')
            assert.check_text(element.assert_privacy_btn,'PRIVACY')
        })

        it('[Check Action Click] => All Event btn', () => {
            //Act
            action.click(element.all_event_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/event')
            assert.check_text(element.assert_all_event_btn,'All')
        })

        it('[Check Action Click] => Upcoming Event btn', () => {
            //Act
            action.click(element.upcoming_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/event')
            assert.check_text(element.assert_upcoming_btn,'Upcoming Events')
        })

        it('[Check Action Click] => Past Event btn', () => {
            //Act
            action.click(element.past_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/event')
            assert.check_text(element.assert_past_btn,'Past Events')
        })

        it('[Check Action Click] => Apply Job btn', () => {
            //Act
            action.click(element.apply_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/career-opportunity')
            assert.check_text(element.assert_apply_btn,'JOBS')
        })

        it('[Check Action Click] => Internship btn', () => {
            //Act
            action.click(element.internship_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/career-opportunity')
            assert.check_text(element.assert_internship_btn,'INTERNSHIP')
        })

        it('[Check Action Click] => Phone btn', () => {
            //Act
            action.click(element.phone_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/contacts')
            assert.check_text(element.assert_phone_btn,'')
        })

        it('[Check Action Click] => Email btn', () => {
            //Act
            action.click(element.email_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en/contacts')
            assert.check_text(element.email_btn,'')
        })

        it('[Check Action Click] => Website btn', () => {
            //Act
            action.click(element.website_btn)

            //Assert
            assert.check_url('https://div.webfin.finstable.co.th/en')
            assert.check_text(element.assert_website_btn,'WELCOME TO FINSTABLE')
        })
    })
})