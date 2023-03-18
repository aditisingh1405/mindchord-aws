import '../css/Contacts.css'
import TitleBar from "./TitleBar"
import Footer from "./Footer"
import { faEnvelope, faFax, faPhone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img6 from '../images/img6.jpg'
import Button from 'react-bootstrap/Button';

function Contacts() {
    return (
        <div className="Contacts">
            <TitleBar />
            <div className="container">
                <div className="row row-content align-items-center">
                    <div className="col-12">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="col-12 col-sm-5 offset-sm-1">
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;+852 1234 5678<br />
                            <FontAwesomeIcon icon={faFax} />&nbsp;&nbsp;+852 1234 5678<br />
                            <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<a href="mailto:confusion@food.net">sample@email.net</a><br />
                        </address>
                    </div>
                    <div className="col-12 col-sm">
                        <img className="mr-3 img-thumbnail align-self-center" src={img6} width="500" alt="Uthappizza" />
                    </div>
                </div>
                <div class="row row-content align-items-center">
                    <div class="col-12">
                        <h3>Send your Feedback</h3>
                    </div>
                    <div class="col-12">
                        <form>
                            <div class="form-group row">
                                <label for="firstname" class="col-md-2 col-form-label">First Name</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lastname" class="col-md-2 col-form-label">Last Name</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="telnum" class="col-12 col-md-2 col-form-label">Contact Tel.</label>
                                <div class="col-md-10">
                                    <input type="tel" class="form-control" id="telnum" name="telnum" placeholder="Tel. number" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="emailid" class="col-md-2 col-form-label">Email</label>
                                <div class="col-md-10">
                                    <input type="email" class="form-control" id="emailid" name="emailid" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="feedback" class="col-md-2 col-form-label">Your Feedback</label>
                                <div class="col-md-10">
                                    <textarea class="form-control" id="feedback" name="feedback" rows="12"></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col">
                                    <Button className="submit-btn">Submit feedback</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contacts;
