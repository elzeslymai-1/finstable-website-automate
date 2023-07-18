import { Actions } from "../../Main Component/Action";
import { Homepage_Model } from "../../Page Model/Home Page/Home_model";
import { Homepage_Element } from "../../Page Model/Home Page/Home_element";
import { Homepage_Expect } from "../../Page Model/Home Page/Home_expect";

const action = new Actions()
const element = new Homepage_Element()
const assert = new Homepage_Model()
const expect = new Homepage_Expect()

describe('Home Page Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check Home Element is Displayed', () => {

        it('[Element] => Contact btn', () => {
            //Assert
            assert.check_Element(element.contact_btn)
        })

        it('[Element] => Next btn', () => {
            //Assert
            assert.check_Element(element.next_btn)
        })

        it('[Element] => Scroll Down btn', () => {
            //Assert
            assert.check_Element(element.scroll_down_btn)
        })

        it('[Element] => Rocket btn', () => {
            //Assert
            assert.check_Element(element.rocket_btn)
        })

        it('[Element] => Project Profiling card', () => {
            //Assert
            assert.check_Element(element.profiling_card)
        })

        it('[Element] => Token Economics card', () => {
            //Assert
            assert.check_Element(element.token_eco_card)
        })

        it('[Element] => Tokenization card', () => {
            //assert
            assert.check_Element(element.tokenization_card)
        })

        it('[Element] => Blockchain Applications card', () => {
            //assert
            assert.check_Element(element.blockain_card)
        })

        it('[Element] => Project Launching card', () => {
            //assert
            assert.check_Element(element.project_launch_card)
        })

        it('[Element] => Market Maker card', () => {
            //assert
            assert.check_Element(element.market_maker_card)
        })

        it('[Element] => Card 1 btn', () => {
            //assert
            assert.check_Element(element.card1_btn)
        })

        it('[Element] => Card 2 btn', () => {
            //assert
            assert.check_Element(element.card2_btn)
        })

        it('[Element] => Card 3 btn', () => {
            //assert
            assert.check_Element(element.card3_btn)
        })

        it('[Element] => Our Work Read More btn', () => {
            //assert
            assert.check_Element(element.read_more_btn)
        })

        it('[Element] => All Event btn', () => {
            //assert
            assert.check_Element(element.all_btn)
        })

        it('[Element] => Upcoming Event btn', () => {
            //assert
            assert.check_Element(element.upcoming_event_btn)
        })

        it('[Element] => Past Event btn', () => {
            //assert
            assert.check_Element(element.past_event_btn)
        })

        it('[Element] => Event Page 1 btn', () => {
            //assert
            assert.check_Element(element.page1_btn)
        })

        it('[Element] => Event Page 2 btn', () => {
            //assert
            assert.check_Element(element.page2_btn)
        })

        it('[Element] => Event Page 3 btn', () => {
            //assert
            assert.check_Element(element.page3_btn)
        })

        it('[Element] => All - Event Card 1 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_event_card1)
        })

        it('[Element] => All - Event Card 2 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_event_card2)
        })

        it('[Element] => Upcoming - Event Card 1 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_event_card1)
        })

        it('[Element] => Upcoming - Event Card 2 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_event_card2)
        })

        it('[Element] => Past - Event Card 1 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_event_card1)
        })

        it('[Element] => Past - Event Card 2 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_event_card2)
        })

        it('[Element] => All - Read More Card 1 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_read_more_card1_btn)
        })

        it('[Element] => All - Read More Card 2 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_read_more_card2_btn)
        })

        it('[Element] => Upcoming - Read More Card 1 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_read_more_card1_btn)
        })

        it('[Element] => Upcoming - Read More Card 2 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_read_more_card2_btn)
        })

        it('[Element] => Past - Read More Card 1 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_read_more_card1_btn)
        })

        it('[Element] => Past - Read More Card 2 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_read_more_card2_btn)
        })

        it('[Element] => Partners Bar', () => {
            //assert
            assert.check_Element(element.partner_bar)
        })
    })

    context('Home Test Case', () => {
        context('[Check Name & Action Home Button]', () => {
            context('Check Name Home Button', () => {
                it('[Text] => Next btn', () => {
                    //assert
                    assert.check_text(element.actual_next_btn, expect.expect_next_btn_name)
                })

                it('[Text] => Scroll Down btn', () => {
                    //assert
                    assert.check_text(element.actual_scroll_down_btn, expect.expect_scroll_down_btn_name)
                })

                it('[Text] => Contact Us btn', () => {
                    //assert
                    assert.check_text(element.actual_contact_btn, expect.expect_contact_btn_name)
                })

                it('[Text] => About Us btn', () => {
                    //assert
                    assert.check_text(element.actual_about_us_btn, expect.expect_about_us_btn_name)
                })
            })

            context('Check Action', () => {
                it('[Click] => Next btn', () => {
                    //act
                    action.click(element.next_btn)

                    //assert
                    assert.check_text_contain(element.actual_next_btn, expect.expect_next_btn)
                })

                it('[Click] => Scroll down btn', () => {
                    //act
                    action.click(element.scroll_down_btn)

                    //assert
                    assert.check_scroll_down()
                })

                it('[Click] => Rocket btn', () => {
                    //act
                    action.click(element.rocket_btn)

                    //assert
                    assert.check_scroll_top()
                })

                it('[Click] => Contact Us btn', () => {
                    //act
                    action.click(element.contact_btn)

                    //assert
                    assert.check_url(expect.expect_contact_url)
                })

                it('[Click] => About Us btn', () => {
                    //act
                    action.click(element.about_us_btn)

                    //assert
                    assert.check_url(expect.expect_about_us_url)
                })
            })
        })
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
                    assert.check_text(element.actual_token_eco_card, expect.expect_token_eco_card_btn)
                })

                it('[Text] => Tokenization Card', () => {
                    //assert
                    assert.check_text(element.actual_tokenization_card, expect.expect_tokenization_card_btn)
                })

                it('[Text] => Blockchain Applications Card', () => {
                    //assert
                    assert.check_text(element.actual_blockain_card, expect.expect_blockain_card_btn)
                })

                it('[Text] => Project Launching Card', () => {
                    //assert
                    assert.check_text(element.actual_project_launch_card, expect.expect_project_launch_card_btn)
                })

                it('[Text] => Market Maker Card', () => {
                    //assert
                    assert.check_text(element.actual_market_maker_card, expect.expect_market_maker_card_btn)
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
                    assert.check_text(element.actual_profiling_card_content, expect.expect_profiling_card_btn)
                })

                it('[Text] => Token Economics Content', () => {
                    //act
                    action.mouse_hover(element.token_eco_card)

                    //assert
                    assert.check_text(element.actual_token_eco_card_content, expect.expect_token_eco_card_content)
                })

                it('[Text] => Tokenization Content', () => {
                    //act
                    action.mouse_hover(element.tokenization_card)

                    //assert
                    assert.check_text(element.actual_tokenization_card_content, expect.expect_tokenization_card_content)
                })

                it('[Text] => Blockchain Applications Content', () => {
                    //act
                    action.mouse_hover(element.blockain_card)

                    //assert
                    assert.check_text(element.actual_blockain_card_content, expect.expect_blockain_card_content)
                })

                it('[Text] => Project Launching Content', () => {
                    //act
                    action.mouse_hover(element.project_launch_card)

                    //assert
                    assert.check_text(element.actual_project_launch_card_content, expect.expect_project_launch_card_content)
                })

                it('[Text] => Market Maker Content', () => {
                    //act
                    action.mouse_hover(element.market_maker_card)

                    //assert
                    assert.check_text(element.actual_market_maker_card_content, expect.expect_market_maker_card_content)
                })
            })
        })

        context('Check Our Work Button', () => {
            beforeEach(() => {
                cy.visit(Cypress.env('finweb_url'))
            })
            it('[Click] => Card 1 btn', () => {
                //act
                action.remove_attr(element.card1_btn, 'target')
                action.click(element.card1_btn)

                //assert
                assert.check_url(expect.expect_card1_btn) //weserve
            })

            it('[Click] => Card 2 btn', () => {
                //act
                action.remove_attr(element.card2_btn, 'target')
                action.click(element.card2_btn)

                //assert
                assert.check_url(expect.expect_card2_btn) //tigermuaythai
            })

            it('[Click] => Card 3 btn', () => {
                //act
                action.remove_attr(element.card3_btn, 'target')
                action.click(element.card3_btn)

                //assert
                assert.check_url(expect.expect_card3_btn) //ยืมมั้ย
            })

            it('[Click] => Read More btn', () => {
                //act
                action.click(element.read_more_btn)

                //assert
                assert.check_url(expect.expect_read_more_btn)
            })

            it('[Text] => Read More btn', () => {
                //act
                action.click(element.read_more_btn)

                //assert
                assert.check_text(element.actual_read_more_btn_name, expect.expect_read_more_btn_name)
            })
        })

        context('Check Name & Action Corporate Events Btn', () => {
            context('Check Name Event Button', () => {
                it('[Text] => All Event btn', () => {
                    //assert
                    assert.check_text(element.actual_all_event_btn, expect.expect_all_event_btn_name)
                })

                it('[Text] => Upcoming Event btn', () => {
                    //assert
                    assert.check_text(element.actual_upcoming_event_btn, expect.expect_upcoming_event_btn_name)
                })

                it('[Text] => Past Event btn', () => {
                    //assert
                    assert.check_text(element.actual_past_event_btn, expect.expect_past_event_btn_name)
                })
            })

            context('Click Event Button', () => {
                it('[Click] => All - Event btn', () => {
                    //act
                    action.click(element.all_btn)

                    //assert
                    assert.check_text_2_opt(element.actual_all_event_1_btn, expect.expect_event_coming_soon_status, expect.expect_event_date1_status)
                    assert.check_text_2_opt(element.actual_all_event_2_btn, expect.expect_event_coming_soon_status, expect.expect_event_date1_status)
                })

                it('[Click] => Past - Event btn', () => {
                    //act
                    action.click(element.past_event_btn)

                    //assert
                    assert.check_text(element.actual_upcoming_event_1_btn, expect.expect_event_date2_status)
                    assert.check_text(element.actual_upcoming_event_2_btn, expect.expect_event_date2_status)
                })

                it('[Click] => Upcoming - Event btn', () => {
                    //act
                    action.click(element.upcoming_event_btn)

                    //assert
                    assert.check_text(element.actual_past_event_1_btn, expect.expect_event_coming_soon_status)
                    assert.check_text(element.actual_past_event_2_btn, expect.expect_event_coming_soon_status)
                })
            })

            context('Hover Picture Event Card', () => {
                it('[Hover] => All - Event Picture Card 1', () => {
                    //act
                    action.click(element.all_btn)
                    action.mouse_hover(element.all_event_picture_card1)

                    //assert
                    assert.check_text(element.actual_all_event_picture_card1, expect.expect_all_event_picture_card1)
                })

                it('[Hover] => All - Event Picture Card 2', () => {
                    //act
                    action.click(element.all_btn)
                    action.mouse_hover(element.all_event_picture_card2)

                    //assert
                    assert.check_text(element.actual_all_event_picture_card2, expect.expect_all_event_picture_card2)
                })

                it('[Hover] => Upcoming - Event Picture Card 1', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    action.mouse_hover(element.upcoming_event_picture_card1)

                    //assert
                    assert.check_text(element.actual_upcoming_event_picture_card1, expect.expect_upcoming_event_picture_card1)
                })

                it('[Hover] => Upcoming - Event Picture Card 2', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    action.mouse_hover(element.upcoming_event_picture_card2)

                    //assert
                    assert.check_text(element.actual_upcoming_event_picture_card2, expect.expect_upcoming_event_picture_card2)
                })

                it('[Hover] => Past - Event Picture Card 1', () => {
                    //act
                    action.click(element.past_event_btn)
                    action.mouse_hover(element.past_event_picture_card1)

                    //assert
                    assert.check_text(element.actual_past_event_picture_card1, expect.expect_past_event_picture_card1)
                })

                it('[Hover] => Past - Event Picture Card 2', () => {
                    //act
                    action.click(element.past_event_btn)
                    action.mouse_hover(element.past_event_picture_card2)

                    //assert
                    assert.check_text(element.actual_past_event_picture_card2, expect.expect_past_event_picture_card2)
                })
            })

            context('Check Name & Action Read More on Event Card', () => {
                context('Check Name Read More Button', () => {
                    it('[Text] => All -> Event Card 1 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_all_read_more_card1_btn_name, expect.expect_all_read_more_card1_btn_name)
                    })

                    it('[Text] => All -> Event Card 2 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_all_read_more_card2_btn_name, expect.expect_all_read_more_card2_btn_name)
                    })

                    it('[Text] => Upcoming -> Event Card 1 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_upcoming_read_more_card1_btn_name, expect.expect_upcoming_read_more_card1_btn_name)
                    })

                    it('[Text] => Upcoming -> Event Card 2 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_upcoming_read_more_card2_btn_name, expect.expect_upcoming_read_more_card2_btn_name)
                    })

                    it('[Text] => Past -> Event Card 1 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_past_read_more_card1_btn_name, expect.expect_past_read_more_card1_btn_name)
                    })

                    it('[Text] => Past -> Event Card 2 -> Read More btn name', () => {
                        //act
                        action.click(element.all_btn)

                        //assert
                        assert.check_text(element.actual_past_read_more_card2_btn_name, expect.expect_past_read_more_card2_btn_name)
                    })
                })

                context('Check Action', () => {
                    beforeEach(() => {
                        action.visit(Cypress.env('finweb_url'))
                    })
                    it('[Click] => All -> Event Card 1 -> Read More btn', () => {
                        //act
                        action.click(element.all_btn)
                        assert.get_text(element.all_topic_card1_txt) // get topic card text
                        action.click(element.all_read_more_card1_btn)

                        //assert
                        assert.check_topic_card(element.actual_all_topic_card1_txt)
                    })

                    it('[Click] => All -> Event Card 2 -> Read More btn', () => {
                        //act
                        action.click(element.all_btn)
                        assert.get_text(element.all_topic_card2_txt) // get topic card text
                        action.click(element.all_read_more_card2_btn)

                        //assert
                        assert.check_topic_card(element.actual_all_topic_card2_txt)
                    })

                    it('[Click] => Upcoming -> Event Card 1 -> Read More btn', () => {
                        //act
                        action.click(element.upcoming_event_btn)
                        assert.get_text(element.upcoming_topic_card1_txt) // get topic card text
                        action.click(element.upcoming_read_more_card1_btn)

                        //assert
                        assert.check_topic_card(element.actual_upcoming_topic_card1_txt)
                    })

                    it('[Click] => Upcoming -> Event Card 2 -> Read More btn', () => {
                        //act
                        action.click(element.upcoming_event_btn)
                        assert.get_text(element.upcoming_topic_card2_txt) // get topic card text
                        action.click(element.upcoming_read_more_card2_btn)

                        //assert
                        assert.check_topic_card(element.actual_upcoming_topic_card2_txt)
                    })

                    it('[Click] => Past -> Event Card 1 -> Read More btn', () => {
                        //act
                        action.click(element.past_event_btn)
                        assert.get_text(element.past_topic_card1_txt) // get topic card text
                        action.click(element.past_read_more_card1_btn)

                        //assert
                        assert.check_topic_card(element.actual_past_topic_card1_txt)
                    })

                    it('[Click] => Past -> Event Card 2 -> Read More btn', () => {
                        //act
                        action.click(element.past_event_btn)
                        assert.get_text(element.past_topic_card2_txt) // get topic card text
                        action.click(element.past_read_more_card2_btn)

                        //assert
                        assert.check_topic_card(element.actual_past_topic_card2_txt)
                    })
                })
            })
        })
    })
})