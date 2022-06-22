
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

// 4 - Table de multiplication

function Tablemultiple (numberTable){
    for (i=0; i <=10; i++){
    console.log(`${numberTable} X ${i} = ${numberTable*i} `);
    }
}

Tablemultiple (3)

// 5 - Plusieurs tables de multiplication

for (i=0; i<=10; i++){
    console.log(i);
    for (j=0; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j} `);
    }
    console.log("");
}

// 6 - Factorielle v1


function factoris (numberfact){
    
    let total = 1

    for (i=1; i <= numberfact; i++){
    total=total*i
    }

console.log(total);

}

factoris(7)

// 7 - Factorielle v2

function factorisV2 (liste){
    for (i=0 ; i<=liste; i++){
        total = 1
        for (j=1; j <= i; j++){
            total=total*j
            }
            console.log(total);
    }
}

factorisV2(8)

// 8 - Somme des carrés

total = 0

for (i=5; i<=10; i++){
    total=total+i*i    
}

console.log(total);

// 9 - Comptons

const array7 = []

for (i=100; i<= 1000; i++){
    if(i%7===0){
        array7.push(i)
    }
}

console.log(array7.length);

// 10 - Chanceux

total = 0

for (i=0; i<20;i++){
    let de6 = Math.floor(Math.random()*6)+1
    if (de6>=5){
        total = total + de6
    }
}

console.log(total);

// 11 - Des boites

// 10
// 34
// 17
// 30
// 14

// 12 - D'autres boites

// 12
// 24
// 33
// 39
// 42
// 0

// 13 - Encore des boites

// 0
// 3
// -3
// 2
// -2
// 5
// -4

// 14 - Amstrong Number

for (i=0; i <=1000; i++){
    let Amststing= i.toString()
    let arrayAmst = Amststing.split("")
    total=0
    for (j=0; j<arrayAmst.length; j++){
        let a = arrayAmst[j]
        a = Number (a) **3
        total = total + a
    }
    if (total === i){
        console.log(`${i} est un nombre d'Amstrong`);
    }
}

// 15 - Amstrong Number générique

for (i=0; i <=10000; i++){
    let Amstgsting= i.toString()
    let arrayAmstg = Amstgsting.split("")
    total=0
    for (j=0; j<arrayAmstg.length; j++){
        let a = arrayAmstg[j]
        a = Number (a) **arrayAmstg.length
        total = total + a
    }
    if (total === i){
        console.log(`${i} est un nombre d'Amstrong`);
    }
}