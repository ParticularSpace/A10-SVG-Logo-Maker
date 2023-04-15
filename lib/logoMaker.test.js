const {Triangle, Circle, Square} = require('./shapes');
const LogoMaker = require('./logoMaker');

describe('LogoMaker', () => {

    //need to write test for createShape
    describe('createShape', () => {
    //test each triangle circle square look at homework
        it('should return a Triangle', () => {
            const logoMaker = new LogoMaker('ABC', 'red', 'Triangle', 'blue');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Triangle);
        });

        it('should return a Circle', () => {
            const logoMaker = new LogoMaker('ABC', 'red', 'Circle', 'blue');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Circle);
        });

        it('should return a Square', () => {
            const logoMaker = new LogoMaker('ABC', 'red', 'Square', 'blue');
            const shape = logoMaker.createShape();
            expect(shape).toBeInstanceOf(Square);
        });
    });
    //need to write test for generateLogo should output string of code for svg

    
});