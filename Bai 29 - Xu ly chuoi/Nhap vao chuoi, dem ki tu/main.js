let input = prompt("Nhập vào một chuỗi:");

let countLowercase = 0;
let countUppercase = 0;
let countNumber = 0;
let countSpecial = 0;

for (let i = 0; i < input.length; i++) {
  let char = input[i];
  if (char >= "a" && char <= "z") {
    countLowercase++;
  } else if (char >= "A" && char <= "Z") {
    countUppercase++;
  } else if (char >= "0" && char <= "9") {
    countNumber++;
  } else {
    countSpecial++;
  }
}

console.log(`1. Số kí tự thường là: ${countLowercase}
2. Số kí tự hoa là: ${countUppercase}
3. Số kí tự số là: ${countNumber}
4. Số kí tự đặc biệt là: ${countSpecial}
Kí tự đã nhập là: ${input}`);
