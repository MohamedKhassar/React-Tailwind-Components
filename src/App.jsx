import { Route, Routes } from 'react-router-dom'
import HomeSideBar from "./components/HomeComponents/HomeSideBar"
import HomeCard from "./components/HomeComponents/HomeCard"
import HomeSwitch from "./components/HomeComponents/HomeSwitch"
import HomeButton from "./components/HomeComponents/HomeButton"
import HomeModal from "./components/HomeComponents/HomeModal"
import HomeToast from "./components/HomeComponents/HomeToast"
import Home from './Home'

const App = () => {
  const links = [
    { link: "sidebar", Element: HomeSideBar },
    { link: "card", Element: HomeCard },
    { link: "switch", Element: HomeSwitch },
    { link: "button", Element: HomeButton },
    { link: "modal", Element: HomeModal },
    { link: "toast", Element: HomeToast },
  ]
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {
        links.map(({ link, Element }, i) => (
          <Route key={i} path={link} element={<Element />} />
        ))
      }
    </Routes>
  )
}

export default App