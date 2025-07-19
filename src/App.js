import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

const Header = React.lazy(() => import('./components/Header'));
const Footer = React.lazy(() => import('./components/Footer'));
const HeroSection = React.lazy(() => import('./components/welcome/HeroSection'));
const FeaturesSection = React.lazy(() => import('./components/welcome/FeaturesSection'));
const AboutSection = React.lazy(() => import('./components/welcome/AboutSection'));
const ServicesSection = React.lazy(() => import('./components/welcome/ServicesSection'));
const FencesAndRailingsSection = React.lazy(() => import('./components/welcome/FencesAndRailingsSection'));
const DiscoverSection = React.lazy(() => import('./components/welcome/DiscoverSection'));
const ServiceAreasSection = React.lazy(() => import('./components/welcome/ServiceAreasSection'));
const SecureSection = React.lazy(() => import('./components/welcome/SecureSection'));
const TestimonialsSection = React.lazy(() => import('./components/welcome/TestimonialsSection'));
const Appointment = React.lazy(() => import('./components/Appointment'));
const Contact = React.lazy(() => import('./components/Contact'));
const FencingHeroSection = React.lazy(() => import('./components/services/fencing_and_railing/HeroSection'));

const FencingFencesGridSection = React.lazy(() => import('./components/services/fencing_and_railing/FencesGridSection'));
const FencingRampSection = React.lazy(() => import('./components/services/fencing_and_railing/RampSection'));
const SignatureFarmlandSection = React.lazy(() => import('./components/services/fencing_and_railing/SignatureFarmlandSection'));
const BestChoiceSection = React.lazy(() => import('./components/services/fencing_and_railing/BestChoiceSection'));
const MoreThanInstallationSection = React.lazy(() => import('./components/services/fencing_and_railing/MoreThanInstallationSection'));
const AgricultureHeroSection = React.lazy(() => import('./components/services/Custom-made_agricultural_fencing/HeroSection'));
const AgricultureSignatureSection = React.lazy(() => import('./components/services/Custom-made_agricultural_fencing/SignatureSection2'));
const FenceInstallation = React.lazy(() => import('./components/services/fence_installation/FenceInstallation.js'));
const FenceStraighteningAndRepair = React.lazy(() => import('./components/services/Fence_straightening_and_repair/FenceStraighteningAndRepair.js'));
const TemporaryFenceRental = React.lazy(() => import('./components/services/Temporary_fence_rental/TemporaryFenceRental.js'));
const Gallery = React.lazy(() => import('./components/gallary/Gallery'));




const WelcomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <AboutSection />
    <ServicesSection />
    <FencesAndRailingsSection />
    <DiscoverSection />
    <ServiceAreasSection />
    <SecureSection />
    <TestimonialsSection />
  </>
);

const FencingRailingsPage = () => (
  <>
    <FencingHeroSection />
    <SignatureFarmlandSection />
    <FencingFencesGridSection />
    <FencingRampSection />
    <BestChoiceSection />
    <MoreThanInstallationSection />
  </>
);

const AgricultureFencingPage = () => (
  <>
    <AgricultureHeroSection />
    <AgricultureSignatureSection />
  </>
);

function App() {
  return (
    <LanguageProvider>
      <div className="font-sans bg-gray-50">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/services/fence-installation" element={<FenceInstallation />} />
              <Route path="/services/fence-straightening-repair" element={<FenceStraighteningAndRepair />} />
              <Route path="/services/temporary-fence-rental" element={<TemporaryFenceRental />} />
              <Route path="/services/custom-agricultural-fencing" element={<AgricultureFencingPage />} />
              <Route path="/services/fencing-railings" element={<FencingRailingsPage />} />
            </Routes>
            <Footer />
          </Router>
        </React.Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
