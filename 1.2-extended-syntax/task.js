function getResult(a, b, c) {
  'use strict';

  // код для задачи №1 писать здесь 2x^2+4x-3=0
  let D = b ** 2 - 4 * a * c;
  let x = [];
  let d = Math.sqrt(D); // Math.sqrt(D) расчет корня

  if (D < 0) {
    x = [];
  } else if (D === 0) {
    x.push((-b - d) / (2 * a));
  } else if (D > 0) {
    x.push((-b + d) / (2 * a), (-b - d) / (2 * a));
  }

  return x;
}

function getAverageMark(marks) {
  // код для задачи №2 писать здесь

  let averageMark = marks / marks.length;

  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length <= 5) {
  }
  // console.log(
  //   `Количество оценок больше 5. Счтитаеся ср. оценка только первых 5-ти оценок.`
  // );

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь

  let newDate = {};

  function getFullYear() {}

  // return result;
}
