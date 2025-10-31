/* eslint-disable @typescript-eslint/no-unsafe-return */
const BASE_ENDPOINT = process.env.FMP_ENDPOINT;
const API_KEY = process.env.FMP_API_KEY;

type TResponseData = Array<{ [key: string]: number | string }>;

type TStatementType = 'cash-flow-statement' | 'income-statement';

const getSingleData = async (
  symbol: string,
  statement: TStatementType,
): Promise<TResponseData | undefined> => { // TODO TYPE
  if (!BASE_ENDPOINT || !API_KEY) {
    throw new Error('API endpoint or API key is not defined in environment variables');
  }

  if (!symbol) {
    throw new Error('Stock symbol is required');
  }

  try {
    const url = new URL(`${BASE_ENDPOINT}/${statement}?symbol=${symbol}`);

    url.searchParams.append('apikey', API_KEY);

    const response = await fetch(url.toString(), {
      next: { revalidate: 24 * 3600 },
    }); // 1 day

    if (!response.ok) {
      const errorBody = await response.text();

      throw new Error(`API request failed for ${url}. Status: ${response.status}. Body: ${errorBody}`);
    }

    const data = await response.json() as unknown;

    if (!data || !Array.isArray(data)) {
      console.error('Invalid API response format');

      return undefined;
    }

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);

    return undefined;
  }
};

export default getSingleData;
