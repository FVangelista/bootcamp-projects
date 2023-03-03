import { useState, useEffect } from 'react';

import CardItem from '../cardItem';
import './index.css';

const ListProducts = ({ setDisplayModal }) => {
  const [dataFetch, setDataFetch] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        setDataFetch(data.products);
      })
      .catch((err) => {
        console.log(`Error fetching data: `, err);
        setErr(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return 'Loading...';
  if (err) return 'There was an error getting the resource...';

  return (
    <div className="ListProducts" key="1">
      <div className="title">
        <h3>warehouse</h3>
      </div>
      <div className="prods-container">
        {dataFetch.map((product) => (
          <CardItem
            productData={product}
            setDisplayModal={setDisplayModal}
            key={product.id.toString()}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
