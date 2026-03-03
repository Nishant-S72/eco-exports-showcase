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
                Sustainable Areca &amp; Bagasse Tableware Exporter from India
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Bulk supply for USA, UK &amp; Europe. Custom sizes available.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 text-sm font-semibold rounded hover:opacity-90"
              >
                Enquire Now
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

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Export Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Monthly Production Capacity", value: "[ADD_CAPACITY]" },
              { label: "Minimum Order Quantity", value: "[ADD_MOQ]" },
              { label: "Lead Time", value: "[ADD_LEAD_TIME]" },
              { label: "Export Ports", value: "[ADD_PORTS]" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-stat-bg border border-border rounded p-6 text-center"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
