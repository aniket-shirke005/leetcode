/**
 * Determines if t is an anagram of s.
 * @param s - First string
 * @param t - Second string
 * @returns true if t is an anagram of s, false otherwise
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const count: Record<string, number> = {};
    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }
    for (const char of t) {
        if (!count[char]) return false;
        count[char]--;
    }
    return true;
}

// test cases
const testCases: [string, string, boolean][] = [
    ["anagram", "nagaram", true],
    ["rat", "car", false],
    ["a", "a", true],
    ["a", "b", false],
    ["", "", true],
    ["ab", "ba", true],
    ["abc", "cba", true],
    ["abc", "ab", false],
    ["aabbcc", "abcabc", true],
    ["aabbcc", "aabbc", false],
];


function runTestCases() {
    for (const [s, t, expected] of testCases) {
        const result = isAnagram(s, t);
        console.log(`isAnagram(${JSON.stringify(s)}, ${JSON.stringify(t)}) = ${result}; Expected: ${expected}`);
    }
}


export { isAnagram, testCases, runTestCases };
