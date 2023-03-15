import { useState, useEffect } from 'react';
import MiniCard from '../miniCard';
import { GET } from '../../utils/http';
import './index.css';

const MiniCardList = () => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET('/products').then((data) => setMiniCards(() => data.products));
  }, []);

  return (
    <div className="MiniCardList">
      {miniCards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
