export const  formatePrice = (price)=>{
let ans = Intl.NumberFormat("en-IN",{
    style:'currency',
    currency:'INR'
}).format(price/10);
return ans;
}