import { Actions } from "../../Main Component/Action";
import { Homepage_Model } from "../../Page Model/Home Page/Home_model";
import { Homepage_Element } from "../../Page Model/Home Page/Home_element";

const action = new Actions()
const element = new Homepage_Element()
const assert = new Homepage_Model()

describe('Home Page Test', () => {
    before(() => {
        action.visit(Cypress.env('finweb_url'))
    })
    context('Check Home Element is Displayed', () => {

        it('[Check Element] => Contact btn', () => {
            //Assert
            assert.check_Element(element.contact_btn)
            assert.check_text(element.contact_btn, 'Contact Us')
        })

        it('[Check Element] => Next btn', () => {
            //Assert
            assert.check_Element(element.next_btn)
            assert.check_text(element.next_btn, 'Next >>')
        })

        it('[Check Element] => Scroll Down btn', () => {
            //Assert
            assert.check_Element(element.scroll_down_btn)
            assert.check_text(element.scroll_down_btn, 'Scroll down')
        })

        it('[Check Element] => Rocket btn', () => {
            //Assert
            assert.check_Element(element.rocket_btn)
        })

        it('[Check Element] => Project Profiling card', () => {
            //Assert
            assert.check_Element(element.profiling_card)
            assert.check_text(element.profiling_card, 'Project profiling')
        })

        it('[Check Element] => Token Economics card', () => {
            //Assert
            assert.check_Element(element.token_eco_card)
            assert.check_text(element.token_eco_card, 'Token Economics')
        })

        it('[Check Element] => Tokenization card', () => {
            //assert
            assert.check_Element(element.tokenization_card)
            assert.check_text(element.tokenization_card, 'Tokenization')
        })

        it('[Check Element] => Blockchain Applications card', () => {
            //assert
            assert.check_Element(element.blockain_card)
            assert.check_text(element.blockain_card, 'Blockchain Applications')
        })

        it('[Check Element] => Project Launching card', () => {
            //assert
            assert.check_Element(element.project_launch_card)
            assert.check_text(element.project_launch_card, 'Project Launching')
        })

        it('[Check Element] => Market Maker card', () => {
            //assert
            assert.check_Element(element.market_maker_card)
            assert.check_text(element.market_maker_card, 'Market Maker')
        })

        it('[Check Element] => Select Card 1 btn', () => {
            //assert
            assert.check_Element(element.select_card1_btn)
        })

        it('[Check Element] => Select Card 2 btn', () => {
            //assert
            assert.check_Element(element.select_card2_btn)
        })

        it('[Check Element] => Select Card 3 btn', () => {
            //assert
            assert.check_Element(element.select_card3_btn)
        })

        it('[Check Element] => Select Card 4 btn', () => {
            //assert
            assert.check_Element(element.select_card4_btn)
        })

        it('[Check Element] => Select Card 5 btn', () => {
            //assert
            assert.check_Element(element.select_card5_btn)
        })

        it('[Check Element] => Select Card 6 btn', () => {
            //assert
            assert.check_Element(element.select_card6_btn)
        })

        it('[Check Element] => Card 1 btn', () => {
            //act
            action.click(element.select_card1_btn)

            //assert
            assert.check_Element(element.card1_btn)
        })

        it('[Check Element] => Card 2 btn', () => {
            //act
            action.click(element.select_card2_btn)

            //assert
            assert.check_Element(element.card2_btn)
        })

        it('[Check Element] => Card 3 btn', () => {
            //act
            action.click(element.select_card3_btn)

            //assert
            assert.check_Element(element.card3_btn)
        })

        it('[Check Element] => Card 4 btn', () => {
            //act
            action.click(element.select_card4_btn)

            //assert
            assert.check_Element(element.card4_btn)
        })

        it('[Check Element] => Card 5 btn', () => {
            //act
            action.click(element.select_card5_btn)

            //assert
            assert.check_Element(element.card5_btn)
        })

        it('[Check Element] => Card 6 btn', () => {
            //act
            action.click(element.select_card6_btn)

            //assert
            assert.check_Element(element.card6_btn)
        })

        it('[Check Element] => Our Work Read More btn', () => {
            //assert
            assert.check_Element(element.read_more_btn)
            assert.check_text(element.read_more_btn, 'Read More >')
        })

        it('[Check Element] => All Event btn', () => {
            //assert
            assert.check_Element(element.all_btn)
            assert.check_text(element.all_btn, 'All')
        })

        it('[Check Element] => Upcoming Event btn', () => {
            //assert
            assert.check_Element(element.upcoming_event_btn)
            assert.check_text(element.upcoming_event_btn, 'Upcoming Events')
        })

        it('[Check Element] => Past Event btn', () => {
            //assert
            assert.check_Element(element.past_event_btn)
            assert.check_text(element.past_event_btn, 'Past Events')
        })

        it('[Check Element] => Event Page 1 btn', () => {
            //assert
            assert.check_Element(element.page1_btn)
        })

        it('[Check Element] => Event Page 2 btn', () => {
            //assert
            assert.check_Element(element.page2_btn)
        })

        it('[Check Element] => Event Page 3 btn', () => {
            //assert
            assert.check_Element(element.page3_btn)
        })

        it('[Check Element] => All - Event Card 1 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_event_card1)
        })

        it('[Check Element] => All - Event Card 2 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_event_card2)
        })

        it('[Check Element] => Upcoming - Event Card 1 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_event_card1)
        })

        it('[Check Element] => Upcoming - Event Card 2 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_event_card2)
        })

        it('[Check Element] => Past - Event Card 1 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_event_card1)
        })

        it('[Check Element] => Past - Event Card 2 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_event_card2)
        })

        it('[Check Element] => All - Read More Card 1 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_read_more_card1_btn)
            assert.check_text(element.all_read_more_card1_btn, 'Read More >>')
        })

        it('[Check Element] => All - Read More Card 2 btn', () => {
            //act
            action.click(element.all_btn)

            //assert
            assert.check_Element(element.all_read_more_card2_btn)
            assert.check_text(element.all_read_more_card2_btn, 'Read More >>')
        })

        it('[Check Element] => Upcoming - Read More Card 1 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_read_more_card1_btn)
            assert.check_text(element.upcoming_read_more_card1_btn, 'Read More >>')
        })

        it('[Check Element] => Upcoming - Read More Card 2 btn', () => {
            //act
            action.click(element.upcoming_event_btn)

            //assert
            assert.check_Element(element.upcoming_read_more_card2_btn)
            assert.check_text(element.upcoming_read_more_card2_btn, 'Read More >>')
        })

        it('[Check Element] => Past - Read More Card 1 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_read_more_card1_btn)
            assert.check_text(element.past_read_more_card1_btn, 'Read More >>')
        })

        it('[Check Element] => Past - Read More Card 2 btn', () => {
            //act
            action.click(element.past_event_btn)

            //assert
            assert.check_Element(element.past_read_more_card2_btn)
            assert.check_text(element.past_read_more_card2_btn, 'Read More >>')
        })

        it('[Check Element] => Partners Bar', () => {
            //assert
            assert.check_Element(element.partner_bar)
        })
    })

    context('Home Test', () => {
        context('[Check Home Button]', () => {
            it('[Check Action Click] => Next btn', () => {
                //act
                action.click(element.next_btn)

                //assert
                assert.check_text_contain(element.assert_next_btn, 'with FINSTABLE')
            })

            it('[Check Action Click] => Scroll down btn', () => {
                //act
                action.click(element.scroll_down_btn)

                //assert
                assert.check_scroll_down()
            })

            it('[Check Action Click] => Rocket btn', () => {
                //act
                action.click(element.rocket_btn)

                //assert
                assert.check_scroll_top()
            })

            it('[Check Action Click] => Contact Us btn', () => {
                //act
                action.click(element.contact_btn)

                //assert
                assert.check_url('https://devwebfin.finstable.co.th/en/contacts')
            })
        })

        context('Check Our Service Button', () => {
            before(() => {
                cy.visit(Cypress.env('finweb_url'))
            })
            it('[Check Action Hover] => Project Profiling card', () => {
                //act
                action.mouse_hover(element.profiling_card)

                //assert
                assert.check_text_contain(element.assert_profiling_card, 'Business & Financial Analysis for designing the White Paper & Pitch Deck')
            })

            it('[Check Action Hover] => Token Economics card', () => {
                //act
                action.mouse_hover(element.token_eco_card)

                //assert
                assert.check_text_contain(element.assert_token_eco_card, 'Economic System Design for Digital Asset Incentive and Value')
            })

            it('[Check Action Hover] => Tokenization card', () => {
                //act
                action.mouse_hover(element.tokenization_card)

                //assert
                assert.check_text_contain(element.assert_tokenization_card, 'Minting Tokens via Blockchain Technology (ERC, TRC, BSC, FIRO, TERRA, BITKUB)')
            })

            it('[Check Action Hover] => Blockchain Applications cars', () => {
                //act
                action.mouse_hover(element.blockain_card)

                //assert
                assert.check_text_contain(element.assert_blockain_card, 'Blockchain Platform Development in DeFi and CeFi concepts')
            })

            it('[Check Action Hover] => Project Launching card', () => {
                //act
                action.mouse_hover(element.project_launch_card)

                //assert
                assert.check_text_contain(element.assert_project_launch_card, 'Announcement and Tokens Distribution on Blockchain Platforms')
            })

            it('[Check Action Hover] => Market Maker card', () => {
                //act
                action.mouse_hover(element.market_maker_card)

                //assert
                assert.check_text_contain(element.assert_market_maker_card, 'Providing Liquidity on Defined BUY SELL Cryptocurrency in Crypto Exchange')
            })
        })

        context('Check Our Work Button', () => {
            it('[Check Action Click] => Select Card 1 btn', () => {
                //act
                action.click(element.select_card1_btn)

                //assert
                assert.check_attr(element.assert_select_card1_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card1_btn, 'href', 'https://weserve.co.th/')  //Weserv
            })

            it('[Check Action Click] => Select Card 2 btn', () => {
                //act
                action.click(element.select_card2_btn)

                //assert
                assert.check_attr(element.assert_select_card2_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card2_btn, 'href', 'https://www.tigermuaythai.com/') //tigeruaythai
            })

            it('[Check Action Click] => Select Card 3 btn', () => {
                //act
                action.click(element.select_card3_btn)

                //assert
                assert.check_attr(element.assert_select_card3_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card3_btn, 'href', 'https://www.yuemmaithailand.com/') //ยืมมั้ย
            })

            it('[Check Action Click] => Select Card 4 btn', () => {
                //act
                action.click(element.select_card4_btn)

                //assert
                assert.check_attr(element.assert_select_card4_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card4_btn, 'href', '') // mou
            })

            it('[Check Action Click] => Select Card 5 btn', () => {
                //act
                action.click(element.select_card5_btn)

                //assert
                assert.check_attr(element.assert_select_card5_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card5_btn, 'href', 'https://www.xtatuz.com/') //xtatuz
            })

            it('[Check Action Click] => Select Card 6 btn', () => {
                //act
                action.click(element.select_card6_btn)

                //assert
                assert.check_attr(element.assert_select_card6_btn, 'target', '_blank')
                assert.check_attr(element.assert_select_card6_btn, 'href', '') //
            })

            it('[Check Action Click] => Card 1 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card1_btn)
                action.remove_attr(element.card1_btn, 'target')
                action.click(element.card1_btn)

                //assert
                assert.check_url('https://weserve.co.th/') //weserve
            })

            it('[Check Action Click] => Card 2 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card2_btn)
                action.remove_attr(element.card2_btn, 'target')
                action.click(element.card2_btn)

                //assert
                assert.check_url('https://www.tigermuaythai.com/') //tigermuaythai
            })

            it('[Check Action Click] => Card 3 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card3_btn)
                action.remove_attr(element.card3_btn, 'target')
                action.click(element.card3_btn)

                //assert
                assert.check_url('https://www.yuemmaithailand.com/') //ยืมมั้ย
            })

            it('[Check Action Click] => Card 4 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card4_btn)
                action.remove_attr(element.card4_btn, 'target')
                action.click(element.card4_btn)

                //assert
                assert.check_url('') //mou
            })

            it('[Check Action Click] => Card 5 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card5_btn)
                action.remove_attr(element.card5_btn, 'target')
                action.click(element.card5_btn)

                //assert
                assert.check_url('https://www.xtatuz.com/') //xtatuz
            })

            it('[Check Action Click] => Card 6 btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.select_card6_btn)
                action.remove_attr(element.card6_btn, 'target')
                action.click(element.card6_btn)

                //assert
                assert.check_url('') //
            })

            it('[Check Action Click] => Read More btn', () => {
                before(() => {
                    cy.visit(Cypress.env('finweb_url'))
                })

                //act
                action.click(element.read_more_btn)

                //assert
                assert.check_url('')
            })
        })

        context('Check Corporate Events Btn', () => {
            context('Check Action Click Event Button', () => {

                it('[Click] => All - Event btn', () => {
                    //act
                    action.click(element.all_btn)

                    //assert
                    assert.check_text_2_opt(element.assert_all_event_1_btn, 'Coming Soon...', '21/06/2023 - 26/06/2023')
                    assert.check_text_2_opt(element.assert_all_event_2_btn, 'Coming Soon...', '21/06/2023 - 26/06/2023')
                })

                it('[Click] => Past - Event btn', () => {
                    //act
                    action.click(element.past_event_btn)

                    //assert
                    assert.check_text(element.assert_upcoming_event_1_btn, '29/06/2023 - 30/06/2023')
                    assert.check_text(element.assert_upcoming_event_2_btn, '29/06/2023 - 30/06/2023')
                })

                it('[Click] => Upcoming - Event btn', () => {
                    //act
                    action.click(element.upcoming_event_btn)

                    //assert
                    assert.check_text(element.assert_past_event_1_btn, 'Coming Soon...')
                    assert.check_text(element.assert_past_event_2_btn, 'Coming Soon...')
                })
            })

            context('Check Action Hover Picture Event Card', () => {
                it('[Hover] => All - Event Picture Card 1', () => {
                    //act
                    action.click(element.all_btn)
                    action.mouse_hover(element.all_event_picture_card1)

                    //assert
                    assert.check_text(element.assert_all_event_picture_card1, 'Read')
                })

                it('[Hover] => All - Event Picture Card 2', () => {
                    //act
                    action.click(element.all_btn)
                    action.mouse_hover(element.all_event_picture_card2)

                    //assert
                    assert.check_text(element.assert_all_event_picture_card2, 'Read')
                })

                it('[Hover] => Upcoming - Event Picture Card 1', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    action.mouse_hover(element.upcoming_event_picture_card1)

                    //assert
                    assert.check_text(element.assert_upcoming_event_picture_card1, 'Read')
                })

                it('[Hover] => Upcoming - Event Picture Card 2', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    action.mouse_hover(element.upcoming_event_picture_card2)

                    //assert
                    assert.check_text(element.assert_upcoming_event_picture_card2, 'Read')
                })

                it('[Hover] => Past - Event Picture Card 1', () => {
                    //act
                    action.click(element.past_event_btn)
                    action.mouse_hover(element.past_event_picture_card1)

                    //assert
                    assert.check_text(element.assert_past_event_picture_card1, 'Read')
                })

                it('[Hover] => Past - Event Picture Card 2', () => {
                    //act
                    action.click(element.past_event_btn)
                    action.mouse_hover(element.past_event_picture_card2)

                    //assert
                    assert.check_text(element.assert_past_event_picture_card2, 'Read')
                })
            })

            context('Check Action Click Read More on Event Card', () => {
                beforeEach(() => {
                    action.visit(Cypress.env('finweb_url'))
                })
                it('[Click] => All -> Event Card 1 -> Read More btn', () => {
                    //act
                    action.click(element.all_btn)
                    assert.get_text(element.all_topic_card1_txt) // get topic card text
                    action.click(element.all_read_more_card1_btn)

                    //assert
                    assert.check_topic_card(element.assert_all_topic_card1_txt)
                })

                it('[Click] => All -> Event Card 2 -> Read More btn', () => {
                    //act
                    action.click(element.all_btn)
                    assert.get_text(element.all_topic_card2_txt) // get topic card text
                    action.click(element.all_read_more_card2_btn)

                    //assert
                    assert.check_topic_card(element.assert_all_topic_card2_txt)
                })

                it('[Click] => Upcoming -> Event Card 1 -> Read More btn', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    assert.get_text(element.upcoming_topic_card1_txt) // get topic card text
                    action.click(element.upcoming_read_more_card1_btn)

                    //assert
                    assert.check_topic_card(element.assert_upcoming_topic_card1_txt)
                })

                it('[Click] => Upcoming -> Event Card 2 -> Read More btn', () => {
                    //act
                    action.click(element.upcoming_event_btn)
                    assert.get_text(element.upcoming_topic_card2_txt) // get topic card text
                    action.click(element.upcoming_read_more_card2_btn)

                    //assert
                    assert.check_topic_card(element.assert_upcoming_topic_card2_txt)
                })

                it('[Click] => Past -> Event Card 1 -> Read More btn', () => {
                    //act
                    action.click(element.past_event_btn)
                    assert.get_text(element.past_topic_card1_txt) // get topic card text
                    action.click(element.past_read_more_card1_btn)

                    //assert
                    assert.check_topic_card(element.assert_past_topic_card1_txt)
                })

                it('[Click] => Past -> Event Card 2 -> Read More btn', () => {
                    //act
                    action.click(element.past_event_btn)
                    assert.get_text(element.past_topic_card2_txt) // get topic card text
                    action.click(element.past_read_more_card2_btn)

                    //assert
                    assert.check_topic_card(element.assert_past_topic_card2_txt)
                })
            })
        })
    })
})