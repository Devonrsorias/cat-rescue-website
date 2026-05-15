export default function App() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900">
      <section className="bg-orange-200 py-20 px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Help Sick Cats Get a Second Chance
        </h1>

        <p className="text-xl mb-8">
          Donations help rescue and treat sick cats worldwide.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded-2xl text-lg">
          Donate Now
        </button>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-3">Luna</h2>
            <p className="mb-4">Needs surgery for a broken leg.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl">
              Donate
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=1200&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-3">Milo</h2>
            <p className="mb-4">Fighting a serious infection.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl">
              Donate
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511044568932-338cba0ad803?q=80&w=1200&auto=format&fit=crop"
            className="h-64 w-full object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-3">Bella</h2>
            <p className="mb-4">Needs emergency eye treatment.</p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl">
              Donate
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <h2 className="text-3xl font-bold mb-3">Paws of Hope</h2>
        <p>Helping sick cats around the world.</p>
      </footer>
    </div>
  )
}
