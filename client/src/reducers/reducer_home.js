import  { SEARCH } from "../constants/ActionsTypes"

const home_reducer = (state = {}, action)=>
{
    switch(action.type)
    {
        case SEARCH:
            let searchArr = action.search;
            console.log(searchArr);
            return{...searchArr}
        default:
            console.log(action)
            return state;
    }
}
export default home_reducer