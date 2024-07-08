import React from 'react';

const BlogLayout = () => {
  const blogList = [
    { title: 'Blog Post 1', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONTF162E5230D4A40C4BD1D33A202147F19/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
    { title: 'Blog Post 2', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONT1A62DBFC630847799BD81B05DBC558EE/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
    { title: 'Blog Post 3', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONTF162E5230D4A40C4BD1D33A202147F19/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
    { title: 'Blog Post 4', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONT1A62DBFC630847799BD81B05DBC558EE/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
    { title: 'Blog Post 5', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONTF162E5230D4A40C4BD1D33A202147F19/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
    { title: 'Blog Post 6', imageUrl: 'https://blogs.oracle.com/content/published/api/v1.1/assets/CONT1A62DBFC630847799BD81B05DBC558EE/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg' },
  ];

  return (
    <div className="flex h-screen">

<div className="w-2/3 p-4 overflow-y-scroll">
        <h1 className="text-3xl font-bold mb-4">Full Blog Post</h1>
        <img src="https://blogs.oracle.com/content/published/api/v1.1/assets/CONTF162E5230D4A40C4BD1D33A202147F19/Medium?cb=_cache_6298&channelToken=f7814d202b7d468686f50574164024ec&format=jpg" alt="Full Blog" className="w-full h-auto mb-4" />
        <h1>Here is the content of the full blog post...</h1> <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada...</p>
        <p>Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris...</p>
        <p>Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos...</p>
        <p>Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor...</p>
        <p>Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa...</p>
        <p>Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit...</p>
        {/* Add more content as needed */}
      </div>

      <div className="w-1/3 border-l p-4 overflow-y-scroll">
        <h2 className="text-2xl font-bold mb-4">Relevant Blogs</h2>
        <ul>
          {blogList.map((blog, index) => (
            <li key={index} className="mb-4">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-32 object-cover mb-2" />
              <h3 className="text-xl">{blog.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogLayout;
