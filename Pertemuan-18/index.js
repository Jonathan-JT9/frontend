//Asynchronous JS

// Synchronus --> single thread
console.log("proses1");
console.log("proses2");
console.log("proses3");
console.log("proses4");

//Asynchronous --> multi thread -> non block
//1. Paralel
setTimeout(() => {
  console.log("Proses 1");
}, 5000);
console.log("proses 2");

setTimeout(() => {
  console.log("proses 3");
}, 3000);
console.log("proses 4");

//2. Concurrent
setTimeout(() => {
  console.log("Proses 1");
  setTimeout(() => {
    console.log("Proses 2");
    setTimeout(() => {
      console.log("Proses 3");
      setTimeout(() => {
        console.log("Proses 4");
      }, 3000);
    }, 3000);
  }, 3000);
}, 3000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//1. Then - catch
newPromise
  .then((result) => result)
  .then((result) => console.log(result2))
  .catch((error) => console.log(error));

//2. Async - await
// Harus dibuat dalam fungsi
const consumePromise = async () => {
  let result = await newPromise;
  console.log(result);
};

consumePromise();

//Pakai Promise yang sudah ada
//1.Fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

//mini exe
(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  json.forEach(({ name }) => console.log(name));
})();

//2.Axios
