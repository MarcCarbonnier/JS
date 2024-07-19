/*

//___________________________________________Exercice 1 age vieux jeune_________________________________//
let n=0;
let i;
let cont = true;
while (cont == true) {
    i = prompt("Saisir votre age");
    if (i == 100) {
        cont = false;
    }
    n++
    console.log(i);
    if ( i < 20)
        {
            console.log("Moins de 20 ans")
        }
    if (i > 40){
        console.log("plus de 40 ans");
    }
    if (i >= 20 && i <= 40){
        console.log("Entre 20 et 40 ans");
    }
};


//_______________________Exercice 2 Table avec fonction_______________________________//
let i = prompt("Saisir un chiffre")
let n = 0;
function table(i) {
    do {
        resultat = i * n;
        console.log(i + " x " + n + " = " + resultat);
        n++
    } while (n <= 10);
}

table(i);

*/
//Exercice 3 Tableaux____________Pas fini_____________________________________//

let nom = prompt("Saisir un prénom");
let tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let found = tab.includes(nom);
let del = tab.splice(0 , (nom));

console.log(tab);
console.log(found);
if (found == true){
    del
}
else{
    nom
}
console.log(tab);



/*
//____________________________Exercice 4 Commande______________________________________//
let pu = prompt("Saisir un chiffre");
let qtecom = prompt("Saisir un nombre");
let tot = pu * qtecom
let pap;
let port;
let rem;
let rem1;

if (tot <= 100 && tot >= 200) {
    rem = tot * 5 / 100;
}

if (tot > 200) {
    rem1 = tot * 10 / 100;
}

if (tot - rem > 500) {
    port = 0
}
if (tot < 500 && tot > 300) {
    port = tot * 2 / 100
};
if (tot - rem < 300);{
    port = 6
}


console.log(tot);
console.log(rem);
console.log(rem1)
console.log(port);

//_______________Exercice 5 Formulaire_______________________________________//
*/