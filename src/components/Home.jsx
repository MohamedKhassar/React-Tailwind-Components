import { FaIdCard } from "react-icons/fa"
import { FiHome, FiSearch } from "react-icons/fi"
import { TbLockOpenOff } from "react-icons/tb"
import { Link } from "react-router-dom"

const Home = () => {
    const links = [
        { title: 'Home', path: '/', icon: FiHome },
        { title: 'search', path: '/search', icon: FiSearch },
        { title: 'card', path: '/card', icon: FaIdCard },
        { title: 'switch', path: '/switch', icon: TbLockOpenOff },
    ]
    return (
        <ul className="space-x-5 flex items-center">
            {
                links.map((link, i) =>
                    <li key={i} className="bg-violet-200 text-violet-900 p-2 rounded-md flex items-center font-semibold capitalize hover:bg-violet-300 transition-colors">
                        <link.icon className="w-5 h-5 mr-2" />  {/* Import the icon component */}
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Home