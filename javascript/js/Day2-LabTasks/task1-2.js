// Initialize array with length 5
var arr = new Array(5);

// Get initial 5 numbers from user input
for (var i = 0; i < 5; i++) {
    var num = parseInt(prompt("Enter number " + (i+1) + ": "));
    arr[i] = num;
}

// Ask user if they want to add more numbers
var addMore = prompt("Do you want to add more numbers? (y/n)").toLowerCase();

// If user wants to add more numbers, keep prompting until array is full
while (addMore === 'y' && arr.length < 10) {
    var num = parseInt(prompt("Enter a number: "));
    arr.push(num);
    addMore = prompt("Do you want to add more numbers? (y/n)").toLowerCase();
}

document.write('<div style="font-size:40px">Sorting</div><hr/>');
document.write('<div style="color:red; font-size:20px">U&#39;ve entered the values of  <span style="color:black">' + arr.toString() + '</span></div>');

// Sort in descending order using sort() method and reverse parameter
arr.sort(function(a, b) {
    return b - a;
});
document.write('<div style="color:red; font-size:20px">Ur values after being sorted descending:  <span style="color:black">' + arr.toString() + '</span></div>');

// Sort in ascending order using sort() method
arr.sort(function(a, b) {
    return a - b;
});
document.write('<div style="color:red; font-size:20px">Ur values after being sorted ascending:  <span style="color:black">' + arr.toString() + '</span></div>');