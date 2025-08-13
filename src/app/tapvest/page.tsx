import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Tapvest</h1>
        <p className="text-lg text-gray-300">
          Invest your taps, build your wealth, and become the ultimate tap
          tycoon!
        </p>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Why Tapvest?</h2>
          <p className="text-gray-300 mb-6">
            Tap, earn, and invest! Tapvest turns idle tapping into an exciting
            journey to financial growth. Compete with friends, climb the
            leaderboard, and show your wealth-building skills!
          </p>
          
        </div>
        <div className="relative w-72 h-72">
          <Image
            src="/game-preview.png"
            alt="Tapvest Game Preview"
            layout="fill"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">💰 Earning</h3>
            <p className="text-gray-400">
              Tap to earn virtual currency and watch your wealth grow.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">🏢 Business</h3>
            <p className="text-gray-400">
              Invest in businesses to boost your passive income.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">📈 Investing</h3>
            <p className="text-gray-400">
              Grow your fortune by making smart investment choices.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Coming Soon!</h2>
        <p className="text-gray-400 mb-8">
          Available soon on your favorite app stores
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="bg-gray-800 px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-700 transition"
          >
            <Image
              src="/google-play-badge.png"
              alt="Google Play"
              width={150}
              height={50}
            />
          </a>
          <a
            href="#"
            className="bg-gray-800 px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-700 transition"
          >
            <Image
              src="/app-store-badge.png"
              alt="App Store"
              width={150}
              height={50}
            />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tapvest. All rights reserved.</p>
      </footer>
    </main>
  );
}
