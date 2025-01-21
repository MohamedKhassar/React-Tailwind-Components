import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar2/SideBar"
import Home from "./components/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/search" element={<SideBar />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App