let input = prompt("Nhập vào một chuỗi:");

let chuoiSo = "";
let chuoiChu = "";

for (let i = 0; i < input.length; i++) {
  let kyTu = input[i];
  if (kyTu >= "0" && kyTu <= "9") {
    chuoiSo += kyTu;
  } else {
    chuoiChu += kyTu;
  }
}

alert(`Chuỗi số: ${chuoiSo}\nChuỗi chữ: ${chuoiChu}`);
