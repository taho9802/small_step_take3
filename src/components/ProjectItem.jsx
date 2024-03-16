import { PropTypes } from 'prop-types';

const ProjectItem = ({img, title, tech}) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl rounded-xl group hover:bg-gradient-to-r from-gray-200 to-black">
            <img src={img} alt='/' className="rounded-xl  group-hover:opacity-10"/>
            <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
                <h3 className='md:text-2xl text-1xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='pb-3 pt-2 text-white text-center'>
                    {tech}
                </p>
                <a href='/'>
                    <p className='text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>
                        More Info
                    </p>
                </a>
            </div>
        </div>
    )
}

ProjectItem.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    tech: PropTypes.string,
}

export default ProjectItem