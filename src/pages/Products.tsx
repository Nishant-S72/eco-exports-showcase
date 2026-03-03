interface ProductSectionProps {
  title: string;
  images: { src: string; alt: string }[];
  specs: { label: string; value: string }[];
}

const ProductSection = ({ title, images, specs }: ProductSectionProps) => (
  <div className="mb-16">
    <h3 className="text-xl font-bold mb-6 border-b border-border pb-3">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="grid grid-cols-2 gap-4">
        {images.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full rounded border border-border aspect-square object-cover"
          />
        ))}
      </div>
      <div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {specs.map((spec) => (
            <li key={spec.label}>
              <span className="font-medium text-foreground">{spec.label}:</span>{" "}
              {spec.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Products = () => {
  const sections: ProductSectionProps[] = [
    {
      title: "Areca Plates",
      images: [
        { src: "/assets/areca_plate_1.jpg", alt: "Areca plate" },
        { src: "/assets/areca_plate_2.jpg", alt: "Areca plates stacked" },
      ],
      specs: [
        { label: "Sizes Available", value: "[ADD_SIZES]" },
        { label: "Thickness", value: "[ADD_GSM]" },
        { label: "Packaging", value: "[ADD_PACKAGING]" },
        { label: "MOQ", value: "[ADD_MOQ]" },
        { label: "Lead Time", value: "[ADD_LEAD_TIME]" },
      ],
    },
    {
      title: "Bagasse Plates",
      images: [
        { src: "/assets/bagasse_plate_1.jpg", alt: "Bagasse plate" },
        { src: "/assets/bagasse_plate_2.jpg", alt: "Bagasse plates" },
      ],
      specs: [
        { label: "Sizes Available", value: "[ADD_SIZES]" },
        { label: "GSM", value: "[ADD_GSM]" },
        { label: "Packaging", value: "[ADD_PACKAGING]" },
        { label: "MOQ", value: "[ADD_MOQ]" },
        { label: "Lead Time", value: "[ADD_LEAD_TIME]" },
      ],
    },
    {
      title: "Bowls",
      images: [
        { src: "/assets/bowl_1.jpg", alt: "Areca bowl" },
        { src: "/assets/bowl_2.jpg", alt: "Bagasse bowls" },
      ],
      specs: [
        { label: "Sizes Available", value: "[ADD_SIZES]" },
        { label: "Thickness/GSM", value: "[ADD_GSM]" },
        { label: "Packaging", value: "[ADD_PACKAGING]" },
        { label: "MOQ", value: "[ADD_MOQ]" },
        { label: "Lead Time", value: "[ADD_LEAD_TIME]" },
      ],
    },
    {
      title: "Custom Orders",
      images: [
        { src: "/assets/areca_plate_1.jpg", alt: "Custom areca product" },
        { src: "/assets/bagasse_plate_1.jpg", alt: "Custom bagasse product" },
      ],
      specs: [
        { label: "Custom Sizes", value: "Available on request" },
        { label: "Custom Shapes", value: "Available on request" },
        { label: "Branding/Embossing", value: "Available on request" },
        { label: "MOQ for Custom", value: "[ADD_MOQ]" },
        { label: "Lead Time", value: "[ADD_LEAD_TIME]" },
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Our Products</h2>
        {sections.map((section) => (
          <ProductSection key={section.title} {...section} />
        ))}
      </div>
    </div>
  );
};

export default Products;
