const Products = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-12">Products</h1>

        {/* Areca Tableware */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-4 border-b border-border pb-3">
            Areca Tableware
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Made from naturally fallen areca palm leaves, our plates are
                fully compostable and chemical-free. They offer natural
                durability suitable for food service operations — from catering
                to retail distribution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for bulk buyers, food businesses, and institutional
                purchasers looking for a sustainable alternative to plastic and
                foam disposables.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/assets/areca_plate_1.jpg"
                alt="Areca leaf plate"
                className="w-full rounded border border-border aspect-square object-cover"
              />
              <img
                src="/assets/areca_plate_2.jpg"
                alt="Areca plates stacked"
                className="w-full rounded border border-border aspect-square object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bagasse Tableware */}
        <div className="mb-16">
          <h2 className="text-xl font-bold mb-4 border-b border-border pb-3">
            Bagasse Tableware
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Manufactured from sugarcane fiber (bagasse), these products are
                industrial-grade compostable and suitable for hot and cold food
                applications. They meet the requirements of institutional and
                wholesale buyers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Available in a range of standard formats for plates, bowls, and
                compartment trays — designed for high-volume food service
                environments.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/assets/bagasse_plate_1.jpg"
                alt="Bagasse plate"
                className="w-full rounded border border-border aspect-square object-cover"
              />
              <img
                src="/assets/bagasse_plate_2.jpg"
                alt="Bagasse plates"
                className="w-full rounded border border-border aspect-square object-cover"
              />
              <img
                src="/assets/bowl_2.jpg"
                alt="Bagasse bowls"
                className="w-full rounded border border-border aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
