import { Fragment } from 'react';

import './App.scss';

import Header from './components/layout/Header/Header';
import Hero from './components/features/Hero/Hero';
import Container from './components/layout/Container/Container';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Container>
        <div style={{
          backgroundColor: 'black',
          color: 'white',
          marginTop: '60px',
          }}>
          {[...Array(100)].map((value, i) => {
            return (
              <Fragment key={i}>
                .<br />
              </Fragment>
            );
          })}
        </div>
      </Container>
    </main>
  </>
);

export default App;