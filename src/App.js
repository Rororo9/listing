import logo from './logo.svg';
import './App.css';
const json = require("./data/etsy.json");

const App = () => {
  let items = [];

  json.forEach((item, idx) => {
    if (item.state === "active") {
      items.push(item);
    }
  });

  return <Listing items={items} />;
}

export default App;