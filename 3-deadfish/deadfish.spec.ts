import 'jasmine';
import { Deadfish } from './deadfish';

describe('Deadfish Test <x{{{><', () => {
    let xfish: Deadfish;

    beforeEach(() => {
        xfish = new Deadfish();
    });

    it('should increment', () => {
        expect(xfish.swim('iio')).toEqual([2]);
    });

    it('should decrement', () => {
        expect(xfish.swim('ddo')).toEqual([-2]);
    });

    it('should square', () => {
        expect(xfish.swim('iiso')).toEqual([4]);
    });

    it('should output multiple values', () => {
        expect(xfish.swim('iioddo')).toEqual([2, -2]);
    });

    it('should ignore invalid instructions', () => {
        expect(xfish.swim('dead')).toEqual([]);
    });
});
