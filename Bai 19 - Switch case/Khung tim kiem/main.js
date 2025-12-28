let timKiem = prompt(`
Nhập vào lựa chọn tìm kiếm
1: Tên
2: Mã số
3: Số điện thoại`);

if (timKiem === null || timKiem.trim() === "" || isNaN(timKiem)) {
  alert("Dữ liệu không hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

let timKiemNum = Number(timKiem);

if (timKiemNum < 1 || timKiemNum > 3) {
  alert("Lựa chọn tìm kiếm không hợp lệ!");
  throw new Error("Dữ liệu không hợp lệ!");
}

switch (timKiemNum) {
  case 1:
    alert("Bạn đã chọn tìm kiếm theo Tên");
    break;
  case 2:
    alert("Bạn đã chọn tìm kiếm theo Mã số");
    break;
  case 3:
    alert("Bạn đã chọn tìm kiếm theo Số điện thoại");
    break;
  default:
    alert("Đã xảy ra lỗi không xác định.");
}
