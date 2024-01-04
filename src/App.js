
import './App.css';

import data from "./data/data.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from './components/Listgenerator';
import Layout from './pages/Layouts';
import NoPage from './pages/Nopage';

//const dataObject = JSON.parse(JSON.stringify(data));
const dataObject = data;


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listpage" element={<List />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>  
      
  );
}

export default App;
