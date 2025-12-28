let a = prompt("Nhập vào hệ số a:");
if (a === null || a.trim() === "" || isNaN(a)) {
  alert("Hệ số a phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let aNum = Number(a);
if (aNum === 0) {
  alert("Hệ số a không được bằng 0 trong phương trình bậc hai!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let b = prompt("Nhập vào hệ số b:");
if (b === null || b.trim() === "" || isNaN(b)) {
  alert("Hệ số b phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let bNum = Number(b);

let c = prompt("Nhập vào hệ số c:");
if (c === null || c.trim() === "" || isNaN(c)) {
  alert("Hệ số c phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let cNum = Number(c);

let delta = bNum * bNum - 4 * aNum * cNum;
if (delta < 0) {
  alert("Phương trình vô nghiệm!");
} else if (delta === 0) {
  let x = -bNum / (2 * aNum);
  alert("Phương trình có nghiệm kép: x = " + x);
} else {
  let x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
  let x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
  alert("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
}
