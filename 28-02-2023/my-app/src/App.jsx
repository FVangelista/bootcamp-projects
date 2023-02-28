import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header
        title="Links"
        href_1="https://facebook.com"
        href_2="https://google.com"
        href_3="https://apple.com"
        text_href_1="facebook"
        text_href_2="google"
        text_href_3="apple"
      />
      <Footer user="Link" />
    </div>
  );
}

export default App;
