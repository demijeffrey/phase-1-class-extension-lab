// Your code here
class Polygon {
    constructor(array) {
        this.sides = array
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
        return this.sides.reduce((num1, num2) => num1 + num2, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        if(a + b < c || a + c < b || b + c < a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let a = this.sides[0]
        let b = this.sides[1]
        let c = this.sides[2]
        let d = this.sides[3]
        if(a === b || a === c || a === d) {
            return true
        } else {
            return false
        }
    }
    get area() {
        return this.sides[0] * this.sides[1]
    }
}