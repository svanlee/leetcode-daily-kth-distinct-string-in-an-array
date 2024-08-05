// Solution in JS
/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    // Create a map to store the frequency of each string
    let map = new Map();
    
    // Count the frequency of each string
    for (let str of arr) {
        map.set(str, (map.get(str) || 0) + 1);
    }
    
    // Initialize a counter for distinct strings
    let count = 0;
    
    // Iterate through the map to find the kth distinct string
    for (let [str, freq] of map) {
        if (freq === 1) {
            count++; // Increment the counter for distinct strings
            if (count === k)
                return str; // Return the kth distinct string
        }
    }
    
    // If no kth distinct string is found, return an empty string
    return "";
};