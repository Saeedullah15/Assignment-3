//******problem-1******

function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;
}
/*var result = kilometerToMeter(7);
console.log(result);*/

//******problem-2******

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var total = (watch*watchPrice) + (phone*phonePrice) + (laptop*laptopPrice);
    return total;
}
/*var budget = budgetCalculator(6, 4, 2);
console.log(budget);*/

//******problem-3******

var numberOfDays = 0;
function hotelCost(numberOfDays) {
    if (numberOfDays <= 10) {
        cost = numberOfDays*100;
    }
    else if (numberOfDays <= 20) {
        firstTen = 10*100;
        remaining = numberOfDays-10;
        secondTen = remaining * 80;
        cost = firstTen + secondTen;
    }
    else {
        firstTen = 10*100;
        secondTen = 10*80;
        remaining = numberOfDays - 20;
        restDays = remaining*50;
        cost = firstTen + secondTen + restDays;
    }
    return cost;
}
/*var fare = hotelCost(25);
console.log(fare);*/

//******problem-4******

function megaFriend(array) {
    var maxName = [""];
    for(i = 0; i<=array.length; i++) {
        var element = array[i];
        if(element.length > maxName.length) {
            maxName = element;
        }
    }
    return maxName;
}
/*var result = megaFriend (["abir", "jobbar", "salman", "rafi", "saeedullah"]);
console.log (result);*/