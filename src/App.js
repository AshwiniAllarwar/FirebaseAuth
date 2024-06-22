import logo from './logo.svg';
import './App.css';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';


function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header py-10">
            <Routes>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Signin/>}/>
              <Route path="/" element={<Signin/>}/>
              <Route path="/home" element={<Home/>}/>
            </Routes>
          </header>
        </div>
      </Router>
  );
}

export default App;
