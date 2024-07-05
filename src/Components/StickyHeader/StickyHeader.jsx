import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./StickyHeader.css"; // Asegúrate de incluir tus estilos CSS

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
      <header
        className='header header--middle-left header--mobile-center page-width header--has-menu header--has-social'
        style={{ height: "99.75px" }}
      >
        <div className='menu-drawer-container'>
          <button
            className='header__icon header__icon--menu link focus-inset'
            aria-label='Menu'
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
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
                      <li className='liheader'>
                        <a
                          href='/'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active'
                          aria-current='page'
                        >
                          Home
                        </a>
                      </li>
                      <li className='liheader'>
                        <a
                          href='/collections/all'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset'
                        >
                          Catalog
                        </a>
                      </li>
                      <li className='liheader'>
                        <a
                          href='/pages/contact'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset'
                        >
                          Contact
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
        <h1 className='header__heading'>
          <a href='/' className='header__heading-link link link--text focus-inset'>
            <span className='h2'>My Store</span>
          </a>
        </h1>
        <nav className='header__inline-menu'>
          <ul className='list-menu list-menu--inline' role='list'>
            <li>
              <a
                href='/'
                className='header__menu-item list-menu__item link link--text focus-inset'
                aria-current='page'
              >
                <span className='header__active-menu-item'>Home</span>
              </a>
            </li>
            <li>
              <a
                href='/collections/all'
                className='header__menu-item list-menu__item link link--text focus-inset'
              >
                <span>Catalog</span>
              </a>
            </li>
            <li>
              <a
                href='/pages/contact'
                className='header__menu-item list-menu__item link link--text focus-inset'
              >
                <span>Contact</span>
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
              className='modal__toggle-open icon icon-search'
              aria-hidden='true'
              focusable='false'
              role='presentation'
            >
              <use href='#icon-search'></use>
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
                fill='currentColor'
                fillRule='evenodd'
                d='M20.5 6.5a4.75 4.75 0 00-4.75 4.75v.56h-3.16l-.77 11.6a5 5 0 004.99 5.34h7.38a5 5 0 004.99-5.33l-.77-11.6h-3.16v-.57A4.75 4.75 0 0020.5 6.5zm3.75 5.31v-.56a3.75 3.75 0 10-7.5 0v.56h7.5zm-7.5 1h7.5v.56a3.75 3.75 0 11-7.5 0v-.56zm-1 0v.56a4.75 4.75 0 109.5 0v-.56h2.22l.71 10.67a4 4 0 01-3.99 4.27h-7.38a4 4 0 01-4-4.27l.72-10.67h2.22z'
              />
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
