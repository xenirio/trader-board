
import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import '../styles/globals.css'; // Ensure global styles are imported

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Trader Board - Your Ultimate Trading Platform</title>
        <meta name="description" content="Manage your trades and track market insights with Trader Board." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <Footer />
    </Layout>
  );
};

export default Home;
