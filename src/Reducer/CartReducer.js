import {ADD_TO_CART,Cart_Update,Total_cart_amount} from '../Helper/action'
import React from 'react';

export const reducer = (state,action)=>{
    if(action.type===ADD_TO_CART){
        const {id,color,amount,name,price,stock,image} = action.playload;
         const temp = state.cart.find((i)=>i.id===id+color)
        if(temp){
            const data = state.cart.map((items)=>{
                if(items.id===id+color){
                    let amt = items.amount+amount;
                    if(amt>stock){
                        amt = stock;
                    }
                    return {...items ,amount:amt}
                }else{
                    return { items};
                }
            })
            return {...state,cart:data}
        }   
        else{
            const newItem = {
                id:id+color,
                color,
                amount,
                name,
                price,
                stock,
                image,
            } 
            return {...state,cart:[...state.cart,newItem]}
        } 
    }


    if(action.type==Cart_Update){
        const {id,type} = action.playload;
        const temp = state.cart.map((items)=>{
            if(items.id==id){
                if(type=='inc'){

                    let a = items.amount+1;
                    if(a>items.stock){
                        a  = items.stock;
                    }
                    return {...items,amount:a}
                }
                if(type=='dec'){
                    let a = items.amount-1;
                    if(a<1){
                        a = 1;
                    }
                    return {...items,amount:a}
                }
            }
            return items;

        })
        return {...state,cart:temp};
    }


    if(action.type==Total_cart_amount){
          const {totalAmount,totalItems} = state.cart.reduce((total,Items)=>{
            const {amount,price} = Items;
            total.totalAmount += amount*price ;
            total.totalItems += amount;
            return total;
          },{
            totalAmount:0,
            totalItems:0,
          })
          return{...state,totalamount:totalAmount,totalItems:totalItems}
    }

    throw new Error(`Matching action type ${action.type} not found`);
}