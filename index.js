const inquirer = require('inquirer');
const fs = require('fs');

class Shape {
    constructor() {
        this.color = '';
        this.text = '';
        this.textColor = '';
    }

    setColor(color) {
        this.color = color;
    }

    setText(text, textColor) {
        this.text = text;
        this.textColor = textColor;
    }

    render() {
    
        return `<text x="150" y="100" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>`;
    }
}

class Circle extends Shape {
    render() {
        // This section returns a circle with the color input and positions the text within the circle.
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
                <text x="150" y="100" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>`;
    }
}

class Triangle extends Shape {
    render() {
        // This section will return a polygon with the color input and positions the text within the triangle.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
                <text x="150" y="120" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>`;
    }
}

class Square extends Shape {
    render() {
        // This section returns a rectangle with the color input and positions the text within the rectangle.
        return `<rect x="56" y="56" width="188" height="188" fill="${this.color}" />
                <text x="150" y="150" fill="${this.textColor}" font-size="50" text-anchor="middle">${this.text}</text>`;
    }
}


// This section of code defines a JavaScript object named shapeClasses. This object serves as a mapping between string keys (representing different shapes) and corresponding class constructors.
const shapeClasses = {
    circle: Circle,
    triangle: Triangle,
    square: Square,
};

async function getUserInput() {
    return inquirer.prompt([
        { type: 'input', name: 'text', message: 'Enter up to three characters for the text:', validate: (text) => text.length <= 3 },
        { type: 'input', name: 'textColor', message: 'Enter the text color (keyword or hex):', validate: (color) => Boolean(color) },
        { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['circle', 'triangle', 'square'] },
        { type: 'input', name: 'shapeColor', message: 'Enter the shape color (keyword or hex):', validate: (color) => Boolean(color) },
    ]);
}

function saveToFile(filename, content) {
    fs.writeFileSync(filename, content);
}

async function main() {
    try {
        const { shape, shapeColor, text, textColor } = await getUserInput();

        const ShapeClass = shapeClasses[shape];
        if (!ShapeClass) {
            console.error('Invalid shape choice');
            return;
        }

        const shapeInstance = new ShapeClass();
        shapeInstance.setColor(shapeColor);
        shapeInstance.setText(text, textColor);

        const svgContent = `<svg width="300" height="200">${shapeInstance.render()}</svg>`;

        saveToFile('logo.svg', svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error.message);
    }
}


async function promptUser() {
    await main();
}

promptUser();