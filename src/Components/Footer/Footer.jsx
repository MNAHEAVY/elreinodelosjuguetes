const Footer = () => {
  return (
    <footer className='footer gradient section-padding'>
      <div className='footer-top page-width'>
        <div className='footer-wrapper grid grid-1-col grid-2-col grid-4-col-tablet animate-slide-in'>
          <div className='footer-block grid-item animate-slide-in'>
            <div className='footer-brand-info'>
              <h2 className='footer-heading'>En El Reino de los juguetes</h2>
              <div>
                <p>
                  Trabajamos para que todos los niños y sus familias puedan encontrar ese
                  juguete tan especial que recordarán con cariño toda su vida.
                </p>
              </div>
            </div>
          </div>
          <div className='footer-block grid-item footer-menu animate-slide-in'>
            <h2 className='footer-heading'>Links utiles</h2>
            <ul className='footer-details list-unstyled'>
              <li>
                <a href='/search' className='link list-item'>
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-block grid-item animate-slide-in'>
            <h2 className='footer-heading'>Hablamos?</h2>
            <div className='footer-details'>
              <p>Cel: 3755 2821 8999</p>
              <p>
                Horario de atención telefónica:
                <br />
                Todos los días de 9 a 18hs
              </p>
              <p>Chat Online: Todos los días de 9 a 00hs</p>
              <p>elreinodelosjuguetes@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='footer-newsletter animate-slide-in'>
          <div>
            <h2 className='footer-heading'>Suscribite a nuestro correo</h2>
            <form
              method='post'
              action='/contact#ContactFooter'
              id='ContactFooter'
              acceptCharset='UTF-8'
              className='newsletter-form'
            >
              <input type='hidden' name='form_type' value='customer' />
              <input type='hidden' name='utf8' value='✓' />
              <input type='hidden' name='contact[tags]' value='newsletter' />
              <div className='newsletter-field-wrapper'>
                <div className='field'>
                  <input
                    id='NewsletterForm'
                    type='email'
                    name='contact[email]'
                    className='field-input'
                    aria-required='true'
                    autoComplete='email'
                    placeholder='Email'
                    required
                  />
                  <label className='field-label' htmlFor='NewsletterForm'>
                    Email
                  </label>
                  <button
                    type='submit'
                    className='newsletter-button field-button'
                    aria-label='Subscribe'
                  >
                    <svg
                      viewBox='0 0 14 10'
                      fill='none'
                      aria-hidden='true'
                      focusable='false'
                      className='icon-arrow'
                      xmlns='http://www.w3.org/2000/svg'
                    ></svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <ul className='list-social list-unstyled' role='list'>
            <li className='list-item'>
              <a
                href='https://www.facebook.com/profile.php?id=100016741901254'
                className='link list-social-link'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='icon-facebook'
                  viewBox='0 0 20 20'
                ></svg>
                <span className='visually-hidden'>Facebook</span>
              </a>
            </li>
            <li className='list-item'>
              <a
                href='https://www.facebook.com/profile.php?id=100016741901254'
                className='link list-social-link'
              >
                <svg
                  aria-hidden='true'
                  focusable='false'
                  className='icon-instagram'
                  viewBox='0 0 20 20'
                ></svg>
                <span className='visually-hidden'>Instagram</span>
              </a>
            </li>
            <li className='list-item'>
              <a
                href='https://www.facebook.com/profile.php'
                className='link list-social-link'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 25 25'
                  width='25'
                  height='25'
                ></svg>
                <span className='visually-hidden'>YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom animate-slide-in'>
        <div className='footer-bottom-wrapper page-width'>
          <div className='footer-column isolate'></div>
          <div className='footer-column footer-info'>
            <div className='footer-payment'>
              <span className='visually-hidden'>Payment methods</span>
              <ul className='list-payment list' role='list'></ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom-wrapper page-width footer-center'>
          <div className='footer-copyright caption'>
            <small className='copyright-content'>
              © 2024,{" "}
              <a href='/' title=''>
                My Store
              </a>
            </small>
            <small className='copyright-content'>
              <a
                target='_blank'
                rel='nofollow'
                href='http://es.shopify.com/?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore'
              >
                Powered by Shopify
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
