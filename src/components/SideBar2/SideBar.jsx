import { useState } from "react";
import SideBarTrigger from "./SideBarTrigger";
import { LuChartArea, LuLayoutDashboard } from "react-icons/lu";
import { FiSettings, FiUsers } from "react-icons/fi";
import { MdInventory } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi";

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const selectMenu = (title) => {
        setMenus(prev => {
            return prev.map(menu =>
                menu.title === title ? { ...menu, selected: true } : { ...menu, selected: false }
            )
        }
        )
    }
    const [menus, setMenus] = useState([
        { title: "Dashboard", selected: true, Icon: LuLayoutDashboard },
        { title: "Statics", selected: false, Icon: LuChartArea },
        { title: "Users", selected: false, Icon: FiUsers },
        { title: "Inventory", selected: false, Icon: MdInventory },
        { title: "Settings", selected: false, Icon: FiSettings, gap: true },
        { title: "Help", selected: false, Icon: HiQuestionMarkCircle },
    ])
    return (
        <div className="flex">
            <div className={`${open ? "w-72" : "w-20"} px-5 h-screen bg-dark-purple relative transition-[width] duration-700 space-y-8`}>
                <SideBarTrigger setOpen={setOpen} open={open} />
                <ul className="relative">
                    {menus.map((menu, i) => (
                        <li key={i}
                            onClick={() => selectMenu(menu.title)}
                            className={`text-gray-300 transition-all duration-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md side-item ${menu.gap ? "mt-9" : "mt-2"} ${menu.selected ? "bg-zinc-500/50" : "hover:bg-light-white"}`}
                        >
                            <menu.Icon className="min-h-6 min-w-6" />
                            <span className={`text-white text-nowrap origin-left duration-500 ${open ? "scale-100" : "scale-0 delay-200"}`}>{menu.title}</span>
                            <span className={`${!open && "tooltip"} invisible absolute left-16 p-2 rounded-md bg-dark-purple/30 text-dark-purple transition-colors`}>{menu.title}</span>
                        </li>
                    ))}
                    <div className="absolute h-9 bg-zinc-50 rounded-lg top-2 left-2 right-2 -z-10 transition-[top,left] duration-500">

                    </div>
                </ul>
            </div>
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1>Home page</h1>
            </div>
        </div>
    )
}

export default SideBar