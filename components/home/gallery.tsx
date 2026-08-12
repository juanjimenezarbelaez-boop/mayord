import { images } from "@/lib/data"

const galleryImages = [
  { src: images.gallery1, alt: "Store exterior" },
  { src: images.gallery2, alt: "Waiting area" },
  { src: images.gallery3, alt: "Mechanic working" },
  { src: images.gallery4, alt: "Stack of tires" },
]

export default function Gallery() {
  return (
    <section className="bg-brand-dark py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h4 className="text-brand-orange font-label font-bold tracking-wider mb-4">
            VISIT OUR SHOP
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">COME SEE US!</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.alt}
              className="bg-brand-surface rounded-xl overflow-hidden aspect-square border border-brand-surface-light"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
