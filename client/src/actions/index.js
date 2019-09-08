import * as types from '../constants/ActionsTypes';
import{ apiCall } from '../services/api';
import { addError } from './error';



export const test = (test_text) => ({type: types.TEST,test_text});
export const Search = (search)=>({type:types.SEARCH, search});
export const getSearchCall = (searchTerm) =>(dispatch)=>{return dispatch(Search(searchTerm))};


export const makeSearchCall = (search) => (dispatch)=>
{
    console.log(search);
  return apiCall( 'get', `https://www.omdbapi.com/?s=${search}&apikey=baef1024`,)
    .then((res)=>dispatch(Search(res.Search))).catch(err=>dispatch(addError(err.message)))
}