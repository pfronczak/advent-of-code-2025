import { describe, test, expect } from 'vitest';
import { dayXX_1, dayXX_2 } from './dayXX';
import { inputFile } from '../utils/input';

describe('Day XX:', () => {
    test('Part 1, example', () => {
        expect(dayXX_1(inputFile('dayXX/sample.txt'))).toBe(0);
    });

    test('Part 1, input', () => {
        expect(dayXX_1(inputFile('dayXX/input.txt'))).toBe(0);
    });

    test('Part 2, example', () => {
        expect(dayXX_2(inputFile('dayXX/sample.txt'))).toBe(0);
    });

    test('Part 2, input', () => {
        expect(dayXX_2(inputFile('dayXX/input.txt'))).toBe(0);
    });
});
