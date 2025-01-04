"use client"
// import { useState } from 'react'


function App() {

  return (
    <>
    
    <div className="bg-gray-100 text-gray-800">
            <header className="bg-blue-600 text-white py-6 text-center">
                <h1 className="text-3xl font-bold">Explore the Dimensions</h1>
                <p className="text-lg">A New Perspective in Design and Creativity</p>
            </header>

            <nav className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-center space-x-8">
                    <a href="#nature" className="hover:text-blue-400">Nature</a>
                    <a href="#innovation" className="hover:text-blue-400">Innovation</a>
                    <a href="#art" className="hover:text-blue-400">Artistic Views</a>
                </div>
            </nav>

            <main className="container mx-auto py-10 px-4">
                <section id="nature" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Nature's Elegance</h2>
                    <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                        <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="Abstract Autumn Leaves" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                        <p className="md:w-1/2 text-justify">
                            Discover the vibrant colors and patterns found in nature. These breathtaking visuals remind us of the beauty that surrounds us daily.
                        </p>
                    </div>
                </section>

                <section id="innovation" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Innovation & Technology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src="https://pixlr.com/images/generator/how-to-generate.webp" alt="How to Generate Creative Images" className="rounded-md mb-4" />
                            <p>Tools like AI generators are reshaping creativity, providing endless possibilities for designers and developers.</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-lg">
                            <img src="https://pixlr.com/images/generator/photo-generator.webp" alt="AI Photo Generator" className="rounded-md mb-4" />
                            <p>Innovations like photo generators combine technology and artistry to create captivating visuals.</p>
                        </div>
                    </div>
                </section>

                <section id="art" className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Artistic Perspectives</h2>
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
                            <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Cool Cat" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                            <p className="md:w-1/2 text-justify">
                                Art is a reflection of how we see the world. Whether simple or complex, it challenges our perspectives and invites dialogue.
                            </p>
                        </div>
                        <img src="https://static-cse.canva.com/blob/1210661/10SimplewaystoenhanceyourimageFeaturedImage1.jpg" alt="Simple Ways to Enhance Images" className="w-full rounded-lg shadow-lg" />
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white py-6 text-center">
                <p>&copy; 2024 Explore Dimensions. All Rights Reserved.</p>
            </footer>
        </div>
      
    </>
  )
}

export default App