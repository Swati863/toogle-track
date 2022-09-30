import "./App.css";

import ForgotPassword from "./components/ForgotPassword";
// import Login from "./Page/Login";
// import Signup from "./Page/Signup";
import './App.css';
import Faqs from './Faqs';
import Footer from './Footer/Footer';

import ForgotPassword from './components/ForgotPassword';
import Login from './Page/Login';
import Signup from './Page/Signup';
import AllRoutes from './Router/AllRoutes';


import AllRoutes from "./routes/AllRoutes";

import "./App.css";
import TopNavbar from "./components/TopNavbar";
function App() {
  return (
    <div className="App">

      <AllRoutes />
      <Faqs />
      {/* <Footer /> */}

      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <TopNavbar />
   <TopNavbar />
      <Features />
    </div>
  );
}

export default App;
