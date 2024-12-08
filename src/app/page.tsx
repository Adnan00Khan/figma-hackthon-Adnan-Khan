import React from 'react'; // Make sure React is imported
import CompanyLogo from './components/com-logo';
import FeaturedProducts from './components/f-products';
import Header from './components/header';
import HotCategory from './components/hot';
import OurProducts from './components/our-p';
import TopCategories from './components/top-c';

const Home: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Header Component */}
      <Header  />

      {/* Company Logo */}
      <CompanyLogo  />

      {/* Featured Products */}
      <FeaturedProducts  />

      {/* Top Categories */}
      <TopCategories  />

      {/* Hot Category */}
      <HotCategory  />

      {/* Our Products */}
      <OurProducts  />
    </div>
  );
};

export default Home;
