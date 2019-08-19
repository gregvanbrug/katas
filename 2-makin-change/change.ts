enum Coins {
    'DIMES' = 10,
    'NICKELS' = 5,
    'PENNIES' = 1,
    'QUARTERS' = 25
}

export class Change {
    private change: Number[] = [];

    constructor() {}

    private getValues = (obj: Object) =>
        Object.keys(obj)
            .filter(value => typeof obj[value as any] === 'number')
            .map(item => obj[item])
            .sort((a, b) => b - a);

    public make(cents: number) {
        let remainder = cents;

        const values = this.getValues(Coins);

        for (let index = 0; index < values.length; index++) {
            const value = values[index];
            const quantity = Math.floor(remainder / value);
            this.change.push(quantity);

            remainder = remainder % value;
        }

        return this.change.reverse();
    }
}
