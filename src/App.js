import './App.css';

import Button from './Button';
import styles from './App.module.css';

import { useState, useEffect } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log('run all the time');
  useEffect(() => {
    console.log('CALL API...');
  }, []);

  useEffect(() => {
    console.log('search ', keyword);
  }, [keyword]);
  return (
    <div>
      <h1 className={styles.title}>Welcom !</h1>
      <h2>{counter}</h2>
      <input value={keyword} type="text" placeholder="Search here..." onChange={onChange} />
      <button onClick={onClick}>click me!</button>
      <Button text={'click me'} />
      <Button text={'hoho'} />
    </div>
  );
}

export default App;
