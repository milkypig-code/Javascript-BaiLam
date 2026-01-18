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
}

const nv = new NhanVien("Nguyen Van A", 1, 2001, "Ha Noi");

// Cách 2: function declaration
function NhanVien2(fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // Phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
}

const nv2 = new NhanVien2("Nguyen Van B", 2, 2002, "Da Nang");

// Cách 3: function expression
const NhanVien3 = function (fullName, ID, birthYear, homeTown) {
  this.fullName = fullName;
  this.ID = ID;
  this.birthYear = birthYear;
  this.homeTown = homeTown;
  // Phương thức
  this.showInfo = function () {
    return `${this.fullName} ${this.ID} ${this.homeTown}`;
  };
};

const nv3 = new NhanVien3("Nguyen Van C", 3, 2003, "Ho Chi Minh");

console.log(nv, nv2, nv3);
