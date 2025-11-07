import FetchingSection from '@/components/pages/Admin/FetchingSection';
import { batchOfSymbol1 } from '@/lib/partial/batchOfSymbol_1';
import { mockedSymbols } from '@/lib/partial/mockedSymbols';

type TFetchingSymbols = Array<{
  id: number;
  part: number;
  symbols: Array<string>;
}>;

const fetchingParts: TFetchingSymbols = [
  { id: 0, part: 0, symbols: mockedSymbols },
  { id: 1, part: 1, symbols: batchOfSymbol1 },
];

const Admin = async () => (
  <>
    <div>Admin Page - Financial Data Fetching</div>

    <div>
      {fetchingParts.map((data) => (
        <FetchingSection
          key={data.id}
          data={data}
        />
      ))}
    </div>
  </>
);

export default Admin;
