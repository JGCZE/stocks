/* eslint-disable func-style */

import type { NextRequest } from 'next/server';
import { getAllData } from '@/api/financialModelingPrep/getAllData';

const symbols = ['AAPL', 'MSFT'];

export async function GET(request: NextRequest): Promise<Response> {
  try {
    if (symbols.length === 0) {
      throw new Error('No stock symbols provided');
    }

    const apikey = request.nextUrl.searchParams.get('apikey');

    if (!apikey || apikey !== process.env.FMP_API_KEY) {
      return Response.json({ error: 'Invalid or missing API key' }, { status: 401 });
    }

    const allStocksDataPromise = symbols.map(async (symbol) => getAllData(symbol));

    if (allStocksDataPromise.length === 0) {
      throw new Error('No stock symbols provided');
    }

    const results = await Promise.all(allStocksDataPromise);

    if (!results.length) {
      throw new Error('No results returned from stock data fetch');
    }

    return Response.json({ results });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
