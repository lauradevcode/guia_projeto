import Navbar from './Navbar';
import Carousel from './Carousel';
import GuidePresentation from './GuidePresentation';
import FeaturedBusinessCards from './FeaturedBusinessCards';
import CategoryCards from './CategoryCards';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <GuidePresentation />
      <FeaturedBusinessCards />
      <CategoryCards />
      <Footer />
    </>
  );
}

export default Home;
