import { describe, test, expect } from 'vitest';
import { day02_1, day02_2 } from './day02';
import { inputFile } from '../utils/input';

describe('Day 02: Gift Shop', () => {
    test('Part 1, example', () => {
        expect(day02_1(inputFile('day02/sample.txt'))).toBe(1227775554);
    });

    test('Part 1, input', () => {
        expect(day02_1(inputFile('day02/input.txt'))).toBe(28846518423);
    });

    test('Part 2, example', () => {
        expect(day02_2(inputFile('day02/sample.txt'))).toBe(4174379265);
    });

    test('Part 2, input', () => {
        expect(day02_2(inputFile('day02/input.txt'))).toBe(31578210022);
    });
});
