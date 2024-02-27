import footerImg from "./icons_assets/restaurant.jpg"
function Footer(){
  return (
    <footer>
    <article className="company-info">
      <section className="img">
        <img src={footerImg} alt="Restaurant's outdoors" />
      </section>
      <section className="nav">
        <nav>
          <ul>
            <h3> Useful links</h3>
            <li>About Us</li>
            <li>Reservations</li>
            <li>Image Gallery</li>
            <li>Our franchises</li>
          </ul>
        </nav>
      </section>
      <section className="contact-info">
        <ul>
          <h3>Contact us</h3>
          <li>9780976002</li>
          <li>littlelemon@gmail.com</li>
          <li>Raise a query</li>
          <li>Feedback form</li>
        </ul>
      </section>
      <section className="social-icons">
        <ul>
          <h3>Social Platforms</h3>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Whatsapp</li>
        </ul>
      </section>
    </article>
    <p id="copy" style={{textAlign: "center"}}> &copy; Copyright Little lemon</p>
  </footer>
  );
}
export default Footer;
