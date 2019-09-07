import  { TEST } from "../constants/ActionsTypes"

const reduxTest = (state = [], action)=>
{
    switch(action.type)
    {
        case TEST:
            return[...state,action.test_text]
        default:
            return state;
    }
}
export default reduxTest