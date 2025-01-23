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
        <div className="flex w-full rounded-lg overflow-hidden">
            <div className={`${open ? "w-72" : "w-20"} px-5 h-full bg-dark-purple relative transition-[width] duration-700 space-y-8`}>
                <SideBarTrigger setOpen={setOpen} open={open} />
                <ul className="relative">
                    {menus.map((menu, i) => (
                        <li key={i}
                            onClick={() => selectMenu(menu.title)}
                            className={`group text-gray-300 transition-all duration-500 text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md side-item ${menu.gap ? "mt-9" : "mt-2"} ${menu.selected ? "bg-zinc-500/50" : "hover:bg-light-white"}`}
                        >
                            <menu.Icon className="min-h-6 min-w-6" />
                            <span className={`text-white text-nowrap origin-left duration-500 ${open ? "scale-100" : "scale-0 delay-200"}`}>{menu.title}</span>
                            <span className={`${open ? "invisible" : "group-hover:opacity-100 group-hover:visible"} invisible opacity-0 absolute left-16 p-2 rounded-md bg-dark-purple/30 text-dark-purple transition-[background,opacity] duration-300`}>{menu.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar