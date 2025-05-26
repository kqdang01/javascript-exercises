const fibonacci = function(number) {
    let num = parseInt(number);
    if (num === 2 || num === 1)
    {
        return 1;
    }
    else if (num === 0)
    {
        return 0;
    }
    else if (num < 0)
    {
        return "OOPS";
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
