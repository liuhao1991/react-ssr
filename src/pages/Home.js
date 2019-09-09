import React from 'react';

const Home = () => {
  function test() {
    console.log('test fired');
  }
  return (
    <div>
      <p>Home Page</p>
      <button onClick={() => test()}>fire test</button>
    </div>
  );
};

export default Home;