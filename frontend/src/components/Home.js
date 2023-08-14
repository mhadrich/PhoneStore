import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ data, setSelected }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="products-list">
        {data.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="img"
              src={product.img_url}
              alt="image"
              onClick={() => {
                setSelected(product);
                navigate('/ProductDetails');
              }}
            />
            <h2>{product.phone_name}</h2>
            <p>{`Released in ${product.release_year} by ${product.brand}`}</p>
            <p className="card-item-price">Price: ${product.price}</p>
            <div className="product-card-buttons">
              <button>Update Product</button>
              <button>Delete Product</button>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;