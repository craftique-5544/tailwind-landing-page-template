export default function FeaturesHome() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl font-bold mb-4">Why Join Friendly?</h2>
            <p className="text-xl text-gray-600">Connecting you with the right people for the right moments.</p>
          </div>

          {/* Items */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
              <h4 className="text-xl font-bold mb-2">Verified Profiles</h4>
              <p className="text-gray-600">Every member is verified to ensure a safe and genuine experience.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
              <h4 className="text-xl font-bold mb-2">Interest Matching</h4>
              <p className="text-gray-600">Find people who share your hobbies, from gaming to coffee chats.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center">
              <h4 className="text-xl font-bold mb-2">Safe & Private</h4>
              <p className="text-gray-600">Your privacy is our priority. Control who can connect with you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
