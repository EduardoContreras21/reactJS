import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import Item from './components/item';
import CustomProvider from './Context/CartContext'

import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <CustomProvider>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryName' element={<Item />} />
      <Route path='/servicio/:itemId' element={<ItemDetailContainer />} />
      <Route path='/Cart' element={<Cart />}></Route>
    </Routes>
    </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
