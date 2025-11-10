'use client';

import type { ReactElement } from 'react';
import { SAP500_SYMBOLS } from '@/lib/tickerSymbols';
import FetchingCard from './FetchingCard';
import { useQuery } from '@tanstack/react-query';

type TSymbols = {
  id: number;
  symbols: Array<string>;
};

const prepareSymbols = (data: Array<string>, SPLITING_NUM = 20): Array<TSymbols> => (
  data.reduce((acc: Array<TSymbols>, currentValue, index) => {
    const chunkIndex = Math.floor(index / SPLITING_NUM);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = {
        id: chunkIndex,
        symbols: [],
      };
    }

    acc[chunkIndex].symbols.push(currentValue);

    return acc;
  }, []));

const FetchOverviewSection = (): ReactElement => {
  const preparedSymbols = prepareSymbols(SAP500_SYMBOLS);
  // todo usestate
  // const data = await getPage('AAPL', 'OVERVIEW');

  //console.log('>>>>>>>>', data);

  const endpoint = 'https://jsonplaceholder.typicode.com/users';

  const { isPending, isError, data, error } = useQuery({
    queryFn: async () => {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      return response.json();
    },
    queryKey: ['todos'],
  });

  console.log("XXX", data);

  return (
    <>
      <div className="border-2 h-20 mb-4">
        <p>Přehled záskaných dat</p>
      </div>

      <div className="grid grid-cols-4 gap-4 space-y-8">

        {preparedSymbols.map(({ id, symbols }) => <FetchingCard key={id} data={symbols} />)}
      </div>
    </>
  );
};

export default FetchOverviewSection;
