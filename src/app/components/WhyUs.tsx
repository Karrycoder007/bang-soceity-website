export default function WhyUs() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-5xl md:text-5xl font-bold mb-10 text-blue-800">
        Why Us?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Trusted Brand
          </h3>
          <p className="text-gray-700">
            Karnataka State Co-operative Societies Association is a well known Association Since 2000.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Best Service
          </h3>
          <p className="text-gray-700">
            We Are &quot;All About You&quot;. We believe in complete satisfaction to our clients.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-blue-700">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To consistently enhance our competitiveness and deliver profitable growth.
          </p>
        </div>
      </div>
    </section>
  );
}
