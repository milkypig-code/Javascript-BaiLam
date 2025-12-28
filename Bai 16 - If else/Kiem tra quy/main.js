let thang = prompt("Nhập vào tháng cần kiểm tra (1-12):");
if (thang === null || thang.trim() === "" || isNaN(thang)) {
  alert("Tháng phải là một số hợp lệ từ 1 đến 12!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let thangNum = Number(thang);
if (!(1 <= thangNum && thangNum <= 12)) {
  alert("Tháng phải là một số hợp lệ từ 1 đến 12!");
  throw new Error("Dữ liệu không hợp lệ!");
}

if (thangNum < 3) {
  alert(`Tháng ${thangNum} thuộc Quý 1`);
} else if (thangNum < 6) {
  alert(`Tháng ${thangNum} thuộc Quý 2`);
} else if (thangNum < 9) {
  alert(`Tháng ${thangNum} thuộc Quý 3`);
} else {
  alert(`Tháng ${thangNum} thuộc Quý 4`);
}
