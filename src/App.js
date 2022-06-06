import Header from './components/layout/Header/Header';
import Hero from './components/features/Hero/Hero';
import MainSection from './components/features/MainSection/MainSection';

import './App.scss';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <MainSection />
    </main>
  </>
);

export default App;