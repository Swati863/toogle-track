import "./App.css";

import ForgotPassword from "./components/ForgotPassword";
// import Login from "./Page/Login";
// import Signup from "./Page/Signup";

import AllRoutes from "./routes/AllRoutes";

import "./App.css";
import TopNavbar from "./components/TopNavbar";
function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Login /> */}
      {/* <ForgotPassword /> */}
      <TopNavbar />
      <AllRoutes />
    </div>
  );
}

export default App;
