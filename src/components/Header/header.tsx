//rrd imports
import { Link, NavLink, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

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

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const searchTerm = formData.get('search-term') as string;

    if (searchTerm.trim()) {
      navigate(`/search_posts?search_term=${encodeURIComponent(searchTerm)}`);
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">Blog</Link>

        <search>
          <SearchInput onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Buscar posts..."
              name="search-term"
            />

            <button type="submit">
              <MagnifyingGlassIcon size={16} />
            </button>
          </SearchInput>
        </search>

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
            <li onClick={handleToggleMenu}>
              <NavLink to={'/'}>Inicio</NavLink>
            </li>
            <li onClick={handleToggleMenu}>
              <NavLink to={'/about'}>Sobre</NavLink>
            </li>
            <li onClick={handleToggleMenu}>
              <NavLink to={'/contact'}>Contato</NavLink>
            </li>
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
