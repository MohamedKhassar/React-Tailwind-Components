
import { useState } from "react"
import SideBarItem from "./SideBarItem"
import SideBarTitle from "./SideBarTitle"
import { LuLayoutGrid } from "react-icons/lu"
import { AiOutlineBarChart } from "react-icons/ai"
import { BiSupport, BiUser } from "react-icons/bi"
import { MdInventory } from "react-icons/md"
import { FiBox, FiSettings } from "react-icons/fi"
import { LiaMoneyBillWaveSolid } from "react-icons/lia"
const SideBar1 = () => {
    const [expanded, setExpanded] = useState(false)
    const [btnData, setBtnData] = useState([
        { id: 1, alert: true, selected: true, name: "dashboard", icon: LuLayoutGrid },
        { id: 2, alert: false, selected: false, name: "statics", icon: AiOutlineBarChart },
        { id: 3, alert: false, selected: false, name: "users", icon: BiUser },
        { id: 4, alert: false, selected: false, name: "inventory", icon: MdInventory },
        { id: 5, alert: true, selected: false, name: "orders", icon: FiBox },
        { id: 6, alert: false, selected: false, name: "billings", icon: LiaMoneyBillWaveSolid },
        { id: 7, alert: false, selected: false, name: "settings", icon: FiSettings },
        { id: 8, alert: false, selected: false, name: "help", icon: BiSupport },
    ])

    const handelSelected = (id) => {
        setBtnData(prev => {
            return prev.map(btn =>
                btn.id === id ?
                    { ...btn, selected: true } :
                    { ...btn, selected: false }
            )
        })
    }
    return (

        <div
            className={`flex flex-col justify-between bg-white rounded-md h-full ${!expanded ? "w-fit" : "w-96"}`}>
            <div>
                <SideBarTitle expanded={expanded} setExpanded={setExpanded} />
                <div className="px-4 space-y-2">

                    {btnData.slice(0, 6).map(btn =>
                        <SideBarItem expanded={expanded} onClick={() => handelSelected(btn.id)} alert={btn.alert} key={btn.id} Icon={btn.icon} title={btn.name} selected={btn.selected} />

                    )}
                </div>
                <div className="border-t border-stone-200 my-3 space-y-2 px-4">
                    {btnData.slice(6).map(btn =>
                        <SideBarItem expanded={expanded} onClick={() => handelSelected(btn.id)} alert={btn.alert} key={btn.id} Icon={btn.icon} title={btn.name} selected={btn.selected} />

                    )}

                </div>
            </div>
            <div className="sticky flex items-center gap-3 border p-4">
                <img src="https://ui-avatars.com/api/?background=c7d2fe&name=%22mohamed%20khassar%22&color=3730a3" className="size-12 rounded-md" alt="" />
                <div className={`${!expanded && "hidden"}`}>
                    <p className="text-xl font-semibold text-[#3730a3]">Mohamed Khassar</p>
                    <p className="text-sm text-stone-500">mohamedkhassar775@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar1