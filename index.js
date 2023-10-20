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
// Que vaut (a < b); //true
// Que vaut (a >= b); //false
// Que vaut (a !== b); //true
// Que vaut (a === 0 && (b === 1 || b === 2)) // true
// Que vaut (a === 0 && true); // true

/*Ecrivez une fonction qui prend 3 paramètres (mots).
Concaténez les trois variables et vérifiez si sa taille est 
suppérieure à 100 alors affichez "C'est une grande phrase" 
sinon affichez "C'est une petite phrase".*/
function sentenceSize(mot1,mot2,mot3){
  const concatenation = `${mot1} ${mot2} ${mot3}`;
concatenation.length>100 ? console.log("c'est une grande phrase") : console.log("c'est une petite phrase");
}
// sentenceSize("je","veux","manger");

/*Déclarer et définir 2 variables misteryNumber et myNumber de type number.
En utilisant uniquement l'opérateur ternaire, on affiche : Si les 2 nombres sont égaux Congratulations !Sinon
Si le nombre myNumber est inférieur au nombre misteryNumber, on affiche +Sinon on affiche - */
const misteryNumber = 10;
const myNumber = 10;
misteryNumber == myNumber ? console.log("Congratulations") : myNumber<misteryNumber ? console.log("+") : console.log("-");;
