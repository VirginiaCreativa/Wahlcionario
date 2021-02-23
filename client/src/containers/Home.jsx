import React from 'react';

const Home = () => {
  const data = localStorage.getItem('user');
  console.log(data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
