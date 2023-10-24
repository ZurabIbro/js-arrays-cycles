const ProgrammingLanguages = ['python', 'java', 'c', 'pascal', 'c++', 'javascript', 'kotlin']

let accumulator = [];
for(let i = 0; i < ProgrammingLanguages.length; i++){
    if(ProgrammingLanguages[i].length > 3){
        accumulator.push(ProgrammingLanguages[i])
    }
    
}
console.log(accumulator);