import './App.css';
import Birthday from "./Birthday"
import GeneratedBirthday from './GeneratedBirthday';
import GenerateNewBirthday from './GenerateNewBirthday';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Birthday/>} />
          <Route
            exact
            path='/birthday/:name?/:day?/:month?'
            element={<GeneratedBirthday />}
          />
          <Route exact path='/generate' element={<GenerateNewBirthday/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
