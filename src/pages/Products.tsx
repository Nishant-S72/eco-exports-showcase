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
