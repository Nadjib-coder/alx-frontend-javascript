import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${this.income}`,
    getIncomeInEuros: (income) => `${this.income} euros`,
  };

  return fullBudget;
}
