export default function Header() {
  return (
    <header className="fixed w-full z-30 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 mr-4">
            <a href="/" className="text-2xl font-bold text-blue-600">Friendly</a>
          </div>
          {/* Nav Buttons */}
          <div className="flex items-center">
            <a href="/signin" className="text-gray-600 hover:text-gray-900 px-4 py-2 text-sm font-medium">Login</a>
            <a href="/signup" className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full">Sign up</a>
          </div>
        </div>
      </div>
    </header>
  )
}
