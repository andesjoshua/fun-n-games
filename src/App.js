import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import {useEffect, useState} from 'react'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="home">
      {loading ? "loading..." : "hello"}
      <section className='header'>
        <Header />
      </section>
      <section className='about'>
        <About />
      </section>
      <section className='projects'>
        <Projects />
      </section>
    </div>
  );
}

export default App;
