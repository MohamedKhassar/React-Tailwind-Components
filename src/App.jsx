import SideBar from "./components/SideBar2/SideBar"
import Card from "./components/Card/Card"
import Switch from "./components/Switch/Switch"
import SideBar1 from "./components/SideBar1/SideBar1"
import { RiSideBarFill } from "react-icons/ri"
import { BiCard } from "react-icons/bi"
import { AiFillSwitcher } from "react-icons/ai"

const App = () => {
  return (
    <div className="space-y-20 my-6">
      <div className="space-y-8">
        <h1 className="text-5xl text-center flex justify-center items-center gap-8"><RiSideBarFill className="size-8 text-dark-purple" /> SideBar</h1>
        <SideBar1 />
        <hr className="border-black" />
        <SideBar />
        <hr className="border-black" />
      </div>
      <div className="space-y-8">
        <h1 className="text-5xl text-center flex justify-center items-center gap-8"><BiCard /> Cards</h1>
        <Card />
        <hr className="border-black" />
      </div>
      <div className="space-y-8">
        <h1 className="text-5xl text-center flex justify-center items-center gap-8"><AiFillSwitcher /> Switchs</h1>
        <Switch />
      </div>
    </div>
  )
}
export default App