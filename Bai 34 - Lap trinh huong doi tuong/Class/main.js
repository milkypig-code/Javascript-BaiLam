class NhanVien {
  constructor(fullName, ID, birthYear, homeTown) {
    this.fullName = fullName;
    this.ID = ID;
    this.birthYear = birthYear;
    this.homeTown = homeTown;
  }
  // Phương thức
  showInfo() {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  }

  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }
}

const nv = new NhanVien("Nguyen Van A", 1, 2001, "Ha Noi");

// Thêm phương thức vào class
// NhanVien.prototype.calcAge = function () {
//   return new Date().getFullYear() - this.birthYear;
// };

// Xoá phương thức class
delete NhanVien.calcAge();

console.log(nv.calcAge());
