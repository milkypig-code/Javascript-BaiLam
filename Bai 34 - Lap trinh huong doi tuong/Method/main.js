// Cách 1: Class (Khuyên dùng nhất hiện nay)
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

  draw() {
    console.log(`Phương thức draw trả về`);
    return;
  }
}

const nv = new NhanVien("Nguyen Van A", 1, 2001, "Ha Noi");

console.log(nv.draw());
