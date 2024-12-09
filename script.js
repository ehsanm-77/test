const btn = document.getElementById("btn");
let a = [];
let arr = [
  { name: "ali", age: 25 },
  { name: "amir", age: 20 },
  { name: "ahmad", age: 15 },
  { name: "vahid", age: 30 },
];

localStorage.setItem("array", JSON.stringify(arr));

const myArr = JSON.parse(localStorage.getItem("array"));

console.log(myArr);

btn.addEventListener("click", () => {
  let newArr = [
    { name: "ali", age: 25 },
    { name: "amir", age: 20 },
    { name: "ahmad", age: 15 },
    { name: "vahid", age: 30 },
    { name: "saeed", age: 45 },
    { name: "hamed", age: 32 },
  ];
  localStorage.setItem("array", JSON.stringify(newArr));
});
