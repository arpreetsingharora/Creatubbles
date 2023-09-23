import {useLocation, useNavigate} from 'react-router-dom';
import Button from "react-bootstrap/Button";
import '../CSS/Result.css'
import quizBack from '../Images/quiz.jpg'


const Result = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const { totalQues, correctAnswers} = location.state;

    const navHomePage = () =>{

        navigate('/');
    }

    return (
        <div className="rs-image-container">
            <img src={quizBack} alt="Your Image" className="rs-image" />
                <div className="rs-text-overlay">
                    <div className='rs-heading'> RESULTS</div>
                    <div className='rs-congratsHeading'>{correctAnswers > 1  ? 
                            (<div>"Well done champ"</div>):
                            (<div>"Better luck next time"</div>)}                   
                    </div>
                    <br></br>
                    <div className='rs-resultDisplay'> Total Questions : {totalQues} </div>
                    <br></br>
                    <div className='rs-resultDisplay'> Questions Answered Correctly : {correctAnswers} </div>                   
                    <br></br>
                    <Button variant="primary" className='rs-homeButton' size='lg' onClick={navHomePage}>
                        Click to go back to Home Page
                    </Button>
                </div>
        </div>
    )
}

export default Result;