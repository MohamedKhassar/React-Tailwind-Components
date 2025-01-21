import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const SideBarItem = ({ expanded, Icon, title, selected, alert, ...rest }) => {
    const handleTooltip = (e) => {
        // Check if the target is a button
        if (e.target.tagName === "BUTTON" && !expanded) {
            // Find the element with id="tooltip" within the button
            const tooltip = e.target.querySelector('#tooltip');
            if (tooltip) {
                // Toggle the classes for visibility
                if (tooltip.classList.contains('hidden')) {
                    tooltip.classList.replace('hidden', 'block');
                } else if (tooltip.classList.contains('block')) {
                    tooltip.classList.replace('block', 'hidden');
                }
            }
        }
    };


    return (
        <button data-tooltip-id="my-tooltip" data-tooltip-content={title} onMouseLeave={handleTooltip} onMouseEnter={handleTooltip} {...rest} className={`${expanded ? "w-full" : "w-fit"} relative rounded-md py-3 cursor-pointer  transition-colors duration-500 px-4 flex items-center gap-2 capitalize font-semibold mt-4 ${selected ? "bg-violet-300 text-violet-950" : "hover:bg-violet-100"} outline-none`}>
            <Icon className={`${expanded ? "size-fit" : "size-5"}`} />
            {
                expanded ?
                    <p>{title}</p>
                    :
                    <ReactTooltip noArrow id="my-tooltip"
                        effect="solid"
                        place='right-start'
                        arrowColor="transparent"
                        className='violet'
                    />

            }

            {
                alert &&
                <span className={`absolute ${expanded ? "right-4 top-3" : "top-1 right-1"} bg-violet-800 h-2 w-2 rounded-full`}></span>
            }
        </button>
    )
}

export default SideBarItem