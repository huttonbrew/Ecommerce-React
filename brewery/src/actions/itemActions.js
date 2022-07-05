import {
    GET_ITEMS, 
    ADD_ITEMS, 
    DELETE_ITEM, 
    INCREASE_ITEM,
    DECREASE_ITEM, 
    TOTAL_ITEMS,
    DETAILS} from './types';

// for getting the initial showing items
export const getItems=()=>{
    return{
        type:GET_ITEMS
    }
}





// for adding item to cart
export const AddToCart =(id)=>dispatch=>{

 dispatch({
     type:ADD_ITEMS,
     payload:id
 })


}




//    for deleting the items from the cart

export const deleteItem =(id)=>dispatch=>{

    dispatch({
        type:DELETE_ITEM,
        payload:id
    
    })
   
   }


   //    for increasing item inside cart

export const increaseItem =(id)=>dispatch=>{

    console.log(`increase :${id}`);
    dispatch({
        type:INCREASE_ITEM,
        payload:id
    
    })
   
   }


      //    for increasing item inside cart

export const decreaseItem =(id)=>dispatch=>{

    console.log(`DECREASE :${id}`);
    dispatch({
        type:DECREASE_ITEM,
        payload:id
    
    })
   
   }

         //  for getting the total price of items inside the cart

export const getTotals =()=>dispatch=>{

    dispatch({
        type:TOTAL_ITEMS,
      
    })
   
   }

//    get details



export const getDetails =()=>dispatch=>{

    dispatch({
        type:DETAILS,
      
    })
   
   }