import GetStarted from './components/GetStarted/GetStarted'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import { Form } from './components/form/Form';

function App() {
  return (
    <>
    <Router>
      
      <Routes>
        <Route path='/' exact 
        element = {<GetStarted/>}/>
        <Route path='/form' exact 
        element = {<Form/>}/>
        
      </Routes>
    </Router>
        
      
    </>
  );
}

export default App;
