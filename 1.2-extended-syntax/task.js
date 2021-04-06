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

  let len = marks.length;
  let averageMark = marks / len;

  if (len === 0) {
    averageMark = 0;
  }

  let sum = 0;

  for (let i = 0; i < len && len <= 5; i++) {
    sum += marks[i];
    averageMark = sum / len;
  }

  if (len > 5) {
    console.log(
      `Количество оценок больше 5. Счтитаеся ср. оценка только первых 5-ти оценок.`
    );
  }

  for (let i = 0; i < 5 && len > 5; i++) {
    marks.splice(5);
    sum += marks[i];
    averageMark = sum / 5;
  }

  return averageMark;
}

function askDrink(name, dateOfBirthday) {
  // код для задачи №3 писать здесь

  let today = new Date();
  let year = today.getFullYear();
  let yearBirthday = dateOfBirthday.getFullYear();
  let result = year - yearBirthday;

  if (result >= 18) {
    alert(`Не желаете ли олд-фэшн, ${name}?`);
  } else {
    alert(
      `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    );
  }

  return result;
}
