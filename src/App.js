import './App.scss';

import LinkLogo from './components/common/LinkLogo/LinkLogo';

const App = () => (
  <>
    <div style={{backgroundColor: 'purple'}}>
      <LinkLogo to='' textColor='dark' />
      <LinkLogo to='' textColor='white' />
    </div>
  </>
);

export default App;