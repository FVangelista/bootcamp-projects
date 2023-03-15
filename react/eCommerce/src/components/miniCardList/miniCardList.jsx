import { useState, useEffect } from 'react';
import MiniCard from '../miniCard';
import { GET } from '../../utils/http';
import './index.css';

const MiniCardList = (props) => {
  const { inputValue } = props;
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(`/products`).then((data) => setMiniCards(() => data.products));
  }, []);

  return (
    <div className="MiniCardList">
      {miniCards.map((card) => {
        if (inputValue && card.category === inputValue) {
          return (
            <MiniCard
              imgSrc={card.thumbnail}
              imgAlt={card.title}
              key={card.id}
            />
          );
        } else if (inputValue === '') {
          return (
            <MiniCard
              imgSrc={card.thumbnail}
              imgAlt={card.title}
              key={card.id}
            />
          );
        }
      })}
    </div>
  );
};

export default MiniCardList;
