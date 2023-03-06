import Content from './components/content';
import SideMenu from './components/sideMenu';
import SideTrends from './components/sideTrends';
import './App.css';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Content />
      <SideTrends />
    </div>
  );
}

export default App;
