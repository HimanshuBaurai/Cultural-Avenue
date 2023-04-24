import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Globe from './container/Globe/Globe';
import Explore from './container/Explore/Explore';
import Blogs from './container/Blogs/Blogs';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Globe />
      <Explore />
      {/* <Blogs /> */}
      <Footer/>
    </div>
  );
}

export default App;