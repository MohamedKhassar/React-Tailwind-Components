import { useState } from 'react'
import SwitchBtn from './SwitchBtn'

const Switch = () => {
    const [enable, setEnable] = useState(false)
    return (

        <>
            <SwitchBtn checked={enable} onClick={e => setEnable(e.target.checked)} />
        </>
    )
}

export default Switch