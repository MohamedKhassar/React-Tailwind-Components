import { BiArrowBack } from 'react-icons/bi'
import SideBar1 from '../SideBar1/SideBar1'
import SideBar from '../SideBar2/SideBar'
import { useNavigate } from 'react-router-dom'

const HomeSideBar = () => {
    const router = useNavigate()
    return (
        <div className='flex justify-center w-full gap-x-6 m-24'>
            <button onClick={() => router(-1)} className='absolute left-5 top-5 py-3 px-5 rounded-md bg-slate-800 text-white flex items-center text-xl font-medium gap-x-2'><BiArrowBack />Back</button>
            <SideBar1 />
            <SideBar />
        </div>
    )
}

export default HomeSideBar