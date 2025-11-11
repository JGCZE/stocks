'use client';

import { useQuery } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import { getPages } from '@/api/AlphaVantage/getPages';
import type { TCompanyOverview } from '@/lib/mock/mockAAPL';
import { SAP500_SYMBOLS } from '@/lib/tickerSymbols';
import FetchingCard from './FetchingCard';

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

  const getCompaniesData = async (): Promise<Array<TCompanyOverview>> => {
    const response = await getPages(['TSLA', 'MSFT'], 'OVERVIEW');

    if (!response) {
      throw new Error('Failed to fetch users');
    }

    console.log('>>>', response);

    return response;
  };

  const {
    data: companies,
    error,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    enabled: false,
    queryFn: getCompaniesData,
    queryKey: ['todos'],
    staleTime: 2 * 60 * 1000,
  });

  const handleFetchClick = async (): Promise<void> => {
    await refetch();
  };

  return (
    <>
      <div className="border-2 h-20 mb-4">
        <p>Přehled záskaných dat</p>

        {isFetching && <p className="text-sm text-gray-500">Načítání…</p>}

        {isError && <p className="text-sm text-red-500">Chyba: {String(error)}</p>}

        {companies && (
          <>
            <p>Počet: {companies.length}</p>

            <p>První: {companies[0]?.Symbol} – {companies[0]?.Name}</p>

            <p>Druhý: {companies[1]?.Symbol} – {companies[1]?.Name}</p>
          </>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4 space-y-8">

        {preparedSymbols.map(({ id, symbols }) => (
          <FetchingCard
            key={id}
            data={symbols}
            getData={handleFetchClick}
          />
        ))}
      </div>
    </>
  );
};

export default FetchOverviewSection;
