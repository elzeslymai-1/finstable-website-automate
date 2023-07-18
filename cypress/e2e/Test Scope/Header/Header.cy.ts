import { Actions } from "../../Main Component/Action";
import { Header_Element } from "../../Page Model/Header/Header_element";
import { Header_Model } from "../../Page Model/Header/Header_model";
import { Header_Expect } from "../../Page Model/Header/Header_expect";

const action = new Actions()
const element = new Header_Element()
const assert = new Header_Model()
const expect = new Header_Expect()

describe('Header Test', () => {
    before(()=>{
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check Header Menu is Displayed', () => {

        it('[Check Element] => Finstable Logo btn', () => {
            //Assert
            assert.check_Element(element.header_finstable_btn)
            
        })

        it('[Check Element] => Home btn', () => {
            //Assert
            assert.check_Element(element.header_home_btn)
        })

        it('[Check Element] => About US btn', () => {
            //Assert
            assert.check_Element(element.header_about_us_btn)
        })

        it('[Check Element] => Our Service btn', () => {
            //Assert
            assert.check_Element(element.header_our_service_btn)
        })

        it('[Check Element] => Documnet btn', () => {
            //Assert
            assert.check_Element(element.header_document_btn)
        })

        it('[Check Element] => Event btn', () => {
            //Assert
            assert.check_Element(element.header_event_btn)
        })

        it('[Check Element] => Career Opportunity btn', () => {
            //assert
            assert.check_Element(element.header_career_btn)
        })

        it('[Check Element] => Contact btn', () => {
            //assert
            assert.check_Element(element.header_contact_btn)
        })

        it('[Check Element] => Language dropdown', () => {
            //assert
            assert.check_Element(element.header_lang_dropdown)
        })

        it('[Check Element] => Language TH option', () => {
            //Act
            action.click(element.header_lang_dropdown)

            //assert
            assert.check_Element(element.lang_th_dropdown_opt)
        })

        it('[Check Element] => Language EN option', () => {
            //assert
            assert.check_Element(element.lang_en_dropdown_opt)
        })
    })

    context('Check Header Menu Action', () => {

        it('[Check Action Click] => Finstable Logo btn', () => {
            //Act
            action.click(element.header_finstable_btn)

            //Assert
            assert.check_url(expect.expect_finstable_btn)
        })

        it('[Check Action Click] => Home btn', () => {
            //Act
            action.click(element.header_home_btn)

            //Assert
            assert.check_url(expect.expect_home_btn)
        })

        it('[Check Action Click] => About US btn', () => {
            //Act
            action.click(element.header_about_us_btn)

            //Assert
            assert.check_url(expect.expect_about_us_btn)
        })

        it('[Check Action Click] => Our Service btn', () => {
            //Act
            action.click(element.header_our_service_btn)

            //Assert
            assert.check_url(expect.expect_our_service_btn)
        })

        it('[Check Action Click] => Documnet btn', () => {
            //Act
            action.click(element.header_document_btn)

            //Assert
            assert.check_url(expect.expect_document_btn)
        })

        it('[Check Action Click] => Event btn', () => {
            //Act
            action.click(element.header_event_btn)

            //Assert
            assert.check_url(expect.expect_event_btn)
        })

        it('[Check Action Click] => Career Opportunity btn', () => {
            //Act
            action.click(element.header_career_btn)

            //Assert
            assert.check_url(expect.expect_career_btn)
        })

        it('[Check Action Click] => Contact btn', () => {
            //Act
            action.click(element.header_contact_btn)

            //Assert
            assert.check_url(expect.expect_contact_btn)
        })

        it('[Check Action Click] => Language dropdown', () => {
            //Act
            action.click(element.header_lang_dropdown)

            //Assert
            assert.check_text(element.lang_th_dropdown_opt,'TH')
            assert.check_text(element.lang_en_dropdown_opt,'EN')
        })

        it('[Check Action Click] => Language TH option', () => {
            //Act
            action.click(element.lang_th_dropdown_opt)

            //Assert
            assert.check_text(element.actual_lang_th,expect.expect_lang_th)
        })

        it('[Check Action Click] => Language EN btn', () => {
            //Act
            action.click(element.lang_en_dropdown_opt)

            //Assert
            assert.check_text(element.actual_lang_en,expect.expect_lang_en)
        })
    })

})