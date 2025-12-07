export const day07_1 = (input: string[]): number => {
    const beams = new Set<number>();
    let splits = 0;

    beams.add(input[0].indexOf('S'));
    for (let y = 1; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === '^' && beams.has(x)) {
                beams.delete(x);
                beams.add(x - 1);
                beams.add(x + 1);
                splits++;
            }
        }
    }

    return splits;
};

export const day07_2 = (input: string[]): number => {
    const beams = new Map<number, number>();
    beams.set(input[0].indexOf('S'), 1);
    for (let y = 1; y < input.length; y++) {
        for (let x = 0; x < input[y].length; x++) {
            if (input[y][x] === '^' && beams.has(x)) {
                beams.set(x - 1, (beams.get(x - 1) ?? 0) + beams.get(x)!);
                beams.set(x + 1, (beams.get(x + 1) ?? 0) + beams.get(x)!);
                beams.delete(x);
            }
        }
    }
    return Array.from(beams.values()).reduce((sum, v) => sum + v, 0);
};
