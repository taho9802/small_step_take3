import ProjectItem from "../components/ProjectItem";
import sign_lang_proj from '../assets/sign_lang_proj.png';

const Projects = () => {
    return (
        <div id='projects' className="w-full md:pl-1 py-16">
            <div className="max-w-[1000px] m-auto">
                <div className="md:block flex flex-col justify-center lg:justify-end items-center">
                    <h1 className="md:text-4xl text-3xl font-bold text-right text-black">Projects</h1>
                    <div className="flex justify-end">
                        <span className="w-[200px] justify-end bg-black block h-[2px]"></span>
                    </div>
                    <p className="text-black text-right inline-block pt-4 md:text-2xl text-1xl md:pl-1 md:w-[100%] w-[70%]">
                        Here are some of the projects I have worked on, more coming soon!
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 m-4">
                    <ProjectItem img={sign_lang_proj} title="Sign Language Recognition" tech="Python, OpenCv, Tensorflow, Scikit-learn"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects