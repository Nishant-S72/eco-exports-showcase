import { Link } from "react-router-dom";

const processFlowSteps = [
  "Inquiry",
  "Specification Confirmation",
  "Proforma Invoice",
  "Production Coordination",
  "Quality Inspection",
  "Container Stuffing",
  "Bill of Lading",
  "Dispatch",
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Dependable Supply Partner for Eco-Friendly Tableware from India
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Consistent supply. Operational discipline. Timely shipment execution.
                Scalable bulk capacity built for international buyers who need
                a sourcing partner they can count on.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold rounded hover:opacity-90"
              >
                Start a Conversation
              </Link>
            </div>
            <div>
              <img
                src="/assets/areca_plate_1.jpg"
                alt="Areca leaf plate on wooden table"
                className="w-full rounded border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Operational Strength */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Operational Strength</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our coordinated production network ensures structured quality checks
                and clear dispatch timelines. Our model is designed to deliver
                predictable execution through defined control points from order
                planning to dispatch readiness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From raw material sourcing to final packaging, every stage follows
                a disciplined process designed for consistency and accountability.
              </p>
            </div>
            <div>
              <img
                src="/assets/areca_plate_2.jpg"
                alt="Stacked areca plates"
                className="w-full rounded border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scalable Supply */}
      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/assets/bagasse_plate_1.jpg"
                alt="Bagasse plates"
                className="w-full rounded border border-border"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold mb-4">Scalable Supply</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We handle container-level shipments with predictable lead times,
                backed by a stable sourcing ecosystem. Our infrastructure is built
                for bulk order handling, not sample-level transactions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need one container or a structured repeat program,
                our coordination model scales with your sourcing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Operating Model</h2>
          <div className="border border-border rounded p-6">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">
              <li>We operate as an export coordination partner based in India.</li>
              <li>Production is handled through vetted manufacturing units.</li>
              <li>We oversee structured quality inspection prior to dispatch.</li>
              <li>
                Export documentation, container coordination, and compliance are
                managed centrally.
              </li>
              <li>Buyers work with a single accountable point of contact.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-section-alt py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Container Program Structure</h2>
          <div className="border border-border rounded p-6 bg-background">
            <ul className="list-disc pl-5 space-y-3 text-muted-foreground leading-relaxed">
              <li>Designed for 20ft and 40 HQ container loads</li>
              <li>Standard lead times defined at order confirmation</li>
              <li>Pre-shipment inspection coordination available</li>
              <li>Documentation prepared before vessel cutoff</li>
              <li>Port handling via [MUNDRA / NHAVA SHEVA]</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Process Flow</h2>
          <div className="border border-border rounded p-5 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-max">
              {processFlowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {step}
                  </span>
                  {index < processFlowSteps.length - 1 && (
                    <span className="text-muted-foreground">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reliable Execution */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Reliable Execution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Transparent communication, documentation discipline, and port
                coordination are the foundation of every order we fulfil. We believe
                in building long-term partnerships through consistent execution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our systems are designed for predictable repeat supply built on
                structured execution and documentation discipline.
              </p>
            </div>
            <div>
              <img
                src="/assets/bowl_1.jpg"
                alt="Natural bowls on wooden surface"
                className="w-full rounded border border-border"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
