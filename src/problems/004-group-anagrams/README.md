# Group Anagrams

**LeetCode Problem:** [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## Problem Statement
Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

### Example 1
```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
```

### Example 2
```
Input: strs = [""]
Output: [[""]]
```

### Example 3
```
Input: strs = ["a"]
Output: [["a"]]
```

## Constraints
- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] consists of lowercase English letters.

## Approach
- Use a hash map to group words by their sorted character string (the anagram signature).
- For each word, sort its characters and use the sorted string as a key in the map.
- Append the word to the corresponding group.
- Return the grouped anagrams as an array of arrays.

---

## Solution
See `solution.ts` for the implementation in TypeScript.

## Complexity Analysis
- **Time Complexity:** O(N * K log K), where N is the number of strings and K is the maximum string length (for sorting each string).
- **Space Complexity:** O(N * K), for storing the grouped anagrams.
