import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Account from './pages/account/Account';
import MyEcoHome from './pages/myecohome/MyEcoHome';
import Games from './pages/games/Games';
import Login from './users/Login';
import Register from './users/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} index />
        <Route path='/about' element={<About />} index />
        <Route path='/account' element={<Account />} index />
        <Route path='/games' element={<Games />} index />
        <Route path='/myecohome' element={<MyEcoHome />} index />
        <Route path='/login' element={<Login />} index />
        <Route path='/register' element={<Register />} index />
      </Routes>
    </>
  );
}

export default App;
