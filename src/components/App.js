import React from 'react';
import Layout from './Layout';
import Hero from './sections/Hero';
import Main from './sections/Main';
import content from '../content';

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main content={content} />
      </Layout>
    </>
  );
};

export default App;
