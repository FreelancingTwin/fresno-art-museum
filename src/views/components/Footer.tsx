import {FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaCopyright} from 'react-icons/fa'

const footer = () => {
  return (
    <div className='footer'>
      <section className="footerBoxes visitUs">
          <p>Yellow brick road,</p>
          <p>Fresno,</p>
          <p>California,</p>
          <p>123 - (4567) - 890</p>
          <button className="newsletterButton">Paln your visit</button>
      </section>

      <section className="footerBoxes connect">
          <h1>connect with us</h1>
          <div className="socials">
            <FaFacebook className="social"/>
            <FaTwitter className="social"/>
            <FaInstagram className="social"/>
            <FaYoutube className="social"/>
          </div>
      </section>

      <section className="footerBoxes newsletter">
          <h1>Join the Newsletter!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nesciunt magni, veniam perferendis exercitationem nemo illum obcaecati corrupti deserunt sint?</p>
          <button className="newsletterButton">Newsletter</button>
      </section>

      <section className="footerBoxes links">
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Visit</a>
          <a href="">Store</a>
          <a href="">Exhibitions</a>
          <a href="">Events</a>
          <a href="">Education</a>
          <a href="">Support</a>
          <a href="">Donate</a>
      </section>
      <section className=" footerBoxes copyright">
          <FaCopyright/> <h6>Fresno Art Museum</h6>
      </section>

    </div>
  )
}

export default footer
