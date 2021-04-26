'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  /* процентная ставка, сумма первоначального взноса, сумма кредита, срок (дата окончания кредита)
  Платеж=S*(P+P/(((1+P)^n)-1))
  */
  // код для задачи №1 писать здесь

  if (typeof percent === undefined || percent <= 0) {
    return `Параметр 'percent' содержит неправильное значение ${percent}`;
  }

  if (typeof contribution === undefined || contribution <= 0) {
    return `Параметр 'contribution' содержит неправильное значение ${contribution}`;
  }

  if (typeof amount === undefined || amount <= 0) {
    return `Параметр 'amount' содержит неправильное значение ${amount}`;
  }

  let numPercent = Number(percent);
  let numContribution = Number(contribution);
  let numAmount = Number(amount);
  let nowDate = new Date();

  // if (date.getTime() <= nowDate.getTime()) {
  //   return `Дата введена не корректно`;
  // }

  let loanBody = numAmount - numContribution; // тело кредита
  let numberOfMonths =
    date.getMonth() -
    nowDate.getMonth() +
    12 * (date.getFullYear() - nowDate.getFullYear()); // кол-во месяцев
  let percentMonth = numPercent / 100 / 12; // 1/12 процентной ставки P
  let payment =
    loanBody *
    (percentMonth + percentMonth / ((1 + percentMonth) ** numberOfMonths - 1)); // платеж
  let totalAmount = payment * numberOfMonths;

  return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  let greeting = `Привет, мир! Меня зовут ${name}.`;

  if (name === undefined || name === '') {
    name = 'Аноним';
  }

  console.log(greeting);

  return greeting;
}
