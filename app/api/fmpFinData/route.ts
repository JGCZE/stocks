/* eslint-disable func-style */

import { NextResponse } from 'next/server';
import getAllData from '@/api/financialModelingPrep/getAllData';

export async function GET(): Promise<Response> {
  try {
    const symbols = ['AAPL', 'MSFT'];

    if (symbols.length === 0) {
      return NextResponse.json(
        { error: 'No symbols provided' },
        { status: 400 },
      );
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
    return NextResponse.json(
      {
        error,
        success: false,
      },
      { status: 500 },
    );
  }
}
