let number = +prompt("Nhập n số nguyên tố đầu tiên: ");
let count = 0
let countPrime = 0;
for (let i = 2; ; i++) {
    if (countPrime < number) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        if (count === 2) {
            document.write(i + " ");
            countPrime += 1;
        }
        count = 0;
    } else {
        break;
    }
}