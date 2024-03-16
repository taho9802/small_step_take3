
const Contact = () => {
    return (
        <div id="contact" className="w-full md:pl-1 py-16 bg-white">
            <div className="max-w-[1000px] md:block flex m-auto flex-col justify-center pl-4 pr-4 lg:items-start items-center">
                <h1 className="md:text-4xl text-3xl font-bold text-left text-black">Contact</h1>
                <span className="w-[200px] bg-black block h-[2px] mt-4 mb-4"></span>
                <form action="https://getform.io/f/zazokdxb" method="POST" encType="multipart/form-data">
                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Name</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="name" />
                        </div>
                        <div className="flex flex-col">
                            <label className="uppercase text-sm py-2">Phone</label>
                            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="phone" />
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="uppercase text-sm py-2">Email</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="uppercase text-sm py-2">Subject</label>
                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="subject" />
                    </div>
                    <div className="flex flex-col w-full">
                        <label className="uppercase text-sm py-2">Message</label>
                        <textarea className="border-2 rounded-lg p-3 border-gray-300" name="message" rows="10"></textarea>
                    </div>
                    <button type="submit" className="bg-black text-gray-100 p-3 mt-4 w-full rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact