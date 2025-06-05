   

/**
 * Determines if the array contains any duplicates.
 * @param nums - Array of integers
 * @returns true if any value appears at least twice, false otherwise
 */
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();
    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}

// test cases
const testCases: [number[], boolean][] = [
    [[1, 2, 3, 1], true],
    [[1, 2, 3, 4], false],
    [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2], true],
    [[1, 2, 3, 4, 5], false],
    [[1, 2, 3, 4, 5, 1], true],
    [[1, 2, 3, 4, 5, 6], false],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], false],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1], true],
    [[-1, -2, -3, -1], true],
    [[-1, -2, -3, -4], false],
    [[0, 0, 0, 0], true],
    [[0, 1, 2, 3], false],
    [[100, 200, 300, 100], true],
    [[100, 200, 300, 400], false]]
;



export { containsDuplicate, testCases };
