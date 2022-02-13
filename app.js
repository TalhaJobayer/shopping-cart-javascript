function productNumber(product,price,incraese ){
    let productInput=document.getElementById(product +"_number");
    let productInputValue= productInput.value;
    if(incraese==true){
        productInputValue=parseInt(productInputValue)+1;
        
    }
    else if(productInputValue>0){
        productInputValue=parseInt(productInputValue)-1;
        
    }
    productInput.value=productInputValue;
    const ammount=document.getElementById('total_'+ product);
    let ammountText=ammount.innerText;
    
    ammount.innerText=price*productInputValue;
    
     return  productInput.value;
}
// =======for phone
document.getElementById('phone_plus_button').addEventListener('click',function(){
    
    productNumber("phone",1219, true)
})
document.getElementById('phone_minus_button').addEventListener('click',function(){
   
    productNumber("phone",1219, false)
})
// ====================================for case
document.getElementById('plus_button_silicon').addEventListener("click", function(){  
    productNumber("Silicone",59,true)   
    console.log("hello"); 
})
document.getElementById("minus_button_silicon").addEventListener("click", function(){
    productNumber("Silicone",59,false)
    console.log("hello"); 
})
// =======================================================
// function buttonForPhone(iphone){
//     const phone=document.getElementById('phone_number');
//     let phoneValue=phone.value;
//     if(iphone==true){
//         phoneValue=parseInt(phoneValue)+1;
        

//     }
//     else if(phoneValue>0){
//         phoneValue=parseInt(phoneValue)-1;
        

//     }
//     phone.value=phoneValue;
//     const phoneammount=document.getElementById('total_phone');
//     let ammountText=phoneammount.innerText;
    
//     phoneammount.innerText=1219*phoneValue;
//     return  phone.value;
// }

