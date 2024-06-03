/* components */
import Navbar from '../../components/Navbar/Navbar'
import Welcome from '../../components/Welcome/Welcome'
import Wsp from '../../components/options/Wsp'

export default function Home () {

    return (
        <div className='flex flex-col gap-10 pt-16' >
            <Navbar />
            <Welcome />
            <Wsp />
        </div>
    )
}