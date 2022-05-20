import './App.scss';

import LinkButton from './components/common/LinkButton/LinkButton';

const App = () => (
  <div className='App'>
    <div style={{display: 'grid', justifyItems: 'center'}}>
      <LinkButton to='#0'>Get Started</LinkButton><br />
    </div>
    <LinkButton to='#0' fullWidth>Get Started - fullWidth</LinkButton>
  </div>
);

export default App;