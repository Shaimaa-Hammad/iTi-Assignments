function reverseArgs1() {
    var argsArray = [].reverse.call(arguments);
    return argsArray;
}

function reverseArgs2() {
    var argsArray = [].reverse.apply(arguments);
    return argsArray;
}

function reverseArgs3() {
    var argsArray = [].reverse.bind(arguments);
    return argsArray();
}

console.log(reverseArgs1('a', 'b', 'c'));
console.log(reverseArgs2(1, 2, 3, 4, 5));
console.log(reverseArgs3(1, 'a', 2, 'b'));