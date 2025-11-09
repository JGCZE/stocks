'use client';

import type { ReactElement } from 'react';
import { fetchPageOverview } from '@/api/AlphaVantage/fetchPageOverview';
import { Button } from '@/components/ui/button';

const Actions = (symbols: Array<string>): ReactElement => {
  console.log(">>", symbols);

  return (
    <Button
      className="w-1/2 bg-green-400 cursor-pointer"
      onClick={() => fetchPageOverview}
    >
      Fetch
    </Button>
  );
};

export default Actions;
