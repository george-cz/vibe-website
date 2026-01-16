import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950 pt-16"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Welcome to ModernSite
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {" "}Amazing{" "}
            </span>
            Today
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 border-2 border-gray-200 dark:border-gray-700">
              <PlayCircle size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats or Social Proof */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">10K+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Happy Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
