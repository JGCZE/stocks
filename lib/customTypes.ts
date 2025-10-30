export type TCompanyFinancials = {
  capitalExpenditure: number;
  costAndExpenses: number;
  costOfRevenue: number;
  date: string;
  ebitda: number;
  eps: number;
  fiscalYear: string;
  freeCashFlow: number;
  grossProfit: number;
  incomeBeforeTax: number;
  interestPaid: number;
  netChangeInCash: number;
  netDividendsPaid: number;
  netIncome: number;
  operatingCashFlow: number;
  revenue: number;
  symbol: string;
};

export type TFincialData = {
  data: Array<TCompanyFinancials>;
  symbol: string;
};
