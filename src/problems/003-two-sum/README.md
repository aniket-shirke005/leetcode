# Two Sum

**LeetCode Problem:** [Two Sum](https://leetcode.com/problems/two-sum/)

## Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

## Approach
- Use a hash map to store the value and its index as you iterate through the array.
- For each element, check if `target - nums[i]` exists in the map.
- If it does, return the indices.
- Otherwise, add the current number and its index to the map.

---

## Solution
See `solution.ts` for the implementation in TypeScript.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the number of elements in the array.
- **Space Complexity:** O(n), for the hash map.
