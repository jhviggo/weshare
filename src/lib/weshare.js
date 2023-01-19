/**
 * Calculates the total expenses for each person and the expenses for the non-excluded people.
 * The amounts are in øre, i.e. DKK/100
 * ```javascript
 * { 'payments': { 'viggo': 5000 },  'exclPayments': { 'jannik': 1000 } }
 * ```
 * 
 * @param {Array<{user: string, curreny: number, exclude: Array<string>, amount: number}>} expenses An Array of expenses
 * @returns {{payments: {string: number}, exclPayments: {string: number}}} An Object of payed and excluding expenses
 */
function convertListToPayments(expenses, people) {
  if (!people.length) throw new Error('List of people must be greater than 1');

  const simpleExpenses = expenses.filter(e => !e.excludePeople.length);
  const excludingPayments = expenses.filter(e => e.excludePeople.length);

  // calculate total amount payed per person for simple payments
  const payments = people.reduce((prev, cur) => ({...prev, [cur]: 0}), {});
  simpleExpenses.forEach(e => payments[e.user] += e.amount);

  // calculate total amount owed per person for unexcluded people
  const exclPayments = people.reduce((prev, cur) => ({...prev, [cur]: 0}), {});
  excludingPayments.forEach(e => {
    const payers = people.filter(p => !e.excludePeople.includes(p));
    const mean = e.amount / payers.length;
    exclPayments[e.user] = e.amount;
    payers.forEach(p => exclPayments[p] -= mean);
  });
  return {
    payments,
    exclPayments,
  };
}

/**
 * Calculate the payment splits for all the users
 *
 * @param {{string: number}} payments An Object of user and amounts payed
 * @param {{string: number}} excludedPayments An Object of user and amounts owed
 * @returns {{string: { string: number }}} An object of users who owes money. In the example below jannik owes viggo 1000
 * ```javascript
 * { 'jannik': { 'viggo': 1000 } }
 * ```
 */
function splitPayments(payments, excludedPayments) {
  const people = Object.keys(payments);
  const valuesPaid = Object.values(payments);

  const sum = valuesPaid.reduce((acc, curr) => curr + acc);
  const mean = sum / people.length;

  // sort people and their values including excluded payments
  const sortedPeople = people.sort((personA, personB) => (payments[personA] + excludedPayments[personA]) - (payments[personB] + excludedPayments[personB]));
  const sortedValuesPaid = sortedPeople.map((person) => payments[person] - mean + excludedPayments[person]);

  let i = 0;
  let j = sortedPeople.length - 1;
  let debt;
  const owes = {};

  while (i < j) {
    debt = Math.min(-(sortedValuesPaid[i]), sortedValuesPaid[j]);

    if (isNaN(debt)) {
      throw new Error('Unable to calculate debt.');
    }

    sortedValuesPaid[i] += debt;
    sortedValuesPaid[j] -= debt;

    if (!owes[sortedPeople[i]]) {
      owes[sortedPeople[i]] = {}
    }
    owes[sortedPeople[i]][sortedPeople[j]] = debt;

    if (sortedValuesPaid[i] === 0) {
      i++;
    }

    if (sortedValuesPaid[j] === 0) {
      j--;
    }
  }
  return owes;
}

module.exports = {
  convertListToPayments,
  splitPayments,
};
