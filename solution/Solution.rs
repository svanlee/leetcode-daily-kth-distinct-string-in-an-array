impl Solution {
    pub fn kth_distinct(arr: Vec<String>, k: i32) -> String {
        // Create a hashmap to count the frequency of each string in the array
        let mut map: std::collections::HashMap<&String, i32> = std::collections::HashMap::new();
        for s in arr.iter() {
            // Increment the count for each string
            *map.entry(s).or_insert(0) += 1;
        }

        // Initialize a counter to keep track of the k-th distinct string
        let mut counter = 0;
        for s in arr.iter() {
            // Check if the string appears only once
            match map.get(&s) {
                Some(1) => {
                    // Increment the counter
                    counter += 1;
                    // If this is the k-th distinct string, return it
                    if counter == k {
                        return s.to_string();
                    }
                },
                _ => {} // Do nothing if the string appears more than once
            }
        }
        // If k is out of bounds, return an empty string
        String::new()
    }
}