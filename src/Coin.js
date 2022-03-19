import PropTypes from 'prop-types';
import { useState } from 'react';

function Coin({ coinList }) {
  console.log('Coin start. coinList: ', coinList);
  coinList = coinList.slice(0, 100);
  console.log('sliced coinList: ', coinList);

  const [cash, setCash] = useState(0);
  const [optSelected, setOptSelected] = useState(coinList[0].name);
  const changeCash = (e) => setCash(e.target.value);
  const selectOpt = (e) => setOptSelected(e.target.value);

  const getPriceFromName = (name) => coinList.find(coin => coin.name === name).quotes.USD.price
  return (
    <div>
      <h3>무진장 많은 코인의 개수: {coinList.length}</h3>
      당신이 가지고있는 달러...
      <input type="text" placeholder="dollar you have" value={cash} onChange={changeCash}/>
      <br />
      로 아래 코인을 몇개를 살수있을까?
      <br />
      <select onChange={selectOpt}>
        {coinList.map((coinObj) => {
          return <option value={coinObj.name} key={coinObj.id}>{coinObj.name}</option>

        })}
      </select>
      {cash ? <h4>{cash}$로 {optSelected}를 {cash / getPriceFromName(optSelected)}개 살수 있어요 ~!</h4> : null}
      
    </div>
  )
}

Coin.propTypes = {
  coinList: PropTypes.array.isRequired,
};

export default Coin;
