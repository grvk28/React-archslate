import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './comonents/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/a' element=''></Route>
        <Route path='/b' element=''></Route>
        <Route path='/c' element=''></Route>
        <Route path='/d' element=''></Route>
      </Routes>

    </div>
  );
}

export default App;
