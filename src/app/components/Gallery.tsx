import Image from "next/image";
import Link from "next/link";

const GalleryComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Gallery Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-8 text-black p-4">
        Gallery of Excellence
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="relative w-full h-64">
          <Image
            src="/18.jpg"
            alt="Gallery Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-full h-64">
          <Image
            src="/20.jpg"
            alt="Gallery Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="relative w-full h-64">
          <Image
            src="/19.jpg"
            alt="Gallery Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Button to navigate to Gallery Page */}
      <div className="flex justify-center mt-6">
        <Link href="/gallery">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
            View Full Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GalleryComponent;
