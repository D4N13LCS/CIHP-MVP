import './App.css';
import MainLayout from './layouts/MainLayout';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import FormLayout from './layouts/FormLayout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout> </MainLayout>}>
          <Route index element={<Home/>}/>
          <Route path="Login" element={<FormLayout/>}>
              <Route index element={<Login/>}/>
          </Route>
          <Route path="SignUp" element={<FormLayout/>}>
              <Route index element={<Signup/>}/>
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
