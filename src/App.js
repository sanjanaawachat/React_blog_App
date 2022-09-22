import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavScrollExample from './Components/Navbar';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from './Components/Heading';
import Bollywoodpage from './Pages/Bollywoodpage';
import Fitnesspage from './Pages/Fitnesspage';
import Hollywoodpage from './Pages/Hollywoodpage';
import Technologypage from './Pages/Technologypage';
import Foodpage from './Pages/Foodpage';
import PageNotFound from './Pages/PageNotFound';
import ContentPage from './Pages/ContentPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Heading/>
      <NavScrollExample/>
      <Routes>
        <Route>
          <Route path='/'element={<Homepage/>}/>
          <Route path='/Bollywood'element={<Bollywoodpage/>}/>
          <Route path='/Fitness'element={<Fitnesspage/>}/>
          <Route path='/Hollywood'element={<Hollywoodpage/>}/>
          <Route path='/Technology'element={<Technologypage/>}/>
          <Route path='/Food'element={<Foodpage/>}/>
          <Route path='/article/:articleTitle/:articleCategory' element={<ContentPage/>}></Route>
         <Route path='*' element={<PageNotFound/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
