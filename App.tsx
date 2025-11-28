
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import ProgramDetails from './components/ProgramDetails';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-slate-200 font-sans selection:bg-accent selection:text-white pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <Programs />
        <ProgramDetails />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;
