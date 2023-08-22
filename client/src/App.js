import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
// import LandingPage from './components/LandingPage';
// import Home from './components/Home';
// import DogCreate from './components/DogCreate';
// import Detail from './components/Detail';
import './App.css';
import Form from './Component/Form/Form';

function App() {
  return (
    <Router>
      {' '}
      <div className='App'>
        {' '}
        <h1>ACA PAULA LA MEJOR</h1>
        <Form></Form> {/* <Route exact path='/' element={<LandingPage />} /> */}
        {/* <Route path='/home' element={<Home />} /> */}
        {/* <Route path='/dog' element={<DogCreate />} /> */}
        {/* <Route path='/dog/:id' element={<Detail />} /> */}
      </div>
    </Router>
  );
}

export default App;
