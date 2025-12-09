export const day09_1 = (input: string[]): number => {
    const points = input.map((line) => line.split(',').map(Number));
    let maxArea = 0;
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const area =
                (Math.abs(points[i][0] - points[j][0]) + 1) *
                (Math.abs(points[i][1] - points[j][1]) + 1);
            if (area > maxArea) maxArea = area;
        }
    }
    return maxArea;
};

export const day09_2 = (input: string[]): number => {
    return 0;
};
