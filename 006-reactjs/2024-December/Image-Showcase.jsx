"use client"
// import { useState } from 'react'


function App() {

  return (
    <>
    
    <div className="bg-gray-100 text-gray-800">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Professional Image Showcase</h1>
                <p className="text-lg">Explore images in a variety of layouts</p>
            </header>

            <main className="container mx-auto py-10 px-4">
                {/* Full-Width Hero Image */}
                <section className="mb-12">
                    <img 
                        src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" 
                        alt="Abstract Autumn Leaves" 
                        className="w-full rounded-lg shadow-lg" 
                    />
                </section>

                {/* Grid Layout */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Image Grid</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        <img 
                            src="https://pixlr.com/images/generator/how-to-generate.webp" 
                            alt="How to Generate Creative Images" 
                            className="rounded-lg shadow-md" 
                        />
                        <img 
                            src="https://pixlr.com/images/generator/photo-generator.webp" 
                            alt="AI Photo Generator" 
                            className="rounded-lg shadow-md" 
                        />
                        <img 
                            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" 
                            alt="Cool Cat" 
                            className="rounded-lg shadow-md" 
                        />
                    </div>
                </section>

                {/* Side-by-Side Layout */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Side-by-Side Images</h2>
                    <div className="flex flex-col md:flex-row md:space-x-6">
                        <img 
                            src="https://static-cse.canva.com/blob/1210661/10SimplewaystoenhanceyourimageFeaturedImage1.jpg" 
                            alt="Simple Ways to Enhance Images" 
                            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0" 
                        />
                        <img 
                            src="https://pixlr.com/images/generator/text-to-image.webp" 
                            alt="Text to Image AI Generator" 
                            className="w-full md:w-1/2 rounded-lg shadow-lg" 
                        />
                    </div>
                </section>

                {/* Highlighted Image Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Highlighted Image</h2>
                    <div className="relative">
                        <img 
                            src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" 
                            alt="Cool Cat" 
                            className="w-full rounded-lg shadow-lg" 
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-white text-xl font-bold">Cool Cat - A Unique Perspective</p>
                        </div>
                    </div>
                </section>

                {/* Carousel Layout */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-6">Image Carousel</h2>
                    <div className="flex overflow-x-auto space-x-4">
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
                        /> <img 
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

            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2024 Professional Image Showcase. All Rights Reserved.</p>
            </footer>
        </div>
      
    </>
  )
}

export default App