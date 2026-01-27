import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Simple to Compound Weave Design",
      description: "Create simple, double, and compound weave structures with complete control over shafts, picks, warp, and weft patterns."
    },
    {
      icon: Users,
      title: "Integrated Weave Editor & Editing Tools",
      description: "Design dobby weaves using a built-in graphical weave editor with tools like cut, copy, paste, undo, redo, mirror, rotate, invert, and duplicate."
    },
    {
      icon: TrendingUp,
      title: "Pattern Creation & Repeat Control",
      description: "Automatically generate patterns from selected designs, repeat patterns uniformly, merge multiple weaves, and apply reverse or mirror transformations."
    },
    {
      icon: Star,
      title: "Libraries, Editors & Reusability",
      description: "Access inbuilt weave, colour, and yarn libraries, reuse existing weave designs, and manage program, article, and weave parameters efficiently."
    },
        {
      icon: Clock,
      title: "Fabric Simulation & Visualization",
      description: "Simulate fabrics with photorealistic previews, including simple yarn, mélange, mouliné, extra warp, and extra weft combinations."
    },
    {
      icon: Users,
      title: "Technical Data & Production Readiness",
      description: "Generate technical data, yarn consumption, peg plans, drafts, print outputs, and colour-matched fabric simulation reports for production."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH Dobby
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          The Best Dobby Software that enables you create a wide range of dobby designs easily.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-9c76cc mb-3">{benefit.title}</h3>
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