'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
  /* процентная ставка, сумма первоначального взноса, сумма кредита, срок (дата окончания кредита)
  Платеж=S*(P+P/(((1+P)^n)-1))
  */
  // код для задачи №1 писать здесь
  Number.parseFloat(percent);

  if (percent === NaN) {
    return `Параметр 'percent' содержит неправильное значение ${percent}`;
  }

  Number.parseFloat(contribution);

  if (contribution === NaN) {
    return `Параметр 'contribution' содержит неправильное значение ${contribution}`;
  }

  Number.parseFloat(amount);

  if (amount === NaN) {
    return `Параметр 'amount' содержит неправильное значение ${amount}`;
  }

  let loanBody = amount - contribution; // тело кредита
  let numberOfMonths = date.getMonth() - new Date().getMonth(); // кол-во месяцев
  let percentMonth = percent / 12; // 1/12 процентной ставки P
  let payment =
    loanBody *
    (percentMonth + percentMonth / ((1 + percentMonth) ** numberOfMonths - 1)); // платеж
  let totalAmount = payment * numberOfMonths;

  return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь

  if (name === '' || name === undefined) {
    console.log(`Привет, мир! Меня зовут Аноним.`);

    return `Привет, мир! Меня зовут Аноним.`;
  } else {
    console.log(`Привет, мир! Меня зовут ${name}.`);

    return `Привет, мир! Меня зовут ${name}.`;
  }
}
