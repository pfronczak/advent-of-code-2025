import { mod } from '../utils/math';

export const day1_1 = (input: string[]): number => {
    let countZeroes = 0;
    let current = 50;

    for (const line of input) {
        const dir = line.at(0);
        const dist = Number(line.substring(1));
        current = (current + dist * (dir === 'L' ? -1 : 1) + 100) % 100;
        if (current === 0) countZeroes++;
    }
    return countZeroes;
};

export const day1_2 = (input: string[]): number => {
    let countZeroes = 0;
    let current = 50;

    for (const line of input) {
        const dir = line.at(0);
        const dist = Number(line.substring(1));

        const newPos = current + dist * (dir === 'L' ? -1 : 1);
        countZeroes += Math.abs(Math.floor(newPos / 100));
        if (current === 0 && newPos < 0) countZeroes--;
        current = mod(newPos, 100);
        if (current === 0 && newPos <= 0) countZeroes++;
    }
    return countZeroes;
};
