import "./App.css";
import SignUp from "../Auth/Authentication/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "../Auth/Authentication/SignIn/SignIn";
import Layout from "../components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import show from "./show/show";
function App() {
  show();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="/Register" element={<SignUp />} />
          <Route path="/Login" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
