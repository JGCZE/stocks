'use server';
import { symbol } from 'zod';
import Actions from './Actions';

interface IProps {
  readonly data: Array<string>;
}

const FetchingCard = async ({ data }: IProps) => {
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

      <Actions symbols={symbols} />
    </div>
  );
};

export default FetchingCard;
