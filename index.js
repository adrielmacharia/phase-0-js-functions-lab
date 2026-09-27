function calculateTax(amount){
    return amount*0.10;
}

function convertToUpperCase(text){
    return text.toUpperCase();
}

function findMaximum(numberOne,numberTwo){
    if (numberOne>numberTwo){
        return numberOne;
    }else{
        return numberTwo;
    }
}

function isPalindrome(word){
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

function calculateDiscountedPrice(originalPrice,discontPercentage){
    const discountAmount=originalPrice*(discontPercentage/100);
    const finalPrice=originalPrice-discountAmount;
    return finalPrice;
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };