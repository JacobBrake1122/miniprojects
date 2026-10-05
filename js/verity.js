// tip calc
let tipAmount;
let subTotal = 67.72;
let percent = 0.2;
let totalBill;

tipAmount = subTotal * percent
console.log('Tip Amount: ' + tipAmount.toFixed(2))

totalBill = subTotal + tipAmount
console.log('Total Amount due: ' + totalBill.toFixed(2))

// paycheck calc
let totalHours = 20;
let hourlyWage = 15.92;
let tax = 0.0625;
let paycheck = totalHours * hourlyWage;
let paycheckTax = paycheck * tax;
let Finalpaycheck = paycheck - paycheckTax; 
console.log('Paycheck Amount: ' + Finalpaycheck);

// Grade calc
let gradeOne = 75.00;
let gradeTwo = 100.00;
let gradeThree = 65.00;
let gradeTotal = gradeOne + gradeTwo + gradeThree
let gradeFinal = gradeTotal / 3;
console.log('Average Grade: ' + gradeFinal.toFixed(2))

// Gas Cost Calc
let gasCost = 4.79;
let tripMiles = 75;
let milesGallon = 25;