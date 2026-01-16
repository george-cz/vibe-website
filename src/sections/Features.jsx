import { Zap, Shield, Users, Sparkles, Globe, TrendingUp } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Modern Design",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scale with Ease",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 p-8 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-950 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
