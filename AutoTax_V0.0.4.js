function calculateNetPay(monthlyPay) {
    let Fed_Tax = 0;
    let State_Tax = 0;

    // Federal Tax
    if (monthlyPay < 308) {
        Fed_Tax = 0;
    } else if (monthlyPay < 1102) {
        Fed_Tax = 0.10;
    } else if (monthlyPay < 3533) {
        Fed_Tax = 0.12;
    } else if (monthlyPay < 7183) {
        Fed_Tax = 0.22;
    } else if (monthlyPay < 13433) {
        Fed_Tax = 0.24;
    } else if (monthlyPay < 16975) {
        Fed_Tax = 0.28;
    } else if (monthlyPay < 41975) {
        Fed_Tax = 0.30;
    } else {
        Fed_Tax = 0.35;
    }

    // State Tax
    if (monthlyPay < 308) {
        State_Tax = 0;
    } else if (monthlyPay < 1102) {
        State_Tax = 0.03;
    } else if (monthlyPay < 3533) {
        State_Tax = 0.035;
    } else if (monthlyPay < 7183) {
        State_Tax = 0.04;
    } else if (monthlyPay < 13433) {
        State_Tax = 0.045;
    } else if (monthlyPay < 16975) {
        State_Tax = 0.05;
    } else if (monthlyPay < 41975) {
        State_Tax = 0.055;
    } else {
        State_Tax = 0.06;
    }

    let netPay = monthlyPay - (Fed_Tax * monthlyPay) - (State_Tax * monthlyPay);

    console.log("Your monthly pay: $" + monthlyPay.toFixed(2));
    console.log("Your net pay after taxes: $" + netPay.toFixed(2));
    console.log("Thanks for using AutoTax! :)");
    return netPay;
}

// ✅ Call the function so it runs:
calculateNetPay(22000);
