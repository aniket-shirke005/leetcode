/**
 * Groups anagrams together from an array of strings.
 * @param strs - Array of strings
 * @returns Array of grouped anagrams
 */
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key)!.push(word);
    }
    return Array.from(map.values());
}

// test cases
const testCases: [string[], string[][]][] = [
    [["eat","tea","tan","ate","nat","bat"], [["eat","tea","ate"],["tan","nat"],["bat"]]],
    [[""], [[""]]],
    [["a"], [["a"]]],
    [["abc","bca","cab","bac","acb","cba"], [["abc","bca","cab","bac","acb","cba"]]],
    [["abc","def","ghi"], [["abc"],["def"],["ghi"]]],
];

function runTestCases() {
    for (const [input, expected] of testCases) {
        const result = groupAnagrams(input);
        console.log(`groupAnagrams(${JSON.stringify(input)}) = ${JSON.stringify(result)}; Expected: ${JSON.stringify(expected)}`);
    }
}

export { groupAnagrams, testCases, runTestCases };
