import z from 'zod';

const apiCFStatementSchema = z.object({
  capitalExpenditure: z.number(),
  date: z.string(),
  fiscalYear: z.string(),
  freeCashFlow: z.number(),
  interestPaid: z.number(),
  netChangeInCash: z.number(),
  netDividendsPaid: z.number(),
  netIncome: z.number(),
  operatingCashFlow: z.number(),
  symbol: z.string(),
});

const apiIncomeStatementSchema = z.object({
  costAndExpenses: z.number(),
  costOfRevenue: z.number(),
  date: z.string(),
  ebitda: z.number(),
  eps: z.number(),
  fiscalYear: z.string(),
  grossProfit: z.number(),
  incomeBeforeTax: z.number(),
  netIncome: z.number(),
  revenue: z.number(),
  symbol: z.string(),
});

export type TCFStatement = z.infer<typeof apiCFStatementSchema>;
export type TIncomeStatement = z.infer<typeof apiIncomeStatementSchema>;

type TFormatedFinancials = {
  CFStatement: Array<TCFStatement>;
  incomeStatement: Array<TIncomeStatement>;
};

const resolveAllFinancials = (
  fetchedCFStatement: unknown,
  fetchedIncomeStatement: unknown,
): TFormatedFinancials | undefined => {
  if (!Array.isArray(fetchedCFStatement)) {
    return undefined;
  }

  try {
    const CFStatement = z.array(apiCFStatementSchema).parse(fetchedCFStatement);

    const incomeStatement = z.array(apiIncomeStatementSchema).parse(fetchedIncomeStatement);

    return {
      CFStatement,
      incomeStatement,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('Validation error:', error);
    } else {
      console.error('Unknown error:', error);
    }

    return undefined;
  }
};

export default resolveAllFinancials;
