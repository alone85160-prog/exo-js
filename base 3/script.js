// // Exercice 1

// let number = [0,1,2,3,4,5];
//     console.log(number)

// for (let i = 0; i < number.length; i++) {
//     console.log(`Note ${number + 1} : ${number[i]}`);
// }

// // Exercice 2 

// function sommeTableau(tableau) {
//     let result = 0;
//     for(const number of tableau){
//         result += number;
//     }
//     return result;
// }

//     console.log()

//     // Exercice 3

//     const tableau = ["kiwi", "orange", "framboise", "mangue"];

//     function motPlusLong(tableauMots) {
//         let maxMot = "";

//         for(const mot of tableauMots) {
//             if(mot.length > maxMot.length) {
//                 maxMot = mot;
//             }
//         }
//         return maxMot;
//     }

//     console.log(motPlusLong(tableau));

//     // Exercice 4

// function inverserChaine(chaine){
//     let result = "";

//     for(let i = chaine.length - 1; i >= 0; i--) {
//         result += chaine[i];
//     }
//     return result;
// }
// console.log(inverserChaine("La terre est ronde bande d'inculte")); 

//     // Exercice 5


//     function compterVoyelles(chaine) {
//         let number = 0
//         const voyelles = "aeiouyAEIOUY";
//         for (const lettre of chaine) {
//             if(voyelles.includes(lettre)){
//                 number = number +1;
//             }
//             // console.log("voyelles: ", "lettre", lettre, voyelles.includes(lettre))
//         }
//         return number;
//     }
    
//     const test = compterVoyelles("bonjour je m'appel andrew");
//     console.log(test)

//     // Exercice 6

//     function nombresPairs(tableau){
//         const evenNumbers = [];
//         for(let number of tableau){
//             if(number % 2 === 0){
//                 evenNumbers.push(number);
//             }
//         }
//         return evenNumbers
//     }




//     const variable =  nombresPairs([1, 2, 3, 4, 5]);


//     console.log(nombresPairs([1, 2, 3, 4, 5]))
// console.log(variable)

//     // Exercice 7

//     function compterProprietes(objet){
//     let result = 0;
//     for (let key in objet) {
//         result++;
//     }
//     return result;
// }
// let maVoiture = {
//     make: "Ford",
//     model: "Mustang",
//     year: 1969,
//     color: "blue",
//     exctract: "chassis",
// };
//     const vartest = compterProprietes (maVoiture)
//     console.log(vartest)



