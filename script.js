// event listeners
document.getElementById("Q1").addEventListener("click", myFunctionQ_1);
document.getElementById("Q2").addEventListener("click", myFunctionQ_2);
document.getElementById("Q3").addEventListener("click", myFunctionQ_3);
document.getElementById("Q4").addEventListener("click", myFunctionQ_4);
document.getElementById("Q5").addEventListener("click", myFunctionQ_5);
document.getElementById("Q6").addEventListener("click", myFunctionQ_6);
document.getElementById("Q7").addEventListener("click", myFunctionQ_7);
document.getElementById("Q8").addEventListener("click", myFunctionQ_8);
document.getElementById("Q9").addEventListener("click", myFunctionQ_9);
document.getElementById("Q10").addEventListener("click", myFunctionQ_10);

//Question No:1
function myFunctionQ_1() {
    let array1 = prompt("Q1.if required try different input here:", "13,2,3,4,5,6,7,8,9,10").split(',');
    var num = array1[0];
    var c = 0;
    for (i = 1; i <= num; i++) {
        if (num % i == 0) {
            c = c + 1;
        }
    }
    if (c == 2) {
        swal(`${array1[0]} is a prime number`);
    } else {
        swal(`${array1[0]} is not a prime number`);
    }
};

//Question No:2
function myFunctionQ_2() {
    var array2 = prompt("Q2. if required try different input here:", "13,2,a,4,a,6,a,8,a,10,A,").split(',');
    var maxFrequency = 1;
    var count = 0;
    var item = "";
    for (var i = 0; i < array2.length; i++) {
        for (var j = i; j < array2.length; j++) {
            if (array2[i] == array2[j]) count++;
            if (maxFrequency < count) {
                maxFrequency = count;
                item = array2[i];
            }
        }
        count = 0;
    }
    swal(item + " ( " + maxFrequency + " times ) ");
};
//Question No:3
var swapCase = function(letters) {
    var newLetters = "";
    for (var i = 0; i < letters.length; i++) {
        if (letters[i] === letters[i].toLowerCase()) {
            newLetters += letters[i].toUpperCase();
        } else {
            newLetters += letters[i].toLowerCase();
        }
    }
    return newLetters;
}

function myFunctionQ_3() {
    var string2 = prompt("Q3. String from question is here, \n if required try different input here:", "The Quick Brown Fox");
    var swappedText = swapCase(string2);
    swal(`New swapped text is:\n ${swappedText}`);
};


//Question No:4
function sum_sq(array4) {
    var sum = 0,
        i = array4.length;
    while (i--)
        sum += Math.pow(array4[i], 2);
    swal("sum of squares of the elements of an array is " + sum);
    return sum;
}

function myFunctionQ_4() {
    let array4 = prompt("Q4. if required try different input here:", "1,2,3,4,5,6,7,8,9,10").split(',');
    // var x = array4.map(Math.pow);
    //alert(x);
    sum_sq(array4);
};

//Question No:5
function myFunctionQ_5() {
    let min = parseInt(prompt("Q5(a). JavaScript for loop that will iterate from ", "0"));
    let max = parseInt(prompt("Q5(b). JavaScript for loop that will iterate to", "15"));
    result5 = "";
    for (let i = min; i <= max; i++) {
        var oddOrEven = i % 2 === 0 ? 'even' : 'odd';
        result5 += ` ${i} is ${oddOrEven}  \n`;
    }
    swal(result5);
};
//Question No:6
function myFunctionQ_6() {
    let myString = prompt("Q6(a). Default string is here \n if required try different input here:", "ALFREDSYRIAC");
    let length = parseInt(prompt("Q6(b).Default length is here \n if required try different input here:", "6"));
    swal("NEW TRUNCATED STRING : \n " + myString.substring(0, length));
};
//Question No:7
function findLarge(a, b) {
    if (a > b) {
        swal("first integer " + a + " is greater");
        //document.getElementById("result_7").innerHTML = ` Larger Number among ${a},${b} is : ${a}`;
        return a;
    } else if (a === b) {
        swal("first integer " + a + " is equal to second integer  " + b);
        // document.getElementById("result_7").innerHTML = ` Both Numbers are equal  ${a} = ${b} `;
        return 0;
    } else {
        swal("SECOND integer " + b + " is greater");
        // document.getElementById("result_7").innerHTML = ` Greater Number among ${a},${b} is : ${b}`;
        return b;
    };
};

function myFunctionQ_7() {
    let a = parseInt(prompt("Q7(a). Please enter 1st integer:", "33"));
    let b = parseInt(prompt("Q7(b). Please enter 2nd integer:", "33"));
    findLarge(a, b);
};

//Question No:8
function myFunctionQ_8() {
    var array8 = prompt("Q8. can add some more objects, seperated by space <>:", "Banna Mango Apple Orange Grape").split(" ").sort();
    result8 = "";
    for (items in array8) {
        result8 += array8[items] += "\n";
    }
    swal("Alphbatically sorted new array items:\n " + result8);
};

//Question No:9
function myFunctionQ_9() {
    let array9 = Array.from(prompt("Q9. Default word is here \n if required try different words here:", "Javascript"));
    var result9 = "";
    for (let [index] of array9.entries()) {
        for (var j = 0; j <= index; j++) {
            result9 += `${array9[j]}`;
        }
        result9 += `\n`;
    };
    swal("New Pattern:\n " + result9);
};

//Question No:10
function myFunctionQ_10() {
    let symbol = prompt("Q10(a). If needed change symbol:", "*");
    let patternSize = parseInt(prompt("Q10(b). If needed change size:", "4"));
    var result10 = "";
    for (var i = 0; i < patternSize; i++) {
        for (var j = 0; j <= i; j++) {
            //console.log(numbers[j]);
            result10 += `${symbol}`;
        }
        result10 += `\n`;
    }
    //alert(result10);
    swal("Pattern Got! \n" + result10);
};