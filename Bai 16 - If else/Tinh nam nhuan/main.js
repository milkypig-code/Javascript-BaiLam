let nam = prompt("Nhập vào năm cần kiểm tra:");
if (nam === null || nam.trim() === "" || isNaN(nam)) {
  alert("Năm phải là một số hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let namNum = Number(nam);
if ((namNum % 4 === 0 && namNum % 100 !== 0) || namNum % 400 === 0) {
  alert(`${nam} là năm nhuận`);
} else {
  alert(`${nam} không phải là năm nhuận`);
}
