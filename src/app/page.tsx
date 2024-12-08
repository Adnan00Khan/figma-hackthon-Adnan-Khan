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
      <Header className="px-10 md:px-32" />

      {/* Company Logo */}
      <CompanyLogo className="md:px-14 px-5 p-12" />

      {/* Featured Products */}
      <FeaturedProducts className="md:px-20 px-5 p-24" />

      {/* Top Categories */}
      <TopCategories className="md:px-24 px-5 p-24" />

      {/* Hot Category */}
      <HotCategory className="px-24 p-24" />

      {/* Our Products */}
      <OurProducts className="pb-36" />
    </div>
  );
};

export default Home;
