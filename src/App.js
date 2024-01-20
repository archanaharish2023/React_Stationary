import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Services from "./Pages/Support";
import Dashboard from './Pages/Dashboard1';

function App() {
  return (
    <>
      
        <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/support" element={<Services/>} />
          </Routes>
          </Layout>
        </BrowserRouter>
      
    </>
  );
}

export default App;
