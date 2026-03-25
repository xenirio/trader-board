export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
        Welcome to Trader Board
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Your all-in-one dashboard for trading, analysis, and real-time market data.
      </p>
    </section>
  );
}
