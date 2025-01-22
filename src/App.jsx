import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar2/SideBar"
import Home from "./components/Home"
import Card from "./components/Card/Card"

const App = () => {
  return (
    <Routes>
      <Route path="/search" element={<SideBar />} />
      <Route path="/" element={<Home />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  )
}

export default App