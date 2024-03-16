import { TypeAnimation } from 'react-type-animation'
import backgroundImage from './../assets/background2.jpg'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main' className='z-0'>
            <img className='w-full h-screen relative object-cover object-center scale-x-[-1] z-[-99]' src={backgroundImage} />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/5'>
                <div className='max-w-[1000px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-100'>My name is Taewoo Hong</h1>
                    <h2 className='flex-row sm:text-3xl text-2xl pt-4 text-gray-200'>
                    <TypeAnimation
                        preRenderFirstString={true}
                        sequence={[
                            500,
                            'I am a',
                            2000,
                            'I am a coder',
                            2000,
                            'I am a developer',
                            2000,
                            'I am a tech enthusiast who loves learning',
                            500,
                        ]}
                        wrapper='div'
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', display: 'inline-block' }}
                    />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaInstagram className  size={20} color='white'/>
                        <FaFacebook  className  size={20} color='white'/>
                        <FaLinkedin className  size={20} color='white'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main