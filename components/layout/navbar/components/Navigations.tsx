import Link from 'next/link';
import type { ReactElement } from 'react';

const Navigations = (): ReactElement => (
  <div className="navContainer justify-end gap-8">
    <Link href="/">Home</Link>

    <Link href="/filter">Filter</Link>

    <Link href="/admin">Admin</Link>

    <Link href="/login">Login</Link>
  </div>
);

export default Navigations;
