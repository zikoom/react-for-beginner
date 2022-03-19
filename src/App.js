import "./App.css";
import Coin from "./Coin.js";

import { useState, useEffect } from "react";

function App() {
  console.log("app lendered");
  const [isLoading, setIsLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);

  let data = [];
  useEffect(async () => {
    // call api

    const fetched = await fetch("https://api.coinpaprika.com/v1/tickers");
    setCoinList(await fetched.json());
    setIsLoading(false);
  }, []);
  return (
    <div>
      <h1>Coins!</h1>
      {isLoading ? <strong> 로딩중 ...</strong> : <Coin coinList={coinList} />}
    </div>
  );
}

export default App;
