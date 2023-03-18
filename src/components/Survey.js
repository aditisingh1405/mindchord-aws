import React, { useState } from 'react';
import '../css/Survey.css'
import Button from 'react-bootstrap/Button';
import { Navigate } from "react-router-dom";

function Survey() {

    const [dict, setdict] = useState({});
    const [score, setScore] = useState([]);
    const [flag, setFlag] = useState(false);
    const [qno, setqno] = useState(1);

    const setValue = (e) => {
        var copy = {...dict};
        copy[qno] = e.target.value;
        setdict(copy);
    };

    const doNext = (e) => {
        if (qno in dict) {
            setqno(qno+1);
        }
        else {
            alert("Pick an option please!");
        }
    };

    const submitValues = () => {
        const vals = Object.values(dict);
        var anx_score = parseInt(0);
        var dep_score = parseInt(0);
        var ms_score = parseInt(0);

        for (var i = 0; i < 6; ++i) {
            anx_score = anx_score+parseInt(vals[i]);
        }

        for (var i = 6; i < 15; ++i) {
            dep_score = dep_score+parseInt(vals[i]);
        }

        for (var i = 15; i < 19; ++i) {
            ms_score = ms_score+parseInt(vals[i]);
        }

        anx_score = Math.round(anx_score*4);
        dep_score = Math.round((dep_score*24)/9);
        ms_score = Math.round(ms_score*6);

        var score = [anx_score, dep_score, ms_score];

        setScore(score);
        setFlag(true);
    }

    const questions = [
        "I feel nervous or anxious without any particular reason",
        "I worry too much on different things and constantly think about it",
        "I try but am not able to control worrying",
        "I have trouble relaxing",
        "I become easily irritated and annoyed",
        "I feel frightened about the future that something awful may happen",
        "I have little interest or pleasure in doing things",
        "I feel very sad and hopeless at times",
        "I have trouble falling asleep",
        "I feel tired the whole day",
        "I have trouble concentrating on things",
        "I have poor appetite",
        "I move or speak slowly and avoid interactions",
        "I feel like worthless and harming myself",
        "I have difficulty in doing my daily routine tasks",
        "I feel extreme highs and lows",
        "I go through a period of sadness without any particular reason",
        "My relationships are affected due to shifts in my mood",
        "My mood shifts are impacting my ability to function"
    ]

    return (
        <div className="Survey">
            <div id="survey-backg" className="container-fluid">
                {/* <form className="survey">
                    <div className="form-group row">
                        <label for="firstname" className="col-form-label">Q1</label>
                        <div onChange={setValue.bind(this)}>
                            <input type="radio" value={1} name='Q1'/> 1<br />
                            <input type="radio" value={2} name='Q1'/> 2<br />
                            <input type="radio" value={3} name='Q1'/> 3<br />
                            <input type="radio" value={4} name='Q1'/> 4<br />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="firstname" className="col-form-label">Q2</label>
                        <div onChange={setValue.bind(this)}>
                            <input type="radio" value={1} name='Q2'/> 1<br />
                            <input type="radio" value={2} name='Q2'/> 2<br />
                            <input type="radio" value={3} name='Q2'/> 3<br />
                            <input type="radio" value={4} name='Q2'/> 4<br />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="firstname" className="col-form-label">Q3</label>
                        <div onChange={setValue.bind(this)}>
                            <input type="radio" value={1} name='Q3'/> 1<br />
                            <input type="radio" value={2} name='Q3'/> 2<br />
                            <input type="radio" value={3} name='Q3'/> 3<br />
                            <input type="radio" value={4} name='Q3'/> 4<br />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="firstname" className="col-form-label">Q4</label>
                        <div onChange={setValue.bind(this)}>
                            <input type="radio" value={1} name='Q4'/> 1<br />
                            <input type="radio" value={2} name='Q4'/> 2<br />
                            <input type="radio" value={3} name='Q4'/> 3<br />
                            <input type="radio" value={4} name='Q4'/> 4<br />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="firstname" className="col-form-label">Q5</label>
                        <div onChange={setValue.bind(this)}>
                            <input type="radio" value={1} name='Q5'/> 1<br />
                            <input type="radio" value={2} name='Q5'/> 2<br />
                            <input type="radio" value={3} name='Q5'/> 3<br />
                            <input type="radio" value={4} name='Q5'/> 4<br />
                        </div>
                    </div>
                    <div className="form-group row align-self-center">
                        <Button className="submit-btn" onClick={submitValues.bind(this)}>Submit</Button>
                    </div>
                </form>
                {flag && <Navigate to="/score" state={{ score: score, survey: 'Depression'}} replace={true} />} */}
                <div className="survey">
                    Question {qno}/{questions.length}
                    <div className="container">
                        <div className="row justify-content-center">
                            Q{qno}. {questions[qno-1]}
                        </div>
                        <div className="row justify-content-center">
                            <div className="options">
                                <label><input type="radio" value={0} checked={dict[qno] == 0} onChange={setValue.bind(this)} name="option"/>Never</label>
                                <label><input type="radio" value={1} checked={dict[qno] == 1} onChange={setValue.bind(this)} name="option"/>Rarely</label>
                                <label><input type="radio" value={2} checked={dict[qno] == 2} onChange={setValue.bind(this)} name="option"/>Sometimes</label>
                                <label><input type="radio" value={3} checked={dict[qno] == 3} onChange={setValue.bind(this)} name="option"/>Often</label>
                                <label><input type="radio" value={4} checked={dict[qno] == 4} onChange={setValue.bind(this)} name="option"/>Always</label>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            {(qno != questions.length) && <Button className="submit-btn" onClick={doNext.bind(this)}>Next</Button>}
                            {(qno == questions.length) && <Button className="submit-btn" onClick={submitValues.bind(this)}>Finish test</Button>}
                        </div>
                    </div>
                </div>
                {flag && <Navigate to="/score" state={{ score: score }} replace={true} />}
            </div>
        </div>
    );
}

export default Survey;
