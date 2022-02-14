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
    getTotal()
     return  productInput.value;
}
function productTotal(product){
   const productInputtotal=document.getElementById("total_"+product );
    let productInputtotalValue= parseInt(productInputtotal.innerText);
    return productInputtotalValue;
}
function getTotal(){
    const phoneTotal=productTotal("phone");
    const phoneSilicone=productTotal("Silicone");
    const subtotal=phoneTotal+phoneSilicone;
    console.log(phoneTotal);
    console.log(phoneSilicone);
   
    document.getElementById("subtotal").innerText=subtotal;

   

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
   
})
document.getElementById("minus_button_silicon").addEventListener("click", function(){
    productNumber("Silicone",59,false)
    
})
