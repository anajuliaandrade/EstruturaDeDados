
function  fib(num){
    if (num ==1 || num ==2){
        return 1
    }
    else {
        return (fib(num - 1) + fib(num-2))
    }
}

var result = fib(4)
console.log(result)