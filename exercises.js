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

function ch4Ex2ReversingAnarray() {
    // Your code here.
    function reverseArray(arr) {
        var res = []
        for (var i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i])
        }
        return res
    }


    function reverseArrayInPlace(arr) {
        var tmp
        for (var i = 0; i < Math.floor(arr.length / 2); i++) {
            tmp = arr[i]
            arr[i] = arr[arr.length - 1 - i]
            arr[arr.length - 1 - i] = tmp
        }
    }



    console.log(reverseArray(["A", "B", "C", "N", "A", "T", "A", "L", "i", "A"]));
    // → ["C", "B", "A"];
    var arrayValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
}

function chp4Ex3AList() {
    function arrayToList(arr) {
        var list = null;
        for (var i = arr.length - 1; i >= 0; i--)
            list = {
                value: arr[i],
                rest: list
            };
        return list;
    }

    function listToArray(lst) {
        var val = lst.value
        var rest = lst.rest
        var arr = []

        arr.push(val)

        while (rest !== null) {
            val = rest.value
            arr.push(val)
            rest = rest.rest

        }

        return arr

    }

    function prepend(val, lst) {
        var res = {}

        res.value = val
        res.rest = lst

        return res
    }

    function nth(lst, pos, depth) {
        var val
        if (typeof depth == 'number')
            depth++;
        else
            depth = 0;

        //console.log(depth, lst)

        if ((depth < pos) && (lst != null)) {
            return nth(lst.rest, pos, depth)
        } else {
            //console.log(depth, lst, lst.value)
            (lst == null) ? val = undefined: val = lst.value
            return val
        }

    }

    console.log(arrayToList([10, 20, 30]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 2));
    // → 20
}

function ch4ex4DeepEqual() {
    function deepEqual(a, b) {
        if (a === b) return true;

        if (a == null || typeof a != "object" ||
            b == null || typeof b != "object")
            return false;

        var propsInA = 0,
            propsInB = 0;

        for (var prop in a)
            propsInA += 1;

        for (var prop in b) {
            propsInB += 1;
            if (!(prop in a) || !deepEqual(a[prop], b[prop]))
                return false;
        }

        return propsInA == propsInB;
    }

    var obj = {
        here: {
            is: "an"
        },
        object: 2
    };
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {
        here: 1,
        object: 2
    }));
    // → false
    console.log(deepEqual(obj, {
        here: {
            is: "an"
        },
        object: 2
    }));
    // → true
}

function ch5ex1Flattenning() {
    var arrays = [
        [1, 2, 3],
        [4, 5],
        [6]
    ];
    // Your code here.
    //


    //The reduce() method reduces the array to a single value.
    //The reduce() method executes a provided function for each value of the array
    //(from left-to-right).
    //The return value of the function is stored in an accumulator (result/total).
    //Note: reduce() does not execute the function for array elements without values.

    //SYNTAX: array.reduce(function(total,currentValue,currentIndex,arr),initialValue)

    //Parameter:	function(total,currentValue, index,arr)	Required.
    //A function to be run for each element in the array.

    //Function arguments:
    //total =>	Required. The initialValue, or the previously returned value of the function
    //currentValue =>	Required. The value of the current element
    //currentIndex =>	Optional. The array index of the current element
    //arr =>	Optional. The array object the current element belongs to
    //initialValue =>	Optional. A value to be passed to the function as the initial value

    console.log(arrays.reduce((prev, cur) => {
        return prev.concat(cur)
    }))
}

function ch5ex2MotherChildAgeDifference() {

    function average(array) {
        function plus(a, b) {
            return a + b;
        }
        return array.reduce(plus) / array.length;
    }

    var byName = {};
    ancestry.forEach(function(person) {
        byName[person.name] = person;
    });

    console.log(average(mumAges = ancestry.map((cur) => {
        var mother = byName[cur.mother]
        if (mother !== undefined) {
            return cur.born - mother.born
        }
    }).filter((cur) => {
        return cur != undefined
    })))

    // Your code here.


    // → 31.2

}

function ch5ex3LifeExpectancyPerCentury() {
    function average(array) {
        function plus(a, b) {
            return a + b;
        }
        return array.reduce(plus) / array.length;
    }

    let byCentury = {}
        //console.log("starting point: ",byCentury)
    ancestry.forEach(function(person) {
        var century = String(Math.ceil(person.died / 100))
        var age = person.died - person.born

        if (century in byCentury) {
            byCentury[century].push(age)

        } else {
            byCentury[century] = [age]

        }

    });

    // calculate the averages for each century

    for (var propt in byCentury) {
        byCentury[propt] = Math.round(average(byCentury[propt]) * 10) / 10
    }



    console.log(byCentury)


    // Your code here.

    // → 16: 43.5
    //   17: 51.2
    //   18: 52.8
    //   19: 54.8
    //   20: 84.7
    //   21: 94
}

