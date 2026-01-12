let input = prompt("Nhập vào một chuỗi:");
if (input === null || input.trim() === "") {
  alert("Bạn đã hủy nhập chuỗi.");
  throw new Error("Invalid input");
}

let tuCanDem = prompt("Nhập vào từ cần đếm số lần xuất hiện:");

let count = 0;
let viTri = input.indexOf(tuCanDem);

while (viTri !== -1) {
  count++;
  viTri = input.indexOf(tuCanDem, viTri + 1);
}

alert(`Từ "${tuCanDem}" xuất hiện ${count} lần trong chuỗi ${input}.`);
