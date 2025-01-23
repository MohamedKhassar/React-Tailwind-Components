import { FiFacebook, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi"
import ButtonItem from "./ButtonItem"
import { FaXTwitter } from "react-icons/fa6"

const Button = () => {
    const btns = [
        {
            id: 1, label: "@mohamedkhassar", icon: FiGithub, color: "bg-slate-800",
        },
        {
            id: 2, label: "in/@mohamedkhassar", icon: FiLinkedin, color: "bg-blue-800",
        },
        {
            id: 3, label: "@mohamedkhassar", icon: FiInstagram, color: "bg-gradient-to-tr from-yellow-500 to-purple-500 via-pink-500",
        },
        {
            id: 4, label: "@mohamedkhassar", icon: FiFacebook, color: "bg-blue-600"
        },
        {
            id: 5, label: "@mohamedkhassar", icon: FaXTwitter, color: "bg-slate-900"
        }
    ]
    return (
        <div className="flex flex-wrap justify-center items-center">
            <div className="p-3 rounded-lg border-stone-600 border-dashed border-2 w-fit flex justify-center items-center gap-x-4">
                {btns.map(btn => (
                    <ButtonItem Icon={btn.icon} color={btn.color} label={btn.label} key={btn.id} />
                ))}
            </div>
        </div>
    )
}

export default Button