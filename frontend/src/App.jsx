import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Test3 from "./Test3";
import Test2 from './Test2';
import RegisterUser from './authentication/RegisterUser';
import Login from './authentication/Login';
import AdvertisementDetails from './advertisement/AdvertisementDetails';
import Advertisements from './advertisement/Advertisements';
import Home from './Home';
import CreateAdvertisement from './advertisement/CreateAdvertisement';
import EditAdvertisement from './advertisement/EditAdvertisement';


function App() {


  return (
    <>
<NavigationBar />
    
    <Routes >

      <Route path="/test3" element={<Test3 />} />
      <Route path="/test2" element={<Test2 />} />
      <Route path = "/login" element = {<Login/>}/>
        <Route path = "/registration" element = {<RegisterUser/>}/>
        <Route path='/advertisement/:id' element={<AdvertisementDetails />} />
        <Route path = "/advertisements" element = {<Advertisements/>}/>
        <Route path = "/createAdd" element = {<CreateAdvertisement/>}/>
        <Route path = "/editAdd" element = {<EditAdvertisement/>}/>
        <Route path = "/" element = {<Home/>}/>


    </Routes>
    </>
  )
}

export default App
