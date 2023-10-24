var names = ['Chloe','Ethan','Olivia','Liam','Ava','Noah','Sophia','Benjamin','Emma','Jackson']

let accumulator = []
for(let i = 0; i < names.length; i++){
    if(names[i][0] == 'A'){
        accumulator.push(names[i])
    }

}console.log(accumulator);