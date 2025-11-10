'use server';

import { getPage } from "./getPage";

export const getPages = async (symbols: Array<string>): Promise<void> => {
  try {
    if (!symbols.length || !Array.isArray(symbols)) {
      throw new Error('No symbols provided');
    }

    const promises = symbols.map(async (symbol) => {
      getPage(symbol);
    });

    const response = await Promise.all([]);


  } catch (error) {
    console.error('Error fetching pages:', error);

    return undefined;
  }
};
