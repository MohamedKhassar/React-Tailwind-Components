import PropTypes from "prop-types"
import { useRef, useState } from "react"

const ButtonItem = ({ label, Icon, color, ...rest }) => {
    const [hovered, setIsHovered] = useState(false)
    const btnRef = useRef()

    return (
        <button className={`capitalize flex items-center overflow-hidden group ${color} p-2 text-xl rounded-lg text-white`} {...rest}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Icon className="min-w-7 duration-300 transition-all" />
            <div
                style={{
                    width: hovered && btnRef.current.offsetWidth | 0,
                }}
                className={`overflow-x-hidden w-0  transition-all ease-out duration-300`}>
                <span className="px-1.5" ref={btnRef}>
                    {label}
                </span>
            </div>
        </button>
    )
}

ButtonItem.propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired,
    color: PropTypes.string.isRequired,
    btnRef: PropTypes.object.isRequired
}

export default ButtonItem