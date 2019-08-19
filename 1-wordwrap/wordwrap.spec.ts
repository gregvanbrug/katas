import 'jasmine';
import { WordWrap } from './wordwrap';

describe('WordWrap Test', () => {
    let rap: WordWrap;

    beforeEach(() => {
        rap = new WordWrap();
    });

    it('should be defined', () => {
        expect(rap).toBeDefined();
    });

    it('should default to wrap at 10', () => {
        expect(rap.wrap('laid back laid back laid back laid back')).toEqual(
            'laid back\nlaid back\nlaid back\nlaid back'
        );

        expect(rap.wrap('Eazy is his name and the boy is comin straight outta Compton')).toEqual(
            'Eazy is\nhis name\nand the\nboy is\ncomin\nstraight\noutta\nCompton'
        );
    });

    it("shouldn't do anything if string is less than the column", () => {
        expect(rap.wrap('Ice-T')).toEqual('Ice-T');
    });
});
