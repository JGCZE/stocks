'use server';

import type { TCompanyOverview } from '@/lib/mock/mockAAPL';
import { getPage } from './getPage';

export const getPages = async (
  symbols: Array<string>,
  dataType: string,
): Promise<Array<TCompanyOverview> | undefined> => {
  try {
    if (!symbols.length || !Array.isArray(symbols)) {
      throw new Error('No symbols provided');
    }

    if (!dataType) {
      throw new Error('Data type is required');
    }

    const promises = symbols.map((symbol) => getPage(symbol, dataType));

    const response = await Promise.all(promises);

    console.log('>>> getPages response:', response);

    if (!response.length) {
      throw new Error('Failed to fetch pages');
    }

    return response;
  } catch (error) {
    console.error('Error fetching pages:', error);

    return undefined;
  }
};
