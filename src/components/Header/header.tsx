import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  MobileOpenMenu,
  SearchInput,
  Switch
} from './header.style';
import { MagnifyingGlassIcon, UserIcon } from '@phosphor-icons/react';
import { useRef } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

export function Header() {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const { isDark, toggleTheme } = useThemeContext();

  function handleToggleMenu() {
    menuBtnRef.current?.classList.toggle('active');
    navRef.current?.classList.toggle('open');
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">Blog</Link>

        <SearchInput>
          <input type="search" placeholder="Procurar" name="procura" />
          <MagnifyingGlassIcon size={16} />
        </SearchInput>

        <MobileOpenMenu
          aria-expanded="false"
          aria-label="Abrir menu"
          className="menu-btn"
          role="button"
          ref={menuBtnRef}
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </MobileOpenMenu>

        <HeaderNav role="menu" ref={navRef}>
          <ul>
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li id="login">
              <button>
                <UserIcon size={16} />
                <span>Login</span>
              </button>
              <Switch>
                <input
                  id="toggle"
                  type="checkbox"
                  checked={isDark}
                  onChange={toggleTheme}
                />
                <span className="slider"></span>
              </Switch>
            </li>
          </ul>
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
}
