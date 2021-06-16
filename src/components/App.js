import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import Main from './Main';

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main />
      </Layout>
    </>
  );
};

export default App;
