let arrofnums = [0,1,2,3,4,5,6,7,8,9,10]
const accumulatorEven = []

for (let i = 0; i < arrofnums.length;i++){
    if(arrofnums[i] % 2 == 0){
        accumulatorEven.push(arrofnums[i])
    }
}
console.log(accumulatorEven);