import { ShieldCheck, BarChart, Bell } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center text-center p-4">
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          Welcome to Trader Board
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Your all-in-one dashboard for trading, analysis, and real-time market data.
        </p>
        <button className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </main>

      <section className="w-full pb-12">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center p-4">
            <ShieldCheck className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">Real-Time Data</h3>
            <p className="text-muted-foreground text-sm">Access up-to-the-minute market data.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <BarChart className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">Portfolio Tracking</h3>
            <p className="text-muted-foreground text-sm">Monitor your investments with ease.</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Bell className="h-10 w-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold mb-1">Smart Alerts</h3>
            <p className="text-muted-foreground text-sm">Never miss an important market movement.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
