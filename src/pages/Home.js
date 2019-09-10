import React from 'react';

const Home = () => {
  function test() {
    console.log('test fired');
  }
  return (
    <div>
      <p>Home Page</p>
      <img src={ require('../googlelogo_color_92x30dp.png') } />
      <button onClick={() => test()}>fire test</button>
    </div>
  );
};

export default Home;