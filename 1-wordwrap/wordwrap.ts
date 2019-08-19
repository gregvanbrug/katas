export class WordWrap {
    constructor() {}

    public wrap(text: string, column: number = 10) {
        let currentPosition = 0;

        // About how many times should this break?
        // Number could be slightly off depending on how close to the end of the column the last space is.
        const breaks = Math.floor(text.length / column);

        // If the text is shorter than the desired column, we're done here.
        if (breaks < 1) return text;

        // Where's the last space?
        const lastSpace = /\s(?=[^\s]*$)/gi;

        do {
            const END_OF_LINE = currentPosition + column;

            const line = text.substr(currentPosition, column).replace(lastSpace, '\n');
            text = text.substr(0, currentPosition) + line + text.substr(END_OF_LINE, text.length);

            currentPosition = text.lastIndexOf('\n') + 1;
        } while (currentPosition + column < text.length);

        return text;
    }
}
