// let variable = 'Hello'
// variable = 'Another Hello'
// console.log(variable);

console.log(`------------`)
console.log(`Asignment_01`)
let x = 50;
let y = 10;

let suma = x + y;
let skirtumas = x - y;
let daugyba = x * y;
let dalyba = x / y;

console.log(`Suma: ${suma}`)
console.log(`Skirtumas: ${skirtumas}`)
console.log(`Daugyba: ${daugyba}`)
console.log(`Dalyba: ${dalyba}`)

console.log(`------------`)
console.log(`Asignment_02`)
let name = 'Petras';
let position = 1;

if (position === 1)
{
    console.log(`${name} atbėgo ${position} ir gaus auksinį medalį`)
}
else if (position === 2)
{
    console.log(`${name} atbėgo ${position} ir gaus sidabrinį medalį`)
}
else if (position === 3)
{
    console.log(`${name} atbėgo ${position} ir gaus bronzinį medalį`)
}
else
{
    console.log(`${name} atbėgo ${position} ir negaus jokio medalio`)
}

console.log(`------------`)
console.log(`Asignment_02`)

let a = true;
let b = (a === true) ? true : false;
console.log(`${b}`)

console.log(`------------`)
console.log(`Asignment_03`)

let num1 = 1;
let num2 = 2;
let sol = (num1 < num2) ? console.log(true) : console.log(false)

console.log(`------------`)
console.log(`Asignment_04`)
for(i = 0; i < 10; i+=2)
{
    console.log(`${i}`)
}

console.log(`------------`)
console.log(`Asignment_05`)
let A = 2+2;
switch(A)
{
    case 3:
        console.log(`A = 3`);
        break;
    case 4:
        console.log(`A = 4`)
        break;
    case 5:
        console.log(`A = 5`)
        break;
    default:
        console.log(`none`)
        break;
}

console.log(`------------`)
console.log(`Asignment_06`)
// Math.floor() apvalina mažyn;
// Math.ceil() - reverse floor;
// Math.round() - normalus apvalinimas;
// Math.trunc() - panaikina apvalinimą (panaikina po kablelio);

// Math.Random() - gražina skaičių nuo 0 iki 1 (0.xxxxxx)
// Math.Max() - gražina didžiausią skaičių;
// Math.Min () - 
// Alert
let x1 = Math.random();
Math.floor(x1);
let x2 = x1*10

//alert(x1)
//alert(Math.floor(x2))


console.log(`------------`)
console.log(`Asignment_07`)
let x3 = x2++
console.log(Math.floor(x3))

console.log(`------------`)
console.log(`Asignment_08`)
let x4 = 0
while (x4<18){
    console.log(x4)
    x4+=4
}

console.log(`------------`)
console.log(`Asignment_09`)
// do while

//DOM
document.getElementById('text').innerHTML='<h1>Labas Vakaras</h1>' //inner html mažiau saugus naudoti; textContent

// doucment.querySelector("#id")
// doucment.querySelector(".class")
// doucment.querySelector("#id")

document.querySelector("#text").innerHTML='<h1>Blogas Vakaras</h1>'

document.querySelector('#vie').innerHTML='<h1>Vienas</h1>'
document.querySelector(".du").innerHTML='<h2>Du</h2>'
document.getElementsByTagName("Trys").innerHTML='<h2>Trys</h2>'

let arr = ['Labas', 'Vakaras', 1, 2, 3, true]
arr[0];

function func(){
    console.log("Kažkas")
}

func();

const funcArr = () => { // įsivykdo ir susinaikina;

}

console.log(`------------`)
console.log(`Asignment_10`)
let userName = "Petras";

function Funky(){
    console.log(userName);
    userName = "Jonas";
    console.log(userName);
}

Funky();

console.log(`------------`)
console.log(`Asignment_11`)

function Funky2(){
    let x = confirm("Ar tau yra 18?")
    if (x){
        console.log("Gerk!")
    }
    else{
        console.log("Ar tėvai davė leidimą?")
    }
}
//Funky2();
console.log(`------------`)
console.log(`Asignment_12`)

function Funky3(){
    let x = confirm("Ar tau yra 18?")
    let y = (x ? console.log("Gerk!") : console.log("Ar tėvai davė leidimą?"))
}
//Funky3();

console.log(`------------`)
console.log(`Asignment_12`)

//document.body.addEventListener("click", () => "Ačiū!")

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    console.log("Click happened!");
})
