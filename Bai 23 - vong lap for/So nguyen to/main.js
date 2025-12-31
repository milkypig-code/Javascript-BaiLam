let n;

let isValid = false;

for (let i = 2; i <= n; i++) {
  if (n % i === 0 && i !== n) {
    break;
  } else {
    isValid = true;
  }
}
