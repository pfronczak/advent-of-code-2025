import { describe, test, expect } from 'vitest';
import { day09_1, day09_2 } from './day09';
import { inputFile } from '../utils/input';

describe('Day 09:', () => {
    test('Part 1, example', () => {
        expect(day09_1(inputFile('day09/sample.txt'))).toBe(50);
    });

    test('Part 1, input', () => {
        expect(day09_1(inputFile('day09/input.txt'))).toBe(4755278336);
    });

    test('Part 2, example', () => {
        expect(day09_2(inputFile('day09/sample.txt'))).toBe(0);
    });

    test('Part 2, input', () => {
        expect(day09_2(inputFile('day09/input.txt'))).toBe(0);
    });
});
