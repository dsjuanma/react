import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  //Esto es la parte de Js
  
  return (
    <BrowserRouter> 
      <div className="App">
        <header className="App-header">
         <Navbar/>
          <Routes>          
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
              
                
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
