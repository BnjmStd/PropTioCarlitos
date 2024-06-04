/* components */
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Welcome from '../../components/Welcome/Welcome'
import Wsp from '../../components/options/Wsp'

export default function Home () {

    return (
        <div className='relative flex flex-col min-h-screen w-full'>
            <Navbar />
            <main className='flex-grow flex justify-center items-center'>
                <Welcome />
            </main>
            <Wsp />
            <Footer />
        </div>
    )
}