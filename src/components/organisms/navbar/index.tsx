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
      <Logo url="https://1000marcas.net/wp-content/uploads/2020/11/Mortal-Kombat-logo.jpg" />
      <MainMenu menus={menus} />
      <SearchBar />
    </nav>
  );
}
