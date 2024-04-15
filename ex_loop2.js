//Bài 1: In dãy Fibonaci

// let n_1 = 0, n_2 = 1, n
// let num = +prompt('Nhập số lượng phần tử của dãy Fibonaci')
// for (let i = 0; i < num; i++) {
//     n = n_1 + n_2
//     document.write(n + ' ')
//     n_1 = n_2
//     n_2 = n
// }


//Bài 2: Tính giai thừa của một số nguyên dương

// let num = +prompt('Nhập số nguyên dương')
// while (num <= 0){
//     num = +prompt('Nhập lại số nguyên dương')
// }
// let factorial = 1
// for (let i = 1; i <= num; i++) {
//     factorial *= i
// }
// document.write(factorial)

//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

// let num = +prompt('Nhap canh goc vuong')
//
// while (num <= 0){
//     num = +prompt('Nhap lai canh goc vuong')
// }

// for (let i = 0; i < num; i++) {
//     for (let k = 0; k <= i; k++) {
//         document.write('*')
//     }
//     for (let j = (1 + i); j < num; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < num; i++) {
//     for (let j = i; j < num; j++) {
//         document.write('*')
//     }
//     for (let k = 0; k < i; k++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < num; i++) {
//     for (let j = i + 1; j < num; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let k = 0; k < (i + 1) ; k++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < num; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let k = i; k < num; k++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

//Bài 4: In hình chữ nhat

// let length = +prompt('Nhap chieu dai hcn'), width = +prompt('Nhap chieu rong hcn')
// while (length <= 0 || width <= 0){
//     length = +prompt('Nhap lai chieu dai hcn')
//     width = +prompt('Nhap lai chieu rong hcn')
// }
// for (let j = 0; j < length; j++) {
//     document.write('*')
// }
// document.write('<br>')
// for (let i = 0; i < (width - 2); i++) {
//     document.write('*')
//     for (let k = 0; k < (length - 2); k++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('*')
//     document.write('<br>')
// }
// for (let j = 0; j < length; j++) {
//     document.write('*')
// }

//Bài 5: Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

// let initialMoney, numMonth, rateMoney, money
// initialMoney = +prompt('số tiền ban đầu')
// numMonth = +prompt('số tháng cho vay')
// rateMoney = +prompt('lãi xuất hàng tháng')
// let rate = 1
// for (let i = 0; i < numMonth; i++) {
//     rate *= (1 +rateMoney)
// }
// money = initialMoney * rate
// document.write(money)

//Bài 6: In hình trái tim

// for (let i = 0; i < 6; i++) {
//     for (let j = 0; j < 7; j++) {
//         if((i === 0 && (j === 0 || j === 3 || j === 6) ||
//             (i === 3 && (j === 0 || j === 6)) ||
//                 (i === 4 && (j === 0 || j === 1 || j === 5 || j === 6)) ||
//                 (i === 5 && (j === 0 || j === 1 || j === 2 || j === 4 || j === 5 || j === 6)))){
//             document.write('&nbsp;&nbsp;')
//         }else {
//             document.write(' * ')
//         }
//     }
//     document.write('<br>')
//
// }

// let size = +prompt('Nhập kích thước hình trái tim')
// for (let i = 0; i < (size - 1)/3; i++) {
//     for (let s = i; s < (size - 1)/6; s++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let j = 0; j < (i + 1)*2; j++) {
//         document.write('*')
//     }
//     for (let k = i; k < (size); k++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let j = 0;j < (i + 2); j++) {
//         document.write('*')
//     }
//     for (let s = i; s < (size - 1)/6; s++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('<br>')
// }


