import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import Main from './Main';
import content from '../content';
import Modal from './Modal';

const App = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main content={content} />
        <Modal isShown={true} />
      </Layout>
    </>
  );
};

export default App;
