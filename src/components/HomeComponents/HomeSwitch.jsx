import Back from "../Back"
import Switch from "../Switch/Switch"

const HomeSwitch = () => {
    return (
        <div className='m-14'>
            <Back title="switch" />
            <div className='flex justify-center gap-x-6 m-24'>
                <Switch />
            </div>
        </div>
    )
}

export default HomeSwitch