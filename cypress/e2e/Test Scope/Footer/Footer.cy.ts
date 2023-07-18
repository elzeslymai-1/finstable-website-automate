import { Actions } from "../../Main Component/Action";
import { Footer_Element } from "../../Page Model/Footer/Footer_element";
import { Footer_Model } from "../../Page Model/Footer/Footer_model";
import { Footer_Expect } from "../../Page Model/Footer/Footer_expect";

const action = new Actions()
const element = new Footer_Element()
const assert = new Footer_Model()
const expect = new Footer_Expect()

describe('Footer Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check Footer Menu is Displayed', () => {
        it('[Element] => Our Vission btn', () => {
            //assert
            assert.check_Element(element.our_vission_btn)
        })

        it('[Element] => Advisory Board btn', () => {
            //assert
            assert.check_Element(element.advisory_board_btn)
        })

        it('[Element] => Prfessional Team btn', () => {
            //assert
            assert.check_Element(element.professional_team_btn)
        })

        it('[Element] => Services btn', () => {
            //assert
            assert.check_Element(element.services_btn)
        })

        it('[Element] => Affiliates btn', () => {
            //assert
            assert.check_Element(element.affiliates_btn)
        })

        it('[Element] => Finstable Project btn', () => {
            //assert
            assert.check_Element(element.finstable_project_btn)
        })

        it('[Element] => Customers btn', () => {
            //assert
            assert.check_Element(element.customers_btn)
        })

        it('[Element] => Partnaers btn', () => {
            //assert
            assert.check_Element(element.partners_btn)
        })

        it('[Element] => Presentation and Fact sheets slides btn', () => {
            //assert
            assert.check_Element(element.presentation_btn)
        })

        it('[Element] => Company Certificate btn', () => {
            //assert
            assert.check_Element(element.company_btn)
        })

        it('[Element] => Privacy btn', () => {
            //assert
            assert.check_Element(element.privacy_btn)
        })

        it('[Element] => All Events btn', () => {
            //assert
            assert.check_Element(element.all_event_btn)
        })

        it('[Element] => Upcoming Events btn', () => {
            //assert
            assert.check_Element(element.upcoming_btn)
        })

        it('[Text] => Past Events btn', () => {
            //assert
            assert.check_Element(element.past_btn)
        })

        it('[Element] => Apply Job btn', () => {
            //assert
            assert.check_Element(element.apply_btn)
        })

        it('[Element] => Internship btn', () => {
            //assert
            assert.check_Element(element.internship_btn)
        })

        it('[Element] => Phone btn', () => {
            //assert
            assert.check_Element(element.phone_btn)
        })

        it('[Element] => Email btn', () => {
            //assert
            assert.check_Element(element.email_btn)
        })

        it('[Element] => Website btn', () => {
            //assert
            assert.check_Element(element.website_btn)
        })
    })

    context('Check Name & Action Footer Menu', () => {
        context('Check Name Button',()=>{
            it('[Text] => Home btn', () => {
                //assert
                assert.check_text(element.home_btn,expect.expect_home_btn_name)
            })
    
            it('[Text] => Our Vission btn', () => {
                //assert
                assert.check_text(element.our_vission_btn,expect.expect_our_vission_btn_name)
            })
    
            it('[Text] => Advisory Board btn', () => {
                //assert
                assert.check_text(element.advisory_board_btn,expect.expect_advisory_board_btn_name)
            })
    
            it('[Text] => Prfessional Team btn', () => {
                //assert
                assert.check_text(element.professional_team_btn,expect.expect_professional_team_btn_name)
            })
    
            it('[Text] => Services btn', () => {
                //assert
                assert.check_text(element.services_btn,expect.expect_services_btn_name)
            })
    
            it('[Text] => Affiliates btn', () => {
                //assert
                assert.check_text(element.affiliates_btn,expect.expect_affiliates_btn_name)
            })
    
            it('[Text] => Finstable Project btn', () => {
                //assert
                assert.check_text(element.finstable_project_btn,expect.expect_finstable_project_btn_name)
            })
    
            it('[Text] => Customers btn', () => {
                //assert
                assert.check_text(element.customers_btn,expect.expect_customers_btn_name)
            })
    
            it('[Text] => Partnaers btn', () => {
                //assert
                assert.check_text(element.partners_btn,expect.expect_partners_btn_name)
            })
    
            it('[Text] => Presentation and Fact sheets slides btn', () => {
                //assert
                assert.check_text(element.presentation_btn,expect.expect_presentation_btn_name)
            })
    
            it('[Text] => Company Certificate btn', () => {
                //assert
                assert.check_text(element.company_btn,expect.expect_company_btn_name)
            })
    
            it('[Text] => Privacy btn', () => {
                //assert
                assert.check_text(element.privacy_btn,expect.expect_privacy_btn_name)
            })
    
            it('[Text] => All Events btn', () => {
                //assert
                assert.check_text(element.all_event_btn,expect.expect_all_event_btn_name)
            })
    
            it('[Text] => Upcoming Events btn', () => {
                //assert
                assert.check_text(element.upcoming_btn,expect.expect_upcoming_btn_name)
            })
    
            it('[Text] => Past Events btn', () => {
                //assert
                assert.check_text(element.past_btn,expect.expect_past_btn_name)
            })
    
            it('[Text] => Apply Job btn', () => {
                //assert
                assert.check_text(element.apply_btn,expect.expect_apply_btn_name)
            })
    
            it('[Text] => Internship btn', () => {
                //assert
                assert.check_text(element.internship_btn,expect.expect_internship_btn_name)
            })
    
            it('[Text] => Phone btn', () => {
                //assert
                assert.check_text(element.phone_btn,expect.expect_phone_btn_name)
            })
    
            it('[Text] => Email btn', () => {
                //assert
                assert.check_text(element.email_btn,expect.expect_email_btn_name)
            })
    
            it('[Text] => Website btn', () => {
                //assert
                assert.check_text(element.website_btn,expect.expect_website_btn_name)
            })
        })

        context('Check Action',()=>{
            it('[Click] => Home btn', () => {
                //Act
                action.click(element.home_btn)
    
                //assert
                assert.check_url(expect.expect_home_url)
                assert.check_text(element.actual_home_btn,expect.expect_home_btn)
            })
    
            it('[Click] => Our Vission btn', () => {
                //Act
                action.click(element.our_vission_btn)
    
                //assert
                assert.check_url(expect.expect_our_vission_url)
                assert.check_text(element.actual_our_vission_btn,expect.expect_our_vission_btn)
            })
    
            it('[Click] => Advisory Board btn', () => {
                //Act
                action.click(element.advisory_board_btn)
    
                //assert
                assert.check_url(expect.expect_advisory_board_url)
                assert.check_text(element.actual_advisory_board_btn,expect.expect_advisory_board_btn)
            })
    
            it('[CClick] => Prfessional Team btn', () => {
                //Act
                action.click(element.professional_team_btn)
    
                //assert
                assert.check_url(expect.expect_professional_team_url)
                assert.check_text(element.actual_professional_team_btn,expect.expect_professional_team_btn)
            })
    
            it('[Click] => Services btn', () => {
                //Act
                action.click(element.services_btn)
    
                //assert
                assert.check_url(expect.expect_services_url)
                assert.check_text(element.actual_services_btn,expect.expect_services_btn)
            })
    
            it('[Click] => Affiliates btn', () => {
                //Act
                action.click(element.affiliates_btn)
    
                //assert
                assert.check_url(expect.expect_affiliates_url)
                assert.check_text(element.actual_affiliates_btn,expect.expect_affiliates_btn)
            })
    
            it('[Click] => Finstable Project btn', () => {
                //Act
                action.click(element.finstable_project_btn)
    
                //assert
                assert.check_url(expect.expect_finstable_project_url)
                assert.check_text(element.actual_finstable_project_btn,expect.expect_finstable_project_btn)
            })
    
            it('[Click] => Customers btn', () => {
                //Act
                action.click(element.customers_btn)
    
                //assert
                assert.check_url(expect.expect_customers_url)
                assert.check_text(element.actual_customers_btn,expect.expect_customers_btn)
            })
    
            it('[Click] => Partnaers btn', () => {
                //Act
                action.click(element.partners_btn)
    
                //assert
                assert.check_url(expect.expect_partners_url)
                assert.check_text(element.actual_partners_btn,expect.expect_partners_btn)
            })
    
            it('[Click] => Presentation and Facsheet slide btn', () => {
                //Act
                action.click(element.presentation_btn)
    
                //assert
                assert.check_url(expect.expect_presentation_url)
                assert.check_text(element.actual_presentation_btn,expect.expect_presentation_btn)
            })
    
            it('[Click] => Company Certificate btn', () => {
                //Act
                action.click(element.company_btn)
    
                //assert
                assert.check_url(expect.expect_company_url)
                assert.check_text(element.actual_company_btn,expect.expect_company_btn)
            })
    
            it('[Click] => Privacy btn', () => {
                //Act
                action.click(element.privacy_btn)
    
                //assert
                assert.check_url(expect.expect_privacy_url)
                assert.check_text(element.actual_privacy_btn,expect.expect_privacy_btn)
            })
    
            it('[Click] => All Event btn', () => {
                //Act
                action.click(element.all_event_btn)
    
                //assert
                assert.check_url(expect.expect_all_event_url)
                assert.check_text(element.actual_all_event_btn,expect.expect_all_event_btn)
            })
    
            it('[Click] => Upcoming Event btn', () => {
                //Act
                action.click(element.upcoming_btn)
    
                //assert
                assert.check_url(expect.expect_upcoming_url)
                assert.check_text(element.actual_upcoming_btn,expect.expect_upcoming_btn)
            })
    
            it('[Click] => Past Event btn', () => {
                //Act
                action.click(element.past_btn)
    
                //assert
                assert.check_url(expect.expect_past_url)
                assert.check_text(element.actual_past_btn,expect.expect_past_btn)
            })
    
            it('[Click] => Apply Job btn', () => {
                //Act
                action.click(element.apply_btn)
    
                //assert
                assert.check_url(expect.expect_apply_url)
                assert.check_text(element.actual_apply_btn,expect.expect_apply_btn)
            })
    
            it('[Click] => Internship btn', () => {
                //Act
                action.click(element.internship_btn)
    
                //assert
                assert.check_url(expect.expect_internship_url)
                assert.check_text(element.actual_internship_btn,expect.expect_internship_btn)
            })
    
            it('[Click] => Phone btn', () => {
                //Act
                action.click(element.phone_btn)
    
                //assert
                assert.check_url(expect.expect_phone_url)
                assert.check_text(element.actual_phone_btn,expect.expect_phone_btn)
            })
    
            it('[Click] => Email btn', () => {
                //Act
                action.click(element.email_btn)
    
                //assert
                assert.check_url(expect.expect_email_url)
                assert.check_text(element.email_btn,expect.expect_email_btn)
            })
    
            it('[Click] => Website btn', () => {
                //Act
                action.click(element.website_btn)
    
                //assert
                assert.check_url(expect.expect_website_url)
                assert.check_text(element.actual_website_btn,expect.expect_website_btn)
            })
        })
    })
})