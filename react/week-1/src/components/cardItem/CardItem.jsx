import Button from '../button';
import './index.css';

const CardItem = ({ productData, setDisplayModal }) => {
  // const onHandleClick = () =>
  //   alert(`The product ${productData.title} has been selected`);

  const onButtonClick = () => {
    setDisplayModal(() => productData);
  };

  return (
    <div className="CardItem">
      <img src={productData.thumbnail} alt="Apple" />
      <div className="CardItem_text-content">
        <p>{productData.brand}</p>
        <h4>{productData.title.split(' ').splice(0, 3).join(' ')}</h4>
        <p>{productData.description.split(' ').splice(0, 8).join(' ')}</p>
        <div className="line"></div>
        <p>{`$ ${productData.price}.00`}</p>
        <Button text="click" clickFunction={onButtonClick} />
      </div>
    </div>
  );
};

export default CardItem;
