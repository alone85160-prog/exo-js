



const name = "Martin";
console.log(name)

let AnneeNaissance = "2000";
    AnneeNaissance = 2025-2000;
console.log(AnneeNaissance)

console.log("Bonjour Mr",name,"Vous Avez", AnneeNaissance, "Ans")


// Exercice 2.


let note_maths = 15;
let note_francais = 12;
let note_HG = 9;
let moyenne = (15+12+9) /3;
console.log("La moyenne est de",moyenne,"/20")

// Exercice 3

let sexe = 1;

if (sexe === 1){
    console.log("Vous etes un homme")

}
else if (sexe === 2){
    console.log("Vous etes une femme")

}

// Exercice 4 

let hour = 12 

if (hour >= 6 && hour < 12){
    console.log("Nous sommes le matin")
}

if (hour >= 12 && hour < 20) 
    console.log("Nous sommes l'apres-midi")

if (hour >= 18 && hour < 21 ) 
    console.log("Nous sommes le soir")

if (hour >= 21 && hour < 6 ) 
    console.log("Nous sommes la nuit")


// Exercice 5 


let choice = 2

if (choice === 1) { 
    console.log("Insert")
}
if (choice === 2) {
    console.log("Delete")
}
if (choice === 3) {
    console.log("Display")
}
if (choice === 4) {
    console.log("This choice doesn't exist")
}

// Exercice 6 

let number = 50
if(number % 3 === 0 && number % 5 === 0) {
    console.log("Oui, c'est bien un multiple de 3 et 5");

} else {
    console.log("Non, ce n'est pas le multiple de 3 et 5");
}

// Exercice 7 


for(let i = 44000 ; i <= 44999; i++) {

    console.log(i)
}

// Exercice 8 

for(let display = 0 ; display <= 20; display+=2) {

    console.log(display)
    if( display === 10) {
        console.log(display)
    }
}