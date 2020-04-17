function swap(a, b) {
    b = b - a;
    a = b + a;
    b = a - b;
    console.log(a);
    console.log(b);
} swap(5, 10);