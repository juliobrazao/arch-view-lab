import { NavbarContext } from '@/contexts/navbar.context';
import { useContext } from 'react';

export default function Navbar() {
  const { title, menuItems } = useContext(NavbarContext);

  console.log({ title, menuItems });

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Nav 2
          </a>
        </li>
      </ul>
    </nav>
  );
}
