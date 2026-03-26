import { ShieldCheck, BarChart, Bell } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="flex h-screen flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Welcome to Trader Board
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Your all-in-one dashboard for trading, analysis, and real-time market data.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </section>

      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Why Trader Board?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Real-Time Data</h3>
            <p className="text-muted-foreground">Access up-to-the-minute market data to make informed decisions.</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <BarChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Portfolio Tracking</h3>
            <p className="text-muted-foreground">Monitor your investments and track your performance with ease.</p>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Bell className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Smart Alerts</h3>
            <p className="text-muted-foreground">Set custom alerts and never miss an important market movement.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-white py-20 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to start trading smarter?</h2>
        <button className="mt-4 px-8 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors">
          Sign Up Now
        </button>
      </section>
    </div>
  );
}
