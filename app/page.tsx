import Hero from '../components/Hero/Hero';

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
    </div>
  );
};

export default Home;
