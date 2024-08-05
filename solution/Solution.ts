// Solution in TS
function kthDistinctt(arr: string[], k: number): string {
    // Create an object to store the frequency of each string
    const freqs = {};
    
    // Count the frequency of each string
    for (const s of arr) {
        freqs[s] = (freqs[s] ?? 0) + 1;
    }
    
    // Filter out the strings that appear only once
    const distincts = Object.keys(freqs).filter((s) => freqs[s] === 1);
    
    // Return the kth distinct string if it exists, or an empty string if k is larger than the number of distinct strings
    return k <= distincts.length ? distincts[k - 1] : "";
}