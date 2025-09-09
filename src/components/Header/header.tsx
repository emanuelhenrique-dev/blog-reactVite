//rrd imports
import { Link } from 'react-router-dom';

//styles
import {
  HeaderContainer,
  HeaderContent,
  HeaderNav,
  MobileOpenMenu,
  SearchInput,
  Switch
} from './header.style';

//assets imports
import { MagnifyingGlassIcon, UserIcon } from '@phosphor-icons/react';

//react imports
import { useEffect, useRef, useState } from 'react';

//context imports
import { useThemeContext } from '../../contexts/ThemeContext';

type User = {
  username: string;
  name: string;
  avatarImg: string;
};
export function Header() {
  //hooks
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    //verificar se tem alguém logado(no caso admin)
    const isLoggedIn = localStorage.getItem('isLoggedInAdmin') === 'true';
    if (isLoggedIn) {
      const savedUser = localStorage.getItem('adminUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  //refs
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);

  //contexts
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
              {!user ? (
                <button>
                  <UserIcon size={16} />
                  <span>Login</span>
                </button>
              ) : (
                <img
                  src={user.avatarImg}
                  alt=""
                  style={{
                    width: 29,
                    height: 29,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1px solid #2980B9'
                  }}
                />
              )}

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
