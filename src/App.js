import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './components/Home';
import { CreateUser } from './components/CreateUser';
import { UserDeatailView } from './components/userDetailView';
import { EditUser } from './components/edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='create' element={<CreateUser/>}/>
        <Route path="view/:Id" element={<UserDeatailView/>}/>
        <Route path="edit/:Id" element={<EditUser/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
