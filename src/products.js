import React, { useState } from 'react';
import ProductItem from './productItems';
import './products.css';

const Products = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = {
    Fruits: [
        { name: 'Mango', price: 80.00, imageUrl: 'https://media.istockphoto.com/id/529964085/photo/mango.jpg?s=612x612&w=0&k=20&c=rmcMZlLOZFdn4NhUcjnaJ3EBHKYZQ4xH4xzpzFU4JgY=' },
        { name: 'Papaya', price: 60.00, imageUrl: 'https://static.tnn.in/thumb/msid-111480247,thumbsize-43954,width-1280,height-720,resizemode-75/111480247.jpg?quality=100' },
        { name: 'Pineapple', price: 90.00, imageUrl: 'https://media6.ppl-media.com/mediafiles/blogs/pineapple_6439817058.jpg' },
      ],
      Vegetables: [
        { name: 'Tomato', price: 40.00, imageUrl: 'https://media6.ppl-media.com/mediafiles/blogs/Tomatoes_49e894a251.jpeg' },
        { name: 'Cucumber', price: 35.00, imageUrl: 'https://static.vecteezy.com/system/resources/previews/003/669/707/non_2x/cucumber-vegetable-food-cut-in-slice-and-knife-on-cutting-board-for-cooking-in-kitchen-photo.jpg' },
        { name: 'Bell Pepper', price: 70.00, imageUrl: 'https://cdn.shopify.com/s/files/1/0573/3993/6868/t/6/assets/bell-pepper-colors-on-wood-1684342695350.jpg?v=1684342696' },
      ],
      Biscuits: [
        { name: 'Digestive Biscuits', price: 75.00, imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_SWp6nnJK9dcTwJ7J8ObOoGDdULSQflz7qjyb27w396tU_OrxU7XrByaju04FRbeoeoO3Do1DJeBuuQs1iXJsMHAFLtkrGVw9T1dd2YCh2rvgDGn6RJFaTg' },
        { name: 'Marie Gold', price: 65.00, imageUrl: 'https://www.bigbasket.com/media/uploads/p/l/264572-2_5-britannia-marie-gold-biscuits.jpg' },
      ],
      // Add other categories similarly...
          Snacks :[
      { name: 'Cheese Balls', price: 90.00, category: 'Snacks', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tSeoxKe4JGZaJQ1-FJ3CIlmQi8OwoU5t-w&s' },
      { name: 'Nuts Mix', price: 150.00, category: 'Snacks', imageUrl: 'https://royalfantasy.in/cdn/shop/products/Mix-Regular-1.jpg?v=1627473255' },
          ],
      PackedItems:[
      { name: 'Whole Wheat Flour', price: 220.00, category: 'Packed Items', imageUrl: 'https://thumbs.dreamstime.com/b/wheat-grain-flour-22804776.jpg' },
      { name: 'Pasta', price: 80.00, category: 'Packed Items', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDDDz3bGBAYz6paSm87xiAs9jWhQta0FpQQ&s' },
          ],
          Bags:[
      { name: 'Canvas Tote', price: 150.00, category: 'Bags', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/5/ND/DT/AN/3390610/designer-canvas-tote-bag.jpg' },
      { name: 'Jute Bag', price: 120.00, category: 'Bags', imageUrl: 'https://www.handmakers.in/cdn/shop/products/Jute_Bag_2946-1.jpg?v=1654414635' },
          ],Dairy:[
      { name: 'Curd', price: 50.00, category: 'Dairy', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXUIq8L9zcWmAtLkqpx8Xh4CB-YLV3aDokw&s' },
      { name: 'Butter', price: 120.00, category: 'Dairy', imageUrl: 'https://media.post.rvohealth.io/wp-content/uploads/2021/04/butter-curls-1200x628-facebook.jpg' },
      { name: 'Paneer', price: 250.00, category: 'Dairy', imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2023/3/EH/YT/EO/108385388/product-jpeg-500x500.jpg' },
          ],
          Beverages:[
      { name: 'Mango Juice', price: 110.00, category: 'Beverages', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM19D4ys3BnojgW3K2bwW_UXPv6CGccEPcVw&s' },
      { name: 'Lemonade', price: 70.00, category: 'Beverages', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wVK7tCQe00gXiR1kSKWpE5Kn9mxwqCZbhw&s' },
      { name: 'Green Tea', price: 150.00, category: 'Beverages', imageUrl: 'https://c.ndtvimg.com/2022-04/q1eefqk_green-tea_625x300_28_April_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
       ],
          Frozen_Foods:[
      { name: 'Frozen Fries', price: 200.00, category: 'Frozen Foods', imageUrl: 'https://5.imimg.com/data5/FP/WV/GV/SELLER-11360013/mccain-750-gm-french-fries-500x500.PNG' },
      { name: 'Frozen Berries', price: 180.00, category: 'Frozen Foods', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/frozen-fruit-700-350-645e570.jpg?quality=90&resize=556,505' },
          ],Bakery:[
      { name: 'Bagels', price: 90.00, category: 'Bakery', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WjqzwsPT0gWXZlzD_BxIuVCEmWBdYc7hpQ&s' },
      { name: 'Muffins', price: 70.00, category: 'Bakery', imageUrl: 'https://thebigmansworld.com/wp-content/uploads/2024/04/protein-muffin-recipe-1.jpg' },
           ] ,Personal_Care:[
      { name: 'Body Lotion', price: 200.00, category: 'Personal Care', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBYcf1cLnaQ1WQYx0XBpswHyIMM3N9PpNow&s' },
      { name: 'Face Wash', price: 150.00, category: 'Personal Care', imageUrl: 'https://m.media-amazon.com/images/I/71XbiJC3zQL.jpg' }
           ],
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = {};
  Object.keys(products).forEach(category => {
    filteredProducts[category] = products[category].filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="product-list">
      <div className="product-column">
      <h2>Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {Object.keys(filteredProducts).map(category => (
        <div key={category} className="category">
          <h3>{category}</h3>
          <div className="product-list">
            {filteredProducts[category].map((product, index) => (
              <ProductItem key={index} product={product} addToCart={addToCart} />
            ))}
            </div>
          </div>
        
      ))}
    </div>
    </div>
  );
};

export default Products;
