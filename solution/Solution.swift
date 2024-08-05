class Solution {
    func kthDistinct(_ arr: [String], _ k: Int) -> String {
        // Initialize an empty string to store the result
        var result: String = ""

        // Create a dictionary to store the frequency of each string
        var dict: [String: Int] = [:]
        
        // Count the frequency of each string
        for str in arr {
            dict[str, default: 0] += 1
        }
        
        // Filter out the strings that appear more than once and store them in a new array
        var newArr = arr.filter { dict[$0] == 1 }
        
        // Check if the new array has at least k distinct strings
        if newArr.count >= k {
            // If it does, return the kth distinct string
            result = newArr[k-1]
        }
        
        // If it doesn't, return an empty string
        return result
    }
}