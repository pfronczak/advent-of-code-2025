import { describe, test, expect } from 'vitest';
import { day10_1, day10_2 } from './day10';
import { inputFile } from '../utils/input';

describe('Day 10:', () => {
    test('Part 1, example', () => {
        expect(day10_1(inputFile('day10/sample.txt'))).toBe(7);
    });

    test('Part 1, input', () => {
        expect(day10_1(inputFile('day10/input.txt'))).toBe(550);
    });

    test('Part 2, example', () => {
        expect(day10_2(inputFile('day10/sample.txt'))).toBe(33);
    });

    test('Part 2, input', () => {
        expect(day10_2(inputFile('day10/input.txt'))).toBe(0);
    });
});
