const IphoneDecreaseBtn = document.getElementById('IphoneDecreaseBtn');
const IphoneIncreaseBtn = document.getElementById('IphoneIncreaseBtn');
const CountIphone = document.getElementById('CountIphone');
const IphonePrice = document.getElementById('IphonePrice');


// Case Info
const caseIncreaseBtn = document.getElementById('caseIncreaseBtn');
const caseDecreaseBtn = document.getElementById('caseDecreaseBtn');
const countCase = document.getElementById('countCase');
const casePrice = document.getElementById('casePrice');

// CheckOut Info

const subTotal = document.getElementById('subTotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

//Event Listener
IphoneIncreaseBtn.addEventListener('click', All_Increase_Decrease);
IphoneDecreaseBtn.addEventListener('click', All_Increase_Decrease);
caseIncreaseBtn.addEventListener('click', All_Increase_Decrease);
caseDecreaseBtn.addEventListener('click', All_Increase_Decrease);


function All_Increase_Decrease (e) {
    let subTotalPrice = 0;
    if(e.target.id == 'IphoneIncreaseBtn'){
        CountIphone.value = parseInt(CountIphone.value) + 1;
        IphonePrice.innerHTML = CountIphone.value * 1219;
        subTotalPrice = parseInt(IphonePrice.innerHTML) + parseInt(casePrice.innerHTML);
    }
    if(e.target.id == 'IphoneDecreaseBtn') {
        if(CountIphone.value > 0) {
            CountIphone.value = parseInt(CountIphone.value) - 1;
            IphonePrice.innerHTML = CountIphone.value * 1219;
            subTotalPrice = parseInt(IphonePrice.innerHTML) + parseInt(casePrice.innerHTML);
        }
    }
    if(e.target.id == 'caseIncreaseBtn') {
        countCase.value = parseInt(countCase.value) + 1;
        casePrice.innerHTML = countCase.value * 59;
        subTotalPrice = parseInt(IphonePrice.innerHTML) + parseInt(casePrice.innerHTML);
    }
    if(e.target.id == 'caseDecreaseBtn') {
        if(countCase.value > 0) {
            countCase.value = parseInt(countCase.value) - 1;
            casePrice.innerHTML = countCase.value * 59;
            subTotalPrice = parseInt(IphonePrice.innerHTML) + parseInt(casePrice.innerHTML);
        }
    }
    subTotal.innerHTML = subTotalPrice;
    total.innerHTML = subTotalPrice;
}





