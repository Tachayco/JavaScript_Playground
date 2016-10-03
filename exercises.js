var chapter2Ex1 = function() {
    str = ""
    for (var i = 0; i < 7; i++) {
        str = str + "#"
        console.log(str)
    }
}

var chapter2Ex2 = function() {
    for (var i = 1; i < 101; i++) {
        i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") : i % 3 == 0 ? console.log("Fizz") : i % 5 == 0 ? console.log("Buzz") : console.log(i)
    }
}

var chapter2Ex3 = function() {
    var str = ""
    var size = 20
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            (i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0) ? str = str + " ": str = str + "#"
        }
        console.log(str)
        str = ""
    }
}

function ch3Ex1() {
    function min(i, j) {
        if (i < j)
            return i
        return j
    }

    console.log(min(0, 10));
    // → 0
    console.log(min(0, -10));
    // → -10
}

function ch3Ex2Recursion() {
    // Your code here.
    function isEven(i) {
        //console.log(i)
        if (i == 0)
            return true
        if (i == 1)
            return false
        return isEven(i > 0 ? i - 2 : i + 2)
    }

    console.log(isEven(50));
    // → true
    console.log(isEven(75));
    // → false
    console.log(isEven(-1));
    // → false
}

function ch3Ex3BeanCountin() {
    // Your code here.
    function countBs(str) {
        return countChar(str, "B")
    }

    function countChar(str, ch) {
        var pos = 0
        var count = 0
        while (pos < str.length) {
            if (str.charAt(pos) == ch) {
                count += 1
            }
            pos += 1
        }
        return count
    }

    console.log(countBs("BBC"));
    // → 2
    console.log(countChar("kakkerlak", "k"));
    // → 4
}

function ch4Ex1TheSumOfARange() {
    // Your code here.

    function range(start, end, step) {
        var arr = []
        if (step == undefined) step = 1;

        while ((step > 0 && start <= end) || (step < 0 && start >= end)) {
            arr.push(start)
            start += step
        }

        return arr

    }

    function sum(values) {
        //console.log(values)
        result = 0
        for (i = 0; i < values.length; i++) {
            //console.log(values[i])
            result = result + values[i]
        }
        return result
    }


    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(range(1, 10, 2));
    console.log(sum(range(1, 10)));
    // → 55
}
