function fizzBuzz() {
    for (var curr = 1; curr <= 100; curr += 1) {
        var toPrint = '';
        if (curr % 3 === 0) {
            toPrint = newToPrintForMultipleOf3(toPrint);
        }
        if (curr % 5 === 0) {
            toPrint = newToPrintForMultipleOf5(toPrint);
        }
        if (curr % 7 === 0) {
            toPrint = newToPrintForMultipleOf7(toPrint);
        }
        if (curr % 11 === 0) {
            toPrint = newToPrintForMultipleOf11();
            console.log(toPrint);
            continue;
        }
        if (curr % 13 === 0) {
            toPrint = newToPrintForMultipleOf13(toPrint);
        }
        if (curr % 17 === 0) {
            toPrint = newToPrintForMultipleOf17(toPrint);
        }
        if (toPrint === '') {
            toPrint = String(curr);
        }
        console.log(toPrint);
    }
}
function newToPrintForMultipleOf3(prevToPrint) {
    return prevToPrint + 'Fizz';
}
function newToPrintForMultipleOf5(prevToPrint) {
    return prevToPrint + 'Buzz';
}
function newToPrintForMultipleOf7(prevToPrint) {
    return prevToPrint + 'Bang';
}
function newToPrintForMultipleOf11() {
    return 'Fezz';
}
function newToPrintForMultipleOf13(prevToPrint) {
    var indexOfB = prevToPrint.indexOf('B');
    if (indexOfB === -1) {
        return prevToPrint + 'Bong';
    }
    else {
        return prevToPrint.slice(0, indexOfB) + 'Bong' + prevToPrint.slice(indexOfB);
    }
}
function newToPrintForMultipleOf17(toPrint) {
    toPrint = toPrint.replace(/([A-Z])/g, ' $1').trim();
    var toPrintWords = toPrint.split(' ');
    return toPrintWords.reverse().join('');
}
fizzBuzz();
console.log('Multiple of 17 function check. Expected output: BongFizzBuzzFuzzFezz');
console.log(newToPrintForMultipleOf17('FezzFuzzBuzzFizzBong'));
