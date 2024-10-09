import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const incomeDollars = getIncomeInDollars(income);
  const incomeEuros = getIncomeInEuros(income);
  const fullBudget = {
    ...budget,
    ...incomeDollars,
    ...incomeEuros,
  };

  return fullBudget;
}
