function createMultiplier(multi){
//  let multi = paramMulti;
    function multiplication(x){
        return x * multi;
    }
    return multiplication;
}

let multiplyBy3 = createMultiplier(3);

console.log(multiplyBy3(5));
console.log(multiplyBy3(10));
console.log(multiplyBy3(15));