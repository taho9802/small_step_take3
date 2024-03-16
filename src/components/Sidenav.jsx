import { useState } from 'react'
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        console.log(nav)
    }
    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='fixed top-4 right-4 z-[100] md:hidden' color='white' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[99]'>
                        <a onClick={handleNav} href='#main' className='w-[75%] flex justify-center items-center rounded-full show-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav} href='#about' className='w-[75%] flex justify-center items-center rounded-full show-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
                            <GrProjects size={20} />
                            <span className='pl-4'>about</span>
                        </a>
                        <a onClick={handleNav} href='#projects' className='w-[75%] flex justify-center items-center rounded-full show-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick={handleNav} href='#resume' className='w-[75%] flex justify-center items-center rounded-full show-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
                            <BsPerson size={20} />
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a onClick={handleNav} href='#contact' className='w-[75%] flex justify-center items-center rounded-full show-lg bg-gray-200 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 hover:bg-gray-300'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                    ''
                )
            }
            <div className='md:block hidden fixed top-[50%] translate-y-[-50%] right-4 z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome size={20}/>
                    </a>
                    <a href='#about' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson size={20}/>
                    </a>
                    <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject size={20}/>
                    </a>
                    <a href='#resume' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects size={20}/>
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail size={20}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav