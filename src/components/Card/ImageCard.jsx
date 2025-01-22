import PropTypes from "prop-types"

const ImageCard = ({ children, imgSrc, ...rest }) => {
    return (
        <div {...rest} className="relative max-w-sm rounded-md overflow-hidden max-h-[35.5rem] group">
            <img loading="lazy" src={imgSrc} alt="" className="group-hover:scale-150 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent group-hover:backdrop-blur-[2px]">
                <div className="p-4 text-white space-y-3 relative top-full group-hover:top-0 transition-[top,position] duration-300">
                    {children}
                </div>
            </div>
        </div>
    )
}
ImageCard.propTypes = {
    children: PropTypes.node.isRequired,
    imgSrc: PropTypes.string.isRequired,
}
export default ImageCard