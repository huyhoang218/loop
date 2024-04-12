let multi
multi = '<table border=\'1\' width=\'300\' cellspacing=\'0\' cellpadding=\'10\'>'
for (let i = 1; i <= 10; i++) {
    multi = multi + '<tr>'
    for (let j = 1; j <= 10; j++) {
        multi = multi + '<td>' + i + '*' + j + '=' + i * j + '</td>'
    }
    multi = multi + '</tr>'
}
multi = multi + '</table>'
document.write(multi)

// let count = 1
// for (let i = 1; true; i += 2) {
//     count++
//     document.write(i + " ")
//     if(count === 5) break
// }