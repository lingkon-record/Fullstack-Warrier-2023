 // Define different types
type UserType = {
  id: number;
  username: string;
};

type ProductType = {
  productId: number;
  productName: string;
  price: number;
};

type OrderType = {
  orderId: number;
  products: ProductType[];
  total: number;
};

// Create a union type representing multiple data types
type MultipleTypes = UserType | ProductType | OrderType;

// Example usage
const userData: UserType = {
  id: 1,
  username: 'john_doe',
};

const productData: ProductType = {
  productId: 101,
  productName: 'Sample Product',
  price: 29.99,
};

const orderData: OrderType = {
  orderId: 1001,
  products: [productData],
  total: 29.99,
};

// Function accepting data of multiple types
const processData = (data: MultipleTypes) => {
  // Handle data based on its type
  if ('username' in data) {
    console.log('User:', data.username);
  } else if ('productName' in data) {
    console.log('Product:', data.productName);
  } else if ('products' in data) {
    console.log('Order Total:', data.total);
  }
};

// Example usage of the function
processData(userData);
processData(productData);
processData(orderData);
