import Home from "./Components/Home.js";
import Quiz from "./Components/Quiz.js";
import FirstLoad from "./Components/FirstLoad.js"
import Result from "./Components/Result.js"
import Instructions from "./Components/Instructions.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quiz" exact element={<Quiz />} />
          <Route path="/FirstLoad" exact element={<FirstLoad />} />
          <Route path="/Result" exact element={<Result />} />
          <Route path="/Instructions" element={<Instructions />} />
        </Routes>
      </Router>
    </div>
  );


  
}

export default App;