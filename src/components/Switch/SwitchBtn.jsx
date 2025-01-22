import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const SwitchBtn = forwardRef(function SwitchBtn({ checked, ...rest }, forwardedRef) {
    return (
        <div className='flex justify-center my-10'>
            <label className='w-24 cursor-pointer'>
                <input type="checkbox" {...rest} ref={forwardedRef} className='hidden' />
                <div
                    className={`${checked ? "bg-green-700 shadow-green-700" : "bg-red-300  shadow-red-300"} transition-[background-color,shadow] duration-500 w-full p-1 rounded-full shadow-md`}
                >
                    <div className={`${checked ? "bg-white/30" : "bg-black/30"} transition-colors duration-300 rounded-full p-1`}>
                        <div className={`${checked ? "bg-green-800 text-green-950 translate-x-12" : "bg-red-200 text-red-900 -rotate-180"} p-2 w-fit rounded-full transition-all duration-300`}>
                            {checked ? <FaCheck /> : <FaX />}
                        </div>
                    </div>
                </div>
            </label>
        </div >
    )
})


SwitchBtn.propTypes = {
    checked: PropTypes.bool,
}

export default SwitchBtn