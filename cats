export default function SickCatsDonationWebsite() {
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
                <p className="text-gray-600 mb-5">{cat.issue}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{cat.raised} raised</span>
                    <span>{cat.goal} goal</span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-orange-500 h-3 rounded-full"
                      style={{ width: '55%' }}
                    />
                  </div>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-2xl font-semibold transition">
                  Donate for {cat.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-3xl shadow-lg bg-orange-50">
            <h3 className="text-5xl font-bold mb-3">150+</h3>
            <p className="text-gray-700">Cats Rescued</p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg bg-orange-50">
            <h3 className="text-5xl font-bold mb-3">$20K+</h3>
            <p className="text-gray-700">Raised for Treatments</p>
          </div>

          <div className="p-8 rounded-3xl shadow-lg bg-orange-50">
            <h3 className="text-5xl font-bold mb-3">40+</h3>
            <p className="text-gray-700">Successful Recoveries</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-orange-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Together we can help abandoned and sick cats receive the care they deserve.
          </p>

          <button className="bg-black text-white px-10 py-4 rounded-2xl text-lg shadow-xl hover:scale-105 transition">
            Donate Today
          </button>
        </div>
      </section>

      <footer className="bg-black text-white py-10 text-center">
        <h3 className="text-2xl font-bold mb-3">Paws of Hope</h3>
        <p className="text-gray-300">
          Helping sick cats around the world.
