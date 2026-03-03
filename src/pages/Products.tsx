const Products = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-12">Products</h1>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-4xl">
          Formats listed represent standard export models. Custom molds and
          private labeling support available for container-level buyers.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-3">
            Areca Tableware
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Naturally pressed, chemical-free leafware formats with structural
            rigidity suitable for hot food applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Round Plates</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>6 inch</li>
                <li>8 inch</li>
                <li>10 inch</li>
                <li>12 inch</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Suitable for catering, institutional dining, and retail
                distribution.
              </p>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Square Plates</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>8 inch square</li>
                <li>10 inch square</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Used in premium eco-conscious dining formats.
              </p>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Compartment Plates</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>3 compartment</li>
                <li>4 compartment</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Designed for multi-item and thali-style food service.
              </p>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Bowls &amp; Specialty</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>120 ml bowl</li>
                <li>180 ml bowl</li>
                <li>250 ml bowl</li>
                <li>Oval platter</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Suitable for hot and cold applications.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-3">
            Bagasse Tableware
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Molded fiber formats designed for institutional food service
            operations, compatible with hot and cold applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Plates</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>6 inch</li>
                <li>8 inch</li>
                <li>9 inch</li>
                <li>10 inch</li>
                <li>12 inch</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Bowls</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>250 ml</li>
                <li>350 ml</li>
                <li>500 ml</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Clamshell Containers</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>6x6</li>
                <li>8x8</li>
                <li>9x9</li>
                <li>3 compartment clamshell</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Meal Trays</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>3 compartment</li>
                <li>5 compartment</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Available in standard export formats suitable for high-volume food
            service operations.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 border-b border-border pb-3">
            Bulk Spices - Whole &amp; Powdered
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Export-oriented supply of whole and ground spices sourced through
            vetted processing units with quality inspection and documentation
            support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Pepper</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Black pepper - whole</li>
                <li>Black pepper - crushed or ground</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Chilli</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Dried red chillies - whole</li>
                <li>Chilli powder</li>
                <li>Crushed chilli</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Coriander</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Coriander seeds - whole</li>
                <li>Coriander powder</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Cumin</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Cumin seeds - whole</li>
                <li>Cumin powder</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Fennel</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Fennel seeds - whole</li>
                <li>Fennel powder</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Turmeric</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Turmeric fingers - whole</li>
                <li>Turmeric powder</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Cardamom</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Small cardamom - whole</li>
                <li>Cardamom powder</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Cloves</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Cloves - whole</li>
                <li>Cloves - ground</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">Cinnamon / Cassia</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Cinnamon - whole</li>
                <li>Cinnamon - ground</li>
                <li>Cassia - whole</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5 lg:col-span-3">
              <h3 className="text-lg font-semibold mb-3">Mixed Spice Blends</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Garam masala</li>
                <li>Curry powder</li>
                <li>Custom spice blends</li>
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-6">
            Bulk packaging formats, quality specifications, and test
            documentation can be shared upon request based on destination market
            requirements.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Packaging &amp; Commercial Formats</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-4xl">
            Packaging formats are structured to support bulk export handling,
            distributor requirements, and private label programs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">
                Areca &amp; Bagasse Packaging Options
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Bulk loose packing for container-level distribution</li>
                <li>Shrink-wrapped sleeves for institutional buyers</li>
                <li>Retail-ready packs with barcode integration</li>
                <li>Private label printing and branding support</li>
                <li>Master carton packing for export handling</li>
                <li>Palletized dispatch coordination (if required)</li>
              </ul>
            </div>

            <div className="border border-border rounded p-5">
              <h3 className="text-lg font-semibold mb-3">
                Bulk Spice Packaging Options
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>PP woven bags for bulk export</li>
                <li>Multi-layer paper bags with inner lining</li>
                <li>Carton-packed inner poly packaging</li>
                <li>Custom labeling support for importers</li>
                <li>Private label blending and packing (where applicable)</li>
              </ul>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mt-6">
            Final packaging configuration is aligned with buyer specifications
            and destination market requirements.
          </p>
        </section>

        <section className="mt-16">
          <div className="border border-border rounded p-6 bg-section-alt">
            <h2 className="text-xl font-bold mb-3">Certification &amp; Documentation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Detailed specifications, packaging formats, and certification
              documentation are available upon request based on buyer
              requirements.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Typical Applications</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Formats are commonly supplied to the following commercial segments:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Food service distributors</li>
            <li>Catering and horeca suppliers</li>
            <li>Eco-focused retail brands</li>
            <li>Institutional procurement programs</li>
            <li>Private label packaging partners</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Products;
