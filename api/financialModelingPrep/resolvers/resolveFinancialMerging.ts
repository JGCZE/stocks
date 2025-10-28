import type { TCFStatement, TIncomeStatement } from './resolveAllFinancials';

const resolveFinancialMerging = ({
  CFStatement,
  incomeStatement,
}: {
  CFStatement: Array<TCFStatement>;
  incomeStatement: Array<TIncomeStatement>;
}) => {
  const mergingResult = CFStatement.map((cfItem) => {
    const findMatch = incomeStatement.find(
      (item) => item.symbol === cfItem.symbol && item.fiscalYear === cfItem.fiscalYear,
    );

    if (findMatch) {
      return {
        ...cfItem,
        ...findMatch,
      };
    }
  });

  return mergingResult.filter((item) => item !== undefined);
};

export default resolveFinancialMerging;
