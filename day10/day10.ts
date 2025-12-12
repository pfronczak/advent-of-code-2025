type Machine = {
    lights?: string;
    buttons: number[][];
    joltage?: number[];
};

export const day10_1 = (input: string[]): number => {
    const machines: Machine[] = input.map((line) => {
        const parts = line.split(' ');
        return {
            lights: parts[0].substring(1, parts[0].length - 1),
            buttons: parts.slice(1, -1).map((button) =>
                button
                    .substring(1, button.length - 1)
                    .split(',')
                    .map(Number)
            ),
        };
    });
    return machines.reduce((sum, machine) => sum + minButtons(machine), 0);
};

function minButtons(
    machine: Machine,
    buttonIdx: number = -1,
    pressed: boolean = false,
    currLights: string[] = Array(machine.lights!.length).fill('.'),
    buttonsPressed: number = 0,
    minSoFar = Number.POSITIVE_INFINITY
): number {
    if (buttonsPressed >= minSoFar || buttonIdx >= machine.buttons.length) {
        return minSoFar;
    }

    if (buttonIdx >= 0 && pressed) {
        for (let i of machine.buttons[buttonIdx]) {
            currLights[i] = currLights[i] === '.' ? '#' : '.';
        }
        if (currLights.join('') === machine.lights) {
            minSoFar = buttonsPressed;
        }
    }

    return Math.min(
        minSoFar,
        minButtons(
            machine,
            buttonIdx + 1,
            false,
            [...currLights],
            buttonsPressed,
            minSoFar
        ),
        minButtons(
            machine,
            buttonIdx + 1,
            true,
            [...currLights],
            buttonsPressed + 1,
            minSoFar
        )
    );
}

export const day10_2 = (input: string[]): number => {
    const machines: Machine[] = input.map((line) => {
        const parts = line.split(' ');
        return {
            joltage: parts
                .at(-1)!
                .substring(1, parts.at(-1)!.length - 1)
                .split(',')
                .map(Number),
            buttons: parts.slice(1, -1).map((button) =>
                button
                    .substring(1, button.length - 1)
                    .split(',')
                    .map(Number)
            ),
        };
    });

    return machines.reduce((sum, machine, idx) => {
        console.log(`${idx + 1} / ${machines.length}...`);
        return sum + minButtons2(machine);
    }, 0);
};

function minButtons2(
    machine: Machine,
    buttonIdx: number = 0,
    presses: number = 0,
    currJoltage: number[] = Array(machine.joltage!.length).fill(0),
    buttonsPressed: number = 0,
    minSoFar = Number.POSITIVE_INFINITY
): number {
    if (
        buttonsPressed >= minSoFar ||
        buttonIdx >= machine.buttons.length ||
        currJoltage.some((v, i) => v > machine.joltage![i])
    ) {
        return minSoFar;
    }

    if (presses > 0) {
        for (let i of machine.buttons[buttonIdx]) {
            currJoltage[i]++;
        }
        if (currJoltage.join(',') === machine.joltage!.join(',')) {
            minSoFar = buttonsPressed;
        }
    }

    return Math.min(
        minSoFar,
        minButtons2(
            machine,
            buttonIdx + 1,
            0,
            [...currJoltage],
            buttonsPressed,
            minSoFar
        ),
        minButtons2(
            machine,
            buttonIdx,
            presses + 1,
            [...currJoltage],
            buttonsPressed + 1,
            minSoFar
        )
    );
}
