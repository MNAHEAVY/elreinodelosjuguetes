import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
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
    >
      <header className='header header--middle-left header--mobile-center page-width header--has-menu header--has-social'>
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
                      <li>
                        <a
                          href='/'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset menu-drawer__menu-item--active'
                          aria-current='page'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href='/collections/all'
                          className='menu-drawer__menu-item list-menu__item link link--text focus-inset'
                        >
                          Catalog
                        </a>
                      </li>
                      <li>
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
            <FaSearch />
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
            <FaShoppingCart />
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
