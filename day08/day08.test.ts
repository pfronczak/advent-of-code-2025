import { describe, test, expect } from 'vitest';
import { day08_1, day08_2 } from './day08';
import { inputFile } from '../utils/input';

describe('Day 08:', () => {
    test('Part 1, example', () => {
        expect(day08_1(inputFile('day08/sample.txt'), 10)).toBe(40);
    });

    test('Part 1, input', () => {
        expect(day08_1(inputFile('day08/input.txt'), 1000)).toBe(50760);
    });

    test('Part 2, example', () => {
        expect(day08_2(inputFile('day08/sample.txt'))).toBe(25272);
    });

    test('Part 2, input', () => {
        expect(day08_2(inputFile('day08/input.txt'))).toBe(3206508875);
    });
});
