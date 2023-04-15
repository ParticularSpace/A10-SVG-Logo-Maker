const { isValidColor } = require('./color');

describe('color', () => {

    describe('isValidColor', () => {

        it('should return true for a hex color', () => {
            const input = '#ffffff';
            const result = isValidColor(input);
            expect(result).toEqual(true);
        });

        it('should return true for a color', () => {
            const input = 'red';
            const result = isValidColor(input);
            expect(result).toEqual(true);
        });

        it('should return false for anything else', () => {
            const input = 'not a color';
            const result = isValidColor(input);
            expect(result).toEqual(false);
        });
    });
});
