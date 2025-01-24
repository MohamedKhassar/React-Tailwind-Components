import Back from "../Back"
import Button from "../Button/Button"

const HomeButton = () => {
    return (
        <div className='m-14'>
            <Back title="button" />
            <div className='flex justify-center gap-x-6 m-24'>

                <Button />
            </div>
        </div>
    )
}

export default HomeButton
