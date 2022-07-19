import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ItemListContainer}></Route>
      <Route path='category/:categoryName' element={ItemListContainer} />
      <Route path='category/:itemId' element={ItemDetailContainer} />
      <Route path='/Cart' element={<Cart />}></Route>
    </Routes>
    <ItemListContainer />
    <ItemDetailContainer />
    </BrowserRouter>
  );
}

export default App;
