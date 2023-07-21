import { Actions } from "../../Main Component/Action";
import { Document_Element } from "../../Page Model/Document Page/Document_element";
import { Document_Model } from "../../Page Model/Document Page/Document_model";
import { Document_Expect } from "../../Page Model/Document Page/Document_expect";


const action = new Actions()
const element = new Document_Element()
const assert = new Document_Model()
const expect = new Document_Expect()

describe('Document Page Test', () => {
    context('Check Document Element are Displayed', () => {
        before(() => {
            action.visit(Cypress.env('finweb_url'))
            action.click(element.nav_document_menu_btn)
        })
        it('[Element] => Document Topic txt', () => {
            //assert
            assert.check_Element(element.document_topic_txt)
        })

        it('[Element] => Document Topic Content txt', () => {
            //assert
            assert.check_Element(element.document_topic_content_txt)
        })

        it('[Element] => Document & Download txt', () => {
            //assert
            assert.check_Element(element.document_download_txt)
        })

        it('[Element] => Presentation & FactSheets Slide txt', () => {
            //assert
            assert.check_Element(element.present_txt)
        })

        it('[Element] => Presentation & FactSheets Slide Content txt', () => {
            //assert
            assert.check_Element(element.present_content_txt)
        })

        it('[Element] => Download PDF Presentation & FactSheets Slide btn', () => {
            //assert
            assert.check_Element(element.present_download_pdf_btn)
        })

        it('[Element] => Company txt', () => {
            //assert
            assert.check_Element(element.company_txt)
        })

        it('[Element] => Company Content txt', () => {
            //assert
            assert.check_Element(element.company_content_txt)
        })

        it('[Element] => Download PDF Company btn', () => {
            //assert
            assert.check_Element(element.company_download_pdf_btn)
        })

        it('[Element] => Privacy txt', () => {
            //assert
            assert.check_Element(element.privacy_txt)
        })

        it('[Element] => Privacy Content txt', () => {
            //assert
            assert.check_Element(element.privacy_content_txt)
        })

        it('[Element] => Download PDF Privacy btn', () => {
            //assert
            assert.check_Element(element.privacy_download_pdf_btn)
        })
    })

    context('Document Page Test Case', () => {
        context('Check Text & Button Name on Document Page', () => {
            it('[Text] => Document Topic txt', () => {
                //assert
                assert.check_text(element.actual_document_topic_txt, expect.expect_document_topic_txt)
            })

            it('[Text] => Document Topic Content txt', () => {
                //assert
                assert.check_text(element.actual_document_topic_content_txt, expect.expect_document_topic_content_txt)
            })

            it('[Text] => Document & Download txt', () => {
                //assert
                assert.check_text(element.actual_document_download_txt, expect.expect_document_download_txt)
            })

            it('[Text] => Presentation & FactSheets Slides txt', () => {
                //assert
                assert.check_text(element.actual_present_txt, expect.expect_present_txt)
            })

            it('[Text] => Presentation & FactSheets Slides Content txt', () => {
                //assert
                assert.check_text(element.actual_present_content_txt, expect.expect_present_content_txt)
            })

            it('[Text] => Company txt', () => {
                //assert
                assert.check_text(element.actual_company_txt, expect.expect_company_txt)
            })

            it('[Text] => Company Content txt', () => {
                //assert
                assert.check_text(element.actual_company_content_txt, expect.expect_company_content_txt)
            })

            it('[Text] => Privacy txt', () => {
                //assert
                assert.check_text(element.actual_privacy_txt, expect.expect_privacy_txt)
            })

            it('[Text] => Privacy Content txt', () => {
                //assert
                assert.check_text(element.actual_privacy_content_txt, expect.expect_privacy_content_txt)
            })

            it('[Text] => Download PDF Presentation & FactSheets Slide btn name', () => {
                //assert
                assert.check_text(element.actual_present_download_pdf_btn_name, expect.expect_present_download_pdf_btn_name)
            })

            it('[Text] => Download PDF Copany btn name', () => {
                //assert
                assert.check_text(element.actual_company_download_pdf_btn_name, expect.expect_company_download_pdf_btn_name)
            })

            it('[Text] => Download PDF Privacy btn name', () => {
                //assert
                assert.check_text(element.actual_privacy_download_pdf_btn_name, expect.expect_privacy_download_pdf_btn_name)
            })
        })

        context('Check Action Document Page', () => {
            before(() => {
                action.visit(Cypress.env('finweb_url'))
                action.click(element.nav_document_menu_btn)
                cy.wait(2000)
            })
            it('[Click] => Download PDF Presentation & FactSheets Slide btn', () => {
                //assert
                assert.check_attr(element.actual_present_download_pdf_btn, 'target', expect.expect_present_download_pdf_attr_target)
                assert.check_attr(element.actual_present_download_pdf_btn, 'href', expect.expect_present_download_pdf_url)
            })

            it('[Click] => Download PDF Copany btn', () => {
                //assert
                assert.check_attr(element.actual_company_download_pdf_btn, 'target', expect.expect_company_download_pdf_attr_target)
                assert.check_attr(element.actual_company_download_pdf_btn, 'href', expect.expect_company_download_pdf_url)
            })

            it('[Click] => Download PDF Privacy btn name', () => {
                //assert
                assert.check_attr(element.actual_privacy_download_pdf_btn, 'target', expect.expect_privacy_download_pdf_attr_target)
                assert.check_attr(element.actual_privacy_download_pdf_btn, 'href', expect.expect_privacy_download_pdf_url)
            })
        })
    })
})