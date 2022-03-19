import PropTypes from 'prop-types';

function Coin({ coinList }) {
  console.log('Coin start. coinList: ', coinList);
  coinList = coinList.slice(0, 100);
  console.log('sliced coinList: ', coinList);
  return (
    <div>
      <h3>무진장 많은 코인의 개수: {coinList.length}</h3>
      <ul>
      {coinList.map((coinObj) => {
        return <li key={coinObj.id}>코인: {coinObj.id} 가격: {coinObj.quotes.USD.price}</li>
      })}
      </ul>
    </div>
  )
}

Coin.propTypes = {
  coinList: PropTypes.array.isRequired,
};

export default Coin;
