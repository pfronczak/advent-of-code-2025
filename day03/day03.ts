export const day03_1 = (input: string[]): number => {
    const banks = input.map((line) => line.split('').map(Number));
    let sum = 0;
    for (let bank of banks) {
        let max1 = 0;
        let max1Idx = 0;
        for (let i = 0; i < bank.length - 1; i++) {
            if (bank[i] > max1) {
                max1 = bank[i];
                max1Idx = i;
            }
        }

        let max2 = 0;
        for (let i = max1Idx + 1; i < bank.length; i++) {
            if (bank[i] > max2) max2 = bank[i];
        }
        sum += max1 * 10 + max2;
    }
    return sum;
};

export const day03_2 = (input: string[]): number => {
    const banks = input.map((line) => line.split('').map(Number));
    let sum = 0;
    for (let bank of banks) {
        let joltage = [];
        let prevIdx = -1;
        for (let d = 1; d <= 12; d++) {
            let max = 0;
            let maxIdx = 0;
            for (let i = prevIdx + 1; i < bank.length - 12 + d; i++) {
                if (bank[i] > max) {
                    max = bank[i];
                    maxIdx = i;
                }
            }
            prevIdx = maxIdx;
            joltage.push(max);
        }
        sum += Number(joltage.join(''));
    }
    return sum;
};
