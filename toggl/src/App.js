
import './App.css';

import ForgotPassword from './components/ForgotPassword';
import Login from './Page/Login';
import Signup from './Page/Signup';

import AllRoutes from './routes/AllRoutes';

import "./App.css";
import Features from "./components/Features";
import TopNavbar from "./components/TopNavbar";



function App() {
  return (
    <div className="App">

      {/* <Signup /> */}
      <Login />
      {/* <ForgotPassword /> */}
        <AllRoutes/>
   <TopNavbar />
      <Features />

    </div>
  );
}

export default App;
