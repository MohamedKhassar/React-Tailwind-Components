import Back from "../Back"
import Modal from "../Modal/Modal"

const HomeModal = () => {
    return (
        <div className='m-14'>
            <Back title="modal" />
            <div className='flex justify-center gap-x-6 m-24'>
                <Modal />
            </div>
        </div>
    )
}

export default HomeModal