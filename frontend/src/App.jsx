import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Test3 from "./Test3";
import Test2 from './Test2';


function App() {


  return (
    <>
<NavigationBar />
    
    <Routes >

      <Route path="/test3" element={<Test3 />} />
      <Route path="/test2" element={<Test2 />} />

    </Routes>
    </>
  )
}

export default App
