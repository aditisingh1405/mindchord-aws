import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import '../css/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div class="row">
            <div class="col-12 col-sm-6 offset-3 align-self-center">
                <p><b>Follow us on</b></p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 offset-3 align-self-center">
                <ul>
                <li><a href="https://www.instagram.com/adityasingh390402/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li><a href="https://www.instagram.com/adityasingh390402/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://www.linkedin.com/in/aditya-singh-847ab3167"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Footer;
