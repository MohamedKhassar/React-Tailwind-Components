import { AnimatePresence } from "framer-motion"
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs"

const SideBarTitle = ({ expanded,
    setExpanded }) => {
    return (
        <div className={`flex ${expanded ? "justify-between" : "justify-center"} p-4 items-center border-b border-stone-400`}>
            <div className={`flex items-center gap-3 rounded cursor-pointer transition-colors duration-500 ${expanded ? "w-full" : "w-0"}`} >
                <img src="/imgs/menu.png" className="size-8" alt="" />
                <h1 className={`text-xl font-medium ${!expanded && "hidden"}`}>Mohamed Khassar</h1>
            </div>
            <button className="bg-stone-100 p-2 hover:bg-violet-100 hover:text-violet-900 transition-colors rounded-lg  duration-500" onClick={() => setExpanded(!expanded)}>
                {
                    expanded ?
                        <BsChevronBarLeft className="size-6 stroke-1" />
                        :
                        <BsChevronBarRight className="size-6 stroke-1" />
                }
            </button>
        </div>
    )
}

export default SideBarTitle