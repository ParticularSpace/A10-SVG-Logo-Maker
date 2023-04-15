//import shapes
const {Triangle, Circle, Square} = require('./shapes');

//test shapes class
describe('shapes', () => {

    //test each shape for 100% test coverage
    describe('Triangle', () => {
        it('should return a string of code for svg', () => {
            const triangle = new Triangle('red');
            const svg = triangle.render();
            expect(svg).toEqual(expect.any(String));
            expect(svg).toContain('fill="red"')
        });
    });

    describe('Circle', () => {
        it('should return a string of code for svg', () => {
            const circle = new Circle('red');
            const svg = circle.render();
            expect(svg).toEqual(expect.any(String));
        });
    });

    describe('Square', () => {
        it('should return a string of code for svg', () => {
            const square = new Square('red');
            const svg = square.render();
            expect(svg).toEqual(expect.any(String));
        });
    });

});