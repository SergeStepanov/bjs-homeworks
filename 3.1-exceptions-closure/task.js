'use strict';

function parseCount(numParse) {
  let parseNum = Number.parseInt(numParse, 10);
  if (isNaN(parseNum)) {
    throw new Error('Невалидное значение');
  }
  return parseNum;
}

function validateCount(count) {
  try {
    let result = parseCount(count);
    return result;
  } catch (err) {
    return err;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (
      this.a + this.b < this.c ||
      this.a + this.c < this.b ||
      this.c + this.b < this.a
    ) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  getPerimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  getArea() {
    let semiPerimeter = this.getPerimeter() / 2;
    let areaOfaTriangle = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c)
    );
    let result = +areaOfaTriangle.toFixed(3);

    return result;
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    return {
      getArea: function () {
        return 'Ошибка! Треугольник не существует';
      },

      getPerimeter: function () {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}
