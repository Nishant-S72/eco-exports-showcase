const sections = [
  {
    title: "Defined Workflow and Lead Time Discipline",
    content:
      "Each order moves through a defined workflow from requirement confirmation to dispatch planning. Milestones, timelines, and ownership are set upfront to support predictable execution.",
  },
  {
    title: "Structured Supply Network",
    content:
      "Our operations are coordinated across sourcing, quality inspection, packaging, and dispatch. Each function works within defined timelines and quality parameters, ensuring that the final shipment meets the buyer's specifications consistently.",
  },
  {
    title: "Quality Assurance",
    content:
      "Standardized quality checks are performed before every shipment. We inspect for consistency in dimensions, finish, and packaging integrity. There are no exaggerated claims, just reliable, repeatable output that meets export standards.",
  },
  {
    title: "International Trade Readiness",
    content:
      "We handle export documentation, port coordination, and container consolidation as part of our standard process. Clear communication with buyers ensures there are no surprises, from proforma invoice to bill of lading.",
  },
  {
    title: "Container Handling and Documentation Workflow",
    content:
      "Container planning, pre-shipment checks, and export documentation are handled through a centralized workflow. This structure supports buyers who require reliable process control and clarity at every stage.",
  },
];

const WhyUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">Your Supply Chain Partner in India</h1>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          We operate with the discipline of a supply chain partner, not a trader.
          Here is what that means for your business.
        </p>
        <div className="mb-12 border border-border rounded p-4 bg-section-alt">
          <p className="text-sm text-foreground font-medium">
            We operate through a vetted production network with structured quality
            checks and dispatch coordination.
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`py-10 px-0 ${
                index < sections.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-14 pt-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-3">Current Operational Stage</h2>
          <p className="text-muted-foreground leading-relaxed max-w-4xl">
            We are actively building long-term container programs with selected
            international distributors seeking a disciplined sourcing partner from
            India. Our focus is establishing recurring supply frameworks built on
            reliability and documentation accuracy.
          </p>
        </section>

        <section className="mt-14 pt-10 border-t border-border">
          <h2 className="text-2xl font-bold mb-3">Compliance &amp; Documentation Support</h2>
          <p className="text-muted-foreground leading-relaxed mb-5 max-w-4xl">
            Products are sourced through certified manufacturing partners.
            Relevant certifications and shipment documentation can be shared upon
            request based on buyer requirements. Our focus is documentation
            accuracy, shipment readiness, and export compliance capability.
          </p>

          <p className="font-semibold text-foreground mb-5">
            Independent third-party inspection can be arranged prior to shipment at
            buyer&apos;s request.
          </p>

          <div className="border border-border rounded p-5">
            <h3 className="text-base font-semibold mb-3">Compliance Support Includes:</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Food-grade certification from manufacturing partners</li>
              <li>Compostability or material test reports (where applicable)</li>
              <li>Third-party inspection available (SGS / Bureau Veritas)</li>
              <li>Pre-shipment inspection coordination</li>
              <li>Phytosanitary documentation (if required)</li>
              <li>Fumigation certificate</li>
              <li>Certificate of Origin</li>
              <li>Complete export documentation support</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
