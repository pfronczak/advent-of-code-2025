export const day06_1 = (input: string[]): number => {
    let total = 0;
    let i = 0;
    const operations = input[input.length - 1];
    while (i < input[0].length) {
        if (operations[i] !== ' ') {
            let j = i + 1;
            while (operations[j] === ' ' && j < input[0].length) j++;
            let colResult = operations[i] === '+' ? 0 : 1;
            for (let k = 0; k < input.length - 1; k++) {
                const val = Number(input[k].substring(i, j).trim());
                if (operations[i] === '+') colResult += val;
                else colResult *= val;
            }
            total += colResult;
            i = j;
        }
    }
    return total;
};

export const day06_2 = (input: string[]): number => {
    let total = 0;
    const operations = input[input.length - 1];
    let vals: number[] = [];
    for (let i = input[0].length - 1; i >= 0; i--) {
        if (operations[i] !== ' ') {
            vals.push(colToNumber(input, i));

            total += vals.reduce(
                (acc, v) => (operations[i] === '+' ? acc + v : acc * v),
                operations[i] === '+' ? 0 : 1
            );
            vals = [];
            i--;
        } else {
            vals.push(colToNumber(input, i));
        }
    }
    return total;
};

function colToNumber(input: string[], i: number): number {
    let val = [];
    for (let j = 0; j < input.length - 1; j++) {
        val.push(input[j][i]);
    }
    return Number(val.join('').trim());
}
