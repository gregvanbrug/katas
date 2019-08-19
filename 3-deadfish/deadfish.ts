enum Instructions {
    'i' = 'increment',
    'd' = 'decrement',
    's' = 'square',
    'o' = 'output'
}

export class Deadfish {
    private results: Array<number> = [];

    private getInstructions = input => {
        const regex = /[idso]/g;
        return input.match(regex);
    };

    private jobs = {
        increment: value => value + 1,
        decrement: value => value - 1,
        square: value => value * value,
        output: value => {
            this.results.push(value);
            return 0;
        }
    }

    public swim(input){
        let value = 0;

        const instructions = this.getInstructions(input);

        instructions.forEach(step => {
            const job = Instructions[step];
            value = this.jobs[job](value);
        });

        return this.results;
    }
}
