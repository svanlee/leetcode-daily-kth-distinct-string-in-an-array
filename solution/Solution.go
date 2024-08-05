// Solution in GO
func kthDistinct(arr []string, k int) string {
    // Create a map to store the frequency of each string
    freq := make(map[string]int)
    for _, s := range arr {
        // Increment the frequency of each string
        freq[s]++
    }
    
    // Create a slice to store the distinct strings in the order they appear
    distinct := make([]string, 0)
    for _, s := range arr {
        // Check if the string appears only once
        if freq[s] == 1 {
            // Add the string to the distinct slice
            distinct = append(distinct, s)
        }
    }
    
    // Check if k is within the bounds of the distinct slice
    if k <= len(distinct) {
        // Return the kth distinct string
        return distinct[k-1]
    } else {
        // Return an empty string if k is out of bounds
        return ""
    }
}