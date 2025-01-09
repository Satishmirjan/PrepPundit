import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Feedback from './components/Feedback';
import FAQ from './components/FAQ';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Hero />
        <Cards />
        <Feedback />
        <FAQ />
      </MainLayout>
    </BrowserRouter>
  );
}

