import Header from './components/Header';
import Hero from './components/Hero';
import LatestSection from './components/LatestSection';
import CategoryShowcase from './components/CategoryShowcase';
import CategoriesGrid from './components/CategoriesGrid';
import ContentSection from './components/ContentSection';
import SoldItemsSection from './components/SoldItemsSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <main>
        <LatestSection />
        <CategoryShowcase />
        <CategoriesGrid />
        <ContentSection />
        <SoldItemsSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
