import { describe, test, expect } from 'vitest';
import { day04_1, day04_2 } from './day04';
import { inputFile } from '../utils/input';

describe('Day 04: Printing Department', () => {
    test('Part 1, example', () => {
        expect(day04_1(inputFile('day04/sample.txt'))).toBe(13);
    });

    test('Part 1, input', () => {
        expect(day04_1(inputFile('day04/input.txt'))).toBe(1457);
    });

    test('Part 2, example', () => {
        expect(day04_2(inputFile('day04/sample.txt'))).toBe(43);
    });

    test('Part 2, input', () => {
        expect(day04_2(inputFile('day04/input.txt'))).toBe(8310);
    });
});
