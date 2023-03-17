import { shortDescription } from '../../utils/func';
import './index.css';

const Card = ({ productData, setCartList }) => {
  const onHandleClick = () => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem('cartList')) || [];

    const isProductDataInsideLocalStorage = !localStorageCartItems.find(
      (product) => product.id === productData.id
    );

    setCartList((prev) =>
      !!prev.find((product) => product.id === productData.id)
        ? [...prev]
        : [...prev, productData]
    );

    if (isProductDataInsideLocalStorage) {
      localStorage.setItem(
        'cartList',
        JSON.stringify([...localStorageCartItems, productData])
      );

      alert(`Apposto, ${productData.title} aggiunto al carrello!`);
    } else {
      alert(`Nono, ${productData.title} è già presente nel carrello!`);
    }
  };

  return (
    <div className="Card">
      <img
        className="Card__image"
        src={productData.thumbnail}
        alt={productData.title}
      />
      <div className="Card__text">
        <h3 className="Card__text--title">{productData.title}</h3>
        <p className="Card__text--desc">
          {shortDescription(productData.description)}
        </p>
        <p className="Card__text--cat">{productData.category}</p>
        <p className="Card__text--price">$ {productData.price}</p>
        <button onClick={onHandleClick}>🛒</button>
      </div>
    </div>
  );
};

export default Card;
