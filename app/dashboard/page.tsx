export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to your Friendly Hub</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2">Find Connections</h2>
            <p className="text-gray-600 mb-4">Browse profiles of people who share your interests.</p>
            <button className="text-blue-600 font-medium hover:underline">Explore →</button>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
            <p className="text-gray-600 mb-4">Update your interests and bio to help others find you.</p>
            <button className="text-blue-600 font-medium hover:underline">Edit Profile →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
