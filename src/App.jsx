import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Body";
import About from "./About";
import NavBar from "./NavBar";


const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      
    </>
  );
};

export default App;
