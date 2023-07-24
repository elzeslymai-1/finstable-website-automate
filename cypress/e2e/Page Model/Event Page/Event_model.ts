import { Actions } from "../../Main Component/Action";
import { Assertion } from "../../Main Component/Assert";

const action = new Actions()
const assert = new Assertion()

export class Event_Model extends Assertion{
    addIt(locator: string){
        cy.get(locator).then((data)=>{
            for(var i=0;i<data.length;i++){
                it('test'+i,()=>{
                    
                })
            }
        })
    }
}