import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-[#faf9f6]">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Reviews />
      <Location />
      <Footer />
    </main>
  );
}

export default App;