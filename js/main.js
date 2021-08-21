// variable decleration area
const memoryEight = document.getElementById('memory-eight');
const memorySixteen = document.getElementById('memory-sixteen');
const storage256 = document.getElementById('storage-256');
const storage512 = document.getElementById('storage-512');
const storage1tb = document.getElementById('storage-1tb');
const deliveryFree = document.getElementById('delivery-free');
const deliveryTwo = document.getElementById('delivery-two');

const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');



// update total function
function updateTotal(){
    const memoryCharge = parseFloat(memoryCost.innerText);
    const storageCharge = parseFloat(storageCost.innerText);
    const deliveryCharge = parseFloat(deliveryCost.innerText);
    const totalPrice = document.getElementById('total-price');
    const grandTotal = 1299 + memoryCharge +storageCharge + deliveryCharge;
    totalPrice.innerHTML = grandTotal;
    const totalPriceFinal = document.getElementById('total-price-final');
    totalPriceFinal.innerHTML = grandTotal;

    
}

// cost update
memoryEight.addEventListener('click',function(){
    memoryCost.innerText ="0";
    updateTotal();
 });
memorySixteen.addEventListener('click',function(){ 
    memoryCost.innerText ="180";
    updateTotal();
});
storage256.addEventListener('click',function(){
    storageCost.innerText ="0";
    updateTotal();
 });
storage512.addEventListener('click',function(){
    storageCost.innerText ="100";
    updateTotal();
 });
storage1tb.addEventListener('click',function(){ 
    storageCost.innerText ="180";
    updateTotal();
});
deliveryFree.addEventListener('click',function(){
    deliveryCost.innerText ="0";
    updateTotal();
 });
deliveryTwo.addEventListener('click',function(){
    deliveryCost.innerText ="20";
    updateTotal();
 });
//finalPricePromo fuction area
function finalPricePromo() {
    const promoField = document.getElementById('promo-input');
    const priceFinal = document.getElementById('total-price-final');
    const totalPrice = document.getElementById('total-price');
    const discount = parseFloat(totalPrice.innerHTML) / 100 * 20;
    if (promoField.value == 'stevekaku') {
      const totalPriceFinalPromo = parseFloat(totalPrice.innerHTML) - discount;
      priceFinal.innerHTML = totalPriceFinalPromo;
    }
    else if (promoField.value = '') {
        
    }
    else {
        alert("Invalid Promo Code");
    }
    promoField.value = '';
};



// Promo Code Apply
document.getElementById('promo-apply').addEventListener('click', function () {
finalPricePromo();
});