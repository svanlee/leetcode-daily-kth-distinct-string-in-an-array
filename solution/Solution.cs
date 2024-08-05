// Solution in CS
public class Solution
{
    public string KthDistinct(string[] arr, int k)
    {
        // Create a dictionary to store the frequency of each string
        var hs = new Dictionary<string, int>();

        // Count the frequency of each string
        foreach (var c in arr)
        {
            if (!hs.TryAdd(c, 1))
                hs[c]++;
        }

        // If there are fewer than k distinct strings, return an empty string
        if (hs.Where(x => x.Value == 1).Count() < k)
            return "";

        // Initialize a counter for distinct strings
        int j = 0;

        // Iterate through the array again to find the kth distinct string
        foreach (var c in arr)
        {
            if (hs[c] == 1)
            {
                j++; // Increment the counter for distinct strings
                if (j == k)
                    return c; // Return the kth distinct string
            }
        }

        // If no kth distinct string is found, return an empty string
        return "";
    }
}