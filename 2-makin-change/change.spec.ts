import 'jasmine';
import { Change } from './change';

describe('Change Test', () => {
    let change: Change;

    beforeEach(() => {
        change = new Change();
    });

    it('should be defined', () => {
        expect(change).toBeDefined();
    });

    it('should give me two cents', () => {
        expect(change.make(2)).toEqual([2, 0, 0, 0]);
    });

    it('should give me my two dollars', () => {
        expect(change.make(200)).toEqual([0, 0, 0, 8]);
    });

    it('should make a bunch of cents', () => {
        expect(change.make(66)).toEqual([1, 1, 1, 2]);
    });
});
