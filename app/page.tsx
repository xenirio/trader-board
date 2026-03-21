import Hero from '../components/Hero/Hero';
import { Features } from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const handleButtonClick = () => {
    // In a real application, this would handle navigation or another action.
    console.log("Hero button clicked!");
  };

  return (
    <div>
      <Hero
        headline="Welcome to the Trader Board"
        subtext="Your one-stop solution for tracking and managing trades."
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
