'use client';
import type { ReactElement } from 'react';
import { Button } from '@/components/ui/button';

interface IProps {
  readonly data: Array<string>;
  readonly getData: () => Promise<void>;
}

const FetchingCard = ({ data, getData }: IProps): ReactElement => {
  const symbols = data;

  return (
    <div className="border-2 w-full p-2">
      <div className="flex flex-col mb-4">
        <div className="flex gap-6">
          {symbols[0]}

          {' - '}

          {symbols[symbols.length - 1]}

          <p className="text-red-500">
            počet: {symbols.length}
          </p>
        </div>

        <p>Poslední fetch: 20.10.2025</p>
      </div>

      <Button
        className="w-1/2 bg-green-400 cursor-pointer"
        onClick={() => getData()}
      >
        Fetch
      </Button>
    </div>
  );
};

export default FetchingCard;
