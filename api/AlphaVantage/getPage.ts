'use server';

export const getPage = async (symbol: string, dataType: string) => {
  try {
    const ENDPOINT = process.env.AV_ENDPOINT;
    const APIKEY = process.env.AV_API_KEY;

    if (!ENDPOINT || !APIKEY) {
      throw new Error('API endpoint or API key is not defined in environment variables');
    }

    if (!symbol) {
      throw new Error('Stock symbol is required');
    }

    const URL = `${ENDPOINT}?function=${dataType}&symbol=${symbol}&apikey=${APIKEY}`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`API request failed for ${symbol}. Status: ${response.status}`);
    }

    const data = await response.json() as unknown;

    return data;
  } catch (error) {
    console.error('Error fetching page:', error);

    return undefined;
  }
};
