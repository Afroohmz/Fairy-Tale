class Shape {
    constructor(color) {
        this.color = color;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        throw new Error('Render method must be implemented in subclass.');
    }
}

class Circle extends Shape {
    render(text, textColor) {
        return `<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="${this.color}"/><text x="150" y="120" font-size="20" fill="${textColor}">${text}</text></svg>`;
    }
}

class Square extends Shape {
    render(text, textColor) {
        return `<svg width="300" height="200"><rect x="100" y="50" width="100" height="100" fill="${this.color}"/><text x="150" y="120" font-size="20" fill="${textColor}">${text}</text></svg>`;
    }
}

class Triangle extends Shape {
    render(text, textColor) {
        return `<svg width="300" height="200"><polygon points="150,50 250,150 50,150" fill="${this.color}"/><text x="150" y="120" font-size="20" fill="${textColor}">${text}</text></svg>`;
    }
}

module.exports = { Circle, Square, Triangle };
