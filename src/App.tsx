import {Route, Routes } from "react-router-dom";
import HelloComponent from "./components/helloComponent";
import UserComponent from "./components/userComponent";
import UserCard from "./components/userCard";
import './App.css'
function App() {



    return (
        <Routes>
            <Route path='/' element={<HelloComponent/>}></Route>
            <Route path='/usercomponent' element={<UserComponent/>}></Route>
            <Route path='/user/:id' element={<UserCard/>}></Route>
        </Routes>
    );
}

export default App;
