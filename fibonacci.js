function fibonacci(n) {
    let a = 0, b = 1;
    if (n === 0) {
        return a;
    }
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        //console.log(b);
    }
    return b;
} console.log(fibonacci(30));