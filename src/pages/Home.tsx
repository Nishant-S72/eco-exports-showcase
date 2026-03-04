import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Structured Export Coordination for Tableware and Bulk Spices from India
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Consistent supply alignment, documented workflows, and timely
                shipment execution for tableware and spice programs.
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
                Our coordinated production network ensures structured quality
                checks and clear dispatch timelines. Control points are defined
                from order planning to dispatch readiness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For spice programs, moisture profile, cleaning standards, and
                buyer-defined quality parameters are aligned prior to shipment.
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
                We handle full-container supply programs with predictable lead
                times, supported by a stable sourcing and processing ecosystem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Delivery planning is aligned with buyer format requirements,
                documentation checkpoints, and dispatch schedules.
              </p>
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
                coordination are the foundation of every order we fulfil.
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
