'use strict';

//String.prototype.isPalindrome - для задачи №1
String.prototype.isPalindrome = function () {
  let originStr = this.toLowerCase().split('').join('').replace(/\s/g, '');
  let reversStr = this.toLowerCase()
    .split('')
    .reverse()
    .join('')
    .replace(/\s/g, '');

  if (originStr === reversStr) {
    return true;
  }
  return false;
};

function getAverageMark(marks) {
  // код для задачи №2 писать здесь

  let average;
  let sum = 0;

  if (marks.length === 0) {
    return 0;
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    average = sum / marks.length;
  }

  let roundedAverage = Math.round(average);

  return roundedAverage;
}

function checkBirthday(birthday) {
  // код для задачи №3 писать здесь
  // return verdict
}
