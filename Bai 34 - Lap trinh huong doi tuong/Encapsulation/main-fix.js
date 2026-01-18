class Wallet {
  #pin;
  #balance;
  #isPinEntered = false;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0; // Tài khoản mới tạo thẻ bằng 0
  }

  // Helper: Hàm phụ để định dạng tiền cho nhanh (Đỡ phải viết lại nhiều lần)
  formatMoney(number) {
    return number.toLocaleString("vi-VN");
  }

  // Private Method
  #validatePin(pin) {
    return this.#pin === pin;
  }

  // Public Method
  enterPin(pin) {
    if (this.#validatePin(pin)) {
      this.#isPinEntered = true;
    } else {
      this.#isPinEntered = false;
    }
  }

  // Gửi tiền vào tài khoản
  deposit(value) {
    if (!this.#isPinEntered) {
      console.log(`Kiểm tra lại mã pin`);
      return;
    }
    this.#balance += value;
    console.log(
      `Bạn đã gửi ${this.formatMoney(value)} vào tài khoản ${this.bankName}`,
    );
  }

  // Rút tiền
  withdraw(value) {
    if (!this.#isPinEntered) {
      console.log(`Kiểm tra lại mã pin`);
      return;
    }
    if (value > this.#balance) {
      console.log(`Số tiền trong tài khoản không đủ`);
    } else {
      this.#balance -= value;
      console.log(
        `Bạn đã rút ${this.formatMoney(value)} còn lại ${this.formatMoney(this.#balance)}`,
      );
    }
  }

  // Getter
  get balance() {
    if (!this.#isPinEntered) {
      console.log(`Kiểm tra lại mã pin`);
      return;
    }
    return this.#balance;
  }
}

const ThanhWallet = new Wallet("MB Bank", 1234);

// Nhập mã pin
ThanhWallet.enterPin(1234);
// Gửi Tiền
ThanhWallet.deposit(1000000);
// Rút tiền
ThanhWallet.withdraw(500000);
