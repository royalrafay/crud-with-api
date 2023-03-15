import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { CreateUser } from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='create' element={<CreateUser/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
