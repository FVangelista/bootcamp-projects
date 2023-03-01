import Hero from './components/hero';
import Gallery from './components/gallery';
import ListProducts from './components/productList/ListProducts';
import './main.css';

const Main = () => {
  // one single parent on the return
  return (
    <div className="Main">
      <Hero title="react *store" />
      <Gallery />
      <ListProducts />
    </div>
  );
};

console.log(Gallery());
export default Main;
