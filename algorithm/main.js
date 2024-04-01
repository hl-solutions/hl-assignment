const handleInput = () => {
    const inputElement = document.getElementById("input").value;

    const arrInput = inputElement.split(" ").map(Number);
    miniMaxSum(arrInput);
};

// SelectionSort algorithm
const selectionSort = (arr) => {
    const arrLength = arr.length;
    for (let i = 0; i < arrLength - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arrLength; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        if (minIndex !== i) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
};

// Function miniMaxSum
const miniMaxSum = (arr) => {
    selectionSort(arr);

    const totalArr = arr.reduce((total, number) => total + number, 0);
    const maxSum = totalArr - arr[0];
    const minSum = totalArr - arr[arr.length - 1];

    document.getElementById(
        "output"
    ).innerHTML = `Output: ${minSum} - ${maxSum}`;
};
