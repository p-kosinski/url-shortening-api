import './App.scss';

import LinkHome from './components/common/LinkHome/LinkHome';

const App = () => (
  <>
    <div style={{backgroundColor: 'purple'}}>
      <LinkHome to='' textColor='dark' />
      <LinkHome to='' textColor='light' />
    </div>
  </>
);

export default App;