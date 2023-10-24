var arr = [1,2,-5,2,7,-9,4,-3]
let accumulator = 0;
let i = 0;
while (i < arr.length){
    i++
    if (arr[i] % 2 == 0){
        accumulator += arr[i]
    }
}
console.log(accumulator);