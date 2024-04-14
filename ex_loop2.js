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
// if (num < 0){
//     num = +prompt('Nhập lại số nguyên dương')
// }
// let factorial = 1
// for (let i = 1; i <= num; i++) {
//     factorial *= i
// }
// document.write(factorial)

//Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k <= i; k++) {
//         document.write('*')
//     }
//     for (let j = (1 + i); j < 5; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = i; j < 5; j++) {
//         document.write('*')
//     }
//     for (let k = 0; k < i; k++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = i + 1; j < 5; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let k = 0; k < (i + 1) ; k++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
//         document.write('&nbsp;&nbsp;')
//     }
//     for (let k = i; k < 5; k++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

//Bài 4: In hình chữ nhat

// let length = +prompt('Nhap chieu dai hcn'), width = +prompt('Nhap chieu rong hcn')
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

let width = +prompt('width')
for (let i = 0; i < width/4; i++) {
    document.write('&nbsp;&nbsp;')
    for (let j = 0; j < ; j++) {
        
    }
}

