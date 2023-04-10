const getUniquevalue=(data,value)=>{
let temp  = data.map((items)=>items[value]);
if(value=='colors'){
    temp = temp.flat();
} 
return ['all',...new Set(temp)]
}
export  default getUniquevalue;