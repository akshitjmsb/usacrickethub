import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Spinner from './components/Spinner';

const Home = lazy(() => import('./pages/Home'));
const Scores = lazy(() => import('./pages/Scores'));
const Grounds = lazy(() => import('./pages/Grounds'));
const News = lazy(() => import('./pages/News'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="scores" element={<Scores />} />
            <Route path="grounds" element={<Grounds />} />
            <Route path="news" element={<News />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

