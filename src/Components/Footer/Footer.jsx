import "./Footer.css";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const excludePaths = ["/admin", "/admin/edit/"];

  // Verifica si la ruta actual empieza con alguno de los caminos excluidos
  const isExcludedPath = excludePaths.some((path) => location.pathname.startsWith(path));

  if (isExcludedPath) {
    return null;
  }
  return (
    <footer
      className='footer color-inverse grant section-sections--22846564041014__footer-padding'
      style={{ padding: "40px", background: "#0e1b4d", color: "white" }}
    >
      <div className='footer__content-top footer__content-top'>
        <div className='footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet scroll-trigger animate--slide-in'>
          <div className='footer-block grid__item scroll-trigger animate--slide-in'>
            <div className='footer-block__brand-info'>
              <img src={logo} width={200} />
              <div className='rte'>
                <p>
                  Trabajamos para que todos los niños y sus familias puedan encontrar ese
                  juguete tan especial que recordarán con cariño toda su vida.
                </p>
              </div>
            </div>
          </div>
          <div className='footer-block grid__item footer-block--menu scroll-trigger animate--slide-in'>
            <h3 className='footer-block__heading inline-richtext'>Links utiles</h3>
            <ul className='footer-block__details-content list-unstyled'>
              <li>
                <a
                  href='/search'
                  className='link link--text list-menu__item list-menu__item--link'
                  style={{ color: "darkgray", fontSize: "14px" }}
                >
                  Sucursal
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='link link--text list-menu__item list-menu__item--link'
                  style={{ color: "darkgray", fontSize: "14px" }}
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href='/search'
                  className='link link--text list-menu__item list-menu__item--link'
                  style={{ color: "darkgray", fontSize: "14px" }}
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  href='/search'
                  className='link link--text list-menu__item list-menu__item--link'
                  style={{ color: "darkgray", fontSize: "14px" }}
                >
                  Contactanos
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-block grid__item scroll-trigger animate--slide-in'>
            <h3 className='footer-block__heading inline-richtext'>Hablamos?</h3>
            <div className='footer-block__details-content rte'>
              <p>Tel: 3755 295478</p>
              <p>
                Horario de atención telefónica:
                <br />
                Todos los días de 9 a 18hs
              </p>
              <p>Chat Online: Todos los días de 9 a 00hs</p>
              <p>elreinodelosjuguetes478@gmail.com</p>
              <p>Angel Acuña 980, Posadas</p>
            </div>
          </div>
        </div>
        <div className='footer-block--newsletter scroll-trigger animate--slide-in'>
          <div className='footer-block__newsletter'>
            <h3 className='footer-block__heading inline-richtext'>
              Suscribite a nuestro correo
            </h3>
            <form
              method='post'
              action='/contact#ContactFooter'
              id='ContactFooter'
              acceptCharset='UTF-8'
              className='footer__newsletter newsletter-form'
            >
              <input type='hidden' name='form_type' value='customer' />
              <input type='hidden' name='utf8' value='✓' />
              <input type='hidden' name='contact[tags]' value='newsletter' />
              <div className='newsletter-form__field-wrapper'>
                <div className='field'>
                  <input
                    id='NewsletterForm'
                    type='email'
                    name='contact[email]'
                    className='field__input'
                    aria-required='true'
                    autoComplete='email'
                    placeholder='Email'
                    required
                  />
                  <label className='field__label' htmlFor='NewsletterForm'>
                    Email
                  </label>
                  <button
                    type='submit'
                    className='newsletter-form__button field__button'
                    aria-label='Subscribe'
                  >
                    <svg
                      viewBox='0 0 14 10'
                      fill='none'
                      aria-hidden='true'
                      focusable='false'
                      className='icon-arrow'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z'
                        fill='currentColor'
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className='list-unstyled list-social footer__list-social' role='list'>
            <li className='link list-social__link'>
              <a
                href='https://www.instagram.com/el.reino.de.los.juguetes/'
                className='link list-social-link'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  width='50'
                  height='50'
                >
                  <path
                    fill='currentColor'
                    fillRule='evenodd'
                    d='M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='visually-hidden'>Instagram</span>
              </a>
            </li>
            <li className='link list-social__link'>
              <a href='https://wa.me/3755295478' className='link list-social-link'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  width='45'
                  height='45'
                >
                  <path
                    fill='currentColor'
                    d='M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9'
                  ></path>
                </svg>
                <span className='visually-hidden'>WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className='footer__content-bottom  scroll-trigger animate--slide-in'
        style={{ borderTop: "solid 0.1rem grey", paddingTop: " 3rem" }}
      >
        <div className='footer__content-bottom-wrapper page-width footer__content-bottom-wrapper--center'>
          <div className='footer__copyright caption"'>
            <small className='copyright__content'>
              © 2024, El Reino de los Juguetes{"  "}
            </small>
            <small className='copyright__content'>
              <a target='_blank' rel='nofollow' href='https://mnaportfolio.vercel.app/'>
                Powered by MNADEV
              </a>
            </small>
            <ul className='policies list-unstyled'></ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
