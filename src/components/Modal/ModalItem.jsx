import PropTypes from 'prop-types'
import { FiX } from 'react-icons/fi'
import { IoTrash } from 'react-icons/io5'

const ModalItem = ({ show, setShow }) => {
    return (
        <div className={`bg-white p-6 flex flex-col items-center justify-center rounded-xl w-fit gap-y-4 ${show ? "scale-100 visible opacity-100" : "scale-75 opacity-0 invisible"} transition-[transform,opacity,visibility] duration-300`}>
            <IoTrash className="self-center size-14 fill-red-500" />
            <h1 className='text-2xl font-semibold capitalize'>confirm delete</h1>
            <p className='text-xs text-stone-400 text-center font-medium mx-7 w-64'>Lorem ipsumadipisicing elit. Odit nihil consequuntur vero commodi voluptatibus ratione animi</p>
            <div className='space-x-7'>
                <button className='py-2 px-8 capitalize font-semibold shadow rounded-lg bg-red-600 hover:bg-red-700 duration-300 text-white'>delete</button>
                <button onClick={() => setShow(false)} className='py-2 px-8 capitalize font-semibold shadow rounded-lg bg-white hover:bg-stone-50 duration-300'>cancel</button>
            </div>
            <FiX className='size-6 cursor-pointer text-stone-500 absolute top-4 right-4' onClick={() => setShow(false)} />
        </div>
    )
}

ModalItem.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
}
export default ModalItem