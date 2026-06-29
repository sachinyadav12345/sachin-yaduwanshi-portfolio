import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './store/themeSlice';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

export const App = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const [loading, setLoading] = useState(true);

  // Initialize theme class on DOM
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    dispatch(setTheme(savedTheme));
    
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Fallback route back to home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
};

export default App;
