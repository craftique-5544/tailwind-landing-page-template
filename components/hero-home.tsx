export default function HeroHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          
          {/* Hero content */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Because Sometimes, <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">Everyone Needs a Friend</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Find genuine companions for conversations, gaming, studying, coffee chats, city tours, events, and more.
              </p>
              
              {/* Buttons */}
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0 px-8 py-3 rounded-full shadow-lg transition duration-150 ease-in-out" href="#0">
                    Find a Friend
                  </a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 px-8 py-3 rounded-full shadow-lg transition duration-150 ease-in-out" href="#0">
                    Become a Friend
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
