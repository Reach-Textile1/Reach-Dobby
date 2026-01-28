const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-teal-50">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Dobby For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Dobby is ideal wherever dobby-woven fabrics need to be designed,
          simulated, and prepared for production efficiently.
        </p>

        {/* Shirt and suiting mills */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Shirt and suiting fabric mills
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Mills producing yarn-dyed checks, stripes, and structured dobby
              shirtings and suitings for domestic and export markets.
            </li>
            <li>
              Units needing precise control over weave, color, repeats, and peg
              plans with fast on-screen simulation before loom trials.
            </li>
          </ul>
        </div>

        {/* Home textiles */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Home textiles and furnishings manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Producers of bed linen, table linen, curtains, and decorative
              fabrics that use dobby structures for texture, borders, and
              patterns.
            </li>
            <li>
              Exporters managing large design libraries and frequent
              buyer-specific developments.
            </li>
          </ul>
        </div>

        {/* Towels */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Towel and bath linen manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Terry and dobby towel producers creating borders, logos, and
              patterned designs for brands, hotels, and retail chains.
            </li>
            <li>
              Units that benefit from integrated design-to-loom workflows to
              reduce sampling time and waste.
            </li>
          </ul>
        </div>

        {/* Technical textiles */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Technical and industrial fabric manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Manufacturers of workwear, filters, automotive, and protective
              fabrics where dobby structures contribute to performance and
              aesthetics.
            </li>
            <li>
              Teams needing accurate digital drafts and material calculations
              to plan production and costs better.
            </li>
          </ul>
        </div>

        {/* Designers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile design studios and freelance designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Independent designers and studios creating dobby designs for
              multiple mills and buyers.
            </li>
            <li>
              Service bureaus converting artwork or fabric scans into dobby
              weaves and loom-ready files as a specialist offering.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Textile institutes, handloom clusters, and skill centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Textile colleges and training centres teaching dobby weave design,
              drafting, and CAD-to-loom processes.
            </li>
            <li>
              Handloom and powerloom clusters upgrading to digital dobby design
              workflows while preserving traditional aesthetics.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
