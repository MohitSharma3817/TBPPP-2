import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainBody from './components/MainBody';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  console.log('App component rendered');
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainBody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;