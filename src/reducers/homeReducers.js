import {FAIL,SUCCESS}from '../constants/restuarantConstant'

export const homeReducer = (state={restaurants:[]},action)=>
{
 console.log(action.type);
 switch (action.type) {
  case SUCCESS:
  return{ 
   restaurants:action.payload
  }

  case FAIL:
   return{ 
    restaurants:action.payload
   }
 
  default:
   return state
 }
}