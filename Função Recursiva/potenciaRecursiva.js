function potencia(num, expo){
    if(expo==0){
        return 1 
    }
    else {
        return (num*potencia(num, num^(expo-1)))
    }
}

var result = potencia(4,2)
console.log(result)

//outra forma
function potencia(num, expo){
    if(expo==0){
        return 1 
    }
    else {
        return (num*potencia(num, expo-1))
    }
}

var result = potencia(4,2)
console.log(result)