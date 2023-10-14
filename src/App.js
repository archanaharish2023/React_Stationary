import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ListData from './components/ListData';

function App() {
  return (
 <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<ListData/>}/>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
