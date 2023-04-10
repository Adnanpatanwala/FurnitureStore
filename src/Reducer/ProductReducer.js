import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    PRODUCT_FETCHING,
    ISLOADING,
} from '../Helper/action';

 const reducer = (state,action)=>{
    if(action.type===SIDEBAR_OPEN){
        return{...state,isSidebarOpen:true}
    }
    if(action.type==SIDEBAR_CLOSE){
        return{...state,isSidebarOpen:false}
    }

    if(action.type===ISLOADING){
        return{...state,loading:true}
    }

    if(action.type==PRODUCT_FETCHING){
        let temp = action.playLoad.filter((items)=>
        items.featured!=state.featured)
        temp = temp.slice(0,4);
        return {...state, products:action.playLoad,featuredproducts:temp,loading:false}
    }
     
throw new Error(`No matching action ${action.type} type found`);
} 

export default reducer;