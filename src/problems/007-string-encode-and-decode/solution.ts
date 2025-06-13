/**
 * Encodes a list of strings to a single string.
 * @param strs - List of strings
 * @returns Encoded string
 */
function encode(strs: string[]): string {
    return strs.map(s => `${s.length}#${s}`).join('');
}

/**
 * Decodes a single string to a list of strings.
 * @param s - Encoded string
 * @returns Decoded list of strings
 */
function decode(s: string): string[] {
    const res: string[] = [];
    let i = 0;
    while (i < s.length) {
        let j = i;
        while (s[j] !== '#') j++;
        const len = parseInt(s.slice(i, j));
        res.push(s.slice(j + 1, j + 1 + len));
        i = j + 1 + len;
    }
    return res;
}

// test cases
const testCases: [string[], string[], string][] = [
    [["neet","code","love","you"], ["neet","code","love","you"], "4#neet4#code4#love3#you"],
    [["we","say",":","yes"], ["we","say",":","yes"], "2#we3#say1#:3#yes"],
    [[""], [""], "0#"],
    [[], [], ""],
    [["#","##","###"], ["#","##","###"], "1##2###3####"],
];

function runTestCases() {
    for (const [input, expected, encoded] of testCases) {
        const enc = encode(input);
        const dec = decode(enc);
        console.log(`encode(${JSON.stringify(input)}) = ${enc}; decode = ${JSON.stringify(dec)}; Expected: ${JSON.stringify(expected)}`);
    }
}

export { encode, decode, testCases, runTestCases };
