const axios = require("axios");
// console.log("A");
// console.log("B");
// console.log("C");

// console.log("A");
// setTimeout(() => {
//     console.log("B1")
// }, 0.5);
// setTimeout(() => {
//     console.log("B2")
// }, 0);
// console.log("C");
// console.log("D");

// A => Đợi 2s => B => C (1)

// A => C 
// Đợi 2s => B | (2) - True

// Tất cả (95%) các hàm được cung cấp từ các thư viện của nodejs hoặc js thì là bất đồng bộ

// a c d b1 b2

// a c d b1 b2


console.log("A");

axios.get("https://api.thecatapi.com/v1/images/search?limit=10").then((data) => {
    console.log("B1")
})

axios.get("https://api.thecatapi.com/v1/images/search?limit=20").then((data) => {
    console.log("B2")
});
console.log("C");
console.log("D");