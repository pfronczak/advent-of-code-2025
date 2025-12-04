export const day04_1 = (input: string[]): number => {
    let count = 0;
    const grid: string[][] = input.map((line) => line.split(''));
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            if (grid[y][x] !== '@') continue;

            let adjacent = 0;
            for (let dy = -1; dy <= 1; dy++) {
                for (let dx = -1; dx <= 1; dx++) {
                    if (dx === 0 && dy === 0) continue;
                    if (
                        x + dx < 0 ||
                        y + dy < 0 ||
                        x + dx >= grid[y].length ||
                        y + dy >= grid.length
                    )
                        continue;
                    if (grid[y + dy][x + dx] === '@') adjacent++;
                }
            }
            if (adjacent < 4) {
                count++;
            }
        }
    }
    return count;
};

export const day04_2 = (input: string[]): number => {
    let count = 0;
    const grid: string[][] = input.map((line) => line.split(''));
    let removed;
    do {
        removed = false;
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] !== '@') continue;

                let adjacent = 0;
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        if (dx === 0 && dy === 0) continue;
                        if (
                            x + dx < 0 ||
                            y + dy < 0 ||
                            x + dx >= grid[y].length ||
                            y + dy >= grid.length
                        )
                            continue;
                        if (grid[y + dy][x + dx] === '@') adjacent++;
                    }
                }
                if (adjacent < 4) {
                    count++;
                    removed = true;
                    grid[y][x] = '.';
                }
            }
        }
    } while (removed);
    return count;
};
