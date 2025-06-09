/**
 * Returns indices of the two numbers such that they add up to target.
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Indices of the two numbers
 */
function twoSum(nums: number[], target: number): [number, number] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement)!, i];
        }
        map.set(nums[i], i);
    }
    throw new Error('No two sum solution');
}

// test cases
const testCases: [number[], number, [number, number]][] = [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[3, 2, 4], 6, [1, 2]],
    [[3, 3], 6, [0, 1]],
    [[1, 2, 3, 4, 5], 9, [3, 4]],
    [[-1, -2, -3, -4, -5], -8, [2, 4]],
];

function runTestCases() {
    for (const [nums, target, expected] of testCases) {
        const result = twoSum(nums, target);
        console.log(`twoSum(${JSON.stringify(nums)}, ${target}) = [${result}]; Expected: [${expected}]`);
    }
}

export { twoSum, testCases, runTestCases };
