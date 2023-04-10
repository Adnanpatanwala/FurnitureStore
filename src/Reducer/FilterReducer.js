import {
    FEATURED_PRODUCTS,
    Nav_Search_Products,
    Sort_Items, 
    Filter_Products_Update,
    OPEN_FILTER,
    CLOSE_FILTER,
    RESET_FILTER, 
    SEARCH_PRODUCTS,
    APPLY_CHANGES,
    Apply_filter,
    Loading_Filter,

} from '../Helper/action'
const reducer = (state,action)=>{

    if(action.type===Loading_Filter){
        return{...state,loadingfilter:true};
    }

if(action.type==Apply_filter){
    return {...state,applyfilter:true};
}
    
 
    if(action.type===OPEN_FILTER){
        return{...state,isFilterOpen:true}
    }
    
    if(action.type==CLOSE_FILTER){
        return{...state,isFilterOpen:false}
    }

    if(action.type==FEATURED_PRODUCTS){
        let ans  = action.playLoad.map((items)=>items.price);
        ans = Math.max(...ans);
        return {...state,
            all_products:[...action.playLoad],
            filtered_products:[...action.playLoad],
            loadingfilter:false,
            filter:{...state.filter,max_Price:ans,price:ans}
        }
    }

    if(action.type==Filter_Products_Update){
        const {name,value} = action.playLoad;
        return {...state ,filter:{...state.filter, [name]:value}};
    }
    
    if(action.type==Nav_Search_Products){
        const {name,value} = action.playLoad;
        return { ...state , [name]:value}
    }


    if(action.type == Sort_Items){
        const {filtered_products,sort} = state;
        let temp = [];
        if(sort=='A-Z'){
             temp = filtered_products.sort((a,b)=>{
                return a.name.localeCompare(b.name);
            })
        }
        if(sort=='Z-A'){
             temp = filtered_products.sort((a,b)=>{
                return b.name.localeCompare(a.name);
            })
        }

        if(sort=='price(low-high)'){
            temp =  filtered_products.sort((a,b)=>{
                return a.price-b.price;
            })
        }
        if(sort=='price(high-low)'){
            temp =  filtered_products.sort((a,b)=>{
                return b.price-a.price;
            })
        }

        return {...state,filtered_products:temp,loadingfilter:false};
    } 

 

    if(action.type===RESET_FILTER){ 
            return {...state,
                filter:{
                    ...state.filter,
                    company:'all',
                    category:'all',
                    color:'all',
                    shipping:true,
                    price:state.filter.max_Price,
                  }
            }
        } 
    
    
    if(action.type==SEARCH_PRODUCTS){
        const {all_products,search} = state;
        let ans = [...all_products];
         ans = all_products.filter((filtered_products)=>{
          return  filtered_products.name.toLowerCase().startsWith(search);  
        })
        return{...state,filtered_products:ans,loadingfilter:false}
    }


    if(action.type==APPLY_CHANGES){
        const {filter:{company,category,price,color,shipping},all_products} = state;
        // console.log(color);
        
        let temp = [...all_products];
        if(temp){
            // console.log(temp);
        if(company!='all'){
             temp = temp.filter((items)=>{
                return items.company === company;
             })
        }
        if(category!='all'){
             temp = temp.filter((items)=>{
                return items.category === category;
             })
        } 
        if(shipping){
             temp = temp.filter((items)=>{
                return items.shipping === shipping;
             })
        } 

        if(color!='all'){
              temp = temp.filter((items)=>{  
              return  items.colors.find((c)=>c==color);
              })  
        } 

             temp = temp.filter((items)=>{
                return items.price<=price;
             })

             
             return {...state,filtered_products:temp,applyfilter:false,isFilterOpen:false}
            }
    }













    




    throw new Error(`no matching action ${action.type} found`);
}

export default reducer;