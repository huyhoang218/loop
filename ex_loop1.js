//Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

// for (let i = 1; i <= 100; i++) {
//     if (i === 99) document.write('Da hoan thanh')
// }

//Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
//Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

// let temp = +prompt('Nhiet do hien tai la')
// if(temp > 100) document.write('giam nhiet do')
// else if (temp < 20) document.write('tang nhiet do')

//Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// let n_1 =0, n_2 = 1, n_3
// for (let i = 0; i < 20; i++) {
//     n_3 = n_1 + n_2
//     document.write(n_3 + ' ')
//     n_1 = n_2
//     n_2 = n_3
// }

//Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

// let n_1 =0, n_2 = 1, n_3, count = 0
// while (count < 1){
//     n_3 = n_2 + n_1
//     if (n_3 % 5 === 0){
//         document.write(n_3 + ' ')
//         count ++
//     }
//     n_1 = n_2
//     n_2 = n_3
// }

//Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// let n_1 =0, n_2 = 1, n_3
// let sum = 0
// for (let i = 0; i < 20; i++) {
//     n_3 = n_1 + n_2
//     sum += n_3
//     n_1 = n_2
//     n_2 = n_3
// }
// document.write('tổng của 20 số đầu tiên trong dãy fibonacci: ' + sum)

//Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

// let sum = 0, count = 0, i = 0
// while (count < 30){
//     if( i % 7 === 0){
//         sum += i
//         count++
//     }
//     i++
// }
// document.write(sum)

//Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100.
//Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ "FizzBuzz".

// function divison3(num){
//     if(num % 3 === 0 ) return true
//     else return false
// }
// function divison5(num){
//     if(num % 5 === 0 ) return true
//     else return false
// }
// let number
// for (let i = 1; i <= 100; i++) {
//     if (divison3(i)){
//         document.write('Fuzz ')
//         if (divison5(i)) document.write('Bizz ')
//     }else document.write(i + ' ')
//
// }

//Bài 8: Game đoán số
// function playGame(){
//     let num = +prompt('Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu')
//     let random = Math.floor(Math.random() * (num+1))
//     let numGuess = +prompt('Nhập số bạn đoán')
//     let assignValue
//         for (let i = 0; i < 3; i++) {
//             if(numGuess < random){
//                 alert('Bạn đã đoán số bé hơn')
//                  assignValue = +prompt('Nhập số bạn đoán')
//                 numGuess = assignValue
//             }
//             else  if(numGuess > random){
//                 alert('Bạn đã đoán số lớn hơn')
//                 assignValue = +prompt('Nhập số bạn đoán')
//                 numGuess = assignValue
//             }
//             else if(numGuess === random){
//                 alert('Chúc mừng bạn đoán đúng')
//                 document.write('Chúc mừng bạn đoán đúng')
//                 break
//             }
//             if(i === 2) alert('Bạn đã hết số lần đoán')
//         }
// }
