type Dist = {
    a: number;
    b: number;
    distance: number;
};

export const day08_1 = (input: string[], connections: number): number => {
    const points = input.map((line) => line.split(',').map(Number));
    const distances: Dist[] = [];
    for (let i = 0; i < input.length - 1; i++) {
        const [ax, ay, az] = points[i];
        for (let j = i + 1; j < input.length; j++) {
            const [bx, by, bz] = points[j];
            distances.push({
                a: i,
                b: j,
                distance: (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2,
            });
        }
    }
    distances.sort((a, b) => a.distance - b.distance);

    let circuitId = 0;
    const circuits = new Map<number, Set<number>>();
    const junctionCircuit = new Map<number, number>();
    for (let i = 0; i < connections; i++) {
        const minDist = distances.shift() as Dist;
        const circuitA = junctionCircuit.get(minDist.a);
        const circuitB = junctionCircuit.get(minDist.b);
        if (junctionCircuit.has(minDist.a)) {
            if (junctionCircuit.has(minDist.b)) {
                // merge circuits
                if (circuits.get(circuitA!) === circuits.get(circuitB!))
                    continue;

                circuits.get(circuitB!)?.forEach((j) => {
                    circuits.get(circuitA!)?.add(j);
                    junctionCircuit.set(j, circuitA!);
                });
            } else {
                // add B to A's circuit
                junctionCircuit.set(minDist.b, circuitA!);
                circuits.get(circuitA!)?.add(minDist.b);
            }
        } else {
            if (junctionCircuit.has(minDist.b)) {
                // add A to B's circuit
                junctionCircuit.set(minDist.a, circuitB!);
                circuits.get(circuitB!)?.add(minDist.a);
            } else {
                // new circuit
                circuitId++;
                circuits.set(circuitId, new Set([minDist.a, minDist.b]));
                junctionCircuit.set(minDist.a, circuitId);
                junctionCircuit.set(minDist.b, circuitId);
            }
        }
    }

    const maxCircuits = Array.from(circuits.values()).sort(
        (a, b) => b.size - a.size
    );

    return maxCircuits[0].size * maxCircuits[1].size * maxCircuits[2].size;
};

export const day08_2 = (input: string[]): number => {
    const points = input.map((line) => line.split(',').map(Number));
    const distances: Dist[] = [];
    for (let i = 0; i < input.length - 1; i++) {
        const [ax, ay, az] = points[i];
        for (let j = i + 1; j < input.length; j++) {
            const [bx, by, bz] = points[j];
            distances.push({
                a: i,
                b: j,
                distance: (ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2,
            });
        }
    }
    distances.sort((a, b) => a.distance - b.distance);

    let circuitId = 0;
    const circuits = new Map<number, Set<number>>();
    const junctionCircuit = new Map<number, number>();
    let lastPair;
    while (circuits.size !== 1 || junctionCircuit.size !== input.length) {
        const minDist = distances.shift() as Dist;
        lastPair = minDist;
        const circuitA = junctionCircuit.get(minDist.a);
        const circuitB = junctionCircuit.get(minDist.b);
        if (junctionCircuit.has(minDist.a)) {
            if (junctionCircuit.has(minDist.b)) {
                // merge circuits
                if (circuits.get(circuitA!) === circuits.get(circuitB!))
                    continue;

                circuits.get(circuitB!)?.forEach((j) => {
                    circuits.get(circuitA!)?.add(j);
                    junctionCircuit.set(j, circuitA!);
                });
                circuits.delete(circuitB!);
            } else {
                // add B to A's circuit
                junctionCircuit.set(minDist.b, circuitA!);
                circuits.get(circuitA!)?.add(minDist.b);
            }
        } else {
            if (junctionCircuit.has(minDist.b)) {
                // add A to B's circuit
                junctionCircuit.set(minDist.a, circuitB!);
                circuits.get(circuitB!)?.add(minDist.a);
            } else {
                // new circuit
                circuitId++;
                circuits.set(circuitId, new Set([minDist.a, minDist.b]));
                junctionCircuit.set(minDist.a, circuitId);
                junctionCircuit.set(minDist.b, circuitId);
            }
        }
    }

    return points[lastPair!.a][0] * points[lastPair!.b][0];
};
