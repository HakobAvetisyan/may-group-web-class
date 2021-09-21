

let multiplication = function(table){
    for (let index = 1; index <= 10; index = index + 1) {
        let result = index * table;
        console.log(`${table} * ${index} = ${result}`);

    }
}
multiplication(7)


let oddpair = function(input){
    return console.log(input % 2 === 0 ? "The number is even." : "The number is odd."); 
}
oddpair(8)
