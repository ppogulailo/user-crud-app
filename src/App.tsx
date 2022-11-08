import {Route, Routes } from "react-router-dom";
import HelloComponent from "./components/helloComponent";
import UserComponent from "./components/userComponent";

function App() {
  return (
      <Routes>
         <Route path='/' element={<HelloComponent/>}></Route>
          <Route path='/usercomponent' element={<UserComponent/>}></Route>
      </Routes>
  );
}

export default App;
