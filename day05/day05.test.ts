import { describe, test, expect } from 'vitest';
import { day05_1, day05_2 } from './day05';
import { inputFile } from '../utils/input';

describe('Day 05: Cafeteria', () => {
    test('Part 1, example', () => {
        expect(day05_1(inputFile('day05/sample.txt'))).toBe(3);
    });

    test('Part 1, input', () => {
        expect(day05_1(inputFile('day05/input.txt'))).toBe(896);
    });

    test('Part 2, example', () => {
        expect(day05_2(inputFile('day05/sample.txt'))).toBe(14);
    });

    test('Part 2, input', () => {
        expect(day05_2(inputFile('day05/input.txt'))).toBe(346240317247002);
    });
});
