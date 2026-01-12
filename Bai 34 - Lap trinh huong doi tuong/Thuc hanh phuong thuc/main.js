let nhanVien = {
  fullName: "Nguyen Nam Ha Thanh",
  birthYear: 2003,
  address: {
    city: "Danang",
    country: "Vietnam",
  },

  getAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
};

let nhanVienTest = {
  "1 fullName": "Nguyen Nam Ha Thanh",
  "@ddress": "Danang",
};

// console.log(Object.keys(nhanVien));

// console.log(Object.values(nhanVien));

// console.log(Object.entries(nhanVien));

// console.log(nhanVien.hasOwnProperty("fullName"));
// console.log(nhanVien.hasOwnProperty("Nguyen Nam Ha Thanh"));

// Object.freeze(nhanVien);
// nhanVien.fullName = "Thanh";
// console.log(nhanVien);

Object.seal(nhanVien);
nhanVien.fullName = "Thanh";
nhanVien.email = "nguyennamhathanh@gmail.com";
console.log(nhanVien);
