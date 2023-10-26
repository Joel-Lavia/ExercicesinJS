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
/*Créer une fonction `findLargest()` avec 3 parametre qui seront de type nombre ,
trouve le plus grand des trois nombres.*/
function findLargest(nbr1,nbr2,nbr3){
return Math.max(nbr1,nbr2,nbr3);
}
//findTriangleType() Vérifier si un triangle est équilatéral, scalène ou isocèle
 function findTriangleType(side1,side2,side3) {
  if((side1 == side2 ) && side3 ==(side1&&side2)){
    console.log("triangle est équilatéral");
  }
  else if((side1 !== side2) && side3!==(side1&&side2)){
    console.log("un triangle est scalène");
  } 
 else{
    console.log("un triangle est isocèle");
  }

 }
 findTriangleType(80,10,10);
 //Create `evalNumbers()` imprime le résultat après avoir évalué les opérations arithmétiques entre deux nombres d'addition, 
 //de multiplication, de division et de module en JavaScript. Imprimer le résultat de num1+num2 si l'opération est "ajouter"
 // num1-num2 si l'operation est "substract"
 //num1 * num2 si l'operation est "multiply"
 //num1 / num2  si l'operation est "divide"
 //num1 % num2 si l'operation est "modulus"
 function evalNumbers(operateur, num1, num2){
 if(operateur == "add"){
  console.log(num1 + num2);
 }
 else if(operateur == "substract"){
 console.log(num1 - num2);
 }
 else if(operateur == "multiply"){
  console.log(num1 * num2);
 }
 else if(operateur == "divide"){
  console.log(num1 / num2);
 }
 else if(operateur === "modulus"){
 console.log(num1 % num2);
 }
 else{
 console.log("Invalid operation");
 }
 }
 evalNumbers("modulus",6,8);
 //Créer une fonction `checkLeapYear()` pour trouver si l'année donnée est une année bissextile
 function checkLeapYear(year){
 if((year%4 === 0 || year % 400 === 0) && year % 100 !== 0 ){
 console.log("leap year");
 }
 else{
 console.log("not a leap year");
 }
 }
 //checkLeapYear(2300);
 function findDaysInMonth(years,month){
 if(month== 0 || month >12){
  console.log("Invalid month");
 }
 else if(month==2 && (years%4 === 0 || years % 400 === 0) && years % 100 !== 0 ){
console.log("29 days");
 }
 else if(month == 2 && (years%4 !== 0 && years % 400 !== 0) || years % 100 === 0 ){
console.log("28 days");
 }
 else if(month == 4 || month == 6 || month == 9 || month == 11){
 console.log("30 days");
 }
 else{
  console.log("31 days");
 }
 }
 //findDaysInMonth(2024,12);
 //Écrivez une fonction JavaScript pour vérifier si une `entrée` est un tableau ou non.
 function checkInput(input){
Array.isArray(input) ? console.log("c'est un tableau") : console.log("pas un tableau");;
 }
 checkInput([1,2]);
 //Écrivez une fonction JavaScript pour obtenir le premier élément d'un tableau
 //le paramètre 'n' renverra les 'n' premiers éléments du tableau.
 function firstElement(array1,n){
 for(let i = 0; i<n;i++){
 console.log(array1[i]);
 }
 }
 //firstElement(["a","b","c","d"],3);
 //Écrivez une fonction JavaScript pour obtenir le dernier  élément d'un tableau
 function lastElement(array2,n1){
  let stockArray2 = array2.length;
    for(stockArray2; stockArray2 >= n1;stockArray2--){
    console.log(array2[stockArray2]);
    }
    // console.log(stockArray2);
 }
 lastElement(["a","b","c","d","e"],2);
 //Écrivez un programme JavaScript simple pour joindre tous les éléments du tableau 
 //suivant en une chaîne de caractères.
 function  joinAllElements(myColor){
 const joinElements = myColor.join(",");
 console.log(joinElements);
 }
 //joinAllElements(["Red", "Green", "White", "Black"]);

 //Exercice sur les objets
 var student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12};
  delete student.rollno;
  // var student1 = student;
  // console.log(student1);
  let attributes = {
  nom :"joel",
  caractere :"Flemmard",
  color :"black",
  activitePreferer : "jouer au jeux-vidéos",
  deteste : "trop parler"
  }
  attributes.langues = "Espagnole";
  let attributes1 = attributes;
  delete attributes.caractere;
  
  console.log(attributes1);
