const About = () => {
  const details = [
    { label: "Year Established", value: "[ADD_YEAR]" },
    { label: "Location", value: "[ADD_LOCATION]" },
    { label: "Monthly Capacity", value: "[ADD_CAPACITY]" },
    { label: "Export Markets", value: "[ADD_MARKETS]" },
    { label: "Quality Control Process", value: "[ADD_QC_DETAILS]" },
    { label: "Ports of Dispatch", value: "[ADD_PORTS]" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <table className="w-full text-sm">
              <tbody>
                {details.map((d) => (
                  <tr key={d.label} className="border-b border-border">
                    <td className="py-3 font-medium pr-4 text-foreground w-1/3">
                      {d.label}
                    </td>
                    <td className="py-3 text-muted-foreground">{d.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="/assets/areca_plate_2.jpg"
              alt="Stacked areca plates ready for export"
              className="w-full rounded border border-border"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Products stacked and ready for container loading
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
