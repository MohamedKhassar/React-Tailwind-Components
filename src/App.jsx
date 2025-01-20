import { Route, Routes } from "react-router-dom"
import SideBar from "./components/SideBar/SideBar"
import Home from "./components/Home"

const App = () => {
  return (
    <div className="m-4 h-[calc(100vh-40px)] flex justify-center">
      <Routes>
        <Route path="/search" element={<SideBar />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App