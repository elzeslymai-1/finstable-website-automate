import { Actions } from "../../Main Component/Action";
import { Assertion } from "../../Main Component/Assert";
import { Event_Element } from "../../Page Model/Event Page/Event_element";
import { Event_Model } from "../../Page Model/Event Page/Event_model";
import { Event_Expect } from "../../Page Model/Event Page/Event_expect";

const action = new Actions()
const element = new Event_Element()
const assert = new Event_Model()
const expect = new Event_Expect()



describe('Event Page Test', () => {
    let event_card_length = 0
    context('Check Event Page Element are Displayed', () => {
        before(() => {
            action.visit(Cypress.env('finweb_url'))
            action.click(element.nav_bar_event_btn)
        })
        context('Check Element Event Page', () => {
            it('[Element] => Event Topic txt', () => {
                //assert
                assert.check_Element(element.event_topic_txt)
            })

            it('[Element] => Main Event Status txt', () => {
                //assrt
                assert.check_Element(element.main_event_status_txt)
            })

            it('[Element] => Main Event Topic txt', () => {
                //assrt
                assert.check_Element(element.main_event_topic_txt)
            })

            it('[Element] => Main Event Content txt', () => {
                //assrt
                assert.check_Element(element.main_event_content_txt)
            })

            it('[Element] => Main Event Read More btn', () => {
                //assrt
                assert.check_Element(element.main_event_read_more_btn)
            })

            it('[Element] => All Event btn', () => {
                //assrt
                assert.check_Element(element.all_event_btn)
            })

            it('[Element] => Past Event btn', () => {
                //assrt
                assert.check_Element(element.past_event_btn)
            })

            it('[Element] => Upcoming Event btn', () => {
                //assrt
                assert.check_Element(element.upcoming_event_btn)
            })
        })

        context.only('Check All Card Element', () => {

            it('',()=>{

                for(event_card_length;event_card_length<3;event_card_length++){
                    cy.getElementLength(element.actual_event_card_id).then((data)=>{
                        // if(event_card_length<data){
                            
                            // }
                            console.log(data)
                        })
                    }
                })
            })            
    })
})