let so = prompt("Nhập vào một số nguyên:");
if (
  so === null ||
  so.trim() === "" ||
  isNaN(so) ||
  !Number.isInteger(Number(so))
) {
  alert("Vui lòng nhập vào một số nguyên hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let soNum = Number(so);
let soTriTuyetDoi = Math.abs(soNum);

// switch (soNum % 2) {
//   case 0:
//     alert(`Số ${soNum} là số chẵn.`);
//     break;
//   case 1:
//     alert(`Số ${soNum} là số lẻ.`);
//     break;
//   case -1:
//     alert(`Số ${soNum} là số lẻ.`);
//     break;
//   default:
//     alert("Đã xảy ra lỗi không xác định.");
// }

switch (soTriTuyetDoi % 2) {
  case 0:
    alert(`Số ${soNum} là số chẵn.`);
    break;
  case 1:
    alert(`Số ${soNum} là số lẻ.`);
    break;
  default:
    alert("Đã xảy ra lỗi không xác định.");
}
