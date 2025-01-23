import ModalItem from "./ModalItem"
import { useState } from "react"

const Modal = () => {
    const [show, setShow] = useState(false)
    return (
        <div className={"flex justify-center items-center flex-col gap-y-5 relative"}>
            {!show &&
                <button className="py-3 px-8 bg-red-700 text-red-200 capitalize font-semibold shadow rounded-md hover:bg-red-800 transition-colors duration-300" onClick={() => setShow(true)}>delete</button>
            }

            <ModalItem setShow={setShow} show={show} />
        </div>
    )
}

export default Modal