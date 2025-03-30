// Base Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }

    paint() {
        console.log(`Painting with color ${this.color}`);
    }

    area() {
        throw new Error('The area method must be implemented in the subclass');
    }

    getDescription() {
        return `A shape with color ${this.color}`;
    }
}

// Rectangle class that extends Shape
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);  // Call the parent class constructor to set the color
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    getDescription() {
        return `A rectangle with width ${this.width}, height ${this.height}, and color ${this.color}`;
    }
}

// Circle class that extends Shape
class Circle extends Shape {
    constructor(radius, color) {
        super(color);  // Call the parent class constructor to set the color
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        return `A circle with radius ${this.radius} and color ${this.color}`;
    }
}

// Example usage
const circle = new Circle(20, "red");
console.log(circle.area());
console.log(circle.getDescription());
circle.paint();

const rectangle = new Rectangle(10, 5, "blue");
console.log(rectangle.area());
console.log(rectangle.getDescription());
rectangle.paint();