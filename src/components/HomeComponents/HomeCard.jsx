import Card from '../Card/Card'
import Back from '../Back'
const HomeCard = () => {
    return (
        <div className='m-14'>
            <Back title="card" />

            <div className='flex justify-center gap-x-6 m-24'>
                <Card />
            </div>
        </div>
    )
}

export default HomeCard