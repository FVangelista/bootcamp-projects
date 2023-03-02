import CardItem from '../cardItem';
import './index.css';

const ListProducts = ({ dataList, setDisplayModal }) => {
  return (
    <div className="ListProducts" key="1">
      <div className="title">
        <h3>warehouse</h3>
      </div>
      <div className="prods-container">
        {dataList.map((product) => (
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

// console.log(ListProducts());

export default ListProducts;
