const { Circle, Square, Triangle } = require('./shapes');

test('Circle render method', () => {
    const circle = new Circle('red');
    expect(circle.render('ABC', 'white')).toEqual('<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="red"/><text x="150" y="120" font-size="20" fill="white">ABC</text></svg>');
});

test('Square render method', () => {
    const square = new Square('blue');
    expect(square.render('XYZ', 'black')).toEqual('<svg width="300" height="200"><rect x="100" y="50" width="100" height="100" fill="blue"/><text x="150" y="120" font-size="20" fill="black">XYZ</text></svg>');
});

test('Triangle render method', () => {
    const triangle = new Triangle('green');
    expect(triangle.render('DEF', 'yellow')).toEqual('<svg width="300" height="200"><polygon points="150,50 250,150 50,150" fill="green"/><text x="150" y="120" font-size="20" fill="yellow">DEF</text></svg>');
});
