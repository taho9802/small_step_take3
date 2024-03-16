import headshot from "./../assets/headshot.jpg"

const About = () => {
    return (
        <div id="about" className="max-w-full md:pl-1 py-16 bg-black">
            <div className="max-w-[1000px] md:block flex m-auto flex-col justify-center pl-4 pr-4 lg:items-start items-center">
                <h1 className="md:text-4xl text-3xl font-bold text-left text-white">About</h1>
                <span className="w-[200px] bg-white block h-[2px]"></span>
                <img src={headshot} className="w-[25%] rounded-full inline-block float-right pt-4"/>
                <h2 className="text-white pt-4 inline-block md:text-2xl text-1xl w-[70%]">
                Hi! I&apos;m Taewoo, and I aspire to be a software developer. This website marks my first successful project using React, Tailwind CSS, and Vite. 
                I’m currently exploring various fields within computer science to find my specialty. I have a growing interest in autonomous systems as I believe they have significant potential to enhance human productivity and, most importantly, safety.
                 Driven by this interest, I have recently started experimenting with computer vision and deep learning.
                </h2>
                <h2 className="text-white inline-block pt-4 md:text-2xl text-1xl md:w-[100%] w-[70%]">
                    My favorite part about this field is the type of people I meet. I am a firm believer in open communication.
                </h2>
            </div>
        </div>
    )
}

export default About