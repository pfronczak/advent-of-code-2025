import { readFileSync } from 'node:fs';

export const inputFile = (fileName: string) =>
    readFileSync(fileName, 'utf8')
        .split('\n')
        .map((line) => line.trim());