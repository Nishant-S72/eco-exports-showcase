const certs = [
  { name: "IEC Certificate", placeholder: "IEC" },
  { name: "FSSAI", placeholder: "FSSAI" },
  { name: "ISO", placeholder: "ISO" },
  { name: "FSC", placeholder: "FSC" },
];

const Certifications = () => {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="border border-border rounded p-6 bg-muted flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="text-4xl font-bold text-muted-foreground/30 mb-4">
                {cert.placeholder}
              </div>
              <p className="text-sm font-medium text-center">{cert.name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Document preview placeholder
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
