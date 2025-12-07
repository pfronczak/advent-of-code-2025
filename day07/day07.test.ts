import { describe, test, expect } from 'vitest';
import { day07_1, day07_2 } from './day07';
import { inputFile } from '../utils/input';

describe('Day 07:', () => {
    test('Part 1, example', () => {
        expect(day07_1(inputFile('day07/sample.txt'))).toBe(21);
    });

    test('Part 1, input', () => {
        expect(day07_1(inputFile('day07/input.txt'))).toBe(1594);
    });

    test('Part 2, example', () => {
        expect(day07_2(inputFile('day07/sample.txt'))).toBe(40);
    });

    test('Part 2, input', () => {
        expect(day07_2(inputFile('day07/input.txt'))).toBe(15650261281478);
    });
});
