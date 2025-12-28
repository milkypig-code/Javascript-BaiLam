let tong = prompt("Nhập vào tổng của hai số x và y:");
if (isNaN(tong) || tong.trim() === "") {
  alert("Tổng phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let hieu = prompt("Nhập vào hiệu của hai số x và y:");
if (isNaN(hieu) || hieu.trim() === "") {
  alert("Hiệu phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let tongSo = Number(tong);
let hieuSo = Number(hieu);

let x = (tongSo + hieuSo) / 2;
let y = (tongSo - hieuSo) / 2;
alert(`Số x là: ${x}`);
alert(`Số y là: ${y}`);
