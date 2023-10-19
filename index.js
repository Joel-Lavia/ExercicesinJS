//declaration variable prenom
const prenom = "Lata";
//valeur de x après execution 
// let x = "Geeta";
// la valeur de x seras "Geeta"
//variable flower
const flower = "Rose";
const abre = "érable";
//quel seras la valeur de y après execution
let y ='Tic';
y = 'Tac';
y = 'Toe'; // la valeur de y seras "Toe"

//Définissez une fonction hello qui renvoie 'Hello world'
function hello(){
return "Hellow world";
}
/*deux fonctions. La première fonction a doit renvoyer « Bonjour a ! » 
et la deuxième fonction b devrait renvoyer « Bonjour b !*/
function a(){
return 'Bonjoursa!';
}
function b(){
return'Bonjoursb!';
}
// La fonction greet renvoyant la valeur 'Haydo!' avec un parametre  salutation variable 
function grett(){
return "Haydo";
}
const salutation = grett();
function hello() {
  return 'Hi!';
}
//Écrivez une fonction echo qui renvoie également le paramètre passé. echo('Greta') devrait renvoyer 'Greta' et echo('CO2') devrait renvoyer 'CO2'
let x = hello();//renvoie "Hi"
function echo(parames) {
  return parames; // revoie "Greeta" et "CO2"
}
function reply(phrase) {
  return phrase;
}
/*Écrivez une fonction greet ayant un paramètre et renvoyant 'Bonjour <paramètre>!'. 
 Exemple : greet('Ada') devrait renvoyer 'Bonjour Ada !' et greet('Grace') devrait renvoyer 'Bonjour Grace !'.*/

let question = reply('How do you do?');// question = "How do you do?"
 function greeet(name){
  return `Bonjours ${name}!`;// revoie "Bonjours(valeur du parametre)!"
 }

 //Que vaut X 

function whereIs(name) {
  return 'Where is ' + name + '?';
}

const x3 = whereIs('Jacky');// x vaut "where is jacky"
function hi(name) {
  return 'Hi ' + name + '!';
}

let h1 = hi('Selva');
let h2 = hi('Pola');
let x4 = h1 + ' ' + h2;

//Partie 2 Conditions
// let a = 0, b = 1, c = '1';
// Que vaut (a === 0); //true        
// Que vaut (a === 1);//false
// Que vaut (a === b); // false
// Que vaut (a === 0 && b === 1); //true
// Que vaut (a === 0 && b === 0); //false
// Que vaut (a === 0 || b === 0); //true
// Que vaut (b === c); //false
// Que vaut (b == c); //true
// Que vaut (a < b); //false
// Que vaut (a >= b); //false
// Que vaut (a !== b); //true
// Que vaut (a === 0 && (b === 1 || b === 2)) // true
// Que vaut (a === 0 && true); // true
function mots(mots,mots2,mots3){
const concatenation  = `${mots} ${mots2} ${mots3}`;
console.log(concatenation);
if(concatenation.length >100){
  console.log("C'est une grande phrase");
}
else{
  console.log("C'est une petite phrase");
}

}
mots("je","veux","dormir");




