import React from "react";
import Button from "react-bootstrap/Button";
import {useLocation, useNavigate} from 'react-router-dom';
import '../CSS/Home.css'
import quizBack from '../Images/quiz.jpg'

const Home = () => {

    const navigate = useNavigate();

    const navLoadingPage = () =>{

        navigate('/FirstLoad');
    }

    const navInstructPage = () =>{

        navigate('/Instructions');
    }


    return (
    <div className="hm-image-container">
        <img src={quizBack} alt="Your Image" className="hm-image" />
        <div className="hm-text-overlay">
            <p className='hm-text-display'>Welcome to the</p>
            <p className='hm-text-display2'>SuperQuizApp</p>
            <br></br>
            <br></br>
            <Button variant="primary" className='hm-startButton' size='lg' onClick={navLoadingPage}>
                Click to get started
            </Button>
            <br></br>
            <br></br>
            <Button variant="primary" className='hm-instructionsButton' size='lg' onClick={navInstructPage}>
                Click to read Instructions
            </Button>
        </div>
    </div>)
}

export default Home;