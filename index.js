
// 1 - Nombre pairs

let somme = 0

for ( let i = 11; i <47; i++){
    if (i%2===0){
        console.log(i);
        somme += i
    }

}

console.log(somme);

// 2 - Nombre impairs

let sommeImpaire = 0

for ( let i = 102; i <588; i++){
    if (i%2===1){
        console.log(i);
        sommeImpaire += i
    }

}

console.log(sommeImpaire);

// 3 - Puissance et racine carrée

const numbers = [1, 2, 3, 4, 5]
const squares = []
const roots = []

for (i=0; i < numbers.length;i++){
    squares[i] = numbers[i]**2
}

for (i=0; i < squares.length;i++){
    roots[i] = Math.sqrt(squares[i])
}

console.log(numbers);
console.log(squares);
console.log(roots);