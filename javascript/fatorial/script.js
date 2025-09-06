const factorial = n => {
    let mult = n
    for (let i = 1; i < n; i++) {
        mult = mult * i
    }
    return mult
}

console.log(factorial(10))