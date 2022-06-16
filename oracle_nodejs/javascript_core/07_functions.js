function calchike(salary, hikepct){
    var temp = salary.split(' ')[1];
    temp = temp.split(',');
    temp = temp.join('');
    temp = Number(temp);
    return temp + temp * hikepct/100;
}

console.log(calchike('INR 15,64,000', 17));
console.log(calchike('INR 18,68,000', 16));
console.log(calchike('INR 14,94,000', 15));
console.log(calchike('INR 11,44,000', 13));