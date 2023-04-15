const {Triangle, Circle, Square} = require('./shapes');
const LogoMaker = require('./logoMaker');

describe('LogoMaker', () => {

    //test for createShape that looks at the shape and returns the correct shape class
    describe('createShape', () => {
   
        it('should return a Triangle', () => {
            const logoMaker = new LogoMaker('SAM', 'red', 'Triangle', 'black');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Triangle);
        });

        it('should return a Circle', () => {
            const logoMaker = new LogoMaker('SAY', 'yellow', 'Circle', 'blue');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Circle);
        });

        it('should return a Square', () => {
            const logoMaker = new LogoMaker('HII', 'blue', 'Square', 'blue');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Square);
        });
    });
    //test for generateLogo that returns a string of code for svg
    describe('generateLogo', () => {

        it('should return a string of code for svg', () => {
            const logoMaker = new LogoMaker('PEN', 'red', 'Triangle', 'blue');
            const svg = logoMaker.generateLogo();
            expect(svg).toEqual(expect.any(String));
        });
    });

});