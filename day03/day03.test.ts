import { describe, test, expect } from 'vitest';
import { day03_1, day03_2 } from './day03';
import { inputFile } from '../utils/input';

describe('Day 03:', () => {
    test('Part 1, example', () => {
        expect(day03_1(inputFile('day03/sample.txt'))).toBe(357);
    });

    test('Part 1, input', () => {
        expect(day03_1(inputFile('day03/input.txt'))).toBe(17179);
    });

    test('Part 2, example', () => {
        expect(day03_2(inputFile('day03/sample.txt'))).toBe(3121910778619);
    });

    test('Part 2, input', () => {
        expect(day03_2(inputFile('day03/input.txt'))).toBe(170025781683941);
    });
});
