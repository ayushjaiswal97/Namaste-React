const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
                <h2 className="text-xl text-gray-600 text-center mb-8">Feel free to contact us</h2>
                
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-2">Name</label>
                        <input 
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email" 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Message</label>
                        <textarea
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            rows="5"
                            placeholder="Enter your message"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
