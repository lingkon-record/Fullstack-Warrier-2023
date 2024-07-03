import React from 'react';

const categories = [
  {
    item: "E-commerce Trends",
    para: "Discover the top products to sell in 2023.",
    img: "https://a.storyblok.com/f/165154/1280x720/a4c06ff7b1/01_hero-image_20-trending-ecommerce-products-to-sell-in-2023.jpg/m/"
  },
  {
    item: "Trending Products",
    para: "Find the hottest items to boost your store.",
    img: "https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png"
  },
  {
    item: "Skincare Essentials",
    para: "Best skincare products for a glowing skin.",
    img: "https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png?crop=0.502xw:1.00xh;0.256xw,0&resize=640:*"
  },
  {
    item: "Tech Gadgets",
    para: "Latest tech gadgets to explore.",
    img: "https://example.com/tech-gadgets.jpg"
  },
  {
    item: "Home Decor",
    para: "Stylish decor for your home.",
    img: "https://example.com/home-decor.jpg"
  }
];

const TopCategories = () => {
  const getProducts = ({ category }) => {
    console.log(`Fetching products for category: ${category}`);
  };

  return (
    <>
      <h3 className="font-semibold text-2xl text-gray-900 ml-5 hover:underline w-fit mb-4">
        Top Categories
      </h3>
      <section className="bg-white dark:bg-gray-800 dark:opacity-75 rounded-md shadow-lg p-6 m-5">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
          {categories.map((item, index) => (
            <div
              onClick={() => getProducts({ category: item.item })}
              key={index}
              className="flex flex-col items-center cursor-pointer p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out w-full"
            >
              <div className="mb-4 hidden md:block">
                <img src={item.img} alt={item.item} className="w-28 h-28 object-cover rounded-full shadow-md" />
              </div>
              <div className="text-center">
                <h6 className="font-medium text-lg text-gray-900 dark:text-white mb-1">{item.item}</h6>
                <p className="text-sm text-gray-700 dark:text-gray-300 hidden md:block">{item.para}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 md:hidden">{item.para.length} items</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TopCategories;
