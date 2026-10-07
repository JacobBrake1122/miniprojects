let tipOutput = document.getElementById('tipAmountOutput');
let totalOutput = document.getElementById('totalBillOutput');
let checkOutput = document.getElementById('paycheckAmountOutput');
let gradeOutput = document.getElementById('percentGradeOutput');
let gasOutput = document.getElementById('gasCostOutput');

let tipBtn = document.getElementById("tipButton");
tipBtn.addEventListener('click', function () {

    // tip calc
    let subTotal = document.getElementById('subTotalInput').valueAsNumber;
    let percentage = document.getElementById('percentageInput').valueAsNumber;
    let tipAmount;
    let totalBill;

    // math
    tipAmount = subTotal * percentage;
    totalBill = subTotal + tipAmount;

    // 2 decimal places
    tipAmount = tipAmount.toFixed(2);
    totalBill = totalBill.toFixed(2);

    // maximum output
    tipOutput.innerHTML = "$" + tipAmount;
    totalOutput.innerHTML = "$" + totalBill;

})

let paycheckBtn = document.getElementById("paycheckButton");
paycheckBtn.addEventListener('click', function () {

    // paycheck calc
    let totalHours = document.getElementById('hoursWorkedInput').valueAsNumber;
    let hourlyWage = document.getElementById('hourlyRateInput').valueAsNumber;
    let paycheckFinal;

    // math
    paycheckFinal = totalHours * hourlyWage;

    //maximum output
    checkOutput.innerHTML = "$" + paycheckFinal;

})



















// Grade calc
let pointsEarned = 75.00;
let totalpossiblePoints = 100.00;
let gradeFinal = pointsEarned / totalpossiblePoints;
console.log('Points Earned On Assignment: ' + gradeFinal.toFixed(2))

// Gas Cost Calc
let gasCost = 4.79;
let tripMiles = 75;
let milesGallon = 25;