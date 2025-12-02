
// Exercice 1

let name = "jean";
let age = 25;
age = 30;
console.log(name);
console.log(age);

// Exercice 2 

let a = 10;
let b = 20;
console.log(a+b)
console.log(a*b)

// Exercice 3

let body = prompt ("Veuillez entrer un nombre")
if(body <= 10){
        console.log("Plus petit ou égal a 10")
}
else if(body => 10){
        console.log("Plus grand que 10")
}

// Exercice 4

let number = 10
if(number % 2 === 0) {
        console.log("C'est un nombre paire")
}
else{
        console.log("C'est un nombre impair")
}

// Exercice 5

let vieillesse = prompt ("Quel age avez vous ?")
if(vieillesse < 18){
        console.log("Tu es mineur")
}
else if(vieillesse >=18 && vieillesse < 65){
        console.log("Tu es majeur")
}
else if(vieillesse < 65){
        console.log("Vous etes sénior")
}

// Exercice 6

for(let i = 0; i < 10; i++) {
        console.log(i)
}

// Exercice 7 

const number2 = parseInt(prompt('Entrer un nombre : '));

for (let i = 1; i <= 10; i++) {
    const result = i * number2; 
        console.log(number2 + " x " + i + " = " + result);
}

// Exercice 8 

let result = 0;

for (let i = 0; i <= 100; i++) {
console.log("Calcul en cours",result);
result += i; 
}
console.log(result); 

// Exercice 9 

let bods 
let compteur = 1;
while (compteur < 10) {
        console.log(`Compteur : ${compteur}`);
        compteur++;
}

