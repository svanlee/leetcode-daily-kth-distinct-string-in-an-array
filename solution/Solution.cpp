// Solution in CPP
class Solution
{
public:
    string kthDistinct(vector<string> &arr, int k)
    {
        // Count the frequency of each string
        unordered_map<string, int> count;
        for (const auto &str : arr)
        {
            count[str]++;
        }

        // Find the kth distinct string
        int distinctCount = 0;
        for (const auto &str : arr)
        {
            if (count[str] == 1)
            {
                distinctCount++;
                if (distinctCount == k)
                {
                    return str;
                }
            }
        }

        // If there are fewer than k distinct strings, return an empty string
        return "";
    }
};