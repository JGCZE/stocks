'use client';
import { getPages } from '@/api/AlphaVantage/getPages';
import { Button } from '@/components/ui/button';

interface IProps {
  readonly data: Array<string>;
}

const FetchingCard = ({ data }: IProps) => {
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
        onClick={() => getPages(symbols)}
      >
        Fetch
      </Button>
    </div>
  );
};

export default FetchingCard;
