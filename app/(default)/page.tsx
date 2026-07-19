export default function Home() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Because Sometimes, Everyone Needs a Friend
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Find genuine companions for conversations, gaming, studying, coffee chats, and more.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/signup" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}
