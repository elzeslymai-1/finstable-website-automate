import { Actions } from "../../Main Component/Action";
import { AboutUS_Element } from "../../Page Model/AboutUS Page/AboutUS_element";
import { AboutUS_Model } from "../../Page Model/AboutUS Page/AboutUS_model";
import { AboutUS_Expect } from "../../Page Model/AboutUS Page/AboutUS_expect";

const action = new Actions()
const element = new AboutUS_Element()
const assert = new AboutUS_Model()
const expect = new AboutUS_Expect()


describe('About US Page Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check About Us Element is Displayed', () => {
        context('Check About Button', () => {
            it('[Check Element] => Read More btn', () => {
                //assert
                assert.check_Element(element.read_more_btn)
            })

            it('[Check Element] => Read Less btn', () => {
                //act
                action.click(element.read_more_btn)

                //assert
                assert.check_Element(element.read_less_btn)
            })
        })

        context('Check Our Vision Mission', () => {
            it('[Check Element] => Vision Topic text', () => {
                //assert
                assert.check_Element(element.vision_txt)
            })

            it('[Check Element] => Vision Content text', () => {
                //assert
                assert.check_Element(element.vision_content_txt)
            })

            it('[Check Element] => Mission Topic text', () => {
                //assert
                assert.check_Element(element.mission_txt)
            })

            it('[Check Element] => Mission Content 1 text', () => {
                //assert
                assert.check_Element(element.mission_content1_txt)
            })

            it('[Check Element] => Mission Content 2 text', () => {
                //assert
                assert.check_Element(element.mission_content2_txt)
            })

            it('[Check Element] => Mission Content 3 text', () => {
                //assert
                assert.check_Element(element.mission_content3_txt)
            })

            it('[Check Element] => Mission Content 4 text', () => {
                //assert
                assert.check_Element(element.mission_content4_txt)
            })

            it('[Check Element] => Mission Content 5 text', () => {
                //assert
                assert.check_Element(element.mission_content5_txt)
            })

            it('[Check Element] => Mission Content 6 text', () => {
                //assert
                assert.check_Element(element.mission_content6_txt)
            })
        })

        context('Check Advisory Board Button', () => {

            it('[Check Element] => Professional Team Topic text', () => {
                //assert
                assert.check_Element(element.professional_team_topic_txt)
            })

            it('[Check Element] => Advisory Board text', () => {
                //assert
                assert.check_Element(element.advisory_board_text)
            })

            it('[Check Element] => Advisory Card 1 btn', () => {
                //assert
                assert.check_Element(element.advisory_card1_btn)
            })

            it('[Check Element] => Advisory Card 1 modal', () => {
                //act
                action.click(element.advisory_card1_btn)

                //assert
                assert.check_Element(element.advisory_card1_modal)
            })

            it('[Check Element] => Close Advisory Card 1 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card1_modal_btn)

                action.click(element.close_advisory_card1_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 2 btn', () => {
                //assert
                assert.check_Element(element.advisory_card2_btn)
            })

            it('[Check Element] => Advisory Card 2 modal', () => {
                //act
                action.click(element.advisory_card2_btn)

                //assert
                assert.check_Element(element.advisory_card2_modal)
            })

            it('[Check Element] => Close Advisory Card 2 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card2_modal_btn)

                action.click(element.close_advisory_card2_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 3 btn', () => {
                //assert
                assert.check_Element(element.advisory_card3_btn)
            })

            it('[Check Element] => Advisory Card 3 modal', () => {
                //act
                action.click(element.advisory_card3_btn)

                //assert
                assert.check_Element(element.advisory_card3_modal)
            })

            it('[Check Element] => Close Advisory Card 3 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card3_modal_btn)

                action.click(element.close_advisory_card3_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 4 btn', () => {
                //assert
                assert.check_Element(element.advisory_card4_btn)
            })

            it('[Check Element] => Advisory Card 4 modal', () => {
                //act
                action.click(element.advisory_card4_btn)

                //assert
                assert.check_Element(element.advisory_card4_modal)
            })

            it('[Check Element] => Close Advisory Card 4 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card4_modal_btn)

                action.click(element.close_advisory_card4_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 5 btn', () => {
                //assert
                assert.check_Element(element.advisory_card5_btn)
            })

            it('[Check Element] => Advisory Card 5 modal', () => {
                //act
                action.click(element.advisory_card5_btn)

                //assert
                assert.check_Element(element.advisory_card5_modal)
            })

            it('[Check Element] => Close Advisory Card 5 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card5_modal_btn)

                action.click(element.close_advisory_card5_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 6 btn', () => {
                //assert
                assert.check_Element(element.advisory_card6_btn)
            })

            it('[Check Element] => Advisory Card 6 modal', () => {
                //act
                action.click(element.advisory_card6_btn)

                //assert
                assert.check_Element(element.advisory_card6_modal)
            })

            it('[Check Element] => Close Advisory Card 6 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card6_modal_btn)

                action.click(element.close_advisory_card6_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 7 btn', () => {
                //assert
                assert.check_Element(element.advisory_card7_btn)
            })

            it('[Check Element] => Advisory Card 7 modal', () => {
                //act
                action.click(element.advisory_card7_btn)

                //assert
                assert.check_Element(element.advisory_card7_modal)
            })

            it('[Check Element] => Close Advisory Card 7 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card7_modal_btn)

                action.click(element.close_advisory_card7_modal_btn) // close modal
            })

            it('[Check Element] => Advisory Card 8 btn', () => {
                //assert
                assert.check_Element(element.advisory_card8_btn)
            })

            it('[Check Element] => Advisory Card 8 modal', () => {
                //act
                action.click(element.advisory_card8_btn)

                //assert
                assert.check_Element(element.advisory_card8_modal)
            })

            it('[Check Element] => Close Advisory Card 8 Modal btn', () => {
                //assert
                assert.check_Element(element.close_advisory_card8_modal_btn)

                action.click(element.close_advisory_card8_modal_btn) // close modal
            })
        })

        context('Check Professional Team Button', () => {

            it('[Check Element] => Professional Team text', () => {
                //assert
                assert.check_Element(element.professional_team_txt)
            })

            it('[Check Element] => Professional Card 1 btn', () => {
                //assert
                assert.check_Element(element.professional_card1_btn)
            })

            it('[Check Element] => Professional Card 1 modal', () => {
                //act
                action.click(element.professional_card1_btn)

                //assert
                assert.check_Element(element.professional_card1_modal)
            })

            it('[Check Element] => Close Professional Card 1 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card1_modal_btn)

                action.click(element.close_professional_card1_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 2 btn', () => {
                //assert
                assert.check_Element(element.professional_card2_btn)
            })

            it('[Check Element] => Professional Card 2 modal', () => {
                //act
                action.click(element.professional_card2_btn)

                //assert
                assert.check_Element(element.professional_card2_modal)
            })

            it('[Check Element] => Close Professional Card 2 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card2_modal_btn)

                action.click(element.close_professional_card2_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 3 btn', () => {
                //assert
                assert.check_Element(element.professional_card3_btn)
            })

            it('[Check Element] => Professional Card 3 modal', () => {
                //act
                action.click(element.professional_card3_btn)

                //assert
                assert.check_Element(element.professional_card3_modal)
            })

            it('[Check Element] => Close Professional Card 3 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card3_modal_btn)

                action.click(element.close_professional_card3_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 4 btn', () => {
                //assert
                assert.check_Element(element.professional_card4_btn)
            })

            it('[Check Element] => Professional Card 4 modal', () => {
                //act
                action.click(element.professional_card4_btn)

                //assert
                assert.check_Element(element.professional_card4_modal)
            })

            it('[Check Element] => Close Professional Card 4 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card4_modal_btn)

                action.click(element.close_professional_card4_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 5 btn', () => {
                //assert
                assert.check_Element(element.professional_card5_btn)
            })

            it('[Check Element] => Professional Card 5 modal', () => {
                //act
                action.click(element.professional_card5_btn)

                //assert
                assert.check_Element(element.professional_card5_modal)
            })

            it('[Check Element] => Close Professional Card 5 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card5_modal_btn)

                action.click(element.close_professional_card5_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 6 btn', () => {
                //assert
                assert.check_Element(element.professional_card6_btn)
            })

            it('[Check Element] => Professional Card 6 modal', () => {
                //act
                action.click(element.professional_card6_btn)

                //assert
                assert.check_Element(element.professional_card6_modal)
            })

            it('[Check Element] => Close Professional Card 6 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card6_modal_btn)

                action.click(element.close_professional_card6_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 7 btn', () => {
                //assert
                assert.check_Element(element.professional_card7_btn)
            })

            it('[Check Element] => Professional Card 7 modal', () => {
                //act
                action.click(element.professional_card7_btn)

                //assert
                assert.check_Element(element.professional_card1_modal)
            })

            it('[Check Element] => Close Professional Card 7 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card7_modal_btn)

                action.click(element.close_professional_card7_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 8 btn', () => {
                //assert
                assert.check_Element(element.professional_card8_btn)
            })

            it('[Check Element] => Professional Card 8 modal', () => {
                //act
                action.click(element.professional_card8_btn)

                //assert
                assert.check_Element(element.professional_card8_modal)
            })

            it('[Check Element] => Close Professional Card 8 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card8_modal_btn)

                action.click(element.close_professional_card8_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 9 btn', () => {
                //assert
                assert.check_Element(element.professional_card9_btn)
            })

            it('[Check Element] => Professional Card 9 modal', () => {
                //act
                action.click(element.professional_card9_btn)

                //assert
                assert.check_Element(element.professional_card9_modal)
            })

            it('[Check Element] => Close Professional Card 9 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card9_modal_btn)

                action.click(element.close_professional_card9_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 10 btn', () => {
                //assert
                assert.check_Element(element.professional_card10_btn)
            })

            it('[Check Element] => Professional Card 10 modal', () => {
                //act
                action.click(element.professional_card10_btn)

                //assert
                assert.check_Element(element.professional_card10_modal)
            })

            it('[Check Element] => Close Professional Card 10 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card10_modal_btn)

                action.click(element.close_professional_card10_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 11 btn', () => {
                //assert
                assert.check_Element(element.professional_card11_btn)
            })

            it('[Check Element] => Professional Card 11 modal', () => {
                //act
                action.click(element.professional_card11_btn)

                //assert
                assert.check_Element(element.professional_card11_modal)
            })

            it('[Check Element] => Close Professional Card 11 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card11_modal_btn)

                action.click(element.close_professional_card11_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 12 btn', () => {
                //assert
                assert.check_Element(element.professional_card12_btn)
            })

            it('[Check Element] => Professional Card 12 modal', () => {
                //act
                action.click(element.professional_card12_btn)

                //assert
                assert.check_Element(element.professional_card12_modal)
            })

            it('[Check Element] => Close Professional Card 12 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card12_modal_btn)

                action.click(element.close_professional_card12_modal_btn) // close modal
            })

            it('[Check Element] => Professional Card 13 btn', () => {
                //assert
                assert.check_Element(element.professional_card13_btn)
            })

            it('[Check Element] => Professional Card 13 modal', () => {
                //act
                action.click(element.professional_card13_btn)

                //assert
                assert.check_Element(element.professional_card13_modal)
            })

            it('[Check Element] => Close Professional Card 13 Modal btn', () => {
                //assert
                assert.check_Element(element.close_professional_card13_modal_btn)

                action.click(element.close_professional_card13_modal_btn) // close modal
            })
        })
    })

    context('About US Test Case', () => {
        before(() => {
            action.visit(Cypress.env('finweb_url'))
        })
        context('Check Name & Action About Us', () => {
            context('Check Name', () => {
                it('[Text] => Read More btn name', () => {
                    //assert
                    assert.check_text(element.actual_read_more_btn, expect.expect_read_more_btn_name)
                })

                it('[Text] => Read Less btn name', () => {
                    //act
                    action.click(element.read_more_btn)

                    //assert
                    assert.check_Element(element.read_less_btn)
                    assert.check_text(element.actual_read_less_btn, expect.expect_read_less_btn_name)
                })
            })

            context('Check Action', () => {
                it('[Click] => Read More btn', () => {
                    //act
                    action.click(element.read_more_btn)

                    //assert
                    assert.check_Element(element.read_less_btn)
                    assert.check_text(element.read_less_btn, expect.expect_read_more_btn)
                })

                it('[Click] => Read Less btn', () => {
                    //act
                    action.click(element.read_less_btn)

                    //assert
                    assert.check_Element(element.read_more_btn)
                    assert.check_text(element.read_more_btn, expect.expect_read_less_btn)
                })
            })
        })

        context('Check Our Vision Mission', () => {
            it('[Text] => Vision Text', () => {
                //assert
                assert.check_text(element.vision_txt, 'Vision')
            })

            it('[Text] => Vision Content Text', () => {
                //assert
                assert.check_text(element.vision_content_txt, expect.expect_vision_content_txt)
            })

            it('[Text] => Mission Text', () => {
                //assert
                assert.check_text(element.mission_txt, 'Mission')
            })

            it('[Text] => Mission Content 1 Text', () => {
                //assert
                assert.check_text(element.mission_content1_txt, expect.expect_mission_content1_txt)
            })

            it('[Text] => Mission Content 2 Text', () => {
                //assert
                assert.check_text(element.mission_content2_txt, expect.expect_mission_content2_txt)
            })

            it('[Text] => Mission Content 3 Text', () => {
                //assert
                assert.check_text(element.mission_content3_txt, expect.expect_mission_content3_txt)
            })

            it('[Text] => Mission Content 4 Text', () => {
                //assert
                assert.check_text(element.mission_content4_txt, expect.expect_mission_content4_txt)
            })

            it('[Text] => Mission Content 5 Text', () => {
                //assert
                assert.check_text(element.mission_content5_txt, expect.expect_mission_content5_txt)
            })

            it('[Text] => Mission Content 6 Text', () => {
                //assert
                assert.check_text(element.mission_content6_txt, expect.expect_mission_content6_txt)
            })
        })

        context('Check Action Professional Team & Advisory Board', () => {
            it('[Text] => Professional Team Topic text', () => {
                //assert
                assert.check_text(element.professional_team_topic_txt, 'PROFESSIONAL TEAM')
            })

            context('Check Action Advisory Board', () => {
                it('[Text] => Advisory text', () => {
                    //assert
                    assert.check_text(element.advisory_board_text, 'Advisory Board')
                })

                it('[Click] => Advisory Card 1 btn', () => {
                    //act
                    action.click(element.advisory_card1_btn)

                    //assert
                    assert.check_Element(element.advisory_card1_modal)
                    assert.check_text(element.actual_advisory_card1_name_txt, expect.expect_advisory_card1_name_txt)
                    assert.check_text(element.actual_advisory_card1_position_txt, expect.expect_advisory_card1_position_txt)
                    assert.check_text(element.actual_advisory_card1_content_txt, expect.expect_advisory_card1_content_txt)
                })

                it('[Click] => Close Advisory Card 1 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card1_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card1_modal)
                })

                it('[Click] => Advisory Card 2 btn', () => {
                    //act
                    action.click(element.advisory_card2_btn)

                    //assert
                    assert.check_Element(element.advisory_card2_modal)
                    assert.check_text(element.actual_advisory_card2_name_txt, expect.expect_advisory_card2_name_txt)
                    assert.check_text(element.actual_advisory_card2_position_txt, expect.expect_advisory_card2_position_txt)
                    assert.check_text(element.actual_advisory_card2_content_txt, expect.expect_advisory_card2_content_txt)
                })

                it('[Click] => Close Advisory Card 2 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card2_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card2_modal)
                })

                it('[Click] => Advisory Card 3 btn', () => {
                    //act
                    action.click(element.advisory_card3_btn)

                    //assert
                    assert.check_Element(element.advisory_card3_modal)
                    assert.check_text(element.actual_advisory_card3_name_txt, expect.expect_advisory_card3_name_txt)
                    assert.check_text(element.actual_advisory_card3_position_txt, expect.expect_advisory_card3_position_txt)
                    assert.check_text(element.actual_advisory_card3_content_txt, expect.expect_advisory_card3_content_txt)
                })

                it('[Click] => Close Advisory Card 3 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card3_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card3_modal)
                })

                it('[Click] => Advisory Card 4 btn', () => {
                    //act
                    action.click(element.advisory_card4_btn)

                    //assert
                    assert.check_Element(element.advisory_card4_modal)
                    assert.check_text(element.actual_advisory_card4_name_txt, expect.expect_advisory_card4_name_txt)
                    assert.check_text(element.actual_advisory_card4_position_txt, expect.expect_advisory_card4_position_txt)
                    assert.check_text(element.actual_advisory_card4_content_txt, expect.expect_advisory_card4_content_txt)
                })

                it('[Click] => Close Advisory Card 4 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card4_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card4_modal)
                })

                it('[Click] => Advisory Card 5 btn', () => {
                    //act
                    action.click(element.advisory_card5_btn)

                    //assert
                    assert.check_Element(element.advisory_card5_modal)
                    assert.check_text(element.actual_advisory_card5_name_txt, expect.expect_advisory_card5_name_txt)
                    assert.check_text(element.actual_advisory_card5_position_txt, expect.expect_advisory_card5_position_txt)
                    assert.check_text(element.actual_advisory_card5_content_txt, expect.expect_advisory_card5_content_txt)
                })

                it('[Click] => Close Advisory Card 5 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card5_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card5_modal)
                })

                it('[Click] => Advisory Card 6 btn', () => {
                    //act
                    action.click(element.advisory_card6_btn)

                    //assert
                    assert.check_Element(element.advisory_card6_modal)
                    assert.check_text(element.actual_advisory_card6_name_txt, expect.expect_advisory_card6_name_txt)
                    assert.check_text(element.actual_advisory_card6_position_txt, expect.expect_advisory_card6_position_txt)
                    assert.check_text(element.actual_advisory_card6_content_txt, expect.expect_advisory_card6_content_txt)
                })

                it('[Click] => Close Advisory Card 6 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card6_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card6_modal)
                })

                it('[Click] => Advisory Card 7 btn', () => {
                    //act
                    action.click(element.advisory_card7_btn)

                    //assert
                    assert.check_Element(element.advisory_card7_modal)
                    assert.check_text(element.actual_advisory_card7_name_txt, expect.expect_advisory_card7_name_txt)
                    assert.check_text(element.actual_advisory_card7_position_txt, expect.expect_advisory_card7_position_txt)
                    assert.check_text(element.actual_advisory_card7_content_txt, expect.expect_advisory_card7_content_txt)
                })

                it('[Click] => Close Advisory Card 7 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card7_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card7_modal)
                })

                it('[Click] => Advisory Card 8 btn', () => {
                    //act
                    action.click(element.advisory_card8_btn)

                    //assert
                    assert.check_Element(element.advisory_card8_modal)
                    assert.check_text(element.actual_advisory_card8_name_txt, expect.expect_advisory_card8_name_txt)
                    assert.check_text(element.actual_advisory_card8_position_txt, expect.expect_advisory_card8_position_txt)
                    assert.check_text(element.actual_advisory_card8_content_txt, expect.expect_advisory_card8_content_txt)
                })

                it('[Click] => Close Advisory Card 8 Modal btn', () => {
                    //act
                    action.click(element.close_advisory_card8_modal_btn)

                    //assert
                    assert.check_not_found_element(element.advisory_card8_modal)
                })
            })

            context('Check Action Professional Team', () => {
                it('[Text] => Professional Team text', () => {
                    //assert
                    assert.check_text(element.professional_team_txt, 'Professional Team')
                })

                it('[Click] => Professional Card 1 btn', () => {
                    //act
                    action.click(element.professional_card1_btn)

                    //assert
                    assert.check_Element(element.professional_card1_modal)
                    assert.check_text(element.actual_professional_card1_name_txt, expect.expect_professional_card1_name_txt)
                    assert.check_text(element.actual_professional_card1_position_txt, expect.expect_professional_card1_position_txt)
                    assert.check_text(element.actual_professional_card1_content_txt, expect.expect_professional_card1_content_txt)
                })

                it('[Click] => Close Professional Card 1 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card1_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card1_modal)
                })

                it('[Click] => Professional Card 2 btn', () => {
                    //act
                    action.click(element.professional_card2_btn)

                    //assert
                    assert.check_Element(element.professional_card2_modal)
                    assert.check_text(element.actual_professional_card2_name_txt, expect.expect_professional_card2_name_txt)
                    assert.check_text(element.actual_professional_card2_position_txt, expect.expect_professional_card2_position_txt)
                    assert.check_text(element.actual_professional_card2_content_txt, expect.expect_professional_card2_content_txt)
                })

                it('[Click] => Close Professional Card 2 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card2_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card2_modal)
                })

                it('[Click] => Professional Card 3 btn', () => {
                    //act
                    action.click(element.professional_card3_btn)

                    //assert
                    assert.check_Element(element.professional_card3_modal)
                    assert.check_text(element.actual_professional_card3_name_txt, expect.expect_professional_card3_name_txt)
                    assert.check_text(element.actual_professional_card3_position_txt, expect.expect_professional_card3_position_txt)
                    assert.check_text(element.actual_professional_card3_content_txt, expect.expect_professional_card3_content_txt)
                })

                it('[Click] => Close Professional Card 3 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card3_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card3_modal)
                })

                it('[Click] => Professional Card 4 btn', () => {
                    //act
                    action.click(element.professional_card4_btn)

                    //assert
                    assert.check_Element(element.professional_card4_modal)
                    assert.check_text(element.actual_professional_card4_name_txt, expect.expect_professional_card4_name_txt)
                    assert.check_text(element.actual_professional_card4_position_txt, expect.expect_professional_card4_position_txt)
                    assert.check_text(element.actual_professional_card4_content_txt, expect.expect_professional_card4_content_txt)
                })

                it('[Click] => Close Professional Card 4 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card4_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card4_modal)
                })

                it('[Click] => Professional Card 5 btn', () => {
                    //act
                    action.click(element.professional_card5_btn)

                    //assert
                    assert.check_Element(element.professional_card5_modal)
                    assert.check_text(element.actual_professional_card5_name_txt, expect.expect_professional_card5_name_txt)
                    assert.check_text(element.actual_professional_card5_position_txt, expect.expect_professional_card5_position_txt)
                    assert.check_text(element.actual_professional_card5_content_txt, expect.expect_professional_card5_content_txt)
                })

                it('[Click] => Close Professional Card 5 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card5_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card5_modal)
                })

                it('[Click] => Professional Card 6 btn', () => {
                    //act
                    action.click(element.professional_card6_btn)

                    //assert
                    assert.check_Element(element.professional_card6_modal)
                    assert.check_text(element.actual_professional_card6_name_txt, expect.expect_professional_card6_name_txt)
                    assert.check_text(element.actual_professional_card6_position_txt, expect.expect_professional_card6_position_txt)
                    assert.check_text(element.actual_professional_card6_content_txt, expect.expect_professional_card6_content_txt)
                })

                it('[Click] => Close Professional Card 6 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card6_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card6_modal)
                })

                it('[Click] => Professional Card 7 btn', () => {
                    //act
                    action.click(element.professional_card7_btn)

                    //assert
                    assert.check_Element(element.professional_card7_modal)
                    assert.check_text(element.actual_professional_card7_name_txt, expect.expect_professional_card7_name_txt)
                    assert.check_text(element.actual_professional_card7_position_txt, expect.expect_professional_card7_position_txt)
                    assert.check_text(element.actual_professional_card7_content_txt, expect.expect_professional_card7_content_txt)
                })

                it('[Click] => Close Professional Card 7 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card7_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card7_modal)
                })

                it('[Click] => Professional Card 8 btn', () => {
                    //act
                    action.click(element.professional_card8_btn)

                    //assert
                    assert.check_Element(element.professional_card8_modal)
                    assert.check_text(element.actual_professional_card8_name_txt, expect.expect_professional_card8_name_txt)
                    assert.check_text(element.actual_professional_card8_position_txt, expect.expect_professional_card8_position_txt)
                    assert.check_text(element.actual_professional_card8_content_txt, expect.expect_professional_card8_content_txt)
                })

                it('[Click] => Close Professional Card 8 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card8_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card8_modal)
                })

                it('[Click] => Professional Card 9 btn', () => {
                    //act
                    action.click(element.professional_card9_btn)

                    //assert
                    assert.check_Element(element.professional_card9_modal)
                    assert.check_text(element.actual_professional_card9_name_txt, expect.expect_professional_card9_name_txt)
                    assert.check_text(element.actual_professional_card9_position_txt, expect.expect_professional_card9_position_txt)
                    assert.check_text(element.actual_professional_card9_content_txt, expect.expect_professional_card9_content_txt)
                })

                it('[Click] => Close Professional Card 9 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card9_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card9_modal)
                })

                it('[Click] => Professional Card 10 btn', () => {
                    //act
                    action.click(element.professional_card10_btn)

                    //assert
                    assert.check_Element(element.professional_card10_modal)
                    assert.check_text(element.actual_professional_card10_name_txt, expect.expect_professional_card10_name_txt)
                    assert.check_text(element.actual_professional_card10_position_txt, expect.expect_professional_card10_position_txt)
                    assert.check_text(element.actual_professional_card10_content_txt, expect.expect_professional_card10_content_txt)
                })

                it('[Click] => Close Professional Card 10 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card10_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card10_modal)
                })

                it('[Click] => Professional Card 11 btn', () => {
                    //act
                    action.click(element.professional_card11_btn)

                    //assert
                    assert.check_Element(element.professional_card11_modal)
                    assert.check_text(element.actual_professional_card11_name_txt, expect.expect_professional_card11_name_txt)
                    assert.check_text(element.actual_professional_card11_position_txt, expect.expect_professional_card11_position_txt)
                    assert.check_text(element.actual_professional_card11_content_txt, expect.expect_professional_card11_content_txt)
                })

                it('[Click] => Close Professional Card 11 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card11_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card11_modal)
                })

                it('[Click] => Professional Card 12 btn', () => {
                    //act
                    action.click(element.professional_card12_btn)

                    //assert
                    assert.check_Element(element.professional_card12_modal)
                    assert.check_text(element.actual_professional_card12_name_txt, expect.expect_professional_card12_name_txt)
                    assert.check_text(element.actual_professional_card12_position_txt, expect.expect_professional_card12_position_txt)
                    assert.check_text(element.actual_professional_card12_content_txt, expect.expect_professional_card12_content_txt)
                })

                it('[Click] => Close Professional Card 12 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card12_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card12_modal)
                })

                it('[Click] => Professional Card 13 btn', () => {
                    //act
                    action.click(element.professional_card13_btn)

                    //assert
                    assert.check_Element(element.professional_card13_modal)
                    assert.check_text(element.actual_professional_card13_name_txt, expect.expect_professional_card13_name_txt)
                    assert.check_text(element.actual_professional_card13_position_txt, expect.expect_professional_card13_position_txt)
                    assert.check_text(element.actual_professional_card13_content_txt, expect.expect_professional_card13_content_txt)
                })

                it('[Click] => Close Professional Card 13 Modal btn', () => {
                    //act
                    action.click(element.close_professional_card13_modal_btn)

                    //assert
                    assert.check_not_found_element(element.professional_card13_modal)
                })
            })
        })
    })
})