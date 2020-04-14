function bubble_sort(arr, n) {
    for (round = 1; round <= n - 1; round++) {
        for (i = 0; i <= n - 1 - round; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    } return arr;
} console.log(bubble_sort([10, 30, 20, 40, 35], 5));