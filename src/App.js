import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Lesson1 from './pages/Lesson1/Lesson1';
import Lesson2 from './pages/Lesson2/Lesson2';
import Lesson3 from './pages/Lesson3/Lesson3';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div id={styles.wrapper}>
      <ScrollToTop />
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='lesson1/*' element={<Lesson1 />} />
          <Route path='lesson2/*' element={<Lesson2 />} />
          <Route path='lesson3/*' element={<Lesson3 />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
