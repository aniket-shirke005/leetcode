# Top K Frequent Elements

**LeetCode Problem:** [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

## Problem Statement
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

### Example 1
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

### Example 2
```
Input: nums = [1], k = 1
Output: [1]
```

## Constraints
- 1 <= nums.length <= 10^5
- -10^4 <= nums[i] <= 10^4
- k is in the range [1, the number of unique elements in the array]
- It is guaranteed that the answer is unique

## Approach
- Count the frequency of each element using a hash map.
- Use a min-heap (priority queue) of size k to keep track of the top k frequent elements, or bucket sort by frequency.
- Return the k elements with the highest frequency.

---

## Solution
See `solution.ts` for the implementation in TypeScript.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the length of nums (using bucket sort approach).
- **Space Complexity:** O(n), for the hash map and buckets.
