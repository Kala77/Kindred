import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Feed from './pages/Feed';
import Impact from './pages/Impact';
import Experts from './pages/Experts';
import PostProblem from './pages/PostProblem';
import ProblemDetail from './pages/ProblemDetail';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/feed" element={<PageWrapper><Feed /></PageWrapper>} />
        <Route path="/impact" element={<PageWrapper><Impact /></PageWrapper>} />
        <Route path="/experts" element={<PageWrapper><Experts /></PageWrapper>} />
        <Route path="/post" element={<PageWrapper><PostProblem /></PageWrapper>} />
        <Route path="/problem/:id" element={<PageWrapper><ProblemDetail /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
