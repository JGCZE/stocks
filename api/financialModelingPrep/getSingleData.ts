const BASE_ENDPOINT = process.env.FMP_ENDPOINT;
const API_KEY = process.env.FMP_API_KEY;

export const getSingleData = async (symbol: string, statement: string) => {
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

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);

    return undefined;
  }
};
