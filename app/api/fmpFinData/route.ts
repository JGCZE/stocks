/* eslint-disable func-style */
import type { NextRequest } from 'next/server';
import { getAllData } from '@/api/financialModelingPrep/getAllData';

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const symbols = ['AAPL', 'MSFT'];

    const allStocksDataPromise = symbols.map(async (symbol) => getAllData(symbol));

    if (allStocksDataPromise.length === 0) {
      throw new Error('No stock symbols provided');
    }

    const results = await Promise.all(allStocksDataPromise);

    if (!results) {
      throw new Error('No results returned from stock data fetch');
    }

    return Response.json({ results });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
