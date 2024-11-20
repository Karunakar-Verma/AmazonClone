
import './App.css';
import { NavbarBanner } from './Components/Navbar/navbarBanner/navbarBanner';
import { Navbarbelt } from './Components/Navbar/navbarbelt/navbarbelt';
import { Navbar } from './Components/Navbar/navbar';
import { HomeScreen } from './Screen/homeScreen/homeScreen';
import {Routes, Route} from 'react-router-dom'; 
import { Products } from './Screen/Products/products';
import {Cart} from './Screen/Cart/cart';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<HomeScreen/>}/>
        <Route path = '/Products' element = {<Products/>}/>
        <Route path = '/Cart' element = {<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
