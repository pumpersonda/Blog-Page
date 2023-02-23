import { Logo } from '../../atoms/Logo';
import { MainMenu } from '../../molecules/MainMenu';
import { SearchBar } from '../../molecules/SearchBar';
import './index.css';

export function Navbar() {
  const menus = [
    {
      id: '1',
      href: '/',
      text: 'Home',
    },
    {
      id: '2',
      href: '/About',
      text: 'About',
    },
    {
      id: '3',
      href: '/Blog',
      text: 'Blog',
    },
    {
      id: '3',
      href: '/Contact',
      text: 'Contact',
    },
  ];

  return (
    <nav className="navbar">
      <Logo url="https://pbs.twimg.com/profile_images/451924608388591616/CWE80cBY_400x400.png" />
      <MainMenu menus={menus} />
      <SearchBar />
    </nav>
  );
}
