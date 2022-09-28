
import './App.css';
import AllRoutes from './routes/AllRoutes';

import "./App.css";
import Features from "./components/Features";
import TopNavbar from "./components/TopNavbar";


function App() {
  return (
    <div className="App">
        <AllRoutes/>
   <TopNavbar />
      <Features />
    </div>
  );
}

export default App;
