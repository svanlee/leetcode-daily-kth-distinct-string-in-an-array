// Solution in JAVA
class Solution {
    public String kthDistinct(String[] arr, int k) {
        // Count the frequency of each string
        Map<String, Integer> count = new HashMap<>();
        for (String str : arr) {
            count.put(str, count.getOrDefault(str, 0) + 1);
        }

        // Find the kth distinct string
        int distinctCount = 0;
        for (String str : arr) {
            if (count.get(str) == 1) {
                distinctCount++;
                if (distinctCount == k) {
                    return str;
                }
            }
        }

        // If there are fewer than k distinct strings, return an empty string
        return "";
    }
}