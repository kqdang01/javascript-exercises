const palindromes = function (string) {
    let stringArray = string.split("");
    stringArray = stringArray.filter(char => {
        if (char === " " || char === "!" || char === "." || char === ",")
        {
            return false
        }
        return true;
    })
    stringArray = stringArray.map(char => char.toLowerCase());
    let stringCpy = stringArray.join("");
    stringArray.reverse();
    let reversed = stringArray.join("");
    console.log(reversed);
    return reversed === stringCpy;
};

// Do not edit below this line
module.exports = palindromes;
