const { Shape, Circle, Triangle, Square } = require('./shapes');

describe('Shape Class', () => {
    test('should create a Shape instance', () => {
        const shape = new Shape();
        expect(shape).toBeInstanceOf(Shape);
    });

  
});

describe('Circle Class', () => {
    test('should create a Circle instance', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    });

    test('render method should return the expected SVG content with the specified color', () => {
        const circle = new Circle();
        circle.setColor('red');
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });


});

describe('Triangle Class', () => {
    test('should create a Triangle instance', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    });

    test('render method should return the expected SVG content with the specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
    });


});

describe('Square Class', () => {
    test('should create a Square instance', () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });

    test('render method should return the expected SVG content with the specified color', () => {
        const square = new Square();
        square.setColor('blue');
        expect(square.render()).toEqual('<rect x="56" y="56" width="188" height="188" fill="blue" />');
    });

  
});