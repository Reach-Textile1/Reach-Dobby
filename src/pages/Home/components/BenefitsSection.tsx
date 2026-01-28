import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Ease of Design Creation and Edition",
      description: "The intuitive graphical editor and tools simplify the process of building and modifying complex dobby weaves, saving time and reducing errors in design workflows."
    },
    {
      icon: Users,
      title: "Enhanced Visualization and Simulation",
      description: "Photorealistic fabric simulations allow users to preview designs accurately, including yarn effects and color matching, helping to visualize the final product before production and minimize costly revisions."
    },
    {
      icon: TrendingUp,
      title: "Comprehensive Technical Support",
      description: "Generation of peg plans, drafts, yarn consumption data, and technical parameters provides essential information for efficient manufacturing, optimizing material use and production planning."
    },
    {
      icon: Star,
      title: "Library and Data Management",
      description: "Built-in libraries and a data bank enable quick access and reuse of designs, colors, and yarns, streamlining collaboration and iteration in design projects."
    },
        {
      icon: Clock,
      title: "Versatility in Weave Structure",
      description: "Support for multiple weave types (simple, double, compound) and features like merging, mirroring, and inverting expands creative possibilities, allowing for a wide range of innovative textile patterns."
    },
    {
      icon: Users,
      title: "Efficiency in Production",
      description: "By facilitating automatic pattern creation, repeat modes, and virtual fabric optimization, the software accelerates the design-to-production cycle, improving overall productivity in the textile industry."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-teal-700">
          Benefits of REACH Dobby
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The Best Dobby Software that enables you create a wide range of dobby designs easily.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-50 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-500 mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;