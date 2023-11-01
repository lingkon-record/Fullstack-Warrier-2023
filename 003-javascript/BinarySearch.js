function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            console.log(`Found ${target} at index ${mid}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(`${target} not found in the array.`);
    return -1;
}

const sortedArray = [2, 4, 6, 8, 10, 12, 14];
const targetValue = 8;
binarySearch(sortedArray, targetValue);
