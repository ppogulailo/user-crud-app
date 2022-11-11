import { Route, Routes } from 'react-router-dom';
import HelloComponent from './components/FirstScreen/FirstScreen';
import MainScreen from './components/MainScreen/MainScreen';
import UserCard from './components/User/userCard';
import './App.css';
import NoMatch from './components/404/NoMatch';

function App() {
  return (
        <Routes>
            <Route path='/' element={<HelloComponent/>}></Route>
            <Route path='/main' element={<MainScreen/>}></Route>
            <Route path='/user/:id' element={<UserCard/>}></Route>
            <Route path='*' element={<NoMatch/>}></Route>
        </Routes>
  );
}

export default App;
