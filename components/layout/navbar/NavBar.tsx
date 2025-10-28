import type { ReactElement } from 'react';
import { Logo, Navigations, SearchBar } from './components';

const NavBar = (): ReactElement => (
  <div className="grid grid-cols-3 px-8 h-12 bg-red-300">
    <Logo />

    <SearchBar />

    <Navigations />
  </div>
);

export default NavBar;
