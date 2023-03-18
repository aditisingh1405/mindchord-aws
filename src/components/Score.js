import { useLocation } from "react-router-dom";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import '../css/Content.css'
import img2 from '../images/img2.jpg';

function Score() {
    const location = useLocation();
    var problem = location.state.survey;
    var score = location.state.score;

    return(
        <div className="Score">
            <div id="survey-backg" className="container-fluid">
                <div className="scorecard">
                    According to the survey you just took, we have calculated the following scores
                    <hr />
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-4">
                            Anxiety<br/><br/>
                            <CircularProgressbar value={score[0]} text={`${score[0]}%`}/>
                        </div>
                        <div className="col-12 col-sm-4">
                            Depression<br/><br/>
                            <CircularProgressbar value={score[1]} text={`${score[1]}%`} />
                        </div>
                        <div className="col-12 col-sm-4">
                            Mood Swings<br/><br/>
                            <CircularProgressbar value={score[2]} text={`${score[2]}%`} />
                        </div>
                    </div>
                    <hr />
                    <h1>Musical therapy suggestions</h1>
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-6">
                            <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Anxiety</h1>
                            <p className="media-text">You are showing an {score[0]}% chance of being afflicted with anxiety.
                            The following songs can help you soothe your anxiousness.
                            <ul>
                                <li>Ambient 1: Music For Airports by Brian Eno</li>
                                <li>Pieds-en-L'Air by Capriol Suite</li>
                                <li>Om Namah Shivaya by Deva Premal</li>
                                <li>Someone Like You by Adele</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-6">
                            <h1>Depression</h1>
                            <p className="media-text">You are showing an {score[1]}% chance of being afflicted with depression.
                            The following songs can help you at times when you're feeling depressed.
                            <ul>
                                <li>Three Little Birds by Bob Marley</li>
                                <li>Alive by Sia</li>
                                <li>I wont't give up by Jason Mraz</li>
                                <li>Eye of the Tiger by Survivor</li>
                                <li>Dancing Queen by Abba</li>
                            </ul>
                            </p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                        </div>
                    </div>
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-6">
                            <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Mood Swings</h1>
                            <p className="media-text">You are showing an {score[2]}% chance of being afflicted with mood swings.
                            The following songs can help you control your mood better.
                            <ul>
                                <li>Ambient 1: Music For Airports by Brian Eno</li>
                                <li>Pieds-en-L'Air by Capriol Suite</li>
                                <li>Om Namah Shivaya by Deva Premal</li>
                                <li>Someone Like You by Adele</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <h1>People you can reach</h1>
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-6">
                            <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Blah blag blah</h1>
                            <p className="media-text">More blah blah blah</p>
                        </div>
                    </div>
                    <div className="row row-content align-items-center" style={{padding:"30px 0px"}}>
                        <div className="col-12 col-sm-6">
                            <img className="mr-3 img-thumbnail align-self-center" src={img2} width="500" alt="Uthappizza" />
                        </div>
                        <div className="col-12 col-sm-6">
                            <h1>Blah blag blah</h1>
                            <p className="media-text">More blah blah blah</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;
