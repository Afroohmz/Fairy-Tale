const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const shapes = ['circle', 'square', 'triangle'];
const colors = ['black', 'blue', 'green', 'red', 'yellow', 'white'];

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text (up to three characters):',
            validate: value => value.length <= 3 ? true : 'Please enter up to three characters.'
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Choose text color:',
            choices: colors
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: shapes
        },
        {
            type: 'list',
            name: 'shapeColor',
            message: 'Choose shape color:',
            choices: colors
        }
    ]);
}

async function createLogo() {
    try {
        const userInput = await promptUser();
        let shape;

        switch (userInput.shape) {
            case 'circle':
                shape = new Circle(userInput.shapeColor);
                break;
            case 'square':
                shape = new Square(userInput.shapeColor);
                break;
            case 'triangle':
                shape = new Triangle(userInput.shapeColor);
                break;
            default:
                break;
        }

        const svg = shape.render(userInput.text, userInput.textColor);
        const fullSVGContent = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svg}</svg>`;
        fs.writeFileSync('./examples/logo.svg', fullSVGContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

createLogo();
