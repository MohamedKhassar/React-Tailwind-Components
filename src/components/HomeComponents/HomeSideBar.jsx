import Back from '../Back'
import SideBar1 from '../SideBar1/SideBar1'
import SideBar from '../SideBar2/SideBar'

const HomeSideBar = () => {
    return (
        <div className='m-14'>
            <Back title="sidebar" />
            <div className='flex justify-center gap-x-6 m-24'>
                <SideBar1 />
                <SideBar />
            </div>
        </div>
    )
}

export default HomeSideBar