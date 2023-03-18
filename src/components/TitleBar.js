import '../css/TitleBar.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import Carousel from 'react-bootstrap/Carousel';

function TitleBar() {
    return (
      <div className="TitleBar">
        <div className="jumbotron">
            <div className="container-fluid">
                <div className="row row-header">
                    <div className="col-12 col-sm-6 align-self-center">
                        <h1 id="name">Hello</h1>
                        <p id="slogan">Some random slogan</p>
                    </div>
                    <div className="col-12 col-sm-6 align-self-center">
                        <Carousel>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img1}
                                alt="First slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img2}
                                alt="Second slide"
                            />
                            </Carousel.Item>
                            <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img3}
                                alt="Third slide"
                            />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  export default TitleBar;
