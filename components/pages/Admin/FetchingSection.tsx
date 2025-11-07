'use client';
import { type ReactElement, useState } from 'react';
import getAllStocksData from '@/api/financialModelingPrep/getAllData';
import { Button } from '@/components/ui/button';
import type { TFincialData } from '@/lib/customTypes';

interface IProps {
  readonly data: {
    id: number;
    part: number;
    symbols: Array<string>;
  };
}

const FetchingSection = ({ data }: IProps): ReactElement => {
  const [fetchedData, seTfetchedData] = useState<Array<TFincialData>>([]);
  console.log('Fetched Data State >>>', fetchedData);

  const { part, symbols } = data;

  const handleFetchData = async (): Promise<void> => {
    try {
      const result: Array<TFincialData> = await getAllStocksData(symbols);

      seTfetchedData(result);
    } catch (error) {
      console.error(`Error fetching data for part ${part}:`, error);
    }
  };

  return (
    <div className="border-2 mb-4">
      <div>
        Part ID:
        {part}
      </div>

      <div>
        Part Number:
        {part}
      </div>

      <div>
        Symbols Count:
        {symbols.length}
      </div>

      <Button
        className="mt-2 cursor-pointer"
        onClick={async () => handleFetchData()}
      >
        Fetch Data for Part
      </Button>
    </div>
  );
};

export default FetchingSection;
