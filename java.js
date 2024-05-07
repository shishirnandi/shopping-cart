const qty1Paragraph = document.querySelector("#qty1");
const btnp1 = document.querySelector("#btnp1");
const btnm1 = document.querySelector("#btnm1");

function increaseValue() {
    let currentValue1 = parseFloat(qty1Paragraph.innerText);
    currentValue1++;
    qty1Paragraph.innerText = currentValue1;
}

function decreaseValue() {
    let currentValue1 = parseFloat(qty1Paragraph.innerText);
    if (currentValue1 > 0) {
        currentValue1--;
        qty1Paragraph.innerText = currentValue1;
    }
}


function increasePrice() {
    let phonePrice = document.querySelector("#phonePrice");
    let currentPhnPrice = parseFloat(phonePrice.innerText);
    let quantity = parseFloat(qty1Paragraph.innerText);

    let updatedPhnPrice = 1216 * quantity;
    phonePrice.innerText = updatedPhnPrice;

    
}

function decreasePrice() {
    let phonePrice = document.querySelector("#phonePrice");
    let currentPhnPrice = parseFloat(phonePrice.innerText);
    let quantity = parseFloat(qty1Paragraph.innerText);

    // Check if quantity is greater than 0 to avoid division by zero
    if (quantity > 0) {
        let updatedPhnPrice = currentPhnPrice - 1216;
        phonePrice.innerText = updatedPhnPrice;
    }
}


btnp1.addEventListener("click", increaseValue);
btnp1.addEventListener("click", increasePrice);
btnm1.addEventListener("click", decreaseValue);
btnm1.addEventListener("click", decreasePrice);








// IphoneCase/////////////////////////////



const qty2Paragraph = document.querySelector("#qty2");
const btnp2 = document.querySelector("#btnp2");
const btnm2 = document.querySelector("#btnm2");

function increaseValue1() {
    let currentValue2 = parseFloat(qty2Paragraph.innerText);
    currentValue2++;
    qty2Paragraph.innerText = currentValue2;
}

function decreaseValue1() {
    let currentValue2 = parseFloat(qty2Paragraph.innerText);
    if (currentValue2 > 0) {
        currentValue2--;
        qty2Paragraph.innerText = currentValue2;
    }
}


function increasePrice1() {
    let casePrice= document.querySelector("#casePrice");
    let currentCasePrice = parseFloat(casePrice.innerText);
    let quantity = parseFloat(qty2Paragraph.innerText);

    let updatedCasePrice = 62 * quantity;
    casePrice.innerText = updatedCasePrice;

    
}

function decreasePrice1() {
    let casePrice = document.querySelector("#casePrice");
    let currentCasePrice = parseFloat(casePrice.innerText);
    let quantity = parseFloat(qty2Paragraph.innerText);

    // Check if quantity is greater than 0 to avoid division by zero
    if (quantity > 0) {
        let updatedCasePrice = currentCasePrice - 62;
        casePrice.innerText = updatedCasePrice;
    }
}


btnp2.addEventListener("click", increaseValue1);
btnp2.addEventListener("click", increasePrice1);
btnm2.addEventListener("click", decreaseValue1);
btnm2.addEventListener("click", decreasePrice1);




function subTotal() {

    let sabTotal = document.querySelector("#subTotal");

    let newTotal = parseFloat(sabTotal.innerText);

    let newUpdate = newTotal + 1216;

    sabTotal.innerText = newUpdate;
}



function decSubTotal() {

    let sabTotal = document.querySelector("#subTotal");

    let newTotal = parseFloat(sabTotal.innerText);

    let newUpdate = newTotal - 1216;

    sabTotal.innerText = newUpdate;
}




// incase of  the  case price ////////////


function subTotal1() {

    let sabTotal = document.querySelector("#subTotal");

    let newTotal = parseFloat(sabTotal.innerText);

    let newUpdate = newTotal + 62;

    sabTotal.innerText = newUpdate;
}



function decSubTotal1() {

    let sabTotal = document.querySelector("#subTotal");

    let newTotal = parseFloat(sabTotal.innerText);

    let newUpdate = newTotal - 62;

    sabTotal.innerText = newUpdate;
}




btnp1.addEventListener("click", subTotal);
btnm1.addEventListener("click", decSubTotal);
btnp2.addEventListener("click", subTotal1);
btnm2.addEventListener("click", decSubTotal1);




// calculating tax function


function tax() {
    let subTotal = document.querySelector("#subTotal");
    let taxElement = document.querySelector("#tax");

    let newTotal = parseFloat(subTotal.innerText);

    // Calculate tax as 10% of the total
    let newTax = newTotal * 0.1; // 10% in decimal form

    taxElement.innerText = newTax;
}



btnp1.addEventListener("click", tax);
btnm1.addEventListener("click", tax);
btnp2.addEventListener("click", tax);
btnm2.addEventListener("click", tax);



function total () {


    let alTotal = document.querySelector("#total");

    let subTotal = document.querySelector("#subTotal");
    let taxElement = document.querySelector("#tax");

    let nowTotal = parseFloat(subTotal.innerText);
    let nowTax = parseFloat(taxElement.innerText);


    alTotal.innerText = nowTotal + nowTax ;


}


btnp1.addEventListener("click", total);
btnm1.addEventListener("click", total);
btnp2.addEventListener("click", total);
btnm2.addEventListener("click", total);



