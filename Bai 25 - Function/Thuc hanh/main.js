// let userName = prompt("Nhập tên của bạn:");

// function sayHello(name) {
//   alert("Hello " + name);
// }

// sayHello(userName);

// function tinhTong(a, b) {
//   return a + b;
// }

// console.log(tinhTong(2, 3));

// function goiTen(name) {
//   console.log("Xin chào " + name);
// }

// goiTen("Halue");

// function tinhTong1(a = 0, b = 0) {
//   return a + b;
// }

// console.log(tinhTong1(5));
// console.log(tinhTong1());

let tinhTong2 = (a, b) => a + b;

function tinhNhan(a, b, c) {
  let sum = tinhTong2(a, b);
  return sum * c;
}

let tinhNhan2 = (a, b, c) => {
  let sum = tinhTong2(a, b);
  return sum * c;
};
