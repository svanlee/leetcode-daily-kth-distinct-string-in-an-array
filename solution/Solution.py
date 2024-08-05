# Solution in PY
from typing import List

class Solution:
    def kthDistinct(self, arr: List[str], k: int) -> str:
        # Count the frequency of each string
        count = {}
        for str in arr:
            count[str] = count.get(str, 0) + 1

        # Find the kth distinct string
        distinct_count = 0
        for str in arr:
            if count[str] == 1:
                distinct_count += 1
                if distinct_count == k:
                    return str

        # If there are fewer than k distinct strings, return an empty string
        return ""