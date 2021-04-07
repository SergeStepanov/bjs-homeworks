'use strict';

function getResult(a, b, c) {
  // код для задачи №1 писать здесь 2x^2+4x-3=0
  let discriminant = b ** 2 - 4 * a * c;
  let x = [];
  let squareRootDiscriminant = Math.sqrt(discriminant); // Math.sqrt(number) расчет корня

  if (discriminant === 0) {
    x.push((-b - squareRootDiscriminant) / (2 * a));
  } else if (discriminant > 0) {
    x.push(
      (-b + squareRootDiscriminant) / (2 * a),
      (-b - squareRootDiscriminant) / (2 * a)
    );
  }

  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь
  let averageMark;
  let sum = 0;

  if (marks.length === 0) {
    return 0;
  }

  if (marks.length > 5) {
    marks.splice(5);
    console.log(
      `Количество оценок больше 5. Счтитаеся ср. оценка только первых 5-ти оценок.`
    );
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    averageMark = sum / marks.length;
  }
  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь
  let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
  if (age < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
  } else {
    return `Не желаете ли олд-фэшн, ${name}?`;
  }
  // return result;
}
