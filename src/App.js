import './App.scss';

import Container from './components/layout/Container/Container';

const App = () => (
  <div className='App' style={{
    width: '100%',
  }}>
    <Container>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <div
          style={{
            height: '2.5rem',
            width: '2.5rem',
            backgroundColor: 'black'
          }}
        ></div>
        <div
          style={{
            height: '2.5rem',
            width: '2.5rem',
            backgroundColor: 'black'
          }}
        ></div>
      </div>
    </Container>
  </div>
);

export default App;