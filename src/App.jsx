import { BrowserRouter, Route, Routes } from "react-router"
import Body from "./Body"


const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/home" element={<div>Home</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App