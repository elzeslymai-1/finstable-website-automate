import { Actions } from "../../Main Component/Action";
import { OurService_Element } from "../../Page Model/OurService Page/OurService_element";
import { OurService_Model } from "../../Page Model/OurService Page/OurService_model";
import { OurService_Expect } from "../../Page Model/OurService Page/OurService_expect";

const action = new Actions()
const element = new OurService_Element()
const assert = new OurService_Model()
const expect = new OurService_Expect()

describe('Our Service Page Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
        action.click(element.our_service_btn)
    })
    context('Check Our Service Element are Displayed', () => {
        context('Our Service', () => {
            it('[Check Element] => Our Service Topic txt', () => {
                //assert
                assert.check_Element(element.our_service_topic_txt)
            })

            it('[Check Element] => Our Service txt', () => {
                //assert
                assert.check_Element(element.our_service_txt)
            })

            it('[Check Element] => Project Profiling card', () => {
                //Assert
                assert.check_Element(element.profiling_card)
            })

            it('[Check Element] => Token Economics card', () => {
                //Assert
                assert.check_Element(element.token_eco_card)
            })

            it('[Check Element] => Tokenization card', () => {
                //assert
                assert.check_Element(element.tokenization_card)
            })

            it('[Check Element] => Blockchain Applications card', () => {
                //assert
                assert.check_Element(element.blockain_card)
            })

            it('[Check Element] => Project Launching card', () => {
                //assert
                assert.check_Element(element.project_launch_card)
            })

            it('[Check Element] => Market Maker card', () => {
                //assert
                assert.check_Element(element.market_maker_card)
            })
        })

        context('Our Affiliates', () => {
            it('[Check Element] => Our Affiliate txt', () => {
                //assert
                assert.check_Element(element.our_affiliate_txt)
            })

            it('[Check Element] => Non-License txt', () => {
                //assert
                assert.check_Element(element.non_license_txt)
            })

            it('[Check Element] => Fin Holding txt', () => {
                //assert
                assert.check_Element(element.fin_holding_txt)
            })

            it('[Check Element] => Fin Holding Content txt', () => {
                //assert
                assert.check_Element(element.fin_holding_content_txt)
            })

            it('[Check Element] => Finstable txt', () => {
                //assert
                assert.check_Element(element.finstable_txt)
            })

            it('[Check Element] => Finstable Content txt', () => {
                //assert
                assert.check_Element(element.finstable_content_txt)
            })

            it('[Check Element] => Fin Adoption txt', () => {
                //assert
                assert.check_Element(element.fin_adoption_txt)
            })

            it('[Check Element] => Fin Adoption Content txt', () => {
                //assert
                assert.check_Element(element.fin_adoption_content_txt)
            })

            it('[Check Element] => License txt', () => {
                //assert
                assert.check_Element(element.license_txt)
            })

            it('[Check Element] => Fin ICO txt', () => {
                //assert
                assert.check_Element(element.fin_ico_txt)
            })

            it('[Check Element] => Fin ICO Content txt', () => {
                //assert
                assert.check_Element(element.fin_ico_content_txt)
            })

            it('[Check Element] => Fin Dex txt', () => {
                //assert
                assert.check_Element(element.fin_dex_txt)
            })

            it('[Check Element] => Fin Dex Content', () => {
                //assert
                assert.check_Element(element.fin_dex_content_txt)
            })

            it('[Check Element] => Fin Custodian txt', () => {
                //assert
                assert.check_Element(element.fin_custodian_content_txt)
            })

            it('[Check Element] => Fin Custodian Content txt', () => {
                //assert
                assert.check_Element(element.fin_custodian_content_txt)
            })

            it('[Check Element] => Fin Advisory txt', () => {
                //assert
                assert.check_Element(element.fin_advisory_txt)
            })

            it('[Check Element] => Fin Advisory Content txt', () => {
                //assert
                assert.check_Element(element.fin_advisory_content_txt)
            })

            it('[Check Element] => Fin Broker txt', () => {
                //assert
                assert.check_Element(element.fin_broker_txt)
            })

            it('[Check Element] => Fin Broker Content txt', () => {
                //assert
                assert.check_Element(element.fin_broker_content_txt)
            })

            it('[Check Element] => Findex Fund txt', () => {
                //assert
                assert.check_Element(element.findex_fund_txt)
            })

            it('[Check Element] => Findex Fund Content txt', () => {
                //assert
                assert.check_Element(element.findex_fund_content_txt)
            })
        })

        context('Finstable Project', () => {
            it('[Check Element] => Finstable Project txt', () => {
                //assert
                assert.check_Element(element.finstable_project_txt)
            })

            it('[Check Element] => Select Project Card 1 btn', () => {
                //assert
                assert.check_Element(element.select_project_card1_btn)
            })

            it('[Check Element] => Select Project Card 2 btn', () => {
                //assert
                assert.check_Element(element.select_project_card2_btn)
            })

            it('[Check Element] => Select Project Card 3 btn', () => {
                //assert
                assert.check_Element(element.select_project_card3_btn)
            })

            it('[Check Element] => Select Project Card 4 btn', () => {
                //assert
                assert.check_Element(element.select_project_card4_btn)
            })

            it('[Check Element] => Select Project Card 5 btn', () => {
                //assert
                assert.check_Element(element.select_project_card5_btn)
            })

            it('[Check Element] => Select Project Card 6 btn', () => {
                //assert
                assert.check_Element(element.select_project_card6_btn)
            })

            it('[Check Element] => Project Card 1 btn', () => {
                //act
                action.click(element.select_project_card1_btn)

                //assert
                assert.check_Element(element.project_card1_btn)
            })

            it('[Check Element] => Project Card 2 btn', () => {
                //act
                action.click(element.select_project_card2_btn)

                //assert
                assert.check_Element(element.project_card2_btn)
            })

            it('[Check Element] => Project Card 3 btn', () => {
                //act
                action.click(element.select_project_card3_btn)

                //assert
                assert.check_Element(element.project_card3_btn)
            })

            it('[Check Element] => Project Card 4 btn', () => {
                //act
                action.click(element.select_project_card4_btn)

                //assert
                assert.check_Element(element.project_card4_btn)
            })

            it('[Check Element] => Project Card 5 btn', () => {
                //act
                action.click(element.select_project_card5_btn)

                //assert
                assert.check_Element(element.project_card5_btn)
            })

            it('[Check Element] => Project Card 6 btn', () => {
                //act
                action.click(element.select_project_card6_btn)

                //assert
                assert.check_Element(element.project_card6_btn)
            })

            it('[Check Element] => Left btn', () => {
                //assert
                assert.check_Element(element.left_btn)
            })

            it('[Check Element] => Right btn', () => {
                //assert
                assert.check_Element(element.right_btn)
            })
        })

        context('Customer', () => {
            it('[Check Element] => Customer txt', () => {
                //assert
                assert.check_Element(element.customer_txt)
            })

            it('[Check Element] => Customer Card 1 btn', () => {
                //assert
                assert.check_Element(element.customer_card1_btn)
            })

            it('[Check Element] => Customer Card 2 btn', () => {
                //assert
                assert.check_Element(element.customer_card2_btn)
            })

            it('[Check Element] => Customer Card 3 btn', () => {
                //assert
                assert.check_Element(element.customer_card3_btn)
            })

            it('[Check Element] => Customer Card 4 btn', () => {
                //assert
                assert.check_Element(element.customer_card4_btn)
            })

            it('[Check Element] => Customer Card 5 btn', () => {
                //assert
                assert.check_Element(element.customer_card5_btn)
            })

            it('[Check Element] => Customer Card 6 btn', () => {
                //assert
                assert.check_Element(element.customer_card6_btn)
            })
        })

        context('Partner', () => {
            it('[Check Element] => Partners txt', () => {
                //assert
                assert.check_Element(element.partner_txt)
            })

            it('[Check Element] => Partners Card 1 btn', () => {
                //assert
                assert.check_Element(element.partner_card1_btn)
            })

            it('[Check Element] => Partners Card 2 btn', () => {
                //assert
                assert.check_Element(element.partner_card2_btn)
            })

            it('[Check Element] => Partners Card 3 btn', () => {
                //assert
                assert.check_Element(element.partner_card3_btn)
            })

            it('[Check Element] => Partners Card 4 btn', () => {
                //assert
                assert.check_Element(element.partner_card4_btn)
            })

            it('[Check Element] => Partners Card 5 btn', () => {
                //assert
                assert.check_Element(element.partner_card5_btn)
            })

            it('[Check Element] => Partners Card 6 btn', () => {
                //assert
                assert.check_Element(element.partner_card6_btn)
            })

            it('[Check Element] => Partners Card 7 btn', () => {
                //assert
                assert.check_Element(element.partner_card7_btn)
            })

            it('[Check Element] => Partners Card 8 btn', () => {
                //assert
                assert.check_Element(element.partner_card8_btn)
            })

            it('[Check Element] => Partners Card 9 btn', () => {
                //assert
                assert.check_Element(element.partner_card9_btn)
            })

            it('[Check Element] => Partners Card 10 btn', () => {
                //assert
                assert.check_Element(element.partner_card10_btn)
            })

            it('[Check Element] => Partners Card 11 btn', () => {
                //assert
                assert.check_Element(element.partner_card11_btn)
            })

            it('[Check Element] => Partners Card 12 btn', () => {
                //assert
                assert.check_Element(element.partner_card12_btn)
            })

            it('[Check Element] => Partners Card 13 btn', () => {
                //assert
                assert.check_Element(element.partner_card13_btn)
            })

            it('[Check Element] => Partners Card 14 btn', () => {
                //assert
                assert.check_Element(element.partner_card14_btn)
            })

            it('[Check Element] => Partners Card 15 btn', () => {
                //assert
                assert.check_Element(element.partner_card15_btn)
            })

            it('[Check Element] => Partners Card 16 btn', () => {
                //assert
                assert.check_Element(element.partner_card16_btn)
            })

            it('[Check Element] => Partners Card 17 btn', () => {
                //assert
                assert.check_Element(element.partner_card17_btn)
            })

            it('[Check Element] => Partners Card 18 btn', () => {
                //assert
                assert.check_Element(element.partner_card18_btn)
            })

            it('[Check Element] => View More btn', () => {
                //assert
                assert.check_Element(element.view_more_btn)
            })

            it('[Check Element] => View Less btn', () => {
                //act
                action.click(element.view_more_btn)

                //assert
                assert.check_Element(element.view_less_btn)
            })
        })
    })

    context('Our Service Test Case', () => {
        context('Check Text & Action Our Service', () => {
            context('Text', () => {
                it('[Text] => Our Services txt', () => {
                    //assert
                    assert.check_text(element.actual_our_service_txt, expect.expect_our_service_txt)
                })

                it('[Text] => Project Profiling Card', () => {
                    //assert
                    assert.check_text(element.actual_profiling_card, expect.expect_profiling_card_btn)
                })

                it('[Text] => Token Economics Card', () => {
                    //assert
                    assert.check_Element(element.actual_token_eco_card)
                })

                it('[Text] => Tokenization Card', () => {
                    //assert
                    assert.check_Element(element.actual_tokenization_card)
                })

                it('[Text] => Blockchain Applications Card', () => {
                    //assert
                    assert.check_Element(element.actual_blockain_card)
                })

                it('[Text] => Project Launching Card', () => {
                    //assert
                    assert.check_Element(element.actual_project_launch_card)
                })

                it('[Text] => Market Maker Card', () => {
                    //assert
                    assert.check_Element(element.actual_market_maker_card)
                })
            })

            context('Hover', () => {
                it('[Hover] => Project Profiling Card', () => {
                    //act
                    action.mouse_hover(element.profiling_card)

                    //assert
                    assert.check_Element(element.actual_profiling_card)
                })

                it('[Hover] => Token Economics Card', () => {
                    //act
                    action.mouse_hover(element.token_eco_card)

                    //assert
                    assert.check_Element(element.actual_token_eco_card)
                })

                it('[Hover] => Tokenization Card', () => {
                    //act
                    action.mouse_hover(element.tokenization_card)

                    //assert
                    assert.check_Element(element.actual_tokenization_card)
                })

                it('[Hover] => Blockchain Applications Card', () => {
                    //act
                    action.mouse_hover(element.blockain_card)

                    //assert
                    assert.check_Element(element.actual_blockain_card)
                })

                it('[Hover] => Project Launching Card', () => {
                    //act
                    action.mouse_hover(element.project_launch_card)

                    //assert
                    assert.check_Element(element.actual_project_launch_card)
                })

                it('[Hover] => Market Maker Card', () => {
                    //act
                    action.mouse_hover(element.market_maker_card)

                    //assert
                    assert.check_Element(element.actual_market_maker_card)
                })
            })

            context('Content', () => {
                it('[Text] => Project Profiling Content', () => {
                    //act
                    action.mouse_hover(element.profiling_card)

                    //assert
                    assert.check_text(element.actual_profiling_card, expect.expect_profiling_card_btn)
                })

                it('[Text] => Token Economics Content', () => {
                    //act
                    action.mouse_hover(element.token_eco_card)

                    //assert
                    assert.check_Element(element.actual_token_eco_card)
                })

                it('[Text] => Tokenization Content', () => {
                    //act
                    action.mouse_hover(element.tokenization_card)

                    //assert
                    assert.check_Element(element.actual_tokenization_card)
                })

                it('[Text] => Blockchain Applications Content', () => {
                    //act
                    action.mouse_hover(element.blockain_card)

                    //assert
                    assert.check_Element(element.actual_blockain_card)
                })

                it('[Text] => Project Launching Content', () => {
                    //act
                    action.mouse_hover(element.project_launch_card)

                    //assert
                    assert.check_Element(element.actual_project_launch_card)
                })

                it('[Text] => Market Maker Content', () => {
                    //act
                    action.mouse_hover(element.market_maker_card)

                    //assert
                    assert.check_Element(element.actual_market_maker_card)
                })
            })
        })

        context('Check Text Our Affiliates', () => {
            context('Non-License', () => {
                it('[Text] => Non-License txt', () => {
                    //assert
                    assert.check_text(element.actual_non_license_txt, expect.expect_non_license_txt)
                })

                it('[Text] => Fin Holding txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_holding_txt, expect.expect_fin_holding_txt)
                })

                it('[Text] => Fin Holding Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_holding_content_txt, expect.expect_fin_holding_content_txt)
                })

                it('[Text] => Finstable txt', () => {
                    //assert
                    assert.check_text(element.actual_finstable_txt, expect.expect_finstable_txt)
                })

                it('[Text] => Finstable Content txt', () => {
                    //assert
                    assert.check_text(element.actual_finstable_content_txt, expect.expect_finstable_content_txt)
                })

                it('[Text] => Fin Adoption txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_adoption_txt, expect.expect_fin_adoption_txt)
                })

                it('[Text] => Fin Adoption Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_adoption_content_txt, expect.expect_fin_adoption_content_txt)
                })
            })

            context('License', () => {
                it('[Text] => License txt', () => {
                    //assert
                    assert.check_text(element.actual_license_txt, expect.expect_license_txt)
                })

                it('[Text] => Fin ICO txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_ico_txt, expect.expect_fin_ico_txt)
                })

                it('[Text] => Fin ICO Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_ico_content_txt, expect.expect_fin_ico_content_txt)
                })

                it('[Text] => Fin Dex txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_dex_txt, expect.expect_fin_dex_txt)
                })

                it('[Text] => Fin Dex Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_dex_content_txt, expect.expect_fin_dex_content_txt)
                })

                it('[Text] => Fin Deal txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_deal_txt, expect.expect_fin_deal_txt)
                })

                it('[Text] => Fin Deal Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_deal_content_txt, expect.expect_fin_deal_content_txt)
                })

                it('[Text] => Fin Custodian txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_custodian_txt, expect.expect_fin_custodian_txt)
                })

                it('[Text] => Fin Custodian Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_custodian_content_txt, expect.expect_fin_custodian_content_txt)
                })

                it('[Text] => Fin Advisory txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_advisory_txt, expect.expect_fin_advisory_txt)
                })

                it('[Text] => Fin Advisory Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_advisory_content_txt, expect.expect_fin_advisory_content_txt)
                })

                it('[Text] => Fin Broker txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_broker_txt, expect.expect_fin_broker_txt)
                })

                it('[Text] => Fin Broker Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_broker_content_txt, expect.expect_fin_broker_content_txt)
                })

                it('[Text] => Findex Fund txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_dex_txt, expect.expect_findex_fund_txt)
                })

                it('[Text] => Findex Fund Content txt', () => {
                    //assert
                    assert.check_text(element.actual_fin_dex_content_txt, expect.expect_findex_fund_content_txt)
                })

            })

        })

        context('Check Action Finstable Project', () => {
            context('Select Card btn', () => {
                it('[Click] => Select Card 1 btn', () => {
                    //act
                    action.click(element.select_project_card1_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card1_btn)
                    assert.check_attr(element.actual_select_project_card1_btn, 'href', expect.expect_select_project_card1_btn)
                })

                it('[Click] => Select Card 2 btn', () => {
                    //act
                    action.click(element.select_project_card2_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card2_btn)
                    assert.check_attr(element.actual_select_project_card2_btn, 'href', expect.expect_select_project_card2_btn)

                })

                it('[Click] => Select Card 3 btn', () => {
                    //act
                    action.click(element.select_project_card3_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card3_btn)
                    assert.check_attr(element.actual_select_project_card3_btn, 'href', expect.expect_select_project_card3_btn)

                })

                it('[Click] => Select Card 4 btn', () => {
                    //act
                    action.click(element.select_project_card4_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card4_btn)
                    assert.check_attr(element.actual_select_project_card4_btn, 'href', expect.expect_select_project_card4_btn)

                })

                it('[Click] => Select Card 5 btn', () => {
                    //act
                    action.click(element.select_project_card5_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card5_btn)
                    assert.check_attr(element.actual_select_project_card5_btn, 'href', expect.expect_select_project_card5_btn)
                })

                it('[Click] => Select Card 6 btn', () => {
                    //act
                    action.click(element.select_project_card6_btn)

                    //assert
                    assert.check_Element(element.actual_select_project_card6_btn)
                    assert.check_attr(element.actual_select_project_card6_btn, 'href', expect.expect_select_project_card6_btn)

                })
            })

            context('Project Card btn', () => {
                beforeEach(() => {
                    action.visit(Cypress.env('finweb_url'))
                })
                it('[Click] => Project Card 1 btn', () => {
                    //act
                    action.click(element.select_project_card1_btn)
                    action.remove_attr(element.project_card1_btn, 'target') // remove attr target
                    action.click(element.project_card1_btn)

                    //assert
                    assert.check_url(expect.expect_project_card1_btn)
                })

                it('[Click] => Project Card 2 btn', () => {
                    //act
                    action.click(element.select_project_card2_btn)
                    action.remove_attr(element.project_card2_btn, 'target') // remove attr target
                    action.click(element.project_card2_btn)

                    //assert
                    assert.check_url(expect.expect_project_card2_btn)
                })

                it('[Click] => Project Card 3 btn', () => {
                    //act
                    action.click(element.select_project_card1_btn)
                    action.remove_attr(element.project_card3_btn, 'target') // remove attr target
                    action.click(element.project_card3_btn)

                    //assert
                    assert.check_url(expect.expect_project_card3_btn)
                })

                it('[Click] => Project Card 4 btn', () => {
                    //act
                    action.click(element.select_project_card4_btn)
                    action.remove_attr(element.project_card4_btn, 'target') // remove attr target
                    action.click(element.project_card4_btn)

                    //assert
                    assert.check_url(expect.expect_project_card4_btn)
                })

                it('[Click] => Project Card 5 btn', () => {
                    //act
                    action.click(element.select_project_card5_btn)
                    action.remove_attr(element.project_card5_btn, 'target') // remove attr target
                    action.click(element.project_card5_btn)

                    //assert
                    assert.check_url(expect.expect_project_card5_btn)
                })

                it('[Click] => Project Card 6 btn', () => {
                    //act
                    action.click(element.select_project_card6_btn)
                    action.remove_attr(element.project_card6_btn, 'target') // remove attr target
                    action.click(element.project_card6_btn)

                    //assert
                    assert.check_url(expect.expect_project_card6_btn)
                })
            })
        })

        context('Check Action Customers', () => {
            beforeEach(() => {
                action.visit(Cypress.env('finweb_url'))
            })
            it('[Text] => Customer txt', () => {
                //assert
                assert.check_text(element.actual_customer_txt, expect.expect_customer_txt)
            })

            it('[Click] => Customer Card 1 btn', () => {
                //act
                action.remove_attr(element.customer_card1_btn, 'target')
                action.click(element.customer_card1_btn)

                //assert
                assert.check_url(expect.expect_customer_card1_btn)
            })

            it('[Click] => Customer Card 2 btn', () => {
                //act
                action.remove_attr(element.customer_card2_btn, 'target')
                action.click(element.customer_card2_btn)

                //assert
                assert.check_url(expect.expect_customer_card2_btn)
            })

            it('[Click] => Customer Card 3 btn', () => {
                //act
                action.remove_attr(element.customer_card3_btn, 'target')
                action.click(element.customer_card3_btn)

                //assert
                assert.check_url(expect.expect_customer_card3_btn)
            })

            it('[Click] => Customer Card 4 btn', () => {
                //act
                action.remove_attr(element.customer_card4_btn, 'target')
                action.click(element.customer_card4_btn)

                //assert
                assert.check_url(expect.expect_customer_card4_btn)
            })

            it('[Click] => Customer Card 5 btn', () => {
                //act
                action.remove_attr(element.customer_card5_btn, 'target')
                action.click(element.customer_card5_btn)

                //assert
                assert.check_url(expect.expect_customer_card5_btn)
            })

            it('[Click] => Customer Card 6 btn', () => {
                //act
                action.remove_attr(element.customer_card6_btn, 'target')
                action.click(element.customer_card6_btn)

                //assert
                assert.check_url(expect.expect_customer_card6_btn)
            })
        })

        context('Check Action Partners', () => {
            beforeEach(() => {
                action.visit(Cypress.env('finweb_url'))
            })
            it('[Text] => Partner txt', () => {
                //assert
                assert.check_text(element.actual_partner_txt, expect.expect_partner_txt)
            })

            it('[Click] => View More btn',()=>{
                //act
                action.click(element.view_more_btn)

                //assert
                assert.check_text(element.actual_view_more_btn,expect.expect_view_more_btn)
            })

            it('[Click] => View less btn',()=>{
                //act
                action.click(element.view_less_btn)

                //assert
                assert.check_text(element.actual_view_less_btn,expect.expect_view_less_btn)
            })

            it('[Click] => Partner Card 1 btn', () => {
                //act
                action.remove_attr(element.partner_card1_btn, 'target')
                action.click(element.partner_card1_btn)

                //assert
                assert.check_url(expect.expect_partner_card1_btn)
            })

            it('[Click] => Partner Card 2 btn', () => {
                //act
                action.remove_attr(element.partner_card2_btn, 'target')
                action.click(element.partner_card2_btn)

                //assert
                assert.check_url(expect.expect_partner_card1_btn)
            })

            it('[Click] => Partner Card 3 btn', () => {
                //act
                action.remove_attr(element.partner_card3_btn, 'target')
                action.click(element.partner_card3_btn)

                //assert
                assert.check_url(expect.expect_partner_card3_btn)
            })

            it('[Click] => Partner Card 4 btn', () => {
                //act
                action.remove_attr(element.partner_card4_btn, 'target')
                action.click(element.partner_card4_btn)

                //assert
                assert.check_url(expect.expect_partner_card4_btn)
            })

            it('[Click] => Partner Card 5 btn', () => {
                //act
                action.remove_attr(element.partner_card5_btn, 'target')
                action.click(element.partner_card5_btn)

                //assert
                assert.check_url(expect.expect_partner_card5_btn)
            })

            it('[Click] => Partner Card 6 btn', () => {
                //act
                action.remove_attr(element.partner_card6_btn, 'target')
                action.click(element.partner_card6_btn)

                //assert
                assert.check_url(expect.expect_partner_card6_btn)
            })

            it('[Click] => Partner Card 7 btn', () => {
                //act
                action.remove_attr(element.partner_card7_btn, 'target')
                action.click(element.partner_card7_btn)

                //assert
                assert.check_url(expect.expect_partner_card7_btn)
            })

            it('[Click] => Partner Card 8 btn', () => {
                //act
                action.remove_attr(element.partner_card8_btn, 'target')
                action.click(element.partner_card8_btn)

                //assert
                assert.check_url(expect.expect_partner_card8_btn)
            })

            it('[Click] => Partner Card 9 btn', () => {
                //act
                action.remove_attr(element.partner_card9_btn, 'target')
                action.click(element.partner_card9_btn)

                //assert
                assert.check_url(expect.expect_partner_card9_btn)
            })

            it('[Click] => Partner Card 10 btn', () => {
                //act
                action.remove_attr(element.partner_card10_btn, 'target')
                action.click(element.partner_card10_btn)

                //assert
                assert.check_url(expect.expect_partner_card10_btn)
            })

            it('[Click] => Partner Card 11 btn', () => {
                //act
                action.remove_attr(element.partner_card11_btn, 'target')
                action.click(element.partner_card11_btn)

                //assert
                assert.check_url(expect.expect_partner_card11_btn)
            })

            it('[Click] => Partner Card 12 btn', () => {
                //act
                action.remove_attr(element.partner_card12_btn, 'target')
                action.click(element.partner_card12_btn)

                //assert
                assert.check_url(expect.expect_partner_card12_btn)
            })

            it('[Click] => Partner Card 13 btn', () => {
                //act
                action.remove_attr(element.partner_card13_btn, 'target')
                action.click(element.partner_card13_btn)

                //assert
                assert.check_url(expect.expect_partner_card13_btn)
            })

            it('[Click] => Partner Card 14 btn', () => {
                //act
                action.remove_attr(element.partner_card14_btn, 'target')
                action.click(element.partner_card14_btn)

                //assert
                assert.check_url(expect.expect_partner_card14_btn)
            })

            it('[Click] => Partner Card 15 btn', () => {
                //act
                action.remove_attr(element.partner_card15_btn, 'target')
                action.click(element.partner_card15_btn)

                //assert
                assert.check_url(expect.expect_partner_card15_btn)
            })

            it('[Click] => Partner Card 16 btn', () => {
                //act
                action.remove_attr(element.partner_card16_btn, 'target')
                action.click(element.partner_card16_btn)

                //assert
                assert.check_url(expect.expect_partner_card16_btn)
            })

            it('[Click] => Partner Card 17 btn', () => {
                //act
                action.remove_attr(element.partner_card17_btn, 'target')
                action.click(element.partner_card17_btn)

                //assert
                assert.check_url(expect.expect_partner_card17_btn)
            })

            it('[Click] => Partner Card 18 btn', () => {
                //act
                action.remove_attr(element.partner_card18_btn, 'target')
                action.click(element.partner_card18_btn)

                //assert
                assert.check_url(expect.expect_partner_card18_btn)
            })
        })

    })
})