# Valid Anagram

**LeetCode Problem:** [Valid Anagram](https://leetcode.com/problems/valid-anagram/)

## Problem Statement
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### Example 1
```
Input: s = "anagram", t = "nagaram"
Output: true
```

### Example 2
```
Input: s = "rat", t = "car"
Output: false
```

## Constraints
- 1 <= s.length, t.length <= 5 * 10^4
- s and t consist of lowercase English letters.

## Approach
- If the lengths of s and t are not equal, return false.
- Use a hash map (object) to count the frequency of each character in s.
- Decrement the count for each character in t.
- If any count goes below zero or a character is missing, return false.
- If all counts are zero, return true.

---

## Solution
See `solution.ts` for the implementation in TypeScript.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the length of the strings.
- **Space Complexity:** O(1), since the alphabet size is fixed (26 lowercase letters).
