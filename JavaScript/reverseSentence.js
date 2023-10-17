let input = prompt("Please enter your sentence: ");

function reverseSentence(input){
    let str = input.split("").reverse().join("");
    let str1 = str.split(" ").reverse().join(" ");

    return str1;
}

console.log(reverseSentence(input));