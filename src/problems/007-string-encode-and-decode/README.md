# Encode and Decode Strings

**LeetCode Problem:** [Encode and Decode Strings](https://neetcode.io/problems/string-encode-and-decode?list=neetcode150)

## Problem Statement
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Implement the `encode` and `decode` methods:
- `encode(strs: string[]): string`: Encodes a list of strings to a single string.
- `decode(s: string): string[]`: Decodes a single string to a list of strings.

### Example 1
```
Input: ["neet","code","love","you"]
Output: ["neet","code","love","you"]
Explanation: Encoded string could be "4#neet4#code4#love3#you"
```

### Example 2
```
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
Explanation: Encoded string could be "2#we3#say1#:3#yes"
```

## Constraints
- `0 <= strs.length < 100`
- `0 <= strs[i].length < 200`
- `strs[i]` contains any possible characters (including empty string and special characters)

## Approach
- Use length-prefix encoding: for each string, encode as `{length}#{string}`.
- To decode, parse the length, then extract the next `length` characters after the `#`.

---

## Solution
See `solution.ts` for the implementation in TypeScript.

## Complexity Analysis
- **Time Complexity:** O(N), where N is the total number of characters in all strings.
- **Space Complexity:** O(N), for the encoded string or decoded list.
