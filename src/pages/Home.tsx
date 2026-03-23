import { Link } from "react-router-dom";
import { ArrowRight, Package, Shield, Globe, Repeat } from "lucide-react";

const categories = [
  {
    title: "Eco-Friendly Tableware",
    description: "Areca leaf and bagasse plates, bowls, and containers for sustainable food service distribution.",
    image: "/assets/areca_plate_1.jpg",
    link: "/products",
  },
  {
    title: "Premium Spices",
    description: "Whole and ground spices sourced from vetted Indian processors. Export-grade quality with documentation support.",
    image: "/assets/spices_flatlay.jpg",
    link: "/products",
  },
  {
    title: "Home Textiles",
    description: "Handwoven cushion covers, table runners, and soft furnishings in neutral, contemporary palettes.",
    image: "/assets/cushion_covers.jpg",
    link: "/products",
  },
  {
    title: "Handicrafts & Decor",
    description: "Metal wall art, wooden trays, and candle holders crafted for modern interiors and wholesale distribution.",
    image: "/assets/handicrafts_decor.jpg",
    link: "/products",
  },
];

const whyUsPoints = [
  {
    icon: Package,
    title: "Reliable Supply Chain",
    description: "Coordinated production network with structured dispatch timelines.",
  },
  {
    icon: Shield,
    title: "Quality Consistency",
    description: "Standardized checks at every stage from sourcing to shipment.",
  },
  {
    icon: Globe,
    title: "Multi-Category Sourcing",
    description: "Single sourcing partner across tableware, spices, textiles, and decor.",
  },
  {
    icon: Repeat,
    title: "Low MOQ for Growing Brands",
    description: "Flexible minimums designed for emerging and mid-size buyers.",
  },
];

const processSteps = [
  { step: "01", title: "Share Requirements", description: "Tell us your product needs, volumes, and destination." },
  { step: "02", title: "Receive Options", description: "We prepare curated product and pricing options." },
  { step: "03", title: "Approve Samples", description: "Review samples before committing to production." },
  { step: "04", title: "Scale Production", description: "Move to bulk production with clear timelines." },
];

const showcaseImages = [
  { src: "/assets/lifestyle_showcase.jpg", alt: "Boho living room with cushions and wooden decor" },
  { src: "/assets/hero_bg.jpg", alt: "Eco dining setup with areca plates" },
  { src: "/assets/spices_flatlay.jpg", alt: "Premium spice arrangement" },
  { src: "/assets/wooden_tray_candles.jpg", alt: "Wooden tray with candle holders" },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/hero_bg.jpg"
            alt="Eco-friendly tableware dining setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
          <div className="max-w-2xl">
            <h1 className="text-primary-foreground mb-6">
              Global Sourcing from India, Simplified
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-lg">
              Eco-friendly tableware, premium spices, and design-led home
              decor — sourced and shipped with operational discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
              >
                Request Catalog
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">What We Source</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-muted-foreground leading-relaxed">
              From natural tableware to artisanal decor — a curated portfolio
              built for global distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to={cat.link}
                className="group block overflow-hidden rounded-xl border border-border hover:border-foreground/20 transition-colors"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 text-foreground">
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="bg-section-alt py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Visual Showcase</p>
            <h2 className="text-3xl md:text-4xl font-bold">Designed for Modern Living</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseImages.map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-lg ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Why Inmount</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built for Buyers Who Value Consistency</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUsPoints.map((point) => (
              <div key={point.title} className="flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-5">
                  <point.icon size={22} className="text-foreground" />
                </div>
                <h3 className="font-semibold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-section-alt py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {processSteps.map((step) => (
              <div key={step.step}>
                <span className="text-4xl font-bold text-muted-foreground/60">{step.step}</span>
                <h3 className="font-semibold mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-foreground text-primary-foreground rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              Looking for a Reliable Sourcing Partner from India?
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-lg mx-auto leading-relaxed">
              Share your requirements and we'll respond with a structured
              supply proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary-foreground/90 transition-colors"
              >
                Get Catalog
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
