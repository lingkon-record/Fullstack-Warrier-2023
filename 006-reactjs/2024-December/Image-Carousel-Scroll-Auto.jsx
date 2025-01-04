"use client";

import { useEffect, useRef } from "react";

function App() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    let scrollAmount = 0;
    const scrollStep = 2; // Speed of scrolling
    const interval = setInterval(() => {
      if (carousel) {
        scrollAmount += scrollStep;
        carousel.scrollLeft += scrollStep;

        // Reset scroll to start when reaching the end
        if (scrollAmount >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
          scrollAmount = 0;
        }
      }
    }, 30); // Frequency of scrolling

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-gray-800">
        <main className="container mx-auto py-10 px-4">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Image Carousel</h2>
            <div
              ref={carouselRef}
              className="flex space-x-4 overflow-hidden scrollbar-hide"
              style={{ scrollBehavior: "smooth" }}
            >
              <img
                src="https://pixlr.com/images/generator/how-to-generate.webp"
                alt="Creative Image Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://pixlr.com/images/generator/photo-generator.webp"
                alt="Photo Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                alt="Autumn Leaves"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://pixlr.com/images/generator/how-to-generate.webp"
                alt="Creative Image Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://pixlr.com/images/generator/photo-generator.webp"
                alt="Photo Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                alt="Autumn Leaves"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://pixlr.com/images/generator/how-to-generate.webp"
                alt="Creative Image Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://pixlr.com/images/generator/photo-generator.webp"
                alt="Photo Generator"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
              <img
                src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                alt="Autumn Leaves"
                className="rounded-lg shadow-md flex-shrink-0 w-60"
              />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
