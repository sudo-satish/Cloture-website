import React from 'react';
import './App.css';

// Component placeholders (to be implemented)
const Header = React.lazy(() => import('./components/Header'));
const HeroSection = React.lazy(() => import('./components/HeroSection'));
const FeaturesSection = React.lazy(() => import('./components/FeaturesSection'));
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/ServicesSection'));
const FencesAndRailingsSection = React.lazy(() => import('./components/FencesAndRailingsSection'));
const DiscoverSection = React.lazy(() => import('./components/DiscoverSection'));
const SecureSection = React.lazy(() => import('./components/SecureSection'));
const TestimonialsSection = React.lazy(() => import('./components/TestimonialsSection'));
const Footer = React.lazy(() => import('./components/Footer'));
const ServiceAreasSection = React.lazy(() => import('./components/ServiceAreasSection'));

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <FencesAndRailingsSection />
        <DiscoverSection />
        <ServiceAreasSection />
        <SecureSection />
        <TestimonialsSection />
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
