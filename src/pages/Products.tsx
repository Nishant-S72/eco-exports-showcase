import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Product Portfolio</p>
          <h1 className="max-w-2xl mb-6">What We Source</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            From eco-friendly tableware to artisanal home decor — a curated
            multi-category portfolio built for global distribution partners.
          </p>
        </div>
      </section>

      {/* Areca Tableware */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Natural & Compostable</p>
              <h2 className="text-3xl font-bold mb-6">Areca Tableware</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Naturally pressed from fallen areca palm leaves — chemical-free,
                compostable, and structurally durable for hot food applications.
                Suitable for catering companies, eco-conscious retail brands,
                and food service distributors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Available in round, square, and compartment formats with custom
                mold capability for container-level buyers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/areca_plate_1.jpg" alt="Areca plate on wooden table" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
              <img src="/assets/areca_plate_2.jpg" alt="Stacked areca plates" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Bagasse Tableware */}
      <section className="py-20 md:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="/assets/bagasse_plate_1.jpg" alt="Bagasse plates" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
              <img src="/assets/bagasse_plate_2.jpg" alt="Bagasse bowls" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Industrial Compostable</p>
              <h2 className="text-3xl font-bold mb-6">Bagasse Tableware</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sugarcane fiber-based plates, bowls, clamshell containers, and
                meal trays designed for institutional food service operations.
                Compatible with hot and cold applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Suitable for institutional and wholesale buyers seeking a
                reliable, scalable alternative to plastic disposables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spices */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Export-Grade Quality</p>
              <h2 className="text-3xl font-bold mb-6">Premium Spices</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Whole and ground spices sourced through vetted Indian processing
                units. Our spice portfolio includes pepper, chilli, coriander,
                cumin, turmeric, cardamom, cloves, cinnamon, and custom blends.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Quality parameters including moisture levels, cleaning standards,
                and destination compliance are aligned per buyer requirements.
              </p>
            </div>
            <div>
              <img src="/assets/spices_flatlay.jpg" alt="Premium Indian spices" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* Home Textiles */}
      <section className="py-20 md:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img src="/assets/cushion_covers.jpg" alt="Boho cushion covers" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
              <img src="/assets/table_runner.jpg" alt="Handwoven table runner" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Design-Led Sourcing</p>
              <h2 className="text-3xl font-bold mb-6">Home Textiles</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Handwoven and handcrafted cushion covers, table runners, and
                soft furnishings in neutral, boho, and contemporary palettes.
                Designed for modern retail and wholesale distribution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Custom design development and private labeling available for
                growing home decor brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Handicrafts */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Artisanal & Modern</p>
              <h2 className="text-3xl font-bold mb-6">Handicrafts & Decor</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Metal wall decor, wooden serving trays, and candle holders
                crafted for modern interiors. Each piece blends traditional
                Indian craftsmanship with contemporary design sensibilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for home decor retailers, hospitality projects, and
                wholesale distributors looking for unique, handcrafted products.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/assets/handicrafts_decor.jpg" alt="Metal wall decor and wooden tray" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
              <img src="/assets/wooden_tray_candles.jpg" alt="Wooden tray with candle holders" loading="lazy" className="w-full rounded-lg object-cover aspect-square" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section-alt py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Discuss Your Requirement</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
            Share your product format, volume expectation, and destination
            details. We respond with structured supply alignment.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Request Commercial Discussion
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
