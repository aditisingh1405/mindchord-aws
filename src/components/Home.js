import Button from 'react-bootstrap/Button';
import '../css/Home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home vertical-center">
            <div className="container">

                <div className="box1">
                  <h1>Music<br></br>Therapy</h1>
                </div>

                <div className="box1">
                  <div className="box2">
                      <h2>Get music suggestions</h2>
                  </div>
                  <div className="box2">
                      <h2> | </h2>
                  </div>
                  <div className="box2">
                      <h2>Connect with experts</h2>
                  </div>
                </div>

                <div className="box1">
                    <Link to='/survey'><Button className="test-btn">TAKE THE TEST</Button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
