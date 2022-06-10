import Header from './components/layout/Header/Header';
import Hero from './components/features/Hero/Hero';
import MainSection from './components/features/MainSection/MainSection';
import BoostSection from './components/features/BoostSection/BoostSection';
import Footer from './components/layout/Footer/Footer';

import './App.scss';

const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <MainSection />
      <BoostSection />
    </main>
    <Footer />
  </>
);

export default App;