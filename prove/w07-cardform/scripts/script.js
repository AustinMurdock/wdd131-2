
const errorList = document.getElementById("errors");
const successList = document.getElementById("success");
const cardForm = document.getElementById("card-form");
const total = Math.round(Math.random()*10000)/100;
document.getElementById("card-total").innerText += total;

function getCardData(form) {
    formArr = Array.from(form.querySelectorAll("input"));
    const card = {
        num: formArr[0].value.replaceAll(" ", ""),
        holder: formArr[1].value,
        expMonth: parseInt(formArr[2].value),
        expYear: 2000 + parseInt(formArr[3].value),
        secCode: formArr[4].value,
        isValid: false,
    };
    return card;
}

function validNum(num) {
    return (num === "1234123412341234");
}

function validExp(month, year) {
    const cDate = new Date();
    if (year > cDate.getFullYear()) {
        return true;
    }
    else if (year < cDate.getFullYear()) {
        return false;
    }
    else if (month >= cDate.getMonth()+1) {
        return true;
    }
    else {
        return false;
    }
}

function validCode(code) {
    return true;
}

function clearMsg(listNode) {
    listNode.classList.add("hidden");
    while(listNode.firstChild) {
        listNode.removeChild(listNode.lastChild);
    }
    return;
}

function displayMsg(listNode, msg) {
    listNode.classList.remove("hidden");
    let msgLI = document.createElement("li");
    msgLI.innerText = msg;
    listNode.appendChild(msgLI);
    return;
}

cardForm.addEventListener("submit", event=>{
    event.preventDefault();
    const card1 = getCardData(cardForm);
    console.log(card1);
    
    clearMsg(errorList);
    clearMsg(successList);
    if (!validNum(card1.num)) {
        displayMsg(errorList, "Not a valid card number.");
    }
    if (!validExp(card1.expMonth, card1.expYear)) {
        displayMsg(errorList, "Card is expired.");
    }
    if (!validCode(card1.code)) {
        displayMsg(errorList, "Invalid security code.");
    }
    
    if (!errorList.firstChild) {
        card1.isValid = true;
        displayMsg(successList, "Card information recorded successfully.")
    }
});

