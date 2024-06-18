import {Routes, Route} from 'react-router-dom'

import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Table from './pages/table/Table';

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/table-page' element={<Table/>}/>
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
