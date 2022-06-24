import logo from './logo.svg';
import Home from './components/home'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation'
import Games  from './components/games';
import Quiz from './components/quiz';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App">
     
     <Navigation/>
      <Routes>
        
          <Route exact path='/home' element={< Home />}></Route>
          {/* {/* <Route exact path='/nft' element={< Nft />}></Route> */}
          <Route exact path='/games' element={< Games />}></Route> 
          <Route exact path='/quiz' element={< Quiz />}></Route>

      </Routes>
    </div>
  );
}

export default App;
