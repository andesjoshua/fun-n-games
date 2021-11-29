import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="home">
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
