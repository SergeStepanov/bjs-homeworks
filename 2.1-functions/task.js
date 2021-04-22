'user strict';

function getSolutions(a, b, c) {
  let D = b ** 2 - 4 * a * c;

  if (D < 0) {
    return {
      D,
      roots: [],
    };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return {
      D,
      roots: [x1],
    };
  } else if (D > 0) {
    let squareRootDiscriminant = Math.sqrt(D);
    let x1 = (-b + squareRootDiscriminant) / (2 * a);
    let x2 = (-b - squareRootDiscriminant) / (2 * a);
    return {
      D,
      roots: [x1, x2],
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);

  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);

  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.D < 0) {
    return console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.D === 0) {
    return console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
  } else if (result.D > 0) {
    return console.log(
      `Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`
    );
  }
}

function getAverageScore(data) {
  let newObj = {};

  if (data === undefined) {
    return { average: 0 };
  }

  for (let prop in data) {
    let value = getAverageMark(data[prop]);
    data[prop] = value;
    newObj = data;
  }

  newObj.average = getAverageMark(Object.values(newObj));

  return newObj;
}

function getAverageMark(marks) {
  let averageMark;
  let sum = 0;

  if (marks.length === 0) {
    return 0;
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    averageMark = sum / marks.length;
  }
  return averageMark;
}
