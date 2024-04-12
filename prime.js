//Cach1:
// let number = +prompt('nhap n so nguyen to')
// let count = 0
// let n = 2
// let countPrime = 0
// for (let i = 2; true; i++) {
//     if(countPrime < number){
//         for (let j = 0; j <= i/2; j++) {
//             if(i % j === 0){
//                 count++
//             }
//         }
//         if(count === 2){
//             document.write(i + ' ')
//             countPrime++
//         }
//         count = 0
//     }else break
// }

//cach2:

// let num = +prompt('nhap n so nguyen to')
// let count = 0
// function checkPrime(number){
//     if(number < 2) return false
//     if(number === 2 || number === 1) return true
//     for (let i = 2; i < number; i++) {
//         if(number % i === 0) return false
//     }
//     return true
// }
//
// for (let i = 2; count < num; i++) {
//     if (checkPrime(i)){
//         document.write(i + ' ')
//         count++
//     }
// }