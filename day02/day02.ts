export const day02_1 = (input: string[]): number => {
    const ranges = input[0]
        .split(',')
        .map((range) => range.split('-').map(Number));

    let sum = 0;
    for (let r of ranges) {
        for (let i = r[0]; i <= r[1]; i++) {
            const str = i.toString();
            if (str.length % 2) continue;
            if (
                str.substring(0, str.length / 2) ===
                str.substring(str.length / 2)
            ) {
                sum += i;
            }
        }
    }
    return sum;
};

export const day02_2 = (input: string[]): number => {
    const ranges = input[0]
        .split(',')
        .map((range) => range.split('-').map(Number));

    let sum = 0;
    for (let r of ranges) {
        for (let i = r[0]; i <= r[1]; i++) {
            const str = i.toString();
            for (let len = 1; len <= str.length / 2; len++) {
                if (len > 1 && str.length % len) continue;
                let allEqual = true;
                const first = str.substring(0, len);
                for (let j = len; j < str.length; j += len) {
                    if (str.substring(j, j + len) !== first) {
                        allEqual = false;
                        break;
                    }
                }
                if (allEqual) {
                    sum += i;
                    break;
                }
            }
        }
    }
    return sum;
};
