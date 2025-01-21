import PropTypes from "prop-types"
import { IoIosArrowBack } from "react-icons/io"

const SideBarTrigger = ({ open, setOpen }) => {
    return (
        <>
            <button className="absolute cursor-pointer -right-3 top-9 size-8 bg-white border-2 border-dark-purple text-zinc-400 rounded-full p-1 flex justify-center items-center" onClick={() => setOpen(pre => !pre)}>
                <IoIosArrowBack className={`${open ? "rotate-0" : "rotate-180"} transform transition-transform duration-500`} />
            </button>
            <div className="flex items-center gap-x-2 overflow-hidden">
                <img src="/imgs/menu.png" className={`size-12 cursor-pointer duration-1000 ${open && "rotate-[360deg]"}`} alt="" />
                <h1 className={`text-white text-nowrap origin-left font-medium text-xl duration-1000 ${open ? "scale-100" : "scale-0"}`}>Mohamed Khassar</h1>
            </div></>
    )
}
SideBarTrigger.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
}
export default SideBarTrigger