import './index.css';

const CardItem = ({ productData }) => {
  const onHandleClick = () =>
    alert(`The product ${productData.title} has been selected`);

  return (
    <div className="CardItem">
      <img src={productData.thumbnail} alt="Apple" />
      <div className="CardItem_text-content">
        <p>{productData.brand}</p>
        <h4>{productData.title}</h4>
        <p>{productData.description}</p>
        <div className="line"></div>
        <p>{`$ ${productData.price}.00`}</p>
        <button className="btn" onClick={onHandleClick}>
          Click
        </button>
      </div>
    </div>
  );
};

export default CardItem;
