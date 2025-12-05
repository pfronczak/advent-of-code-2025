export const day05_1 = (input: string[]): number => {
    const ranges: number[][] = [];
    let ingrStart = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '') {
            ingrStart = i + 1;
            break;
        }
        ranges.push(input[i].split('-').map(Number));
    }

    let count = 0;
    for (let i = ingrStart; i < input.length; i++) {
        const item = Number(input[i]);
        for (let range of ranges) {
            if (item >= range[0] && item <= range[1]) {
                count++;
                break;
            }
        }
    }
    return count;
};

export const day05_2 = (input: string[]): number => {
    const ranges: number[][] = [];
    for (let line of input) {
        if (line === '') break;
        ranges.push(line.split('-').map(Number));
    }
    ranges.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [];
    for (let range of ranges) {
        if (merged.length === 0) {
            merged.push(range);
            continue;
        }
        const top = merged[merged.length - 1];
        if (range[0] > top[1] + 1) {
            merged.push(range);
        } else {
            top[1] = Math.max(top[1], range[1]);
        }
    }

    return merged.reduce((acc, range) => (acc += range[1] - range[0] + 1), 0);
};
