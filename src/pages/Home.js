import React from 'react';
import './Home.css';

const Home = ({ name }) => {
  function test() {
    console.log('test fired');
  }
  return (
    <div>
      <p>Home Pagex2 { name }</p>
      <img src={ require('../assets/googlelogo_color_92x30dp.png') } />
      <button onClick={() => test()}>fire test</button>
    </div>
  );
};

export default Home;