import React from 'react';
import TShirtCard from './TShirtCard';

const tshirts = [
  {
    name: 'Classic T-Shirt',
    description: '100% Cotton, Available in various colors',
    price: '$19.99',
    imageUrl: 'https://images-cdn.ubuy.co.in/63b3ed95543b7e23483427b6-essentials-t-shirt.jpg',
  },
  {
    name: 'Graphic T-Shirt',
    description: 'Soft fabric with cool prints',
    price: '$24.99',
    imageUrl: 'https://static.massimodutti.net/3/photos/2024/V/0/2/p/1410/760/800/1410760800_1_1_16.jpg?t=1705426141034&impolicy=massimodutti-itxmediumhigh&imformat=chrome&imwidth=500',
  },
  {
    name: 'V-Neck T-Shirt',
    description: 'Slim fit, V-neck design',
    price: '$21.99',
    imageUrl: 'https://images-cdn.ubuy.co.in/63b3ed95543b7e23483427b6-essentials-t-shirt.jpg',
  },
  {
    name: 'V-Neck T-Shirt',
    description: 'Slim fit, V-neck design',
    price: '$21.99',
    imageUrl: 'https://images-cdn.ubuy.co.in/63b3ed95543b7e23483427b6-essentials-t-shirt.jpg',
  },
  {
    name: 'Graphic T-Shirt',
    description: 'Soft fabric with cool prints',
    price: '$24.99',
    imageUrl: 'https://static.massimodutti.net/3/photos/2024/V/0/2/p/1410/760/800/1410760800_1_1_16.jpg?t=1705426141034&impolicy=massimodutti-itxmediumhigh&imformat=chrome&imwidth=500',
  },
];

const CategorySection = () => {
  return (
    <section className="bg-[#ffffff] dark:opacity-75 rounded-md shadow-lg px-[10px] m-[20px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {tshirts.map((tshirt, index) => (
          <TShirtCard key={index} tshirt={tshirt} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
