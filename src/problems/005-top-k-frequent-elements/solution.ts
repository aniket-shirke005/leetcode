/**
 * Returns the k most frequent elements in the array.
 * @param nums - Array of integers
 * @param k - Number of top frequent elements to return
 * @returns Array of k most frequent elements
 */
function topKFrequent(nums: number[], k: number): number[] {
    const freq: Record<number, number> = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    // Bucket sort: index is frequency, value is array of numbers
    const buckets: number[][] = Array(nums.length + 1).fill(null).map(() => []);
    for (const num in freq) {
        buckets[freq[num]].push(Number(num));
    }
    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }
    return result;
}

// test cases
const testCases: [number[], number, number[]][] = [
    [[1,1,1,2,2,3], 2, [1,2]],
    [[1], 1, [1]],
    [[4,1,-1,2,-1,2,3], 2, [-1,2]],
    [[5,3,1,1,1,3,73,1], 2, [1,3]],
    [[1,2,3,4,5,6,7,8,9,10], 1, [1]],
];

function runTestCases() {
    for (const [nums, k, expected] of testCases) {
        const result = topKFrequent(nums, k);
        console.log(`topKFrequent(${JSON.stringify(nums)}, ${k}) = [${result}]; Expected: [${expected}]`);
    }
}

export { topKFrequent, testCases, runTestCases };
