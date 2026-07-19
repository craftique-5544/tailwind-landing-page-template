export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full mt-1 p-3 border border-gray-300 rounded-lg" placeholder="••••••••" />
          </div>
          
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 font-medium">Sign up</a>
        </p>
      </div>
    </div>
  )
}
