function hcf(a, b) {
    for (h = a < b ? a : b; h >= 1; h--) {
        if (a % h === 0 && b % h === 0) {
            break;
        }
    }
    alert(h);
} hcf(4, 6);