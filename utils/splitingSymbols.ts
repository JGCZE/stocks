/* export const getTickerSymbols = (data) => {
  const symbols = data.map((item) => item.Symbol);

  // Iterace a výpis po částech (např. po 10 symbolech)
  for (let i = 0; i < symbols.length; i += 90) {
    const chunk = symbols.slice(i, i + 90);

    console.log(`XXX >> Chunk ${i / 90 + 1}:`, chunk);
  }
}; */

export const getPartsOfSymbols = (symbols: Array<string>, partSize: number): Array<string> => {
  const parts: Array<string> = [];

  for (let i = 0; i < symbols.length; i += partSize) {
    const chunk = symbols.slice(i, i + partSize);
    parts.push(chunk.join(','));
  }

  return parts;
};
