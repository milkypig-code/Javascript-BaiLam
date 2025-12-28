let nam = prompt("Nhập vào năm cần kiểm tra:");
if (nam === null || nam.trim() === "" || isNaN(nam)) {
  alert("Năm phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let namNum = Number(nam);
if (namNum < 0) {
  alert("Năm phải là một số dương hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let thang = prompt("Nhập vào tháng cần kiểm tra (1-12):");
if (thang === null || thang.trim() === "" || isNaN(thang)) {
  alert("Tháng phải là một số hợp lệ từ 1 đến 12!");
  throw new Error("Dữ liệu không hợp lệ!");
}
let thangNum = Number(thang);
if (thangNum < 1 || thangNum > 12) {
  alert("Tháng phải là một số hợp lệ từ 1 đến 12!");
  throw new Error("Dữ liệu không hợp lệ!");
}

switch (thangNum) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`Tháng ${thangNum} năm ${nam} có 31 ngày`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`Tháng ${thangNum} năm ${nam} có 30 ngày`);
    break;
  case 2:
    if ((namNum % 4 === 0 && namNum % 100 !== 0) || namNum % 400 === 0) {
      alert(`Tháng ${thangNum} năm ${nam} có 29 ngày`);
    } else {
      alert(`Tháng ${thangNum} năm ${nam} có 28 ngày`);
    }
    break;
  default:
    alert("Tháng không hợp lệ!");
    throw new Error("Dữ liệu không hợp lệ!");
}
