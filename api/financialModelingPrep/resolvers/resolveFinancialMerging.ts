import type { TFincialData } from '@/lib/customTypes';
import type { TCFStatement, TIncomeStatement } from './resolveAllFinancials';

const resolveFinancialMerging = ({
  CFStatement,
  incomeStatement,
}: {
  CFStatement: Array<TCFStatement>;
  incomeStatement: Array<TIncomeStatement>;
}): TFincialData['data'] => {
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

    return undefined;
  });

  return mergingResult.filter((item) => item !== undefined);
};

export default resolveFinancialMerging;
