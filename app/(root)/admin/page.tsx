'use server';
import { FetchFinancialsDataSection, FetchOverviewSection } from '@/components/pages/Admin';

const Admin = async () => {
  const numForLoop = 50;

  return (
    <div className="">
      <h3 className="my-6">Admin panel - fetching section</h3>

      <FetchOverviewSection />

      <FetchFinancialsDataSection />
    </div>
  );
};

export default Admin;
