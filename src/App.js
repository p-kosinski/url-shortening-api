import './App.scss';

import LinkButton from './components/common/LinkButton/LinkButton';

const App = () => (
  <div className='App'>
    <div style={{display: 'grid', justifyItems: 'center'}}>
      <LinkButton>Get Started</LinkButton><br />
    </div>
    <LinkButton fullWidth>Get Started - fullWidth</LinkButton>
  </div>
);

export default App;