function ch5ex4EveryAndSome() {
    // Your code here.
    function some(arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            if (predicate(arr[i]))
                return true
        }
        return false
    }

    function every(arr, predicate) {
        for (var i = 0; i < arr.length; i++) {
            if (!predicate(arr[i]))
                return false
        }
        return true
    }

    console.log(every([NaN, NaN, NaN], isNaN));
    // → true
    console.log(every([NaN, NaN, 4], isNaN));
    // → false
    console.log(some([NaN, 3, 4], isNaN));
    // → true
    console.log(some([2, 3, 4], isNaN));
    // → false
}

function Ch6_TheSecretLifeOfObjects() {

    function rowHeights(rows) {
        return rows.map((row) => {
            return row.reduce((max, cell) => {
                return Math.max(max, cell.minHeight())
            }, 0)
        })
    }

    function colWidths(rows) {
        return rows[0].map((_, i) => {
            return rows.reduce((max, row) => {
                return Math.max(max, row[i].minWidth())
            }, 0)
        })
    }

    function drawTable(rows) {
        var heights = rowHeights(rows)
        var widths = colWidths(rows)

        function drawLine(blocks, lineNo) {
            return blocks.map((block) => {
                return block[lineNo]
            }).join(" ")
        }


        function drawRow(row, rowNum) {
            var blocks = row.map((cell, colNum) => {
                return cell.draw(widths[colNum], heights[rowNum])
            })

            return blocks[0].map((_, lineNo) => {
                return drawLine(blocks, lineNo)
            }).join("\n")
        }

        return rows.map(drawRow).join("\n")
    }

    function repeat(string, times) {
        var result = ""
        for (var i = 0; i < times; i++)
            result += string
        return result
    }

    function TextCell(text) {
        this.text = text.split("\n")
    }

    TextCell.prototype.minWidth = function() {
        return this.text.reduce((width, line) => {
            return Math.max(width, line.length)
        }, 0)
    }

    TextCell.prototype.minHeight = function() {
        return this.text.length
    }

    TextCell.prototype.draw = function(width, height) {
        var result = []
        for (var i = 0; i < height; i++) {
            var line = this.text[i] || ""
            result.push(line + repeat(" ", width - line.length))
        }
        return result
    }

    var rows = []
    for (var i = 0; i < 5; i++) {
        var row = []
        for (var j = 0; j < 5; j++) {
            if ((j + i) % 2 == 0)
                row.push(new TextCell("##"))
            else
                row.push(new TextCell("  "))
        }
        rows.push(row)
    }

    function UnderlinedCell(inner) {
        this.inner = inner
    }

    UnderlinedCell.prototype.minWidth = function() {
        return this.inner.minWidth();
    }

    UnderlinedCell.prototype.minHeight = function() {
        return this.inner.minHeight() + 1
    }

    UnderlinedCell.prototype.draw = function(width, height) {
        return this.inner.draw(width, height - 1).concat([repeat("-", width)])
    }

    function RTextCell(text) {

        TextCell.call(this, text)
    }

    RTextCell.prototype = Object.create(TextCell.prototype)

    RTextCell.prototype.draw = function(width, heigth) {

        var result = []

        for (var i = 0; i < heigth; i++) {

            var line = this.text[i] || ""

            result.push(repeat(" ", width - line.length) + line)
        }
        return result

    }

    function dataTable(data) {
        var keys = Object.keys(data[0])
        var headers = keys.map((name) => {
            return new UnderlinedCell(new TextCell(name))
        })

        var body = data.map((row) => {
            return keys.map((name) => {
                var value = row[name]
                if (typeof(value) == "number")
                    return new RTextCell(String(row[name]))
                else
                    return new TextCell(String(row[name]))
            })
        })

        return [headers].concat(body)
    }



    console.log(drawTable(dataTable(MOUNTAINS)));
}

function Ch6Ex1AVectorType() {
    // Your code here.

    function Vector(x, y) {
        this.x = x
        this.y = y
    }

    Vector.prototype.plus = function(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y)
    }

    Vector.prototype.minus = function(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y)
    }

    Object.defineProperty(Vector.prototype, "length", {
        get: function() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        }
    })

    console.log(new Vector(1, 2).plus(new Vector(2, 3)));
    // → Vector{x: 3, y: 5}
    console.log(new Vector(1, 2).minus(new Vector(2, 3)));
    // → Vector{x: -1, y: -1}
    console.log(new Vector(3, 4).length);
    // → 5
}

function ch6Ex2AnotherCell() {
    // Your code here.
    function StretchCell(inner, width, height) {
        this.inner = inner
        this.width = width
        this.height = height
    }

    StretchCell.prototype.minWidth = function() {
        return Math.max(this.inner.minWidth(), this.width)
    }

    StretchCell.prototype.minHeight = function() {
        return Math.max(this.inner.minHeight(), this.height)
    }

    StretchCell.prototype.draw = function(width, height) {
        return this.inner.draw(width, height)
    }

    var sc = new StretchCell(new TextCell("abc"), 1, 2);
    console.log(sc.minWidth());
    // → 3
    console.log(sc.minHeight());
    // → 2
    console.log(sc.draw(3, 2));
    // → ["abc", "   "]
}
