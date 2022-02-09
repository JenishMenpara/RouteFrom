//import logo from './logo.svg';
import './App.css';
import Sidebar from './Componets/Sidebar';
import Createdata from './Componets/Create-data';
import Changedata from './Componets/Changedata';
import Viewdata from './Componets/Viewdata'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <div className='maindiv'>
    <BrowserRouter>
				<Routes>
					<Route path="/" element={ <Sidebar/>}>
						<Route path="/Createdata" element={<Createdata />} />
						<Route path="/Changedata/:id" element={<Changedata />} />
						<Route path="/Viewdata" element={<Viewdata />} />
					</Route>
				</Routes>
			</BrowserRouter>
    </div>
   
    </>
  );
}

export default App;
