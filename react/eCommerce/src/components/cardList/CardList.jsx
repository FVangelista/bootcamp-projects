import { useState, useEffect } from 'react';
import { GET } from '../../utils/http';
import Card from '../card/Card';
import SpinnerLoading from '../spinnerLoading/SpinnerLoading';
import './index.css';

const CardList = ({ title, endpoint, setCartList }) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardList__list">
        {productsList.length ? (
          productsList.map((product) => (
            <Card
              productData={product}
              key={product.id}
              setCartList={setCartList}
            />
          ))
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default CardList;
