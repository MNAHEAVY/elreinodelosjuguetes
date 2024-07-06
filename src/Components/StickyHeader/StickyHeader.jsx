import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./StickyHeader.css";
import logo from "../../assets/logo.png";

const StickyHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      data-sticky-type='on-scroll-up'
      className='header-wrapper color-accent-1 gradient'
      style={{ background: "#4770db", color: "white" }}
    >
      <header className='header header--middle-left header--mobile-center page-width header--has-menu header--has-social'>
        <div className='menu-drawer-container'>
          <button
            className='header__icon header__icon--menu link focus-inset'
            aria-label='Menu'
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
          {isMenuOpen && (
            <div
              id='menu-drawer'
              className='gradient menu-drawer motion-reduce color-inverse'
            >
              <div className='menu-drawer__inner-container'>
                <div className='menu-drawer__navigation-container'>
                  <nav className='menu-drawer__navigation'>
                    <ul className='menu-drawer__menu has-submenu list-menu' role='list'>
                      <li>
                        <a href='/' aria-current='page'>
                          <span className='juguete'>Juguetes</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href='/collections/all'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset'
                        >
                          <span className='juguete'>Juguetes</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href='/pages/contact'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset'
                        >
                          <span className='juguete'>Juguetes</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className='menu-drawer__utility-links'>
                    <ul className='list list-social list-unstyled' role='list'>
                      <li className='list-social__item'>
                        <a
                          href='https://www.facebook.com/profile.php?id=100016741901254'
                          className='list-social__link link'
                        >
                          <FaFacebook />
                          <span className='visually-hidden'>Facebook</span>
                        </a>
                      </li>
                      <li className='list-social__item'>
                        <a
                          href='https://www.instagram.com/profile.php?id=100016741901254'
                          className='list-social__link link'
                        >
                          <FaInstagram />
                          <span className='visually-hidden'>Instagram</span>
                        </a>
                      </li>
                      <li className='list-social__item'>
                        <a
                          href='https://www.youtube.com/profile.php'
                          className='list-social__link link'
                        >
                          <FaYoutube />
                          <span className='visually-hidden'>YouTube</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <a href='/' className='header__heading-link link link--text focus-inset'>
          <img src={logo} style={{ width: "200px", height: "auto" }} />
        </a>

        <nav className='header__inline-menu'>
          <ul className='list-menu list-menu--inline' role='list'>
            <li
              style={{ backgroundColor: "#235ab9a1", margin: "5px", borderRadius: "4px" }}
            >
              <a
                href='/'
                className='header__menu-item list-menu__item link link--text focus-inset'
                aria-current='page'
              >
                <span className='header__active-menu-item'>Juegos</span>
              </a>
            </li>
            <li
              style={{ backgroundColor: "#235ab9a1", margin: "5px", borderRadius: "4px" }}
            >
              <a
                href='/collections/all'
                className='header__menu-item list-menu__item link link--text focus-inset'
              >
                <span className='header__active-menu-item'>Juguetes</span>
              </a>
            </li>
            <li
              style={{ backgroundColor: "#235ab9a1", margin: "5px", borderRadius: "4px" }}
            >
              <a
                href='/pages/contact'
                className='header__menu-item list-menu__item link link--text focus-inset'
              >
                <span className='header__active-menu-item'>Novedades</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className='header__icons'>
          <button
            className='header__icon header__icon--search link focus-inset'
            aria-haspopup='dialog'
            aria-label='Search'
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg
              style={{ padding: "2px" }}
              className='modal__toggle-open icon icon-search'
              aria-hidden='true'
              focusable='false'
              role='presentation'
            >
              <path
                d='M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                stroke='#FFFFFF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          {isSearchOpen && (
            <div
              className='search-modal modal__content gradient'
              role='dialog'
              aria-modal='true'
              aria-label='Search'
            >
              <div className='modal-overlay'></div>
              <div
                className='search-modal__content search-modal__content-bottom'
                tabIndex='-1'
              >
                <form
                  action='/search'
                  method='get'
                  role='search'
                  className='search search-modal__form'
                >
                  <div className='field'>
                    <input
                      className='search__input field__input'
                      id='Search-In-Modal'
                      type='search'
                      name='q'
                      placeholder='Search'
                      role='combobox'
                      aria-expanded='false'
                      aria-owns='predictive-search-results'
                      aria-controls='predictive-search-results'
                      aria-haspopup='listbox'
                      aria-autocomplete='list'
                      autoCorrect='off'
                      autoComplete='off'
                      autoCapitalize='off'
                      spellCheck='false'
                    />
                    <label className='field__label' htmlFor='Search-In-Modal'>
                      Search
                    </label>
                    <button
                      type='reset'
                      className='reset__button field__button hidden'
                      aria-label='Clear search term'
                    >
                      <FaTimes />
                    </button>
                    <button className='search__button field__button' aria-label='Search'>
                      <FaSearch />
                    </button>
                  </div>
                </form>
                <button
                  type='button'
                  className='search-modal__close-button modal__close-button link link--text focus-inset'
                  aria-label='Close'
                  onClick={() => setIsSearchOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
          <button
            className='header__icon header__icon--cart link focus-inset'
            id='cart-icon-bubble'
            aria-haspopup='dialog'
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <svg
              className='icon icon-cart'
              aria-hidden='true'
              focusable='false'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 40 40'
              fill='none'
            >
              <path
                d='m15.75 11.8h-3.16l-.77 11.6a5 5 0 0 0 4.99 5.34h7.38a5 5 0 0 0 4.99-5.33l-.78-11.61zm0 1h-2.22l-.71 10.67a4 4 0 0 0 3.99 4.27h7.38a4 4 0 0 0 4-4.27l-.72-10.67h-2.22v.63a4.75 4.75 0 1 1 -9.5 0zm8.5 0h-7.5v.63a3.75 3.75 0 1 0 7.5 0z'
                fill='currentColor'
                fillRule='evenodd'
              ></path>
            </svg>
          </button>
          {isCartOpen && (
            <div
              className='cart-modal modal__content gradient'
              role='dialog'
              aria-modal='true'
              aria-label='Cart'
            >
              <div className='modal-overlay'></div>
              <div
                className='cart-modal__content cart-modal__content-bottom'
                tabIndex='-1'
              >
                {/* Contenido del carrito */}
                <button
                  type='button'
                  className='cart-modal__close-button modal__close-button link link--text focus-inset'
                  aria-label='Close'
                  onClick={() => setIsCartOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default StickyHeader;
