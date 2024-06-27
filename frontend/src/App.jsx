import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Test3 from "./Test3";
import Test2 from './Test2';
import RegisterUser from './authentication/RegisterUser';
import Login from './authentication/Login';


function App() {


  return (
    <>
<NavigationBar />
    
    <Routes >

      <Route path="/test3" element={<Test3 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path = "/login" element = {<Login/>}/>
        <Route path = "/registration" element = {<RegisterUser/>}/>

    </Routes>
    </>
  )
}

export default App
