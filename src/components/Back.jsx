import PropTypes from 'prop-types'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Back = ({ title }) => {
    const router = useNavigate()

    return (
        <>
            <h1 className="text-center font-bold lg:text-5xl text-3xl capitalize bg-gradient-to-r from-cyan-700 via-sky-700 to-blue-500 bg-clip-text text-transparent">{title} Component</h1>
            <button onClick={() => router(-1)} className='absolute left-5 top-5 py-3 px-5 rounded-md bg-slate-800 text-white flex items-center text-xl font-medium gap-x-2'><BiArrowBack />Back</button>
        </>
    )
}

Back.propTypes = {
    title: PropTypes.string.isRequired,  // Add required prop type here

}
export default Back