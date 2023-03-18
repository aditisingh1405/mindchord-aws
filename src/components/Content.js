import img2 from '../images/img2.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.png';
import img6 from '../images/img6.jpg';
import '../css/Content.css';

function Content() {
    return (
        <div className="container">
            <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                <div className="col-12 col-sm-6">
                    <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                </div>
                <div className="col-12 col-sm-6">
                    <h1>About Us</h1>
                    <p className="media-text">My name is Aditya Singh. I am a 4th year undergraduate student of the Department of Computer Science and Engineering in IIT Kharagpur. I have considerable experience in the areas of software development, competitive programming, AI/Machine Learning and web design. I also enjoy playing guitar and piano, composing music and playing video games.</p>
                </div>
            </div>
            <hr></hr>
            <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                <div className="col-12 col-sm-6">
                    <h1>Clinical Depression</h1>
                    <p className="media-text">
                        Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest.
                        Also called major depressive disorder or clinical depression, it affects how you feel, think and
                        behave and can lead to a variety of emotional and physical problems. You may have trouble doing
                        normal day-to-day activities, and sometimes you may feel as if life isn't worth living.
                        More than just a bout of the blues, depression isn't a weakness and you can't simply "snap out" of it.
                        Depression may require long-term treatment including medication, psychotherapy or both.
                    </p>
                </div>
                <div className="col-12 col-sm-6">
                    <img className="mr-3 img-thumbnail align-self-center" src={img4} width="500" alt="Uthappizza" />
                </div>
            </div>
            <hr></hr>
            <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                <div className="col-12 col-sm-6">
                    <img className="mr-3 img-thumbnail align-self-center" src={img5} width="500" alt="Uthappizza" />
                </div>
                <div className="col-12 col-sm-6">
                    <h1>Anxiety attacks</h1>
                    <p className="media-text">
                        Anxiety is a normal reaction to danger, the automatic fight-or-flight response that is triggered
                        when you feel threatened, under pressure, or are facing a challenging situation, such as a job interview, exam, or first date.
                        Anxiety attacks, also known as panic attacks, are episodes of intense panic or fear. They usually
                        occur suddenly and without warning. If you have an anxiety disorder, you may respond to certain things and situations with fear and dread.
                        You may also experience physical signs of anxiety, such as a pounding heart and sweating.
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                <div className="col-12 col-sm-6">
                    <h1>Mood swings</h1>
                    <p className="media-text">My name is Aditya Singh. I am a 4th year undergraduate student of the Department of Computer Science and Engineering in IIT Kharagpur. I have considerable experience in the areas of software development, competitive programming, AI/Machine Learning and web design. I also enjoy playing guitar and piano, composing music and playing video games.</p>
                </div>
                <div className="col-12 col-sm-6">
                    <img className="mr-3 img-thumbnail align-self-center" src={img6} width="500" alt="Uthappizza" />
                </div>
            </div>
        </div>
    );
  }

  export default Content;
