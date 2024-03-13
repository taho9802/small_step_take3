import React from 'react'
import backgroundImage from './../assets/main_background.png'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-left scale-x-[-1]' src={backgroundImage} />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div>
                    <h1>My name is Taewoo Hong</h1>
                </div>
            </div>
        </div>
    )
}

export default Main