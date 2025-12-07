import { readFileSync } from 'node:fs';

export const inputFile = (
    fileName: string,
    options: Record<string, any> = { trin: true }
) =>
    readFileSync(fileName, 'utf8')
        .split(/\r?\n/)
        .map((line) => (options.trim ? line.trim() : line));
