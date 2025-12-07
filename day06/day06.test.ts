import { describe, test, expect } from 'vitest';
import { day06_1, day06_2 } from './day06';
import { inputFile } from '../utils/input';

describe('Day 06: Trash Compactor', () => {
    test('Part 1, example', () => {
        expect(day06_1(inputFile('day06/sample.txt', { trim: false }))).toBe(
            4277556
        );
    });

    test('Part 1, input', () => {
        expect(day06_1(inputFile('day06/input.txt', { trim: false }))).toBe(
            3968933219902
        );
    });

    test('Part 2, example', () => {
        expect(day06_2(inputFile('day06/sample.txt', { trim: false }))).toBe(
            3263827
        );
    });

    test('Part 2, input', () => {
        expect(day06_2(inputFile('day06/input.txt', { trim: false }))).toBe(
            6019576291014
        );
    });
});
