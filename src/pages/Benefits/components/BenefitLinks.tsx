import { Link } from "react-router-dom";

export const benefitPoints = [
  "Simple weave structure",
  "Double weave structure",
  "Compound weave structure",
  "Built  in  graphical editor  for  Dobby weave",
  "Weave editing tools",
  "Cut,Copy,Paste,Select,Undo,Redo, Miirror,Rotate, Invert and Duplicate of the weave",
  "Provision of repeat mode to reproduce the patterns in repetition to maintain a uniform design",
  "Provision to create patterns based on your selected design automatically",
  "Provision to view reverse, mirror and invert the weaves",
  "Provision to add No. of Shaft and picks in a design",
  "Provision of merging different weave and make design pattern",
  "Type of weaves that can be created using weave editor present in Computer Aided Textile Designing Software  (Normal weave,Compound weave)",
  "Available inbuilt libraries ( eg. Weave library,Colour library,Yarn library )",
  "Type of inbuilt editors  (  eg. Weave editor)",
  "Provision of photorealistic fabric simulation to simulate front side of the created woven design",
  "Provision of simulation of simple yarn, melange and mouline",
  "Provision of simulation in combined form of extra wrap and extra weft",
  "Provision of technical data, consumption of yarns",
  "Provision of print output similar to fabric texture colour shades",
  "Provision of creating optimal fabric design based on virtually created fabric",
  "Provision to generate Peg plan and draft",
  "Provision of material and technological parameters for different materials, yarns and fabrics",
  "Provision to generate fabric simulation printouts of woven and print designs with colour matchings",
  "Availability of  data bank of weave designs to retrieve in future",
  "Provision to create, design and display weaving drafts and patterns",
  "Provision to generate a variety of different colors and color combination for a particular design, these colors can be selected as per needs",
  "Provision of reuse of weave design",
  "Provision of Program Parameters, Article Setups and Weave Parameters",
  "Point tool and Line tool for creating and editing weave design",
  "Provision of creating warp and weft pattern",

];

const BenefitLinks = () => {
  return (
    <section className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Benefits of using <span className="text-primary">REACH Dobby</span>
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Dobby
        </p>


      <div className="space-y-6 max-w-5xl mx-auto">
         {benefitPoints.map((point, index) => (
      <div
          key={index}
          className="flex items-center justify-between bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
         >
      <div className="flex items-center gap-4">
        <p className="text-gray-800 font-semibold text-lg md:text-xl">
          {point}
        </p>
      </div>

          {/* <Link
             to={`/benefits/detail/${index + 1}`}
             className="text-primary font-medium hover:underline whitespace-nowrap">
                Read more →
          </Link> */}
         </div>
        ))}
      </div>
      
      </div>
    </section>
  );
};

export default BenefitLinks;
