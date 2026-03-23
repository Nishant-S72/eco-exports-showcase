import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const sections = [
  {
    title: "Execution Over Promises",
    content:
      "We operate through disciplined processes and a defined workflow from order confirmation to dispatch. Every milestone has an owner, a timeline, and clear accountability. Our track record is built on shipment reliability, not marketing language.",
  },
  {
    title: "Structured Supply Network",
    content:
      "Our sourcing, quality inspection, packaging, and dispatch functions are coordinated through a structured supply chain. Each stage follows defined quality parameters and timelines, ensuring every shipment meets buyer specifications with consistency.",
  },
  {
    title: "Quality Assurance",
    content:
      "Standardized quality checks are performed before every shipment. We inspect for consistency in dimensions, finish, and packaging integrity. No exaggerated claims — just reliable, repeatable output that meets export standards.",
  },
  {
    title: "International Trade Readiness",
    content:
      "From export documentation (Proforma Invoice, Packing List, Bill of Lading, Certificate of Origin) to port handling and container consolidation — our systems are built for cross-border trade with clear communication at every step.",
  },
  {
    title: "Long-Term Orientation",
    content:
      "We focus on building recurring supply frameworks with selected international distributors. Our model is designed for repeat container programs built on reliability, documentation accuracy, and long-term commercial alignment.",
  },
];

const capabilities = [
  "Structured coordination through vetted production units",
  "Defined order confirmation and dispatch workflow",
  "Quality inspection prior to shipment",
  "Export documentation support",
  "Third-party inspection coordination available",
  "Port handling alignment based on shipment requirement",
  "Multi-category sourcing from a single partner",
  "Container consolidation and palletized dispatch",
];

const WhyUs = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Why Inmount Global</p>
          <h1 className="max-w-2xl mb-6">Your Supply Chain Partner in India</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We operate with the discipline of a supply chain partner, not a
            trader. Here is what that means for your business.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid gap-16 max-w-3xl">
            {sections.map((section, i) => (
              <div key={section.title} className="border-l-2 border-border pl-8">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </span>
                <h2 className="text-2xl font-bold mt-2 mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-section-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold mb-12">Export Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
            {capabilities.map((cap) => (
              <div key={cap} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-olive mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Share your sourcing requirements. We'll respond with a structured
            proposal aligned to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
