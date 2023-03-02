import { productsList } from '../../mocks/productList';
import CardItem from '../cardItem';
import './index.css';

const ListProducts = () => {
  return (
    <div className="ListProducts" key="1">
      <div className="title">
        <h3>warehouse</h3>
      </div>
      <div className="prods-container">
        {productsList.map((product) => (
          <CardItem productData={product} key={product.id.toString()} />
        ))}
      </div>
    </div>
  );
};

// console.log(ListProducts());

export default ListProducts;
