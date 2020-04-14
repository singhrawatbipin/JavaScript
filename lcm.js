function lcm(a, b) {
    for (l = a > b ? a : b; l <= a * b; l++) {
        if (l % a === 0 && l % b === 0) {
            break;
        }
    } alert(l);
} lcm(4, 6);
