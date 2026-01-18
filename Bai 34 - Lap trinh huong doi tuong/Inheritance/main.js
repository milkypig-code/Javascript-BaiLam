class VanPhong {
  constructor(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // Phương thức
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  showInfo() {
    return `Tên: ${this.fullName}
ID: ${this.ID}
Tuổi: ${this.calcAge()}
Địa chỉ: ${this.homeTown}`;
  }
}

// Lớp Nhân Viên kế thừa lớp Văn Phòng
class NhanVien extends VanPhong {
  constructor(fullName, ID, birthYear, homeTown, luongCoBan, soNgayCong) {
    super(fullName, ID, birthYear, homeTown);
    this.luongCoBan = luongCoBan;
    this.soNgayCong = soNgayCong;
  }

  tinhLuong() {
    return this.luongCoBan * this.soNgayCong;
  }

  showInfo() {
    return (
      super.showInfo() +
      `
Lương: ${this.tinhLuong() + "$"}`
    );
  }
}

// Tạo lớp Nhân Viên
const nv1 = new NhanVien("Nguyễn Nam Hà Thanh", 1, 2003, "Đà Nẵng", 100, 30);

console.log(nv1.showInfo());
