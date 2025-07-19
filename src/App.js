import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
const FencingHeroSection = React.lazy(() => import('./components/service_5/HeroSection'));
const FencingSignatureSection = React.lazy(() => import('./components/service_5/SignatureSection'));
const FencingFarmlandExcellenceSection = React.lazy(() => import('./components/service_5/FarmlandExcellenceSection'));
const FencingFencesGridSection = React.lazy(() => import('./components/service_5/FencesGridSection'));
const FencingRampSection = React.lazy(() => import('./components/service_5/RampSection'));
const SignatureFarmlandSection = React.lazy(() => import('./components/service_5/SignatureFarmlandSection'));
const BestChoiceSection = React.lazy(() => import('./components/service_5/BestChoiceSection'));
const MoreThanInstallationSection = React.lazy(() => import('./components/service_5/MoreThanInstallationSection'));
const AgricultureHeroSection = React.lazy(() => import('./components/service_4/HeroSection'));
const AgricultureBestChoiceSection = React.lazy(() => import('./components/service_4/BestChoiceSection'));
const AgricultureSignatureFarmlandSection = React.lazy(() => import('./components/service_4/SignatureFarmlandSection2'));
const AgricultureProtectionSection = React.lazy(() => import('./components/service_4/ProtectionSection'));
const AgricultureFenceGallerySection = React.lazy(() => import('./components/service_4/FenceGallerySection'));
const Gallery = React.lazy(() => import('./components/gallary/Gallery'));


const ComingSoon = ({ title }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-3xl text-gray-700">
    <span className="mb-4">{title}</span>
    <span className="text-lg text-orange-500">Coming Soon</span>
  </div>
);

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
    <AgricultureSignatureFarmlandSection />
    <AgricultureBestChoiceSection />
    <AgricultureProtectionSection />
    <AgricultureFenceGallerySection />
  </>
);

function App() {
  return (
    <div className="font-sans bg-gray-50">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/services/fence-installation" element={<ComingSoon title="Fence Installation" />} />
            <Route path="/services/fence-straightening-repair" element={<ComingSoon title="Fence Straightening and Repair" />} />
            <Route path="/services/temporary-fence-rental" element={<ComingSoon title="Temporary Fence Rental" />} />
            <Route path="/services/custom-agricultural-fencing" element={<AgricultureFencingPage />} />
            <Route path="/services/fencing-railings" element={<FencingRailingsPage />} />
          </Routes>
          <Footer />
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
