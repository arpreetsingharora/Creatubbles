import React from "react";
import ReactLoading from "react-loading";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/FirstLoad.css'
import quizBack from '../Images/quiz.jpg'


const FirstLoad = () => {

  const [loading, setLoading] = useState(true);
  const [quizQues,updateQuizQues] = useState([]);

  useEffect(() => {
    fetchQuizQues();
    }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3300)
  }, [])

  let fetchQuizQues =  async () => {
        
      await axios.get("questions")
           .then((res) => 
           {
               console.log("result");
               console.log(res.data);
               updateQuizQues(res.data);
           });
  }


    if (loading) {
        return (
      <div className="fl-image-container">
        <img src={quizBack} alt="Your Image" className="fl-image" />
        <div className="fl-loading-overlay">
          <ReactLoading
            type="bars"
            color="white"
            height={500}
            width={300}
            className="fl-loadingBar"
        />
        </div>
          <div className="fl-loadtext-overlay">
          <p>PLEASE WAIT <br></br> WHILE QUIZ IS LOADING</p>
        </div>
      </div>   )
    }

    return (
        <Navigate to="/Quiz" state={quizQues}/>
    );
}

export default FirstLoad;