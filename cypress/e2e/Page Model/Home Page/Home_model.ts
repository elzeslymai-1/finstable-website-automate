import { Actions } from "../../Main Component/Action";
import { Assertion } from "../../Main Component/Assert";

const action = new Actions()
const assert = new Assertion()

export class Homepage_Model extends Assertion{
    topic_card1_txt = '...'

    get_text(locator:string){
        cy.get(locator).then((data)=>{
            this.topic_card1_txt = data.text()
        })
    }

    check_topic_card(locator: string){
        cy.then(()=>{
            assert.check_text(locator,this.topic_card1_txt)
        })
    }
}