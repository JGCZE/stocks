// This will fetch company data based on the provided stock symbol
// it will use two endpoints from Financial Modeling Prep API
'use server';

import type { TFincialData } from '@/lib/customTypes';
import getSingleData from './getSingleData';
import resolveAllFinancials from './resolvers/resolveAllFinancials';
import resolveFinancialMerging from './resolvers/resolveFinancialMerging';

export const getAllData = async (symbol: string): Promise<TFincialData> => {
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

  const resolvedCompanyData = resolveAllFinancials(
    fetchedCFStatement,
    fetchedIncomeStatement,
  );

  if (!resolvedCompanyData) {
    throw new Error('Failed to resolve company financial data');
  }

  const resolveData = resolveFinancialMerging(resolvedCompanyData);

  return {
    data: resolveData,
    symbol,
  };
};

const getAllStocksData = async (symbols: Array<string>): Promise<Array<TFincialData>> => {
  const promises = symbols.map(async (symbol) => getAllData(symbol));

  return Promise.all(promises);
};

export default getAllStocksData;
