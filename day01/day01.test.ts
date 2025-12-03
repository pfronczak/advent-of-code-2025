import { describe, test, expect } from 'vitest';
import { day1_1, day1_2 } from './day01';
import { inputFile } from '../utils/input';

describe('Day 1: Secret Entrance', () => {
    test('Part 1, example', () => {
        expect(day1_1(inputFile('day01/sample.txt'))).toBe(3);
    });

    test('Part 1, input', () => {
        expect(day1_1(inputFile('day01/input.txt'))).toBe(964);
    });

    test('Part 2, example', () => {
        expect(day1_2(inputFile('day01/sample.txt'))).toBe(6);
    });

    test('Part 2, tests', () => {
        expect(day1_2(['R1000'])).toBe(10);
        expect(day1_2(['L1000'])).toBe(10);
        expect(day1_2(['L150'])).toBe(2);
    });

    test('Part 2, input', () => {
        expect(day1_2(inputFile('day01/input.txt'))).toBe(5872);
    });
});
