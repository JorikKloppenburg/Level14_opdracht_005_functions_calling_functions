//Hey kiddo
const checkAge = function (age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const adultCheck = function (age) {
    const greetings = checkAge(age);
    if (greetings == true) {
        return "Hello there"
    } else {
        return "Hey kiddo"
    }
};

console.log(adultCheck(17));

//VAT calculations

//VAT excercise 1
const totalPrice = function (basePrice, vatPercentage) {
    return basePrice * vatPercentage;
};

console.log(totalPrice(1000, 1.21));

const calculateVat = function (basePrice, vatPercentage) {
    const vat = totalPrice(basePrice, vatPercentage) - (totalPrice(basePrice, vatPercentage) / vatPercentage);
    return vat
};

console.log(calculateVat(1000, 1.21));

//VAT exercise 2
const basePriceCalculation = (totalPrice, vatPercentage) => {
    const baseprice = totalPrice / vatPercentage;
    const vatAmount = totalPrice - (totalPrice / vatPercentage);
    return baseprice;
};

console.log(basePriceCalculation(1210, 1.21));

const vatAmountCalculation = (totalPrice, vatPercentage) => {
    const vatAmount = totalPrice - (totalPrice / vatPercentage);
    return vatAmount;
};

console.log(vatAmountCalculation(1210, 1.21));