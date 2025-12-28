// let tong = prompt("Nhập vào tổng của hai số x và y:");
// if (isNaN(tong) || tong.trim() === "") {
//   alert("Tổng phải là một số hợp lệ!");
//   throw new Error("Dữ liệu không hợp lệ!");
// }
// let hieu = prompt("Nhập vào hiệu của hai số x và y:");
// if (isNaN(hieu) || hieu.trim() === "") {
//   alert("Hiệu phải là một số hợp lệ!");
//   throw new Error("Dữ liệu không hợp lệ!");
// }

function nhapSo(tenBien) {
  let input = prompt(`Nhập vào ${tenBien} của hai số x và y:`);
  if (input === null || input.trim() === "" || isNaN(input)) {
    alert(`${tenBien} phải là một số hợp lệ!`);
    throw new Error("Dữ liệu không hợp lệ!");
  }
  return Number(input);
}

let tong = nhapSo("tổng");
let hieu = nhapSo("hiệu");

let x = (tong + hieu) / 2;
let y = (tong - hieu) / 2;
alert(`Số x là: ${x}`);
alert(`Số y là: ${y}`);
