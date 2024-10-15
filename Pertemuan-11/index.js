//1.String Literals

let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo nama Saya John Doe,umur saya 30 Tahun
// dan saya tinggal di manado

let kalimat =
  "Halo nama saya " +
  fullName +
  ", umur saya" +
  age +
  "tahun dan saya tinggal di" +
  address;
console.log(kalimat);

let kalimat2 =
  "Halo nama saya ${fullName}, umur saya ${age},tahun dan saya tinggal di ${Address}";
console.log(kalimat2);

//2.Arrow function

function sayGreetings1(fullName) {
  return "Hello my name ${fullName}";
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = () => {
  return "Hello my name is ${fullName}";
};

console.log(sayGreetings2("John Doe"));

//Arrow function pada IIFE
let output1 = (() => "Helo")();

//Arrow function pada callback function
let numbers = [1, 2, 3, 4, 5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3.Deafult Parameter

const sayGreetings3 = (fullName) => {
  if (!fullName) fullName = "John Doe";
};
if (!age) {
  age = 30;
}
if (!address) {
  address = "Manado";
}
console.log(
  "Halo nama saya ${fullName},umur saya ${age} tahun dan saya tinggal di ${address}"
);

sayGreetings3("Jonathan,18,Tondano");

SayGreetings4 = ((fullName = "John Doe"), (age = "30"), (address = "Manado"));

