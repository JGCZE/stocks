'use server';

export const getPages = async (symbols: Array<string>): Promise<void> => {
  await console.log('Fetching pages for symbols:', symbols);
};
