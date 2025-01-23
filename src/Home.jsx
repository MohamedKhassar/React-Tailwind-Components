import { Link } from "react-router-dom"
import ImageCard from "./components/Card/ImageCard"

const Home = () => {
    const components = [
        { id: 1, imgSrc: "/imgs/SideBar.jpg", desc: "Build a Retractable Sidebar Component purely in ReactJS and TailwindCSS", label: "SideBar", link: "sidebar" },
        { id: 2, imgSrc: "/imgs/Card.jpg", desc: "Custom card component in ReactJS and TailwindCSS", label: "Card", link: "card" },
        { id: 3, imgSrc: "/imgs/Switch.jpg", desc: "Custom switch component with transitions in React", label: "Switch", link: "switch" },
        { id: 4, imgSrc: "/imgs/Button.jpg", desc: "Animated icon button component in React and Tailwind CSS", label: "Button", link: "button" },
        { id: 5, imgSrc: "/imgs/Modal.jpg", desc: "Build a Modal Component purely in ReactJS and TailwindCSS", label: "Modal", link: "modal" },
        { id: 5, imgSrc: "/imgs/Toast.jpg", desc: "Build a Toast Notification Service purely in ReactJS and TailwindCSS", label: "Toast", link: "toast" },
        { id: 5, imgSrc: "/imgs/Plan.jpg", desc: "Build a Plan Selection Page with Custom Radio Component using React and TailwindCss", label: "Plan", link: "Plan" },
    ]
    return (
        <div className="m-16">
            <h1 className="text-center font-bold lg:text-5xl text-3xl capitalize bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-500 bg-clip-text text-transparent">react tailwindCss components</h1>
            <div className="my-16 flex flex-wrap gap-8">
                {
                    components.map(({ id, imgSrc, label, link, desc }) => (
                        <Link to={`/${link}`} key={id}>
                            <ImageCard imgSrc={imgSrc}>
                                <h1 className="text-3xl font-semibold text-stone-300">{label}</h1>
                                <p className="text-sm font-medium text-stone-400">{desc}</p>
                            </ImageCard>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Home