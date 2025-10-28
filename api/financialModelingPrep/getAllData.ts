// This will fetch company data based on the provided stock symbol
// it will use two endpoints from Financial Modeling Prep API

import { getSingleData } from './getSingleData';

export const getAllData = async (symbol: string) => {
  const [fetchedCFStatement, fetchedIncomeStatement] = await Promise.all([
    getSingleData(symbol, 'cash-flow-statement'),
    getSingleData(symbol, 'income-statement'),
  ]);

  if (!fetchedCFStatement) {
    throw new Error('Failed to Cash Flow Statement data');
  }

  if (!fetchedIncomeStatement) {
    throw new Error('Failed to Income Statement data');
  }

  // TODO RESOLVER

  return {
    cashFlowStatement: fetchedCFStatement,
    incomeStatement: fetchedIncomeStatement,
  };
};
