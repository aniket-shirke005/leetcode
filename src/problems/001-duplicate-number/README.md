
# Contains Duplicate

**LeetCode Problem:** [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

## Problem Statement
Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### Example 1
```
Input: nums = [1,2,3,1]
Output: true
```

### Example 2
```
Input: nums = [1,2,3,4]
Output: false
```

### Example 3
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

## Constraints
- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## Approach
- Use a `Set` to track seen numbers.
- Iterate through the array:
  - If a number is already in the set, return `true` (duplicate found).
  - Otherwise, add the number to the set.
- If no duplicates are found, return `false`.
---

## Solution
See `solution.ts` for the implementation in TypeScript.



## Complexity Analysis
- **Time Complexity:** O(n), where n is the number of elements in the array. We traverse the array once.
- **Space Complexity:** O(n), in the worst case, where all elements are unique and stored in the set.
